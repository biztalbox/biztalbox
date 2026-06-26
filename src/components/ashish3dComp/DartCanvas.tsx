"use client";

import { AdaptiveDpr, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { preloadLiteSfx, unlockLiteSfx } from "@/app/_lite/_ashish/sfx";
import DartScene, { type DartShootOptions } from "./DartScene";
import { DART_DESKTOP_MIN_WIDTH_PX } from "./dart-viewport";

const DART_GIF_FADE_IN_MS = 450;
const DART_GIF_HOLD_MS = 2000;

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
  const [isDesktop, setIsDesktop] = useState(false);
  const [hideDesktopHitButton, setHideDesktopHitButton] = useState(false);
  const shootRef = useRef<((options?: DartShootOptions) => boolean) | null>(null);
  const [showWowGif, setShowWowGif] = useState(false);
  const [showDissGif, setShowDissGif] = useState(false);
  const [wowPulse, setWowPulse] = useState(0);
  const [dissPulse, setDissPulse] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    preloadLiteSfx();
  }, []);

  useEffect(() => {
    if (wowPulse === 0) return;

    setShowWowGif(true);
    const timer = window.setTimeout(
      () => setShowWowGif(false),
      DART_GIF_FADE_IN_MS + DART_GIF_HOLD_MS,
    );
    return () => window.clearTimeout(timer);
  }, [wowPulse]);

  useEffect(() => {
    if (dissPulse === 0) return;

    setShowDissGif(true);
    const timer = window.setTimeout(
      () => setShowDissGif(false),
      DART_GIF_FADE_IN_MS + DART_GIF_HOLD_MS,
    );
    return () => window.clearTimeout(timer);
  }, [dissPulse]);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${DART_DESKTOP_MIN_WIDTH_PX}px)`);
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isDesktop || hideDesktopHitButton) return;

    const onMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [hideDesktopHitButton, isDesktop]);

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

  const handleFixedHit = () => {
    unlockLiteSfx();
    const didShoot = shootRef.current?.({ source: "button" });
    if (didShoot) onEnter();
  };

  const handleDesktopHitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    unlockLiteSfx();
    const didShoot = shootRef.current?.({
      source: "button",
      screenX: e.clientX,
      screenY: e.clientY,
      onBeforeAnimate: () => setHideDesktopHitButton(true),
    });
    if (didShoot) onEnter();
  };

  const hitButtonClass =
    "pointer-events-auto border z-[2000] font-bold !border-black bg-white px-3 py-3 rounded-full text-black !cursor-none";

  return (
    <section className="fixed z-[2000] inset-0 overflow-hidden h-screen w-screen bg-white !cursor-none">
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
          <DartScene
            onShootReady={(shoot) => {
              shootRef.current = shoot;
            }}
            setWow={() => setWowPulse((n) => n + 1)}
            setDiss={() => setDissPulse((n) => n + 1)}
          />
        </Suspense>
        <Environment files="/assets/hdr/scene.hdr" resolution={1024} backgroundIntensity={1} />
        <MouseOrbit />
      </Canvas>

      {/* Desktop: cursor HIT — raycast at click position must land on target mesh */}
      {!hideDesktopHitButton && (
        <button
          type="button"
          className={`fixed left-0 top-0 hidden lg:block ${hitButtonClass}`}
          style={{
            transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
          }}
          onClick={handleDesktopHitButton}
        >
          HIT!
        </button>
      )}

      {/* Mobile + tablet: fixed bottom HIT */}
      <button
        type="button"
        className={`fixed lg:hidden bottom-16 left-1/2 -translate-x-1/2 ${hitButtonClass}`}
        onClick={handleFixedHit}
      >
        HIT!
      </button>

      <img
        key={wowPulse}
        src="/assets/lite_models/wow.gif"
        className={`absolute bottom-5 right-2 w-40 lg:w-60 pointer-events-none ${
          showWowGif ? "animate-dart-fade-in-up" : "opacity-0 translate-y-full"
        }`}
        alt="wow"
      />
      <img
        key={dissPulse}
        src="/assets/lite_models/diss.gif"
        className={`absolute bottom-5 left-2 w-40 lg:w-60 pointer-events-none ${
          showDissGif ? "animate-dart-fade-in-up" : "opacity-0 translate-y-full"
        }`}
        alt="diss"
      />
    </section>
  );
}
