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
import type { LiteModelRefMap } from "./motion/lite-service-scan-config";
import {
  LITE_SCAN_TIMING_DESKTOP,
  LITE_SCAN_TIMING_MOBILE,
  LITE_SCAN_TIMING_TABLET,
  registerAllLiteServiceScans,
} from "./motion/lite-service-scan-factory";
import { SFX_BEEP, pauseSfx } from "./sfx";

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
  "/assets/lite_models/bucket.glb",
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

/**
 * Offsets + scales the whole hero model cluster so it stays framed with
 * `ResponsiveHeroCamera` in Hero.tsx (desktop camera x≈300 vs narrow x≈-4, different FOV/z).
 */
function useHeroModelsRootTransform() {
  const { size } = useThree();
  return useMemo(() => {
    const w = size.width;
    const h = size.height;
    const aspect = w / Math.max(h, 1);

    if (w >= 1024) {
      return { position: [0, 0, 0] as const, scale: 1 };
    }

    const landscapePhone = w < 1024 && aspect > 1.15;

    if (w >= 640) {
      return {
        position: [-148, landscapePhone ? -22 : -6, -38] as const,
        scale: 0.9,
      };
    }
    if (w >= 480) {
      return {
        position: [-168, landscapePhone ? -28 : -12, -48] as const,
        scale: 0.84,
      };
    }
    return {
      position: [-182, landscapePhone ? -32 : -18, -58] as const,
      scale: 0.78,
    };
  }, [size.width, size.height]);
}

