"use client";

import { useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Group } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WigglingModel } from "./WigglingModel";
import { addSlideTextStripToTimeline } from "./slide-text-timeline";
import { SFX_BEEP, addScrubTimelineCue, playSfx, pauseSfx } from "./sfx";

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
] as const;

/** Draco-compressed GLBs (e.g. many exported `can.glb`) need a decoder on the loader. */
function configureGltfLoader(loader: GLTFLoader) {
  const draco = new DRACOLoader();
  draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  loader.setDRACOLoader(draco);
}

// for (const url of LITE_GLB_URLS) {
//   useGLTF.preload(url);
// }

const SCROLL_SEGMENT_GAP = 0.15;
const SCROLL_SEGMENT_DURATION = 0.55;

function addModelScrollSegment(
  tl: gsap.core.Timeline,
  group: Group,
  modelId: string,
  position: number | string,
) {
  const dur = SCROLL_SEGMENT_DURATION;
  const ease = "none" as const;

  switch (modelId) {
    case "smo":
      tl.to(group.rotation, { x: "+=0.35", y: "+=0.55", duration: dur, ease }, position);
      break;
    case "ads":
      tl.to(group.rotation, { y: "+=0.65", z: "+=0.2", duration: dur, ease }, position);
      break;
    case "content":
      tl.to(group.position, { y: "+=12", duration: dur, ease }, position);
      break;
    case "seo":
      tl.to(group.rotation, { z: "+=0.5", duration: dur, ease }, position);
      break;
    case "webdev":
      tl.to(group.rotation, { x: "+=0.45", duration: dur, ease }, position);
      break;
    case "appdev":
      tl.to(group.rotation, { x: "+=0.25", y: "+=0.4", duration: dur, ease }, position);
      break;
    case "graphic":
      tl.to(group.scale, { x: "+=0.08", y: "+=0.08", z: "+=0.08", duration: dur, ease }, position);
      break;
    case "video":
      tl.to(group.rotation, { y: "+=0.5", x: "+=0.15", duration: dur, ease }, position);
      break;
    case "algo":
      tl.to(group.position, { z: "+=28", duration: dur, ease }, position);
      break;
    default:
      tl.to(group.rotation, { z: "+=0.35", duration: dur, ease }, position);
  }
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

  /**
   * Loads every GLB in one batch. `useLoader` caches by [loader, URL, …].
   * `sceneBySrc` maps each URL string → that file’s root `scene` (a Group) so you can pick
   * “which mesh” by path without indexing the array by position.
   */
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



  useGSAP(
    () => {
      let cancelled = false;
      let attempts = 0;
      const maxAttempts = 120;
      let modelFadeOutTl: gsap.core.Timeline | null = null;
      let seoTl: gsap.core.Timeline | null = null;
      let seoScanTl: gsap.core.Timeline | null = null;
      let smoTl: gsap.core.Timeline | null = null;
      let webDevTl: gsap.core.Timeline | null = null;
      let adsTl: gsap.core.Timeline | null = null;
      let contentTl: gsap.core.Timeline | null = null;
      let videoTl: gsap.core.Timeline | null = null;
      let algoTl: gsap.core.Timeline | null = null;
      let appdevTl: gsap.core.Timeline | null = null;
      let graphicTl: gsap.core.Timeline | null = null;
      let removeSeoScanBeepCue: (() => void) | undefined;

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

        // Assign to outer `let`s so cleanup can kill these timelines (do not `const` shadow here).
        modelFadeOutTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#section0",
            start: "-120 top",
            end: "top top",
            scrub: 5,
            markers: true,
          },
        });

        modelFadeOutTl.to(videoRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(smoRef.current.position, { y: "+=700", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(appdevRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(graphicRef.current.position, { y: "+=600", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(algoRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(contentRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(adsRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(webdevRef.current.position, { y: "+=500", duration: 2, ease: "power3.inOut" }, 0);

        // SEO Timeline
        seoTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#section0",
            endTrigger: "#seoScanner",
            start: "top top",
            end: "top center",
            scrub: 1.2,
          },
        });

        seoTl.to(seoRef.current.scale, { x: 2.5, y: 2.5, z: 2.5, duration: 2, ease: "power1.inOut" }, 0);
        seoTl.to(seoRef.current.position, { x: "-=140", y: "+=70", duration: 1, ease: "power1.inOut" }, 0);
        seoTl.to(seoRef.current.rotation, { y: 10, duration: 1, ease: "power1.inOut" }, 0);


        seoScanTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#seoScanner",
            endTrigger:"#smoScanner",
            start: "top 28%",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 5,
            invalidateOnRefresh: true,
            // markers: process.env.NODE_ENV === "development",
          },
        });
        seoScanTl.to("#seoScanner .purchaseStatus",{width: "135px", duration: 2, ease: "power1.inOut" }, 0);
        seoScanTl.to(
          seoRef.current.rotation,
          { y: `+=${Math.PI * 2}`, duration: 2, ease: "none" },
          0,
        );
        seoScanTl.to("#seoScanner .purchaseStatus",{color: "red", duration: 0.1, ease: "power1.inOut" }, 2);
        seoScanTl.to("#seoScanner .barcoadCheck",{display: "block", duration: 0.1, ease: "power1.inOut" }, 2.1);
        removeSeoScanBeepCue = addScrubTimelineCue(seoScanTl, 2.1 + 0.1, () => {
          if (!cancelled) playSfx(SFX_BEEP);
        });

        seoScanTl.to(seoRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.15, ease: "power1.inOut" }, 2);
        seoScanTl.to("#seoScanner", { height: "100px", width: "100px", duration: 0.7, ease: "power1.inOut" }, 2.9);
        seoScanTl.to("#seoScanner", { x: "+=600", duration: 1, ease: "power1.inOut" }, 2.9);

        // Strip tween is scrub-reversible (scroll up brings back #01). Card x runs 2.9 → 3.9.
        addSlideTextStripToTimeline(seoScanTl, {
          track: "#seoScanner .numberTrack",
          baselineAt: 0,
          startTime: 2.9,
          delay: 0.25,
          duration: 0.9,
          fromXPercent: 0,
          toXPercent: -50,
          ease: "power2.inOut",
        });

        

        // webDevTl = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: "#section0",
        //     endTrigger: "#section3",
        //     start: "top top",
        //     end: "top center",
        //     scrub: 5,
        //     markers: process.env.NODE_ENV === "development",
        //   },
        // });
        // // rotation.y is radians in Three.js — 50° ≈ 0.87 rad (was +=50 rad ≈ many full spins)

        // webDevTl.to(webdevRef.current.scale,{ x: `+=${1.04}`, y: `+=${1.04}`, z: `+=${1.04}`, ease: "power4.inOut" },0);
        // webDevTl.to(webdevRef.current.position,{ x: `-=${10}`, duration: 2, ease: "power3.inOut" },0);
        // webDevTl.to(webdevRef.current.position,{ y: `-=${10}`, duration: 2, ease: "power3.inOut" },0);
        // webDevTl.to(webdevRef.current.rotation,{ x: `+=${10}`, duration: 2, ease: "power3.inOut" },0);
        // webDevTl.to(webdevRef.current.rotation,{ y: `+=${100}`, duration: 2, ease: "power3.inOut" },0);

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      mountScroll();

      return () => {
        cancelled = true;
        removeSeoScanBeepCue?.();
        pauseSfx(SFX_BEEP);
        seoScanTl?.scrollTrigger?.kill();
        seoScanTl?.kill();
        seoTl?.scrollTrigger?.kill();
        seoTl?.kill();
        modelFadeOutTl?.scrollTrigger?.kill();
        modelFadeOutTl?.kill();
      };
    },
    { dependencies: [sceneBySrc] },
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
      {/* Fist row */}
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
      rotation={[0,-0.99,0]}

      
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
        scale={[2,1.7,1]}
      
      />


      {/* Second Row */}
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
        rotation={[0,-0.5,0]}

      />

      {/* Third row */}

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
        position={[440,140,300]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.3,
          floatIntensity: 0.5,
          floatingRange: [-0.1, 0.1],
        }}
        scale={1.6}

      />





      <directionalLight position={[140, 120, 160]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={5.65} color="#eef2ff" />
      <directionalLight position={[40, 90, -160]} intensity={5.75} color="#ffffff" />
      <directionalLight position={[0, -80, 120]} intensity={5.35} color="#d4d4d8" />
      {/* <OrbitControls /> */}
    </>
  );
};

export default MyCanvas;
