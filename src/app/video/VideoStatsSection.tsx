"use client";

import { useEffect, useRef, useState } from "react";
import { RiGlobalFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";

function IconFilmEdit({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <rect x="6" y="12" width="28" height="22" rx="2" />
      <path d="M10 16h4M10 20h4M10 24h4" strokeLinecap="round" />
      <path d="M36 18l6-4v20l-6-4V18z" fill="currentColor" stroke="none" opacity="0.35" />
      <path d="M22 34l8-8" strokeLinecap="round" />
      <circle cx="30" cy="26" r="2.5" fill="currentColor" />
    </svg>
  );
}

/** Thin rule between two cells in one row only (matches reference: per-row dividers). */
function RowVerticalRule() {
  return (
    <div
      aria-hidden
      className="mx-auto w-px shrink-0 self-stretch bg-zinc-300 dark:bg-zinc-600"
    />
  );
}

function useCountUp(target: number, durationMs: number, inView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setValue(0);
      return;
    }

    let start: number | null = null;
    let frame = 0;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / durationMs, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, durationMs]);

  return value;
}

/** Updates whenever the block enters or leaves the viewport — counts reset off-screen. */
function useStatsInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function VideoStatsSection() {
  const { ref, inView } = useStatsInView();
  const brands = useCountUp(100, 1400, inView);
  const videos = useCountUp(500, 2000, inView);
  const years = useCountUp(5, 700, inView);

  return (
    <section className="bg-zinc-60 pb-14 pt-2 dark:bg-[#121212] sm:pb-16">
      <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-100 px-6 py-8 shadow-sm dark:bg-[#1e1e1e] dark:shadow-none sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <h3 className="mb-10 text-left text-2xl text-zinc-900 dark:text-white sm:text-2xl">
            Leading Video Editing Agency In UK
          </h3>

          <div ref={ref} className="flex flex-col">
            {/* Desktop: stats row with short vertical lines only between columns */}
            <div className="hidden min-h-0 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-x-0 md:grid">
              <div className="flex flex-col items-center px-3 py-2 text-center">
                <div className="relative grid min-h-[5.5rem] place-items-center">
                  <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] sm:text-6xl md:text-7xl dark:text-white/[0.08]">
                    {brands}+
                  </span>
                  <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em] text-zinc-900 dark:text-white sm:text-sm">
                    BRANDS
                  </span>
                </div>
              </div>
              <RowVerticalRule />
              <div className="flex flex-col items-center px-3 py-2 text-center">
                <div className="relative grid min-h-[5.5rem] place-items-center">
                  <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] sm:text-6xl md:text-7xl dark:text-white/[0.08]">
                    {videos}+
                  </span>
                  <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em] text-zinc-900 dark:text-white sm:text-sm">
                    VIDEOS
                  </span>
                </div>
              </div>
              <RowVerticalRule />
              <div className="flex flex-col items-center px-3 py-2 text-center">
                <div className="relative grid min-h-[5.5rem] place-items-center">
                  <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] sm:text-6xl md:text-7xl dark:text-white/[0.08]">
                    {years}+
                  </span>
                  <span className="col-start-1 row-start-1 z-10 max-w-[5.5rem] text-center text-[10px] font-bold leading-snug tracking-[0.12em] text-zinc-900 dark:text-white sm:text-xs sm:tracking-[0.16em]">
                    YEARS
                    <br />
                    EXPERIENCE
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop: feature row — same column alignment, dividers only between icons/text blocks */}
            <div className="hidden min-h-0 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-x-0 pt-8 md:grid md:pt-10 lg:pt-12">
              <div className="flex flex-col items-center gap-3 px-3 pb-2 pt-2 text-center">
                <IconFilmEdit className="h-10 w-10 text-zinc-600 dark:text-zinc-300" />
                <p className="max-w-[11rem] text-center text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                  Professional Video Editor Experts
                </p>
              </div>
              <RowVerticalRule />
              <div className="flex flex-col items-center gap-3 px-3 pb-2 pt-2 text-center">
                <RiGlobalFill className="h-10 w-10 text-zinc-600 dark:text-zinc-300" aria-hidden />
                <p className="max-w-[11rem] text-center text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                  Global Presence
                </p>
              </div>
              <RowVerticalRule />
              <div className="flex flex-col items-center gap-3 px-3 pb-2 pt-2 text-center">
                <IoSettings className="h-10 w-10 text-zinc-600 dark:text-zinc-300" aria-hidden />
                <p className="max-w-[11rem] text-center text-xs  leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-sm">
                  40+ PREMIUM TOOLS
                </p>
              </div>
            </div>

            {/* Mobile: two cards per row; third block spans full width */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 border-t border-zinc-300 pt-10 dark:border-zinc-600 md:hidden">
              <div className="flex flex-col items-center border-r border-zinc-300 px-1 py-2 text-center dark:border-zinc-600">
                <div className="relative grid min-h-[5.5rem] place-items-center">
                  <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] dark:text-white/[0.08]">
                    {brands}+
                  </span>
                  <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em] text-zinc-900 dark:text-white">
                    BRANDS
                  </span>
                </div>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <IconFilmEdit className="h-9 w-9 text-zinc-600 dark:text-zinc-300" />
                  <p className="max-w-[10rem] text-center text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Professional Video Editor Experts
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center px-1 py-2 text-center">
                <div className="relative grid min-h-[5.5rem] place-items-center">
                  <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] dark:text-white/[0.08]">
                    {videos}+
                  </span>
                  <span className="col-start-1 row-start-1 z-10 text-xs font-bold tracking-[0.18em] text-zinc-900 dark:text-white">
                    VIDEOS
                  </span>
                </div>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <RiGlobalFill className="h-9 w-9 text-zinc-600 dark:text-zinc-300" aria-hidden />
                  <p className="max-w-[10rem] text-center text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Global Presence
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center border-r border-t border-zinc-300 px-1 py-2 pt-10 text-center dark:border-zinc-600">
                <div className="relative grid min-h-[5.5rem] place-items-center">
                  <span className="col-start-1 row-start-1 text-5xl font-bold tabular-nums text-zinc-900/[0.07] dark:text-white/[0.08]">
                    {years}+
                  </span>
                  <span className="col-start-1 row-start-1 z-10 max-w-[5.5rem] text-center text-[10px] font-bold leading-snug tracking-[0.12em] text-zinc-900 dark:text-white sm:text-xs sm:tracking-[0.16em]">
                    YEARS
                    <br />
                    EXPERIENCE
                  </span>
                </div>
              </div>

              <div className=" flex flex-col items-center border-t border-zinc-300 px-1 py-2 pt-10 text-center dark:border-zinc-600">
                <div className="flex min-h-[5.5rem] items-center justify-center">
                  <IoSettings className="-mt-7 h-9 w-9 text-zinc-600 dark:text-zinc-300" aria-hidden />
                </div>
                <p className="-mt-6 max-w-[10rem] text-center text-[11px] font-bold uppercase leading-relaxed tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-sm">
                  40+ PREMIUM TOOLS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
