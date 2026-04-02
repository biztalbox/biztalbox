import type { RefObject } from "react";
import type gsap from "gsap";

/** Any way to resolve a DOM node when the timeline is built. */
export type SlideTextTimelineTarget =
  | string
  | Element
  | RefObject<Element | null>
  | (() => Element | null);

export type AddSlideTextStripToTimelineOptions = {
  /** The horizontal row (e.g. `flex w-[200%]`) that holds equally wide labels side by side. */
  track: SlideTextTimelineTarget;
  /** Time on the parent timeline this chapter is anchored to. Motion begins at `startTime + delay`. */
  startTime: number;
  /** Idle seconds after `startTime` before the strip moves. */
  delay?: number;
  duration?: number;
  /** Strip position at the start of the tween (default `0` = first panel). */
  fromXPercent?: number;
  /**
   * Strip position at the end — for **two** equal panels, use `-50` (shows second half).
   * For `n` panels, step `k` is `-(100 / n) * k`.
   */
  toXPercent: number;
  ease?: string;
  /**
   * If set, inserts `tl.set(track, { xPercent: fromXPercent })` at this time so a fully
   * scrubbed-back timeline restores the first panel (e.g. `0` on the same timeline).
   */
  baselineAt?: number;
};

export type AddSlideTextChangeToTimelineOptions = {
  /** Selector (`"#id"`). element, React ref, or getter — resolved once when the helper runs (build timelines after layout). */
  target: SlideTextTimelineTarget;
  /** Text after the transition (e.g. `"#02"`). */
  newText: string;
  /**
   * Time (seconds) on the parent timeline where this “chapter” is anchored.
   * The exit animation starts at `startTime + delay`.
   */
  startTime: number;
  /**
   * Idle time after `startTime` before the old label slides out.
   * Use this to wait for another tween on the same timeline to finish (or for a pause).
   */
  delay?: number;
  /** Total duration of exit + enter (seconds). Split by `exitRatio`. Default `0.8`. */
  transitionDuration?: number;
  /** Share of `transitionDuration` used to slide the old text out (0–1). Default `0.5`. */
  exitRatio?: number;
};

function resolveSlideTextTarget(target: SlideTextTimelineTarget): Element | null {
  if (typeof target === "string") return document.querySelector(target);
  if (target instanceof Element) return target;
  if (typeof target === "function") return target();
  if (target && typeof target === "object" && "current" in target) {
    return target.current;
  }
  return null;
}

/** `n` equal columns in a row — index `k` uses `xPercent = -(100/n)*k` on the track. */
export function slideStripXPercentForPanel(panelIndex: number, panelCount: number): number {
  return -(100 / panelCount) * panelIndex;
}

/**
 * Slides a **multi-label track** (all labels in the DOM upfront). Fully **scrub-reversible**:
 * scrolling up runs the same tween backward so the first label returns.
 *
 * Markup: clip `overflow-hidden` wrapper + inner `flex w-[200%]` (for 2 labels) track with two `basis-1/2` cells.
 */
export function addSlideTextStripToTimeline(
  tl: gsap.core.Timeline,
  options: AddSlideTextStripToTimelineOptions,
): void {
  const el = resolveSlideTextTarget(options.track);
  if (!el) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[addSlideTextStripToTimeline] track not found:", options.track);
    }
    return;
  }

  const {
    startTime,
    delay = 0,
    duration = 0.8,
    fromXPercent = 0,
    toXPercent,
    ease = "power2.inOut",
    baselineAt,
  } = options;

  const tStart = startTime + delay;

  if (baselineAt !== undefined) {
    tl.set(
      el,
      { xPercent: fromXPercent, force3D: true, immediateRender: false },
      baselineAt,
    );
  }

  tl.fromTo(
    el,
    { xPercent: fromXPercent, force3D: true, immediateRender: false },
    {
      xPercent: toXPercent,
      duration,
      ease,
      force3D: true,
      immediateRender: false,
    },
    tStart,
  );
}

/**
 * Single-node “swap” animation (slide out → `textContent` → slide in).
 * **Avoid with `scrub`** if you need to scroll backward — `call()` does not mirror; use {@link addSlideTextStripToTimeline} instead.
 */
export function addSlideTextChangeToTimeline(
  tl: gsap.core.Timeline,
  options: AddSlideTextChangeToTimelineOptions,
): void {
  const el = resolveSlideTextTarget(options.target);
  if (!el) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[addSlideTextChangeToTimeline] target not found:", options.target);
    }
    return;
  }

  const {
    newText,
    startTime,
    delay = 0,
    transitionDuration = 0.8,
    exitRatio = 0.5,
  } = options;

  const exitDur = transitionDuration * exitRatio;
  const enterDur = transitionDuration * (1 - exitRatio);
  const tExit = startTime + delay;
  const tSwap = tExit + exitDur;

  tl.set(el, { xPercent: 0, opacity: 1, immediateRender: false }, startTime);

  tl.to(
    el,
    {
      xPercent: -100,
      opacity: 0,
      duration: exitDur,
      ease: "power2.in",
      immediateRender: false,
    },
    tExit,
  );

  tl.call(() => {
    el.textContent = newText;
  }, undefined, tSwap);

  tl.fromTo(
    el,
    {
      xPercent: 100,
      opacity: 0,
      immediateRender: false,
    },
    {
      xPercent: 0,
      opacity: 1,
      duration: enterDur,
      ease: "power2.out",
      immediateRender: false,
    },
    tSwap,
  );
}
