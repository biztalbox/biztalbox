"use client";

import { useMemo, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Group, Object3D } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** All lite hero GLBs passed to useLoader / preload (order does not matter). */
const LITE_GLB_URLS = [
  "/assets/lite_models/smo.glb",
  "/assets/lite_models/ads.glb",
  "/assets/lite_models/content.glb",
  "/assets/lite_models/seo2.glb",
  "/assets/lite_models/webdev.glb",
  "/assets/lite_models/appdev.glb",
  "/assets/lite_models/graphic.glb",
  "/assets/lite_models/video.glb",
  "/assets/lite_models/algo.glb",
  "/assets/lite_models/box.glb",
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
    const ctaCart = resolveCtaCartConfig(bp);
    return { root, layouts, ctaCart };
  }, [size.width, size.height]);
}

const MyCanvas = () => {
  const { root, layouts: L, ctaCart } = useLiteHeroCanvasFrame();

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

  const gltf = useLoader(GLTFLoader, [...LITE_GLB_URLS], configureGltfLoader) as GLTF | GLTF[];
  const sceneBySrc = useMemo(() => {
    const list = Array.isArray(gltf) ? gltf : [gltf];
    const map = new Map<string, Group>();
    LITE_GLB_URLS.forEach((url, i) => map.set(url, list[i].scene));
    return map;
  }, [gltf]);

  const smoScene = sceneBySrc.get("/assets/lite_models/smo.glb");
  const adsScene = sceneBySrc.get("/assets/lite_models/ads.glb");
  const contentScene = sceneBySrc.get("/assets/lite_models/content.glb");
  const seoScene = sceneBySrc.get("/assets/lite_models/seo2.glb");
  const webdevScene = sceneBySrc.get("/assets/lite_models/webdev.glb");
  const appdevScene = sceneBySrc.get("/assets/lite_models/appdev.glb");
  const graphicScene = sceneBySrc.get("/assets/lite_models/graphic.glb");
  const videoScene = sceneBySrc.get("/assets/lite_models/video.glb");
  const algoScene = sceneBySrc.get("/assets/lite_models/algo.glb");
  const bucketScene = sceneBySrc.get("/assets/lite_models/box.glb");

  useGSAP(
    () => {
      let cancelled = false;
      let attempts = 0;
      const maxAttempts = 120;
      let matchMediaInstance: gsap.MatchMedia | null = null;
      let addToCartTl: gsap.core.Timeline | null = null;

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
          !bucketRef.current
        ) {
          if (!cancelled && attempts++ < maxAttempts) requestAnimationFrame(mountScroll);
          return;
        }
        if (cancelled) return;

        matchMediaInstance = gsap.matchMedia();

        const attachHeroBand = (bp: LiteSceneBreakpoint) => {
          const fadeTl = gsap.timeline({
            scrollTrigger: {
              trigger: "#section0",
              start: "-120 top",
              end: "top top",
              scrub: 2.5,
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
          scrollTrigger: {
            trigger: "#ctaSection",
            start: "top bottom",
            end: "top top",
            scrub: 3,
          },
        });

        const asa1 = findChildByName(bucketRef.current, "flap_1");
        const asa2 = findChildByName(bucketRef.current, "flap_2");
        
        addCtaCartTweensToTimeline(addToCartTl, modelRefs, bucketRef, asa1, asa2, ctaCart);
        
        addToCartTl.to("#recieptSection", {y: "-=520", duration: 1, ease: "power1.inOut"}, 2)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 2.2)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 2.4)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 2.6)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 2.8)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 3)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 3.2)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 3.4)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 3.6)
        // addToCartTl.to("#recieptSection", {y: "-=56", duration: 1, ease: "power1.inOut"}, 3.8);

        /** Receipt strip ends at 3.8 + 1 = 4.8 — GSAP `call` = zero-duration tween at this time (scrub-safe). */
        addToCartTl.call(
          () => {
            if (cancelled) return;
            const st = addToCartTl?.scrollTrigger;
            if (st && st.direction < 0) return;
            playLiteSfx("bill");
          },
          undefined,
          1.8,
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
    { dependencies: [sceneBySrc, modelRefs, ctaCart] },
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
    <group position={root.position} scale={root.scale}>
      <WigglingModel
        scene={algoScene}
        groupRef={algoRef}
        position={L.algo!.position}
        floatConfig={L.algo!.float}
        scale={L.algo!.scale}
        rotation={L.algo!.rotation}
      />
      <WigglingModel
        scene={graphicScene}
        groupRef={graphicRef}
        position={L.graphic!.position}
        floatConfig={L.graphic!.float}
        scale={L.graphic!.scale}
        rotation={L.graphic!.rotation}
      />

      <WigglingModel
        scene={webdevScene}
        groupRef={webdevRef}
        position={L.webdev!.position}
        floatConfig={L.webdev!.float}
        scale={L.webdev!.scale}
        rotation={L.webdev!.rotation}
      />

      <WigglingModel
        scene={appdevScene}
        groupRef={appdevRef}
        position={L.appdev!.position}
        floatConfig={L.appdev!.float}
        scale={L.appdev!.scale}
        rotation={L.appdev!.rotation}
      />

      <WigglingModel
        scene={videoScene}
        groupRef={videoRef}
        position={L.video!.position}
        floatConfig={L.video!.float}
        scale={L.video!.scale}
        rotation={L.video!.rotation}
      />
      <WigglingModel
        scene={adsScene}
        groupRef={adsRef}
        position={L.ads!.position}
        floatConfig={L.ads!.float}
        scale={L.ads!.scale}
        rotation={L.ads!.rotation}
      />

      <WigglingModel
        scene={contentScene}
        groupRef={contentRef}
        position={L.content!.position}
        floatConfig={L.content!.float}
        scale={L.content!.scale}
        rotation={L.content!.rotation}
      />
      <WigglingModel
        scene={smoScene}
        groupRef={smoRef}
        position={L.smo!.position}
        floatConfig={L.smo!.float}
        scale={L.smo!.scale}
        rotation={L.smo!.rotation}
      />
      <WigglingModel
        scene={seoScene}
        groupRef={seoRef}
        position={L.seo!.position}
        floatConfig={L.seo!.float}
        scale={L.seo!.scale}
        rotation={L.seo!.rotation}
      />

      <WigglingModel
        scene={bucketScene!}
        groupRef={bucketRef}
        position={L.bucket!.position}
        floatConfig={L.bucket!.float}
        scale={L.bucket!.scale}
        rotation={L.bucket!.rotation}
      />

      {/* <directionalLight position={[140, 120, 160]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={5.65} color="#eef2ff" />
      <directionalLight position={[40, 90, -160]} intensity={5.75} color="#ffffff" />
      <directionalLight position={[0, -80, 120]} intensity={5.35} color="#d4d4d8" /> */}
      <directionalLight position={[140, 120, 560]} intensity={1} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={1}color="#ffffff" />
      <directionalLight position={[40, 90, -160]} intensity={5.75}
color="#ffffff" />
      <directionalLight position={[0, 100, 420]} intensity={3.5}
color="#ffffff" />
    </group>
  );
};

export default MyCanvas;
