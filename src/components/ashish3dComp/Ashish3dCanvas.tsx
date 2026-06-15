"use client";

import { AdaptiveDpr, Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import Ashish3dScene from "./scene";
import DartScene from "./DartScene";

/** Tweaks perspective camera on resize so the scene reads on phones and tablets. */
function ResponsiveHeroCamera() {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const w = size.width;
    if (w < 480) {
      camera.fov = 80;
      camera.position.set(0, 0, 400);
    } else if (w < 640) {
      camera.fov = 78;
      camera.position.set(-4, 268, 495);
    } else if (w < 1024) {
      camera.fov = 50;
      camera.position.set(-4, 265, 560);
    } else {
      camera.fov = 55;
      camera.position.set(300, 230, 650);
    }
    camera.updateProjectionMatrix();
  }, [camera, size.width]);
  return null;
}

/**
 * Fixed WebGL layer for the lite hero. Mounted after idle so GLBs do not block first paint.
 */
export default function Ashish3dCanvas() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    const w = globalThis as typeof globalThis & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
      setTimeout: typeof setTimeout;
      clearTimeout: typeof clearTimeout;
    };
    let t: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const enable = () => setShowCanvas(true);

    if (w.requestIdleCallback) {
      idleId = w.requestIdleCallback(enable, { timeout: 1200 });
    } else {
      t = w.setTimeout(enable, 250);
    }

    return () => {
      if (t) w.clearTimeout(t);
      if (idleId != null && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
    };
  }, []);

  useEffect(() => {
    const syncViewportWidth = () => setViewportWidth(window.innerWidth ?? 1440);
    syncViewportWidth();
    window.addEventListener("resize", syncViewportWidth, { passive: true });
    return () => window.removeEventListener("resize", syncViewportWidth);
  }, []);

  const isPhone = viewportWidth < 640;
  const isTablet = viewportWidth < 1024;
  const canvasDpr: [number, number] = isPhone || isTablet ? [1, 1.85] : [1, 1.85];

  if (!showCanvas) return null;

  const canvas = (
    <Canvas
      className="!fixed z-10 inset-0 h-full w-full pointer-events-none"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
      dpr={canvasDpr}
      performance={{ min: 0.5, max: 1, debounce: 280 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <ResponsiveHeroCamera />
      <AdaptiveDpr />
      <Suspense fallback={null}>
        <Ashish3dScene />
      </Suspense>
      <Environment files="/assets/hdr/scene.hdr" resolution={1024} backgroundIntensity={1}/>
    </Canvas>
  );

  const host =
    typeof document !== "undefined" ? document.getElementById("lite-canvas-root") : null;

  return host ? createPortal(canvas, host) : canvas;
}
