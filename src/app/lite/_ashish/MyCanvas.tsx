"use client";

import { useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Group } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WigglingModel } from "./WigglingModel";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** All lite hero GLBs passed to useLoader / preload (order does not matter). */
const LITE_GLB_URLS = [
  "/assets/lite_models/smo.glb",
  "/assets/lite_models/ads.glb",
  "/assets/lite_models/content.glb",
  "/assets/lite_models/seo.glb",
  "/assets/lite_models/webdev.glb",
  "/assets/lite_models/appdev.glb",
  "/assets/lite_models/graphic.glb",
  "/assets/lite_models/video.glb",
  "/assets/lite_models/algo.glb",
] as const;

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

  const gltf = useLoader(GLTFLoader, [...LITE_GLB_URLS]) as GLTF | GLTF[];
  const sceneBySrc = useMemo(() => {
    const list = Array.isArray(gltf) ? gltf : [gltf];
    const map = new Map<string, Group>();
    LITE_GLB_URLS.forEach((url, i) => map.set(url, list[i].scene));
    return map;
  }, [gltf]);

  const smoScene = sceneBySrc.get("/assets/lite_models/smo.glb");
  const adsScene = sceneBySrc.get("/assets/lite_models/ads.glb");
  const contentScene = sceneBySrc.get("/assets/lite_models/content.glb");
  const seoScene = sceneBySrc.get("/assets/lite_models/seo.glb");
  const webdevScene = sceneBySrc.get("/assets/lite_models/webdev.glb");
  const appdevScene = sceneBySrc.get("/assets/lite_models/appdev.glb");
  const graphicScene = sceneBySrc.get("/assets/lite_models/graphic.glb");
  const videoScene = sceneBySrc.get("/assets/lite_models/video.glb");
  const algoScene = sceneBySrc.get("/assets/lite_models/algo.glb");



  useGSAP(
    () => {
      let cancelled = false;
      let attempts = 0;
      const maxAttempts = 120;
      let webDevTl: gsap.core.Timeline | null = null;
      let modelFadeOutTl: gsap.core.Timeline | null = null;

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
            start: "top top",
            end: "30% bottom",
            scrub: 10,
            markers: process.env.NODE_ENV === "development",
          },
        });

        modelFadeOutTl.to(videoRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(smoRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(appdevRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(graphicRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(algoRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(contentRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(adsRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);
        modelFadeOutTl.to(seoRef.current.position, { y: "+=500", duration: 10, ease: "power3.inOut" }, 0);

        webDevTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#section0",
            endTrigger: "#section3",
            start: "top top",
            end: "top center",
            scrub: 5,
            markers: process.env.NODE_ENV === "development",
          },
        });
        // rotation.y is radians in Three.js — 50° ≈ 0.87 rad (was +=50 rad ≈ many full spins)

        webDevTl.to(webdevRef.current.scale,{ x: `+=${1.04}`, y: `+=${1.04}`, z: `+=${1.04}`, ease: "power4.inOut" },0);
        webDevTl.to(webdevRef.current.position,{ x: `-=${10}`, duration: 2, ease: "power3.inOut" },0);
        webDevTl.to(webdevRef.current.position,{ y: `-=${10}`, duration: 2, ease: "power3.inOut" },0);
        webDevTl.to(webdevRef.current.rotation,{ x: `+=${10}`, duration: 2, ease: "power3.inOut" },0);
        // webDevTl.to(webdevRef.current.rotation,{ y: `+=${100}`, duration: 2, ease: "power3.inOut" },0);
      };

      mountScroll();

      return () => {
        cancelled = true;
        modelFadeOutTl?.scrollTrigger?.kill();
        modelFadeOutTl?.kill();
        webDevTl?.scrollTrigger?.kill();
        webDevTl?.kill();
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
        position={[-300, -90, -200]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.2,
          floatIntensity: 0.3,
          floatingRange: [-0.1, 0],
        }}
        scale={[2.0,2.7,2.0]}
        rotation={[0.3,0.6,0.4]}
      />
      <WigglingModel
      scene={graphicScene}
      groupRef={graphicRef}
      position={[-250, 180, 0]}
      floatConfig={{
        speed: 5,
        rotationIntensity: 0.5,
        floatIntensity: 1,
        floatingRange: [-0.1, 0.1],
      }}
      rotation={[0, 0, 0]}
      
    />
    <WigglingModel
        scene={webdevScene}
        groupRef={webdevRef}
        position={[100, 300, 150]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.2,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.8}
      
      />


      {/* Second Row */}      
      <WigglingModel
        scene={appdevScene}
        groupRef={appdevRef}
        position={[300, 120, 440]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.4}
      />
      
      <WigglingModel
        scene={videoScene}
        groupRef={videoRef}
        position={[260, 100, 0]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.2,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={1.3}
      />
      <WigglingModel
        scene={adsScene}
        groupRef={adsRef}
        position={[500, 160, 0]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.4}
      />

      {/* Third row */}

      <WigglingModel
        scene={contentScene}
        groupRef={contentRef}
        position={[300, 0, 300]}
        floatConfig={{
          speed: 5,
          rotationIntensity: 0.2,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
      />
      <WigglingModel
        scene={smoScene}
        groupRef={smoRef}
        position={[100, 10, 0]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={0.6}
      />
      <WigglingModel
        scene={seoScene}
        groupRef={seoRef}
        position={[250,250 , 300]}
        floatConfig={{
          speed: 3,
          rotationIntensity: 0.5,
          floatIntensity: 1,
          floatingRange: [-0.1, 0.1],
        }}
        scale={1.7}
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
