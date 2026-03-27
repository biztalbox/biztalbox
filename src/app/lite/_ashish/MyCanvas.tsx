"use client";

import { useMemo, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Group } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LITE_GLB_URLS, LITE_MODELS } from "./lite-models";
import { WigglingModel } from "./WigglingModel";

for (const url of LITE_GLB_URLS) {
  useGLTF.preload(url);
}

const MyCanvas = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const gltf = useLoader(GLTFLoader, LITE_GLB_URLS) as GLTF | GLTF[];
  const sceneBySrc = useMemo(() => {
    const list = Array.isArray(gltf) ? gltf : [gltf];
    const map = new Map<string, Group>();
    LITE_GLB_URLS.forEach((url, i) => map.set(url, list[i].scene));
    return map;
  }, [gltf]);

  const scrollTargetRef = useRef<Group>(null);

  const hasScrollDrivenModel = LITE_MODELS.some((m) => m.scrollDriven);

  useGSAP(() => {
    if (!hasScrollDrivenModel) return;

    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 120;
    const mountScroll = () => {
      const target = scrollTargetRef.current;
      if (!target) {
        if (!cancelled && attempts++ < maxAttempts) requestAnimationFrame(mountScroll);
        return;
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section0",
          endTrigger: "#section4",
          start: "top top",
          end: "bottom bottom",
          markers: false,
          scrub: true,
        },
      });
      tl.to(target.rotation, { x: "-8" });
    };
    mountScroll();
    return () => {
      cancelled = true;
    };
  }, [hasScrollDrivenModel]);

  return (
    <>
      {LITE_MODELS.map((m) => {
        const scene = sceneBySrc.get(m.src);
        if (!scene) return null;
        return (
          <WigglingModel
            key={m.id}
            scene={scene}
            position={m.position}
            animation={m.animation}
            phase={m.phase}
            speed={m.speed}
            scale={m.scale}
            rotation={m.rotation}
            scrollRef={m.scrollDriven ? scrollTargetRef : undefined}
          />
        );
      })}
      <ambientLight intensity={5.45} />
      <hemisphereLight args={["#f5f5ff", "#3a3a3a", 5.55]} />
      <directionalLight position={[140, 120, 160]} intensity={1.35} color="#ffffff" />
      <directionalLight position={[-130, 70, 90]} intensity={5.65} color="#eef2ff" />
      <directionalLight position={[40, 90, -160]} intensity={5.75} color="#ffffff" />
      <directionalLight position={[0, -80, 120]} intensity={5.35} color="#d4d4d8" />
    </>
  );
};

export default MyCanvas;