const MyCanvas = () => {
  const root = useHeroModelsRootTransform();

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
  const bucketScene = sceneBySrc.get("/assets/lite_models/bucket.glb");

  useGSAP(
    () => {
      let cancelled = false;
      let attempts = 0;
      const maxAttempts = 120;
      let modelFadeOutTl: gsap.core.Timeline | null = null;
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

        modelFadeOutTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#section0",
            start: "-120 top",
            end: "top top",
            scrub: 2.5,
            markers: process.env.NODE_ENV === "development",
          },
        });

        modelFadeOutTl.to(videoRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(smoRef.current.position, { y: "+=700", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(appdevRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(graphicRef.current.position, { y: "+=400", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(algoRef.current.position, { y: "+=350", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(contentRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(adsRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(webdevRef.current.position, { y: "+=350", duration: 2, ease: "power3.inOut" }, 0);

        matchMediaInstance = gsap.matchMedia();

        matchMediaInstance.add("(max-width: 639px)", () =>
          registerAllLiteServiceScans(modelRefs, LITE_SCAN_TIMING_MOBILE, () => cancelled),
        );

        matchMediaInstance.add("(min-width: 640px) and (max-width: 1023px)", () =>
          registerAllLiteServiceScans(modelRefs, LITE_SCAN_TIMING_TABLET, () => cancelled),
        );

        matchMediaInstance.add("(min-width: 1024px)", () =>
          registerAllLiteServiceScans(modelRefs, LITE_SCAN_TIMING_DESKTOP, () => cancelled),
        );

        addToCartTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#ctaSection",
            start: "top bottom",
            end: "top top",
            scrub: 1.5,
          },
        });

        const asa1 = findChildByName(bucketRef.current, "Asa1");
        const asa2 = findChildByName(bucketRef.current, "Asa2");

        addToCartTl.to(seoRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(smoRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(webdevRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(videoRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(contentRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(adsRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(algoRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(graphicRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(appdevRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(bucketRef.current.scale, { x: 0, y: 0, z: 0, duration: 0, ease: "power3.inOut" }, 0);
        addToCartTl.to(bucketRef.current.scale, { x: 8, y: 8, z: 8, duration: 0, ease: "power3.inOut" }, 0.15);
        addToCartTl.to(bucketRef.current.rotation, { x: 0.3, y: 0.6, duration: 2, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(bucketRef.current.scale, { x: 7, y: 7, z: 7, duration: 2, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(seoRef.current.scale, { x:1.6, y: 1.6,z:1.6, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(seoRef.current.position, { y: "-=10", duration: 2, ease: "power3.inOut" }, 1.5);
        addToCartTl.to(smoRef.current.scale, { x:0.2, y: 0.2,z:0.1, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(smoRef.current.position, { y: "-=60", x: "+=60", z: "-=30", duration: 2, ease: "power3.inOut" }, 1.5);
        addToCartTl.to(webdevRef.current.scale, { x:1, y: 1,z:0.3, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(webdevRef.current.position, { y: "-=30", x: "-=70", z: "+=150", duration: 2, ease: "power3.inOut" }, 1.5);
        addToCartTl.to(videoRef.current.scale, { x:0.6, y: 1,z:0.3, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(videoRef.current.position, { y: "-=30", x: "-=70", z: "+=150", duration: 2, ease: "power3.inOut" }, 1.5);
        addToCartTl.to(contentRef.current.scale, { x:0.3, y: 0.5,z:0.3, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(contentRef.current.position, { y: "-=30", x: "-=10", z: "+=150", duration: 2, ease: "power3.inOut" }, 1.5);
        addToCartTl.to(adsRef.current.scale, { x:0.4, y:0.1,z:0.1, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(adsRef.current.position, { y: "-=1", x: "+=30", z: "-=200", duration: 2, ease: "power3.inOut" }, 1.5);
        addToCartTl.to(appdevRef.current.scale, { x:0.3, y: 0.1,z:0.1, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(appdevRef.current.position, { y: "-=10", x: "-=100", z: "-=100", duration: 2, ease: "power3.inOut" }, 1.5);
        addToCartTl.to(algoRef.current.scale, { x:2, y: 2,z:2, duration: 0, ease: "power3.inOut" }, 0.3);
        addToCartTl.to(algoRef.current.position, { y: "-=2", x: "+=40", z: "-=50", duration: 2, ease: "power3.inOut" }, 1.5);








        /** Local-space offsets for nested `bucket.glb` meshes — edit targets as you like */
        if (asa1) {
          addToCartTl.to(
            asa1.rotation,
            { z: "+=2.5", duration: 3, ease: "power3.inOut" },
            0.3,
          );
        }
        if (asa2) {
          addToCartTl.to(
            asa2.rotation,
            { z: "-=2.5", duration: 3, ease: "power3.inOut" },
            0.3,
          );
        }

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      mountScroll();

      return () => {
        cancelled = true;
        matchMediaInstance?.revert();
        matchMediaInstance = null;
        pauseSfx(SFX_BEEP);
        modelFadeOutTl?.scrollTrigger?.kill();
        modelFadeOutTl?.kill();
        modelFadeOutTl = null;
        addToCartTl?.scrollTrigger?.kill();
        addToCartTl?.kill();
        addToCartTl = null;
      };
    },
    { dependencies: [sceneBySrc, modelRefs] },
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
        position={[380, 240, 500]}
        floatConfig={{
          speed: 6,
          rotationIntensity: 0.6,
          floatIntensity: 0.8,
          floatingRange: [-0.1, 0.4],
        }}
        scale={[2,2, 2]}
        rotation={[0, 0.5, 0]}
      />
      <WigglingModel
        scene={graphicScene}
        groupRef={graphicRef}
        position={[300, 260, 400]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={1}
       
        rotation={[0, -0.99, 0]}
      />
      
      <WigglingModel
        scene={webdevScene}
        groupRef={webdevRef}
        position={[1, 280, 150]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.2,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={[2, 1.7, 1]}
      />

      <WigglingModel
        scene={appdevScene}
        groupRef={appdevRef}
        position={[330, 180, 440]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.3}
      />

      <WigglingModel
        scene={videoScene}
        groupRef={videoRef}
        position={[30, 160, 250]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 1,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={1.1}
      />
      <WigglingModel
        scene={adsScene}
        groupRef={adsRef}
        position={[400, 200, 500]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.1}
        rotation={[0, -0.5, 0]}
      />

      <WigglingModel
        scene={contentScene}
        groupRef={contentRef}
        position={[170, 100, 300]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 1,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.6}
      />
      <WigglingModel
        scene={smoScene}
        groupRef={smoRef}
        position={[290, 130, 400]}
        floatConfig={{
          speed: 4,
          rotationIntensity: 0.5,
          floatIntensity: 1.5,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.23}
      />
      <WigglingModel
        scene={seoScene}
        groupRef={seoRef}
        position={[440, 140, 300]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.3,
          floatIntensity: 0.5,
          floatingRange: [-0.1, 0.1],
        }}
        scale={1.6}
      />

      {/* // Bucket */}
      <WigglingModel
        scene={bucketScene!}
        groupRef={bucketRef}
        position={[300, 100, 300]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.3,
          floatIntensity: 0.8,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0}
        rotation={[1, 0, 0]}
      />

      <directionalLight position={[140, 120, 160]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={5.65} color="#eef2ff" />
      <directionalLight position={[40, 90, -160]} intensity={5.75} color="#ffffff" />
      <directionalLight position={[0, -80, 120]} intensity={5.35} color="#d4d4d8" />
    </group>
  );
};

export default MyCanvas;
