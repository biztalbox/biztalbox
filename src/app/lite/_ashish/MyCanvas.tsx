"use client";

import { useEffect, useMemo, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Group, Object3D } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WigglingModel } from "./WigglingModel";
import type { LiteModelKey, LiteModelRefMap } from "./motion/lite-service-scan-config";
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
  "/assets/lite_models/compressed/smo.glb",
  "/assets/lite_models/compressed/ads.glb",
  "/assets/lite_models/compressed/content.glb",
  "/assets/lite_models/compressed/seo.glb",
  "/assets/lite_models/compressed/webdev.glb",
  "/assets/lite_models/compressed/appdev.glb",
  "/assets/lite_models/compressed/graphic.glb",
  "/assets/lite_models/compressed/video.glb",
  "/assets/lite_models/compressed/algo.glb",
  "/assets/lite_models/compressed/box.glb",
] as const;

function configureGltfLoader(loader: GLTFLoader) {
  const draco = new DRACOLoader();
  draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  loader.setDRACOLoader(draco);
}

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
  const { size } = useThree();
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
  const seoScanRef = useRef<Group>(null);
  const smoScanRef = useRef<Group>(null);
  const webdevScanRef = useRef<Group>(null);
  const graphicScanRef = useRef<Group>(null);
  const videoScanRef = useRef<Group>(null);
  const contentScanRef = useRef<Group>(null);
  const adsScanRef = useRef<Group>(null);
  const appdevScanRef = useRef<Group>(null);
  const algoScanRef = useRef<Group>(null);
  const bucketRef = useRef<Group>(null);
  const heroFadeOutGroupRef = useRef<Group>(null);

  const modelRefs = useMemo<LiteModelRefMap>(
    () => ({
      seo: { outer: seoRef, inner: seoScanRef },
      smo: { outer: smoRef, inner: smoScanRef },
      webdev: { outer: webdevRef, inner: webdevScanRef },
      graphic: { outer: graphicRef, inner: graphicScanRef },
      video: { outer: videoRef, inner: videoScanRef },
      content: { outer: contentRef, inner: contentScanRef },
      ads: { outer: adsRef, inner: adsScanRef },
      appdev: { outer: appdevRef, inner: appdevScanRef },
      algo: { outer: algoRef, inner: algoScanRef },
    }),
    [],
  );

  const gltf = useLoader(GLTFLoader, [...LITE_GLB_URLS], configureGltfLoader) as GLTF | GLTF[];
  const sceneBySrc = useMemo(() => {
    const list = Array.isArray(gltf) ? gltf : [gltf];
    const map = new Map<string, Group>();
    LITE_GLB_URLS.forEach((url, i) => map.set(url, list[i].scene));
    return map;
  }, [gltf]);

  const smoScene = sceneBySrc.get("/assets/lite_models/compressed/smo.glb");
  const adsScene = sceneBySrc.get("/assets/lite_models/compressed/ads.glb");
  const contentScene = sceneBySrc.get("/assets/lite_models/compressed/content.glb");
  const seoScene = sceneBySrc.get("/assets/lite_models/compressed/seo.glb");
  const webdevScene = sceneBySrc.get("/assets/lite_models/compressed/webdev.glb");
  const appdevScene = sceneBySrc.get("/assets/lite_models/compressed/appdev.glb");
  const graphicScene = sceneBySrc.get("/assets/lite_models/compressed/graphic.glb");
  const videoScene = sceneBySrc.get("/assets/lite_models/compressed/video.glb");
  const algoScene = sceneBySrc.get("/assets/lite_models/compressed/algo.glb");
  const bucketScene = sceneBySrc.get("/assets/lite_models/compressed/box.glb");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    const scheduleRefresh = () => {
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        t = undefined;
        ScrollTrigger.refresh();
      }, ST_REFRESH_DEBOUNCE_MS);
    };
    const w = typeof window !== "undefined" ? window : undefined;
    w?.addEventListener("resize", scheduleRefresh, { passive: true });
    w?.addEventListener("orientationchange", scheduleRefresh, { passive: true });
    const vv = w?.visualViewport;
    vv?.addEventListener?.("resize", scheduleRefresh, { passive: true });
    return () => {
      if (t) clearTimeout(t);
      w?.removeEventListener("resize", scheduleRefresh);
      w?.removeEventListener("orientationchange", scheduleRefresh);
      vv?.removeEventListener?.("resize", scheduleRefresh);
    };
  }, []);

  useGSAP(
    () => {
      let cancelled = false;
      let attempts = 0;
      const maxAttempts = 120;
      let matchMediaInstance: gsap.MatchMedia | null = null;
      let addToCartTl: gsap.core.Timeline | null = null;

      ScrollTrigger.config({
        ignoreMobileResize: true,
      });

      const ctaCart = resolveCtaCartConfig(layoutBreakpoint);
      const ctaScrub =
        layoutBreakpoint === "mobile" ? 2 : layoutBreakpoint === "tablet" ? 3 : 5;

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
          !seoScanRef.current ||
          !smoScanRef.current ||
          !webdevScanRef.current ||
          !graphicScanRef.current ||
          !videoScanRef.current ||
          !contentScanRef.current ||
          !adsScanRef.current ||
          !appdevScanRef.current ||
          !algoScanRef.current ||
          !bucketRef.current ||
          !heroFadeOutGroupRef.current
        ) {
          if (!cancelled && attempts++ < maxAttempts) requestAnimationFrame(mountScroll);
          return;
        }
        if (cancelled) return;

        const initModals = gsap.timeline({ defaults: { duration: 5, ease: "back.inOut" } })

        initModals.from(heroFadeOutGroupRef.current.position, { y: "+=900" }, 0)

        matchMediaInstance = gsap.matchMedia();

        const attachHeroBand = (bp: LiteSceneBreakpoint) => {
          const isNarrow = bp !== "desktop";
          const fadeTl = gsap.timeline({
            defaults: { duration: 2, ease: "none" },
            scrollTrigger: {
              trigger: "#section0",
              start: "-120 top",
              end: "top top",
              scrub: isNarrow ? 1.35 : 2.65,
            },
          });
          for (const key of HERO_FADE_OUT_KEYS) {
            const g = modelRefs[key].outer.current;
            if (!g) continue;
            const dy = getHeroFadeOutYDelta(key, bp);
            fadeTl.to(g.position, { y: `+=${dy}`, duration: 2, ease: "none" }, 0);
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
            duration: 1,
            ease: "none",
          },
          scrollTrigger: {
            trigger: "#ctaSection",
            start: "top bottom",
            end: "top top",
            scrub: ctaScrub,
          },
        });

        const asa1 = findChildByName(bucketRef.current, "flap_1");
        const asa2 = findChildByName(bucketRef.current, "flap_2");

        addCtaCartTweensToTimeline(addToCartTl, modelRefs, bucketRef, asa1, asa2, ctaCart);

        // addToCartTl.to("#recieptSection", { y: "-=520", duration: 3, ease: "elastic.inOut" }, 1)
        addToCartTl.to("#recieptSection", {y: "-=104"}, 1)
        addToCartTl.to("#recieptSection", {y: "-=104"}, 1.2)
        addToCartTl.to("#recieptSection", {y: "-=104"}, 1.4)
        addToCartTl.to("#recieptSection", {y: "-=104"}, 1.6)
        addToCartTl.to("#recieptSection", {y: "-=104"}, 1.8)
        // addToCartTl.to("#recieptSection", {y: "-=56"}, 1.0)
        // addToCartTl.to("#recieptSection", {y: "-=56"}, 1.2)
        // addToCartTl.to("#recieptSection", {y: "-=56"}, 1.4)
        // addToCartTl.to("#recieptSection", {y: "-=56"}, 1.6)

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
        scanGroupRef={algoScanRef}
        position={L.algo!.position}
        floatConfig={L.algo!.float}
        scale={L.algo!.scale}
        rotation={L.algo!.rotation}
        disableFloat={disableFloat}
        floatSoft={floatSoft}
      />
      <WigglingModel
        scene={graphicScene}
        groupRef={graphicRef}
        scanGroupRef={graphicScanRef}
        position={L.graphic!.position}
        floatConfig={L.graphic!.float}
        scale={L.graphic!.scale}
        rotation={L.graphic!.rotation}
        disableFloat={disableFloat}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={webdevScene}
        groupRef={webdevRef}
        scanGroupRef={webdevScanRef}
        position={L.webdev!.position}
        floatConfig={L.webdev!.float}
        scale={L.webdev!.scale}
        rotation={L.webdev!.rotation}
        disableFloat={disableFloat}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={appdevScene}
        groupRef={appdevRef}
        scanGroupRef={appdevScanRef}
        position={L.appdev!.position}
        floatConfig={L.appdev!.float}
        scale={L.appdev!.scale}
        rotation={L.appdev!.rotation}
        disableFloat={disableFloat}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={videoScene}
        groupRef={videoRef}
        scanGroupRef={videoScanRef}
        position={L.video!.position}
        floatConfig={L.video!.float}
        scale={L.video!.scale}
        rotation={L.video!.rotation}
        disableFloat={disableFloat}
        floatSoft={floatSoft}
      />
      <WigglingModel
        scene={adsScene}
        groupRef={adsRef}
        scanGroupRef={adsScanRef}
        position={L.ads!.position}
        floatConfig={L.ads!.float}
        scale={L.ads!.scale}
        rotation={L.ads!.rotation}
        disableFloat={disableFloat}
        floatSoft={floatSoft}
      />

      <WigglingModel
        scene={contentScene}
        groupRef={contentRef}
        scanGroupRef={contentScanRef}
        position={L.content!.position}
        floatConfig={L.content!.float}
        scale={L.content!.scale}
        rotation={L.content!.rotation}
        disableFloat={disableFloat}
        floatSoft={floatSoft}
      />
      <WigglingModel
        scene={smoScene}
        groupRef={smoRef}
        scanGroupRef={smoScanRef}
        position={L.smo!.position}
        floatConfig={L.smo!.float}
        scale={L.smo!.scale}
        rotation={L.smo!.rotation}
        disableFloat={disableFloat}
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
        floatSoft={floatSoft}
      />
      {/* </group> */}
      <WigglingModel
        scene={seoScene}
        groupRef={seoRef}
        scanGroupRef={seoScanRef}
        position={L.seo!.position}
        floatConfig={L.seo!.float}
        scale={L.seo!.scale}
        rotation={L.seo!.rotation}
        disableFloat={disableFloat}
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
