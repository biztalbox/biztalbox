"use client";

import { AdaptiveDpr, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import DartScene from "./DartScene";

/**
 * Fixed WebGL layer for the lite hero. Mounted after idle so GLBs do not block first paint.
 */
export default function DartCanvas({ onEnter }: { onEnter: () => void }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const shootRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
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


  return (
    <section className="fixed z-50 inset-0 overflow-hidden h-screen w-screen bg-white">
      <Canvas
        className="!fixed z-50 inset-0 h-full w-full pointer-events-none"
        camera={{ position: [0, 0, 100], fov: 20 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={1}
      >
        <AdaptiveDpr />
        <Suspense fallback={null}>
          <DartScene onShootReady={(shoot) => { shootRef.current = shoot; }} />
        </Suspense>
        <Environment files="/assets/hdr/scene.hdr" resolution={1024} backgroundIntensity={1} />
        <MouseOrbit />
      </Canvas>
      <button
        type="button"
        className="fixed z-[60] pointer-events-auto border border-black bg-transparent px-4 py-2 rounded-full text-black hover:bg-black hover:text-white transition-colors"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
        }}
        onClick={() => {shootRef.current?.(); onEnter()}}
      >
        THROW
      </button>
    </section>
  );


}
