"use client";

import { useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Group } from "three";
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
  "/assets/lite_models/mri3.glb",
  "/assets/lite_models/bucket.glb",
] as const;

function configureGltfLoader(loader: GLTFLoader) {
  const draco = new DRACOLoader();
  draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  loader.setDRACOLoader(draco);
}

const MyCanvas = () => {
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
  const algoScene = sceneBySrc.get("/assets/lite_models/mri3.glb");
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
          !algoRef.current
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
            scrub: 2.5,
            markers: true,
          },
        });

        // addToCartTl.to(bucketRef.current.scale, { x: 6.5, y: 6.5, z: 6.5, duration: 2, ease: "power3.inOut" }, 0);

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
    <>
      <WigglingModel
        scene={algoScene}
        groupRef={algoRef}
        position={[470, 240, 400]}
        floatConfig={{
          speed: 6,
          rotationIntensity: 0.6,
          floatIntensity: 0.8,
          floatingRange: [-0.1, 0.4],
        }}
        scale={[3, 3.5, 3]}
        rotation={[0, -0.5, 0]}
      />
      <WigglingModel
        scene={graphicScene}
        groupRef={graphicRef}
        position={[40, 220, 0]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.45}
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
          speed: 20,
          rotationIntensity: 0.5,
          floatIntensity: 1,
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
        scale={8}
        rotation={[1, 0, 0]}
      />

      <directionalLight position={[140, 120, 160]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={5.65} color="#eef2ff" />
      <directionalLight position={[40, 90, -160]} intensity={5.75} color="#ffffff" />
      <directionalLight position={[0, -80, 120]} intensity={5.35} color="#d4d4d8" />
    </>
  );
};

export default MyCanvas;
