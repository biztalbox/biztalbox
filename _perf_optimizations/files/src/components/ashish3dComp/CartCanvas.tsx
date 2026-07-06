"use client";

import { AdaptiveDpr, Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CartBoxScene from "./CartBoxScene";
import Link from "next/link";

/**
 * Mounts the WebGL canvas only when the CTA section approaches the viewport
 * (~1.5 screens away). Keeps the big cart model + WebGL context completely
 * out of the critical path for initial page load (huge LCP/TBT win).
 */
function useNearViewport<T extends HTMLElement>(rootMargin = "150% 0px") {
  const ref = useRef<T | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near, rootMargin]);

  return { ref, near };
}

gsap.registerPlugin(ScrollTrigger);

function ResponsiveHeroCamera() {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const w = size.width;
    if (w < 480) {
      camera.fov = 30;
      camera.position.set(0, 0, 100);
    } else if (w < 640) {
      camera.fov = 28;
      camera.position.set(0, 0, 100);
    } else if (w < 1024) {
      camera.fov = 25;
      camera.position.set(0, 0, 100);
    } else {
      camera.fov = 20;
      camera.position.set(0, 0, 100);
    }
    camera.updateProjectionMatrix();
    camera.lookAt(0, -8, 0);
  }, [camera, size.width]);
  return null;
}

export default function CartCanvas() {
  const { ref: sectionRef, near: canvasReady } = useNearViewport<HTMLElement>();

  useEffect(() => {
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    let lastWidth = window.innerWidth;

    ScrollTrigger.config({
      ignoreMobileResize: true,
      limitCallbacks: true,
    });

    const scheduleRefresh = () => {
      const nextWidth = window.innerWidth;
      if (Math.abs(nextWidth - lastWidth) <= 8) return;
      lastWidth = nextWidth;
      if (refreshTimer) clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => {
        refreshTimer = undefined;
        ScrollTrigger.refresh();
      }, 150);
    };

    const refreshAfterLayout = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    };

    window.addEventListener("resize", scheduleRefresh, { passive: true });
    window.addEventListener("orientationchange", scheduleRefresh, {
      passive: true,
    });
    window.addEventListener("lite:scroll-layout-ready", refreshAfterLayout);

    return () => {
      if (refreshTimer) clearTimeout(refreshTimer);
      window.removeEventListener("resize", scheduleRefresh);
      window.removeEventListener("orientationchange", scheduleRefresh);
      window.removeEventListener("lite:scroll-layout-ready", refreshAfterLayout);
    };
  }, []);

  return (
    <section id="ctaSection" ref={sectionRef} className="pt-10 pb-5 relative">
      {canvasReady && (
        <Canvas
          className="!absolute inset-0 h-full w-full pointer-events-none"
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          dpr={1}
        >
          <ResponsiveHeroCamera />
          <AdaptiveDpr />
          {/* <ambientLight intensity={0.55} />
          <directionalLight position={[40, 60, 80]} intensity={0.85} /> */}
          <Suspense fallback={null}>
            <CartBoxScene />
          </Suspense>
          <Environment
            files="/assets/hdr/scene.hdr"
            resolution={1024}
            backgroundIntensity={1}
          />
        </Canvas>
      )}
      <div className="container flex flex-col gap-2 overflow-hidden relative z-10">
        <div id="ctaScrollAnchor" className="h-[48vh] md:h-[60vh] 2xl:h-[35rem]" />
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-thin uppercase leading-none mx-auto text-center relative z-10">
          Thanks for being here.
        </h3>
        <Link
          href="/contact"
          className="hover:!bg-black group bg-[#F2F2F2] hover:!text-white relative z-10 text-center uppercase text-3xl md:text-5xl lg:text-7xl font-thin mx-auto px-5 py-4 border border-black rounded-full"
        >
          Let&apos;s Talk{" "}
          <svg
            className="group-hover:stroke-white stroke-black"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            viewBox="0 -960 960 960"
          >
            <path d="m242-246-42-42 412-412H234v-60h480v480h-60v-378z"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
