"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { Camera, type Group, type Object3D } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WigglingModel } from "./WigglingModel";
import type { LiteModelKey, LiteModelRefMap } from "./motion/lite-service-scan-config";
import { resolveLiteServiceScans } from "./motion/lite-service-scan-config";
import {
  billTrigger,
  getLiteScanTimingForBreakpoint,
  registerAllLiteServiceScans,
} from "./motion/lite-service-scan-factory";
import {
  addCtaCartTweensToTimeline,
  getHeroFadeOutYDelta,
  getLiteSceneBreakpoint,
  getResolvedModelLayouts,
  resolveCtaCartConfig,
  type LiteSceneBreakpoint,
} from "./motion/lite-scene-layout";
import { pauseLiteSfx, playLiteSfx } from "@/app/_lite/_ashish/sfx";
import { Environment } from "@react-three/drei";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** All lite hero GLBs passed to useLoader / preload (order does not matter). */
const LITE_GLB_URLS = [
  "/assets/lite_models/minified/smo.glb",
  "/assets/lite_models/minified/ads.glb",
  "/assets/lite_models/minified/content.glb",
  "/assets/lite_models/minified/seo.glb",
  "/assets/lite_models/minified/webdev.glb",
  "/assets/lite_models/minified/graphic.glb",
  "/assets/lite_models/minified/video.glb",
  "/assets/lite_models/minified/box.glb",
] as const;

function findChildByName(root: Object3D, name: string): Object3D | null {
  let found: Object3D | null = null;
  root.traverse((obj) => {
    if (found || obj.name !== name) return;
    found = obj;
  });
  return found;
}

/** Drop distance for hero intro (all models enter from above). */
function getHeroIntroDropY(bp: LiteSceneBreakpoint): number {
  if (bp === "desktop") return 800;
  if (bp === "tablet") return 520;
  return 360;
}

/** Same order as the original hero fade timeline (all at label 0). */
const HERO_FADE_OUT_KEYS: LiteModelKey[] = [
  "video",
  "smo",
  "graphic",
  "content",
  "ads",
  "webdev",
];

/**
 * Root cluster offset for narrow viewports + per-breakpoint model layouts / CTA preset
 * (`lite-scene-layout.config.json`). Desktop layout matches the previous hard-coded scene.
 */
function useLiteHeroCanvasFrame() {
  const { size } = useThree();
  return useMemo(() => {
    const w = size.width;
    const h = size.height;
    const aspect = w / Math.max(h, 1);

    let root: { position: readonly [number, number, number]; scale: number };
    if (w >= 1024) {
      root = { position: [0, 0, 0] as const, scale: 1 };
    } else {
      const landscapePhone = w < 1024 && aspect > 1.15;
      if (w >= 640) {
        root = {
          position: [-148, landscapePhone ? -22 : -6, -38] as const,
          scale: 0.9,
        };
      } else if (w >= 480) {
        root = {
          position: [-168, landscapePhone ? -28 : -12, -48] as const,
          scale: 0.84,
        };
      } else {
        root = {
          position: [-182, landscapePhone ? -32 : -18, -58] as const,
          scale: 0.78,
        };
      }
    }

    const bp = getLiteSceneBreakpoint(w);
    const layouts = getResolvedModelLayouts(bp);
    return { root, layouts, layoutBreakpoint: bp };
  }, [size.width, size.height]);
}

const ST_REFRESH_DEBOUNCE_MS = 160;
const ST_REFRESH_RETRY_MS = 120;

