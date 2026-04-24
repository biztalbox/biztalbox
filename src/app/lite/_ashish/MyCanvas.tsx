"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import type { Group, Object3D } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WigglingModel } from "./WigglingModel";
import type { LiteModelKey, LiteModelRefMap } from "./motion/lite-service-scan-config";
import { resolveLiteServiceScans } from "./motion/lite-service-scan-config";
import { getLiteScanTimingForBreakpoint, registerAllLiteServiceScans } from "./motion/lite-service-scan-factory";
import {
  addCtaCartTweensToTimeline,
  getHeroFadeOutYDelta,
  getLiteSceneBreakpoint,
  getResolvedModelLayouts,
  resolveCtaCartConfig,
  type LiteSceneBreakpoint,
} from "./motion/lite-scene-layout";
import { pauseLiteSfx, playLiteSfx } from "./sfx";
import { Environment } from "@react-three/drei";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** All lite hero GLBs passed to useLoader / preload (order does not matter). */
const LITE_GLB_URLS = [
  "/assets/lite_models/minified/smo.glb",
  "/assets/lite_models/minified/ads.glb",
  "/assets/lite_models/minified/content.glb",
  "/assets/lite_models/minified/seo.glb",
  "/assets/lite_models/minified/webdev.glb",
  "/assets/lite_models/minified/appdev.glb",
  "/assets/lite_models/minified/graphic.glb",
  "/assets/lite_models/minified/video.glb",
  "/assets/lite_models/minified/algo.glb",
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

/** Same order as the original hero fade timeline (all at label 0). */
const HERO_FADE_OUT_KEYS: LiteModelKey[] = [
  "video",
  "smo",
  "appdev",
  "graphic",
  "algo",
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

const MyCanvas = () => {
  const { root, layouts: L, layoutBreakpoint } = useLiteHeroCanvasFrame();
  const { gl, size } = useThree();
  const disableFloat = false;
  const floatSoft = layoutBreakpoint !== "desktop";
  /** Same HDR file everywhere; intensity only nudges lighting cost/readability — mesh & texture quality unchanged. */
  const envIntensity = layoutBreakpoint === "desktop" ? 1.2 : layoutBreakpoint === "tablet" ? 1.1 : 1.02;

  const smoRef = useRef<Group>(null);
  const adsRef = useRef<Group>(null);
  const contentRef = useRef<Group>(null);
  const seoRef = useRef<Group>(null);
  const webdevRef = useRef<Group>(null);
  const appdevRef = useRef<Group>(null);
  const graphicRef = useRef<Group>(null);
  const videoRef = useRef<Group>(null);
  const algoRef = useRef<Group>(null);
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
      appdev: appdevRef,
      algo: algoRef,
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
    appdev: true,
    algo: true,
  }));
  const [bucketFloatEnabled, setBucketFloatEnabled] = useState(true);

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
        appdev: heroOn,
        algo: heroOn,
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
  const appdevScene = sceneBySrc.get("/assets/lite_models/minified/appdev.glb");
  const graphicScene = sceneBySrc.get("/assets/lite_models/minified/graphic.glb");
  const videoScene = sceneBySrc.get("/assets/lite_models/minified/video.glb");
  const algoScene = sceneBySrc.get("/assets/lite_models/minified/algo.glb");
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
    });

    const scheduleRefresh = () => {
      const w = typeof window !== "undefined" ? window : undefined;
      const nextWidth = w?.innerWidth ?? lastWidth;
      const widthChanged = Math.abs(nextWidth - lastWidth) > 8;
      if (!widthChanged) return;
      lastWidth = nextWidth;
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        t = undefined;
        ScrollTrigger.refresh();
      }, ST_REFRESH_DEBOUNCE_MS);
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
      const ctaCart = resolveCtaCartConfig(layoutBreakpoint);
      // Use immediate scrub for CTA so reverse doesn't "lag" (numeric scrub smooths over seconds).
      const ctaScrub = true;

      const mountScroll = () => {
        if (
          !smoRef.current ||
          !adsRef.current ||
          !contentRef.current ||
          !seoRef.current ||
          !webdevRef.current ||
          !appdevRef.current ||
          !graphicRef.current ||
          !videoRef.current ||
          !algoRef.current ||
          !bucketRef.current ||
          !heroFadeOutGroupRef.current
        ) {
          if (!cancelled && attempts++ < maxAttempts) requestAnimationFrame(mountScroll);
          return;
        }
        if (cancelled) return;

        const initModals = gsap.timeline({ defaults: { duration: 5, ease: "back.inOut" } });
        const baseHeroY = heroFadeOutGroupRef.current.position.y;
        gsap.set(heroFadeOutGroupRef.current.position, { y: baseHeroY + 900 });
        initModals.to(heroFadeOutGroupRef.current.position, { y: baseHeroY }, 0);

        matchMediaInstance = gsap.matchMedia();

        const attachHeroBand = (bp: LiteSceneBreakpoint) => {
          const isNarrow = bp !== "desktop";
          const fadeTl = gsap.timeline({
            defaults: { duration: 2, ease: "circ.inOut" },
            scrollTrigger: {
              trigger: "#section0",
              start: "-120 top",
              end: "top top",
              scrub: isNarrow ? 1.2 : 2.5,
              invalidateOnRefresh: true,
              fastScrollEnd: true,
            },
          });
          for (const key of HERO_FADE_OUT_KEYS) {
            const g = modelRefs[key].current;
            if (!g) continue;
            const dy = getHeroFadeOutYDelta(key, bp);
            fadeTl.to(g.position, { y: `+=${dy}`, duration: 2, ease: "power3.inOut" }, 0);
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
            scrub: ctaScrub,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            onUpdate: (self) => {
              // Guard tiny reverse progress near start (prevents brief "ghost" visibility).
              if (self.direction < 0 && self.progress < 0.015) {
                addToCartTl?.pause(0);
                addToCartTl?.progress(0);
              }
            },
            onLeaveBack: () => {
              // When scrolling back above CTA, snap everything to the hidden (t=0) state.
              // This avoids scrub-smoothing leaving modals/receipt visible for seconds.
              addToCartTl?.pause(0);
              addToCartTl?.progress(0);
            },
          },
        });

        const asa1 = findChildByName(bucketRef.current, "flap_1");
        const asa2 = findChildByName(bucketRef.current, "flap_2");

        addCtaCartTweensToTimeline(addToCartTl, modelRefs, bucketRef, asa1, asa2, ctaCart);

        addToCartTl.to("#recieptSection", { y: "-=520", duration: 4, ease: "back.inOut" }, 1.5)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1.2)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1.4)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1.6)
        // addToCartTl.to("#recieptSection", {y: "-=104"}, 1.8)

        /** Receipt strip ends at 3.8 + 1 = 4.8 — GSAP `call` = zero-duration tween at this time (scrub-safe). */
        addToCartTl.call(
          () => {
            if (cancelled) return;
            const st = addToCartTl?.scrollTrigger;
            if (st && st.direction < 0) return;
            playLiteSfx("bill");
          },
          undefined,
          1.5,
        );

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      mountScroll();

      return () => {
        cancelled = true;
        matchMediaInstance?.revert();
        matchMediaInstance = null;
        pauseLiteSfx("beep");
        pauseLiteSfx("bill");
        addToCartTl?.scrollTrigger?.kill();
        addToCartTl?.kill();
        addToCartTl = null;
      };
    },
    { dependencies: [sceneBySrc, modelRefs, layoutBreakpoint] },
  );

  if (
    !smoScene ||
    !adsScene ||
    !contentScene ||
    !seoScene ||
    !webdevScene ||
    !appdevScene ||
    !graphicScene ||
    !videoScene ||
    !algoScene
  ) {
    return null;
  }

  return (
    <group ref={heroFadeOutGroupRef} position={root.position} scale={root.scale}>
      {/* <group > */}
      <WigglingModel
        scene={algoScene}
        groupRef={algoRef}
        position={L.algo!.position}
        floatConfig={L.algo!.float}
        scale={L.algo!.scale}
        rotation={L.algo!.rotation}
        disableFloat={disableFloat}
        floatEnabled={floatEnabledByKey.algo}
        floatSoft={floatSoft}
      />
      <WigglingModel
        scene={graphicScene}
        groupRef={graphicRef}
        position={L.graphic!.position}
        floatConfig={L.graphic!.float}
        scale={L.graphic!.scale}
        rotation={L.graphic!.rotation}
        disableFloat={disableFloat}
        floatEnabled={floatEnabledByKey.graphic}
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
        floatEnabled={floatEnabledByKey.webdev}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={appdevScene}
        groupRef={appdevRef}
        position={L.appdev!.position}
        floatConfig={L.appdev!.float}
        scale={L.appdev!.scale}
        rotation={L.appdev!.rotation}
        disableFloat={disableFloat}
        floatEnabled={floatEnabledByKey.appdev}
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
        floatEnabled={floatEnabledByKey.video}
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
        floatEnabled={floatEnabledByKey.ads}
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
        floatEnabled={floatEnabledByKey.content}
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
        floatEnabled={floatEnabledByKey.smo}
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
        floatEnabled={floatEnabledByKey.seo}
        floatSoft={floatSoft}
      />

      {/* <directionalLight position={[140, 120, 160]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={5.65} color="#eef2ff" />
      <directionalLight position={[40, 90, -160]} intensity={5.75} color="#ffffff" />
      <directionalLight position={[0, -80, 120]} intensity={5.35} color="#d4d4d8" /> */}
      {/* <directionalLight position={[140, 120, 560]} intensity={3} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={2} color="#ffffff" />
      {!isTablet && (
        <>
          <directionalLight position={[40, 90, -160]} intensity={4.2} color="#ffffff" />
          <directionalLight position={[0, 100, 420]} intensity={2.25} color="#ffffff" />
        </>
      )} */}
      <Environment files="/assets/hdr/orange.hdr" environmentIntensity={envIntensity} />
    </group>
  );
};

export default MyCanvas;
