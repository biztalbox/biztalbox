"use client";

import Wrapper from "@/layouts/wrapper";
import { LiteHero } from "@/components/ashish3dComp";
import TailwindScope from "@/components/TailwindScope";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollSmoother } from "@/plugins";
import { preloadLiteSfx } from "@/app/_lite/_ashish/sfx";
import { preloadLiteModelAssets } from "@/components/ashish3dComp/lite-model-assets";
import {
  enableLiteHomeScrollRestoreFix,
  resetLiteHomeScroll,
} from "@/utils/lite-scroll-restore";

/** Optimized animated WebP loader (was white.gif — 178KB, now ~19KB). */
const LITE_LOADER_GIF_SRC = "/assets/loader/white.webp";

/**
 * Same behaviour as `DarkHomePage` loader timing.
 * Tune `minVisibleFromMountMs` / `holdAfterReadyMs` to keep the GIF on screen longer or shorter.
 */
const LITE_LOADER_DISPLAY = {
  minVisibleFromMountMs: 1200,
  holdAfterReadyMs: 2500,
} as const;

const LITE_LOADER_IMG_SIZE = 120;

const LiteHomePage = () => {
  const [showLoader, setShowLoader] = useState(true);
  const mountAtRef = useRef<number | null>(null);
  if (mountAtRef.current === null) mountAtRef.current = Date.now();

  // Reload should always open at hero — keep manual restoration for this route only.
  useLayoutEffect(() => enableLiteHomeScrollRestoreFix(), []);

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

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.style.colorScheme = "light";
  }, []);

  useEffect(() => {
    preloadLiteSfx();
    // Warm the GLB + HDR cache now, while the loader / Dart intro is still on
    // screen, so the hero models are ready when the idle-deferred canvas mounts
    // (avoids the mid-view "pop-in" when they finish downloading).
    preloadLiteModelAssets();
  }, []);

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

  useEffect(() => {
    if (showLoader) return;
    resetLiteHomeScroll();
    window.dispatchEvent(new CustomEvent("lite:loader-hidden"));
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
    <>
      {/* `isolate` ensures predictable stacking vs the fixed WebGL canvas */}
      <TailwindScope id="litePage" className="relative isolate bg-[#f2f2f2]">
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
            
            <LiteHero />
          </div>
        </div>
      </TailwindScope>
    </>
  );
};
export default LiteHomePage;
