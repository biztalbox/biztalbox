"use client";

import { AdaptiveDpr, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { preloadLiteSfx, unlockLiteSfx } from "@/app/_lite/_ashish/sfx";
import DartScene from "./DartScene";

function ResponsiveHeroCamera() {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const w = size.width;
    if (w < 480) {
      camera.fov = 23;
      camera.position.set(0, 0, 100);
    } else if (w < 640) {
      camera.fov = 20;
      camera.position.set(0, 0, 100);
    } else if (w < 1024) {
      camera.fov = 20;
      camera.position.set(0, 0, 100);
    } else {
      camera.fov = 20;
      camera.position.set(0, 0, 100);
    }
    camera.updateProjectionMatrix();
  }, [camera, size.width]);
  return null;
}

export default function DartCanvas({ onEnter }: { onEnter: () => void }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const shootRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    preloadLiteSfx();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  function MouseOrbit() {
    const controlsRef = useRef<React.ComponentRef<typeof OrbitControls>>(null);

    useFrame((state) => {
      const controls = controlsRef.current;
      if (!controls) return;

      const targetAzimuth = state.mouse.x * -0.4;
      controls.setAzimuthalAngle(targetAzimuth);
      controls.update();
    });

    return (
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        enableDamping
        dampingFactor={0.08}
      />
    );
  }


  const handleHit = () => {
    unlockLiteSfx();
    shootRef.current?.();
    onEnter();
  };

  const hitButtonClass =
    "pointer-events-auto border z-[2000] border-2 font-bold !border-red-600 bg-transparent px-3 py-3 rounded-full text-red-600";

  return (
    <section className="fixed z-50 inset-0 overflow-hidden h-screen w-screen bg-white">
      <Canvas
        className="!fixed z-50 inset-0 h-full w-full pointer-events-none"
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={1}
      >
        <ResponsiveHeroCamera />
        <AdaptiveDpr />
        <Suspense fallback={null}>
          <DartScene onShootReady={(shoot) => { shootRef.current = shoot; }} />
        </Suspense>
        <Environment files="/assets/hdr/scene.hdr" resolution={1024} backgroundIntensity={1} />
        <MouseOrbit />
      </Canvas>
      <button
        type="button"
        className={`fixed hidden md:block ${hitButtonClass}`}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`
        }}
        onClick={handleHit}
        
      >
        HIT!
      </button>
      <button
        type="button"
        className={`fixed xl:hidden bottom-16 left-1/2 -translate-x-1/2 ${hitButtonClass}`}
        onClick={handleHit}
        // style={{borderColor: "red", borderWidth: "3px"}}
      >
        HIT!
      </button>
    </section>
  );


}
