"use client";

import "@/styles/tailwind-tw.css";
import Header from "@/app/_lite/_ashish/Header";
import Wrapper from "@/layouts/wrapper";
import Hero from "@/app/_lite/_ashish/Hero";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollSmoother } from "@/plugins";
import { isLiteSfxUnlocked, preloadLiteSfx, unlockLiteSfx } from "@/app/_lite/_ashish/sfx";

/** Same file as `public/assets/loader/white.gif`. */
const LITE_LOADER_GIF_SRC = "/assets/loader/white.gif";

/**
 * Same behaviour as `DarkHomePage` loader timing.
 * Tune `minVisibleFromMountMs` / `holdAfterReadyMs` to keep the GIF on screen longer or shorter.
 */
const LITE_LOADER_DISPLAY = {
  minVisibleFromMountMs: 1200,
  holdAfterReadyMs: 350,
} as const;

const LITE_LOADER_IMG_SIZE = 120;

const LiteHomePage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const mountAtRef = useRef<number | null>(null);
  if (mountAtRef.current === null) mountAtRef.current = Date.now();

  // Safety cleanup: if user navigates from a smooth-scrolling page,
  // ensure ScrollSmoother is fully torn down so body doesn't keep a stale height/transform.
  useEffect(() => {
    try {
      ScrollSmoother.get?.()?.kill?.();
    } catch {
      // ignore
    }
    document.body.classList.remove("tp-smooth-scroll");
    document.body.style.removeProperty("height");
    document.body.style.removeProperty("transform");
    document.documentElement.style.removeProperty("height");
    document.documentElement.style.removeProperty("transform");
  }, []);

  // Audio unlock (iOS/Safari): preload early + show prompt only if autoplay is blocked.
  // useEffect(() => {
  //   preloadLiteSfx();
  //   const onNeed = () => {
  //     if (!isLiteSfxUnlocked()) setShowSoundPrompt(true);
  //   };
  //   window.addEventListener("lite-sfx:unlock-needed", onNeed as EventListener);
  //   return () => {
  //     window.removeEventListener("lite-sfx:unlock-needed", onNeed as EventListener);
  //   };
  // }, []);

  // Preload loader GIF (cheap hint for the browser).
  useEffect(() => {
    const id = "lite-home-loader-preload";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "preload";
    link.as = "image";
    link.href = LITE_LOADER_GIF_SRC;
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

   // While the route-level loader is visible, freeze scroll (moved from `Hero.tsx`).
  useEffect(() => {
    if (!showLoader) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [showLoader]);

  // Readiness: fonts + next paint, then minimum / hold timing (matches dark home).
  useEffect(() => {
    let cancelled = false;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const run = async () => {
      try {
        await (document as Document & { fonts?: FontFaceSet }).fonts?.ready;
      } catch {
        // ignore
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return;

          const mountAt = mountAtRef.current ?? Date.now();
          const readyAt = Date.now();
          const elapsed = readyAt - mountAt;
          const minStillNeeded = Math.max(
            0,
            LITE_LOADER_DISPLAY.minVisibleFromMountMs - elapsed
          );
          const hideDelay = Math.max(
            minStillNeeded,
            LITE_LOADER_DISPLAY.holdAfterReadyMs
          );

          hideTimer = setTimeout(() => {
            if (!cancelled) setShowLoader(false);
          }, hideDelay);
        });
      });
    };

    void run();

    return () => {
      cancelled = true;
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  // ScrollSmoother is intentionally disabled on /lite for now because it introduces
  // route-specific edge-cases (we'll revisit smooth-scroll later).


  return (
    <Wrapper>
      {/* `isolate` ensures predictable stacking vs the fixed WebGL canvas */}
      <div id="litePage" className="relative isolate bg-[#f2f2f2]">
        {showLoader && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            aria-busy="true"
            aria-live="polite"
          >
            <Image
              src={LITE_LOADER_GIF_SRC}
              alt="Loading"
              width={LITE_LOADER_IMG_SIZE}
              height={LITE_LOADER_IMG_SIZE}
              priority
              unoptimized
              className="object-contain"
            />
          </div>
        )}
        
        {/* NOTE: ScrollSmoother is disabled right now, so don't lock native scroll.
            These ids are kept for later when we re-enable smooth scrolling. */}
        <div id="smooth-wrapper" className="relative">
          <div id="smooth-content" className="relative">
            <Header />
            <Hero />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default LiteHomePage;