/** R3F scene: GLB models, scroll-linked GSAP, CTA cart. */
const Ashish3dScene = () => {
  const { root, layouts: L, layoutBreakpoint } = useLiteHeroCanvasFrame();
  const { gl, size } = useThree();
  const disableFloat = false;
  const floatSoft = layoutBreakpoint !== "desktop";
  /** Same HDR file everywhere; intensity only nudges lighting cost/readability — mesh & texture quality unchanged. */
  const envIntensity = layoutBreakpoint === "desktop" ? 1.2 : layoutBreakpoint === "tablet" ? 1.1 : 1.02;
  const {camera} = useThree();

  const smoRef = useRef<Group>(null);
  const adsRef = useRef<Group>(null);
  const contentRef = useRef<Group>(null);
  const seoRef = useRef<Group>(null);
  const webdevRef = useRef<Group>(null);
  const graphicRef = useRef<Group>(null);
  const videoRef = useRef<Group>(null);
  const bucketRef = useRef<Group>(null);
  const heroFadeOutGroupRef = useRef<Group>(null);

  const modelRefs = useMemo<LiteModelRefMap>(
    () => ({
      seo: seoRef,
      smo: smoRef,
      webdev: webdevRef,
      graphic: graphicRef,
      video: videoRef,
      content: contentRef,
      ads: adsRef,
    }),
    [],
  );

  const [floatEnabledByKey, setFloatEnabledByKey] = useState<Record<LiteModelKey, boolean>>(() => ({
    seo: true,
    smo: true,
    webdev: true,
    graphic: true,
    video: true,
    content: true,
    ads: true,
  }));
  const [bucketFloatEnabled, setBucketFloatEnabled] = useState(true);
  const [scanPinnedByKey, setScanPinnedByKey] = useState<Partial<Record<LiteModelKey, boolean>>>(
    () => ({}),
  );
  // TEMP: keep Float enabled even during pinned scans.
  // Previously: `&& !scanPinnedByKey[key]` (disabled float while scanner is pinned).
  const isFloatOn = (key: LiteModelKey) => !!floatEnabledByKey[key];

  /**
   * Pause idle float animations when the related DOM section/card is offscreen.
   * This saves CPU/GPU without touching GSAP placements or timings.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const services = resolveLiteServiceScans(layoutBreakpoint);
    const idFor = (raw: string) => raw.replace(/^#/, "");

    const anchors: Array<
      | { kind: "hero"; id: string }
      | { kind: "cta"; id: string }
      | { kind: "service"; id: string; key: LiteModelKey }
    > = [
      { kind: "hero", id: "section0" },
      { kind: "cta", id: "ctaSection" },
      ...services.map((s) => ({ kind: "service" as const, id: idFor(s.scannerId), key: s.modelKey })),
    ];

    const visible = new Set<string>();
    const compute = () => {
      const heroOn = visible.has("section0");
      const next: Record<LiteModelKey, boolean> = {
        seo: heroOn,
        smo: heroOn,
        webdev: heroOn,
        graphic: heroOn,
        video: heroOn,
        content: heroOn,
        ads: heroOn,
      };
      for (const a of anchors) {
        if (a.kind !== "service") continue;
        if (visible.has(a.id)) next[a.key] = true;
      }
      setFloatEnabledByKey(next);
      setBucketFloatEnabled(heroOn || visible.has("ctaSection"));
    };

    const io = new IntersectionObserver(
      (entries) => {
        let changed = false;
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          if (!id) continue;
          if (e.isIntersecting) {
            if (!visible.has(id)) {
              visible.add(id);
              changed = true;
            }
          } else if (visible.delete(id)) {
            changed = true;
          }
        }
        if (changed) compute();
      },
      { root: null, threshold: 0.12, rootMargin: "20% 0px 20% 0px" },
    );

    for (const a of anchors) {
      const el = document.getElementById(a.id);
      if (el) io.observe(el);
    }
    compute();

    return () => {
      io.disconnect();
    };
  }, [layoutBreakpoint]);

  // TEMP: commenting out pinned-scan float suppression.
  // While a scanner is pinned (active “scan” phase), we used to disable Float for that model
  // to prevent Float's internal rAF transforms from fighting GSAP scrubbing.
  // useEffect(() => {
  //   if (typeof window === "undefined") return;
  //   const onPin = (ev: Event) => {
  //     const e = ev as CustomEvent<{ key?: LiteModelKey; pinned?: boolean }>;
  //     const key = e.detail?.key;
  //     const pinned = !!e.detail?.pinned;
  //     if (!key) return;
  //     setScanPinnedByKey((prev) => ({ ...prev, [key]: pinned }));
  //   };
  //   window.addEventListener("lite-scan-pin", onPin as EventListener);
  //   return () => window.removeEventListener("lite-scan-pin", onPin as EventListener);
  // }, []);

  const configureGltfLoader = useMemo(() => {
    return (loader: GLTFLoader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);

      const draco = new DRACOLoader();
      draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(draco);

      // GLBs include KTX2-compressed textures; GLTFLoader requires KTX2Loader configured first.
      const ktx2 = new KTX2Loader();
      ktx2.setTranscoderPath("https://unpkg.com/three@0.164.1/examples/jsm/libs/basis/");
      ktx2.detectSupport(gl);
      loader.setKTX2Loader(ktx2);
    };
  }, [gl]);

  const gltf = useLoader(GLTFLoader, [...LITE_GLB_URLS], configureGltfLoader) as GLTF | GLTF[];
  const sceneBySrc = useMemo(() => {
    const list = Array.isArray(gltf) ? gltf : [gltf];
    const map = new Map<string, Group>();
    LITE_GLB_URLS.forEach((url, i) => map.set(url, list[i].scene));
    return map;
  }, [gltf]);

  const smoScene = sceneBySrc.get("/assets/lite_models/minified/smo.glb");
  const adsScene = sceneBySrc.get("/assets/lite_models/minified/ads.glb");
  const contentScene = sceneBySrc.get("/assets/lite_models/minified/content.glb");
  const seoScene = sceneBySrc.get("/assets/lite_models/minified/seo.glb");
  const webdevScene = sceneBySrc.get("/assets/lite_models/minified/webdev.glb");
  const graphicScene = sceneBySrc.get("/assets/lite_models/minified/graphic.glb");
  const videoScene = sceneBySrc.get("/assets/lite_models/minified/video.glb");
  const bucketScene = sceneBySrc.get("/assets/lite_models/minified/box.glb");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    // iOS/Chrome mobile: `visualViewport` height changes while scrolling (URL bar).
    // Refreshing ScrollTrigger on those events causes visible jitter. Only refresh
    // when the viewport *width* meaningfully changes (rotation / responsive).
    let lastWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    ScrollTrigger.config({
      // GSAP recommended for mobile address bar resize jitter.
      ignoreMobileResize: true,
      // Reduces callback churn during scrubbing (helps trackpad “jam” feel).
      limitCallbacks: true,
    });

    const hasActivePinnedScan = () =>
      ScrollTrigger.getAll().some((trigger) => {
        const triggerEl = trigger.trigger;
        return (
          trigger.isActive &&
          trigger.pin &&
          triggerEl instanceof Element &&
          triggerEl.id.startsWith("lite-scanner-")
        );
      });

    const queueRefresh = (delay = ST_REFRESH_DEBOUNCE_MS) => {
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        t = undefined;
        if (hasActivePinnedScan()) {
          queueRefresh(ST_REFRESH_RETRY_MS);
          return;
        }
        ScrollTrigger.refresh();
      }, delay);
    };

    const scheduleRefresh = () => {
      const w = typeof window !== "undefined" ? window : undefined;
      const nextWidth = w?.innerWidth ?? lastWidth;
      const widthChanged = Math.abs(nextWidth - lastWidth) > 8;
      if (!widthChanged) return;
      lastWidth = nextWidth;
      queueRefresh();
    };
    const w = typeof window !== "undefined" ? window : undefined;
    w?.addEventListener("resize", scheduleRefresh, { passive: true });
    w?.addEventListener("orientationchange", scheduleRefresh, { passive: true });
    return () => {
      if (t) clearTimeout(t);
      w?.removeEventListener("resize", scheduleRefresh);
      w?.removeEventListener("orientationchange", scheduleRefresh);
    };
  }, []);

  useGSAP(
    () => {
      let cancelled = false;
      let attempts = 0;
      const maxAttempts = 120;
      let matchMediaInstance: gsap.MatchMedia | null = null;
      let addToCartTl: gsap.core.Timeline | null = null;
      let introTl: gsap.core.Timeline | null = null;
      let introPlayed = false;
      let onLoaderHidden: (() => void) | null = null;
      const ctaCart = resolveCtaCartConfig(layoutBreakpoint);
      // Use immediate scrub for CTA so reverse doesn't "lag" (numeric scrub smooths over seconds).
      const ctaScrub = true;

      const snapCtaHidden = () => {
        // Reset CTA timeline instantly when scrolling above CTA.
        // NOTE: Do not touch 3D model scales here — models are reused in hero/service scans.
        addToCartTl?.pause(0);
        addToCartTl?.progress(0);
      };

      const mountScroll = () => {
        if (
          !smoRef.current ||
          !adsRef.current ||
          !contentRef.current ||
          !seoRef.current ||
          !webdevRef.current ||
          !graphicRef.current ||
          !videoRef.current ||
          !bucketRef.current ||
          !heroFadeOutGroupRef.current
        ) {
          if (!cancelled && attempts++ < maxAttempts) requestAnimationFrame(mountScroll);
          return;
        }
        if (cancelled) return;

        const heroGroup = heroFadeOutGroupRef.current;
        const heroIntroTargetY = heroGroup.position.y;
        const heroIntroDropY = getHeroIntroDropY(layoutBreakpoint);
        gsap.set(heroGroup.position, { y: heroIntroTargetY + heroIntroDropY });

        const runIntroReceipt = () => {
          if (cancelled || introPlayed) return;
          if (!heroFadeOutGroupRef.current) return;

          introPlayed = true;
          introTl?.kill();
          introTl = gsap.timeline({
            defaults: { duration: 1.5, ease: "power4.out" },
          });

          introTl.to(
            heroFadeOutGroupRef.current.position,
            {
              y: heroIntroTargetY,
              duration: 2,
              ease: "back.inOut",
            },
            0,
          );
          billTrigger({ tl: introTl, up: "-=57", delay: 0.5, music: false });
        };

        onLoaderHidden = () => runIntroReceipt();
        if (typeof window !== "undefined") {
          window.addEventListener("lite:loader-hidden", onLoaderHidden);
          const loaderBusy = document.querySelector("#litePage [aria-busy='true']");
          if (!loaderBusy) runIntroReceipt();
        }

        matchMediaInstance = gsap.matchMedia();

        const attachHeroBand = (bp: LiteSceneBreakpoint) => {
          const isDesktop = bp === "desktop";
          const fadeTl = gsap.timeline({
            defaults: { duration: 3, ease: "none" },
            scrollTrigger: {
              trigger: "#section0",
              start: "-120 top",
              end: "top top",
              scrub: isDesktop ? 6 : 2,
              invalidateOnRefresh: true,
              fastScrollEnd: !isDesktop,
            },
          });
          for (const key of HERO_FADE_OUT_KEYS) {
            const g = modelRefs[key].current;
            if (!g) continue;
            const dy = getHeroFadeOutYDelta(key, bp);
            fadeTl.to(
              g.position,
              { y: `+=${dy}`, duration: 2, ease: "none" },
              0,
            );
          }
          const disposeScans = registerAllLiteServiceScans(
            modelRefs,
            getLiteScanTimingForBreakpoint(bp),
            () => cancelled,
            bp,
          );
          return () => {
            fadeTl.scrollTrigger?.kill();
            fadeTl.kill();
            disposeScans();
          };
        };

        matchMediaInstance.add("(max-width: 639px)", () => attachHeroBand("mobile"));
        matchMediaInstance.add("(min-width: 640px) and (max-width: 1023px)", () => attachHeroBand("tablet"));
        matchMediaInstance.add("(min-width: 1024px)", () => attachHeroBand("desktop"));

        addToCartTl = gsap.timeline({
          defaults: {
            duration: 0.5, ease: "power1.inOut"
          },
          scrollTrigger: {
            trigger: "#ctaSection",
            start: "top bottom",
            end: "top top",
            scrub: layoutBreakpoint === "desktop" ? 9 : 4.5,
            invalidateOnRefresh: true,
            fastScrollEnd: layoutBreakpoint !== "desktop",
            onUpdate: (self) => {
              // Keep timeline responsive during scrub; hide is handled onLeaveBack only.
              // (We don't snap to hidden state on reverse while CTA is still in view.)
            },
            onLeaveBack: () => {
              // When scrolling back above CTA, snap everything to the hidden (t=0) state.
              // This avoids scrub-smoothing leaving modals/receipt visible for seconds.
              snapCtaHidden();
            },
          },
        });

        const asa1 = findChildByName(bucketRef.current, "flap_1");
        const asa2 = findChildByName(bucketRef.current, "flap_2");

        addCtaCartTweensToTimeline(addToCartTl, modelRefs, bucketRef, asa1, asa2, ctaCart);

        // Scrubbed timelines can cross the same time multiple times.
        // Gate the bill SFX so it plays only once per mount.
        let didPlayCtaBill = false;

        addToCartTl.to(
          "#recieptSection",
          {
            // Start state comes from Tailwind `translate-y-full` (100% of element height).
            // Use the measured height so the receipt fully clears across OS/font metrics.
            y: () => {
              const el = typeof document !== "undefined" ? document.getElementById("recieptSection") : null;
              if (!el) return -200;
              const h = el.getBoundingClientRect().height;
              // Extra few px so it fully clears even with subpixel rounding.
              return -Math.ceil(h-475);
            },
            duration: 5,
            ease: "back.inOut",
            overwrite: "auto",
          },
          1.5,
        );
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1.4)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1.8)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 2.2)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 2.6)

        /** Receipt strip ends at 3.8 + 1 = 4.8 — GSAP `call` = zero-duration tween at this time (scrub-safe). */
        addToCartTl.call(
          () => {
            if (cancelled) return;
            const st = addToCartTl?.scrollTrigger;
            if (st && st.direction < 0) return;
            if (didPlayCtaBill) return;
            didPlayCtaBill = true;
            playLiteSfx("bill");
          },
          undefined,
          1.5,
        );

        requestAnimationFrame(() => {
          if (ScrollTrigger.getAll().some((trigger) => trigger.isActive && trigger.pin)) {
            return;
          }
          ScrollTrigger.refresh();
        });
      };

      mountScroll();

      return () => {
        cancelled = true;
        if (typeof window !== "undefined" && onLoaderHidden) {
          window.removeEventListener("lite:loader-hidden", onLoaderHidden);
        }
        introTl?.kill();
        introTl = null;
        matchMediaInstance?.revert();
        matchMediaInstance = null;
        pauseLiteSfx("beep");
        pauseLiteSfx("bill");
        addToCartTl?.scrollTrigger?.kill();
        addToCartTl?.kill();
        addToCartTl = null;
      };
    },
    { dependencies: [sceneBySrc, modelRefs, layoutBreakpoint], revertOnUpdate: true },
  );

  if (
    !smoScene ||
    !adsScene ||
    !contentScene ||
    !seoScene ||
    !webdevScene ||
    !graphicScene ||
    !videoScene 
  ) {
    return null;
  }

  return (
    <group position={root.position} scale={root.scale}>
      <group ref={heroFadeOutGroupRef}>
      <WigglingModel
        scene={graphicScene}
        groupRef={graphicRef}
        position={L.graphic!.position}
        floatConfig={L.graphic!.float}
        scale={L.graphic!.scale}
        rotation={L.graphic!.rotation}
        disableFloat={disableFloat}
        floatEnabled={isFloatOn("graphic")}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={webdevScene}
        groupRef={webdevRef}
        position={L.webdev!.position}
        floatConfig={L.webdev!.float}
        scale={L.webdev!.scale}
        rotation={L.webdev!.rotation}
        disableFloat={disableFloat}
        floatEnabled={isFloatOn("webdev")}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={videoScene}
        groupRef={videoRef}
        position={L.video!.position}
        floatConfig={L.video!.float}
        scale={L.video!.scale}
        rotation={L.video!.rotation}
        disableFloat={disableFloat}
        floatEnabled={isFloatOn("video")}
        floatSoft={floatSoft}
      />
      <WigglingModel
        scene={adsScene}
        groupRef={adsRef}
        position={L.ads!.position}
        floatConfig={L.ads!.float}
        scale={L.ads!.scale}
        rotation={L.ads!.rotation}
        disableFloat={disableFloat}
        floatEnabled={isFloatOn("ads")}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={contentScene}
        groupRef={contentRef}
        position={L.content!.position}
        floatConfig={L.content!.float}
        scale={L.content!.scale}
        rotation={L.content!.rotation}
        disableFloat={disableFloat}
        floatEnabled={isFloatOn("content")}
        floatSoft={floatSoft}
      />
      <WigglingModel
        scene={smoScene}
        groupRef={smoRef}
        position={L.smo!.position}
        floatConfig={L.smo!.float}
        scale={L.smo!.scale}
        rotation={L.smo!.rotation}
        disableFloat={disableFloat}
        floatEnabled={isFloatOn("smo")}
        floatSoft={floatSoft}
      />


      <WigglingModel
        scene={bucketScene!}
        groupRef={bucketRef}
        position={L.bucket!.position}
        floatConfig={L.bucket!.float}
        scale={L.bucket!.scale}
        rotation={L.bucket!.rotation}
        disableFloat={disableFloat}
        floatEnabled={bucketFloatEnabled}
        floatSoft={floatSoft}
      />
      {/* </group> */}
      <WigglingModel
        scene={seoScene}
        groupRef={seoRef}
        position={L.seo!.position}
        floatConfig={L.seo!.float}
        scale={L.seo!.scale}
        rotation={L.seo!.rotation}
        disableFloat={disableFloat}
        floatEnabled={isFloatOn("seo")}
        floatSoft={floatSoft}
      />
      {/* <Environment files="/assets/hdr/scene.hdr" resolution={1024} backgroundIntensity={1} backgroundRotation={356} /> */}

      {/* <directionalLight intensity={1} position={[0, 50, 1000]} intensity={5} /> */}
      </group>
    </group>
  );
};

export default Ashish3dScene;
