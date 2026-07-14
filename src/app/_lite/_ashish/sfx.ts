import type gsap from "gsap";

const SFX_BEEP_SRC = "/assets/lite_models/beep.mp3";
const SFX_BILL_SRC = "/assets/lite_models/bill.mp3";
const SFX_PRINT_SRC = "/assets/lite_models/print.mp3";

export type LiteSfxKind = "beep" | "bill" | "print";
export type LiteScanSfxKind = "beep" | "print";

/** Defaults when `startSeconds` / `durationSeconds` args are omitted. */
export const LITE_SFX_DEFAULTS: Record<
  LiteSfxKind,
  { src: string; startTime: number; durationSec: number | undefined }
> = {
  beep: { src: SFX_BEEP_SRC, startTime: 0, durationSec: undefined },
  bill: { src: SFX_BILL_SRC, startTime: 0, durationSec: 8 },
  print: { src: SFX_PRINT_SRC, startTime: 0, durationSec: undefined },
};

const audioBySrc = new Map<string, HTMLAudioElement>();
const bufferBySrc = new Map<string, AudioBuffer>();
const bufferLoadBySrc = new Map<string, Promise<AudioBuffer | null>>();
const stopTimersBySrc = new Map<string, ReturnType<typeof setTimeout>>();
const scrubCueTimelines = new Set<gsap.core.Timeline>();

let unlockInstalled = false;
let sfxUnlocked = false;
let audioCtx: AudioContext | null = null;

/** Per-timeline minimum time at unlock — scan SFX only after forward scrub past this. */
const postUnlockMinTimeByTimeline = new WeakMap<gsap.core.Timeline, number>();

const SILENT_WAV =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

const MIN_SCRUB_AFTER_UNLOCK = 0.03;

type LiteScrollTrigger = {
  direction: number;
  isActive: boolean;
  progress: number;
};

/** Receipt slide + CTA bill sound — desktop only (`#recieptSection` is `lg:block`). */
export function isLiteReceiptSfxEnabled(): boolean {
  return typeof window !== "undefined" && window.innerWidth >= 1024;
}

function getOrCreateAudio(src: string): HTMLAudioElement {
  let el = audioBySrc.get(src);
  if (!el) {
    el = new Audio(src);
    el.preload = "auto";
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "true");
    audioBySrc.set(src, el);
  }
  return el;
}

function clearStopTimerForSrc(src: string): void {
  const prev = stopTimersBySrc.get(src);
  if (prev !== undefined) {
    clearTimeout(prev);
    stopTimersBySrc.delete(src);
  }
}

function freezeAllScrubCueBaselines(): void {
  scrubCueTimelines.forEach((tl) => {
    const t = tl.time();
    scrubCueLastTime.set(tl, t);
    postUnlockMinTimeByTimeline.set(tl, t);
    scrubCueFiredAt.get(tl)?.clear();
  });
}

function hasScrubbedForwardSinceUnlock(tl: gsap.core.Timeline): boolean {
  const minT = postUnlockMinTimeByTimeline.get(tl);
  if (minT === undefined) return true;
  return tl.time() > minT + MIN_SCRUB_AFTER_UNLOCK;
}

function getOrCreateAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as
    | (new () => AudioContext)
    | undefined;
  if (!Ctx) return null;
  if (!audioCtx) audioCtx = new Ctx();
  return audioCtx;
}

function ensureAudioBuffer(src: string): void {
  if (bufferBySrc.has(src) || bufferLoadBySrc.has(src)) return;

  const load = (async (): Promise<AudioBuffer | null> => {
    const ctx = getOrCreateAudioContext();
    if (!ctx) return null;
    try {
      const res = await fetch(src);
      if (!res.ok) return null;
      const arr = await res.arrayBuffer();
      const buffer = await ctx.decodeAudioData(arr.slice(0));
      bufferBySrc.set(src, buffer);
      return buffer;
    } catch {
      return null;
    } finally {
      bufferLoadBySrc.delete(src);
    }
  })();

  bufferLoadBySrc.set(src, load);
}

function unlockWithAudioContext(): void {
  const ctx = getOrCreateAudioContext();
  if (!ctx) return;
  try {
    void ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.value = 0.00001;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.02);
  } catch {
    // ignore
  }
}

/** iOS: HTMLAudio blocked off-gesture — Web Audio works after ctx.resume() on unlock. */
function playViaWebAudio(
  src: string,
  startSeconds = 0,
  durationSeconds?: number,
): boolean {
  const ctx = getOrCreateAudioContext();
  const buffer = bufferBySrc.get(src);
  if (!ctx || !buffer || ctx.state !== "running") return false;

  try {
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.value = 1;
    source.connect(gain);
    gain.connect(ctx.destination);

    const offset = Math.max(0, Math.min(startSeconds, buffer.duration));
    source.start(0, offset);

    if (
      durationSeconds != null &&
      Number.isFinite(durationSeconds) &&
      durationSeconds > 0
    ) {
      source.stop(ctx.currentTime + durationSeconds);
    }

    return true;
  } catch {
    return false;
  }
}

function isScrollingBackward(st: LiteScrollTrigger | undefined | null): boolean {
  return !!st && st.direction === -1;
}

function isScrubbingForward(
  tl: gsap.core.Timeline,
  st: LiteScrollTrigger | undefined | null,
  prevT?: number,
): boolean {
  if (!st || st.direction === -1) return false;
  if (st.direction >= 1) return true;
  // iOS touch momentum: direction can be 0 while the scrub timeline still advances.
  const t = tl.time();
  return prevT !== undefined && t > prevT + 0.0001;
}

export function preloadLiteSfx(): void {
  for (const k of Object.keys(LITE_SFX_DEFAULTS) as LiteSfxKind[]) {
    const src = LITE_SFX_DEFAULTS[k].src;
    getOrCreateAudio(src);
    ensureAudioBuffer(src);
  }
  installUnlockListenersOnce();
}

export function unlockLiteSfx(): void {
  if (typeof window === "undefined") return;
  if (sfxUnlocked) return;
  sfxUnlocked = true;
  freezeAllScrubCueBaselines();
  unlockWithAudioContext();

  for (const k of Object.keys(LITE_SFX_DEFAULTS) as LiteSfxKind[]) {
    ensureAudioBuffer(LITE_SFX_DEFAULTS[k].src);
  }

  // Silent unlock only — never play beep/print/bill on first gesture.
  const silent = new Audio(SILENT_WAV);
  silent.volume = 0;
  silent.muted = true;
  void silent.play().then(
    () => {
      silent.pause();
      silent.src = "";
    },
    () => {
      silent.src = "";
    },
  );
}

export function isLiteSfxUnlocked(): boolean {
  return sfxUnlocked;
}

function installUnlockListenersOnce(): void {
  if (typeof window === "undefined" || unlockInstalled) return;
  unlockInstalled = true;

  const onGesture = (): void => unlockLiteSfx();

  window.addEventListener("pointerdown", onGesture, { capture: true, passive: true });
  window.addEventListener("touchstart", onGesture, { capture: true, passive: true });
  window.addEventListener("keydown", onGesture, { capture: true, passive: true });
  window.addEventListener("wheel", onGesture, { capture: true, passive: true });
}

function runPlay(kind: LiteSfxKind, startSeconds?: number, durationSeconds?: number): void {
  const def = LITE_SFX_DEFAULTS[kind];
  const start = startSeconds ?? def.startTime;
  const duration = durationSeconds !== undefined ? durationSeconds : def.durationSec;
  const src = def.src;

  clearStopTimerForSrc(src);

  if (playViaWebAudio(src, start, duration)) {
    if (duration != null && Number.isFinite(duration) && duration > 0) {
      const id = setTimeout(() => {
        stopTimersBySrc.delete(src);
      }, duration * 1000);
      stopTimersBySrc.set(src, id);
    }
    return;
  }

  const el = getOrCreateAudio(src);

  try {
    el.currentTime = Math.max(0, start);
  } catch {
    el.currentTime = 0;
  }

  const p = el.play();
  if (p != null) {
    void p.catch(() => {
      /* blocked */
    });
  }

  if (duration != null && Number.isFinite(duration) && duration > 0) {
    const id = setTimeout(() => {
      el.pause();
      stopTimersBySrc.delete(src);
    }, duration * 1000);
    stopTimersBySrc.set(src, id);
  }
}

/**
 * Scan beep + print: only during an active forward scan scrub after the user
 * has actually scrolled the scan timeline (never on unlock-only first tap/click).
 */
export function playLiteScanSfx(
  tl: gsap.core.Timeline,
  kind: LiteScanSfxKind,
  cueAt: number,
): void {
  if (typeof window === "undefined") return;
  if (!sfxUnlocked) return;
  if (kind === "print" && !isLiteReceiptSfxEnabled()) return;

  const st = tl.scrollTrigger;
  if (!st || isScrollingBackward(st)) return;
  if (!hasScrubbedForwardSinceUnlock(tl)) return;
  if (tl.time() < cueAt - 0.02) return;

  runPlay(kind);
}

/** Receipt CTA bill — desktop only, separate from scan print. */
export function playLiteSfx(
  kind: LiteSfxKind,
  startSeconds?: number,
  durationSeconds?: number,
): void {
  if (typeof window === "undefined") return;
  if (!sfxUnlocked) return;
  if (kind === "bill" && !isLiteReceiptSfxEnabled()) return;

  const def = LITE_SFX_DEFAULTS[kind];
  const src = def.src;
  const el = getOrCreateAudio(src);

  const playWhenReady = (): void => {
    runPlay(kind, startSeconds, durationSeconds);
  };

  if (bufferBySrc.has(src) || el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    playWhenReady();
    return;
  }

  let ran = false;
  const onReady = (): void => {
    if (ran) return;
    ran = true;
    el.removeEventListener("canplaythrough", onReady);
    el.removeEventListener("canplay", onReady);
    playWhenReady();
  };
  el.addEventListener("canplaythrough", onReady);
  el.addEventListener("canplay", onReady);
  try {
    el.load();
  } catch {
    /* ignore */
  }
}

export function pauseLiteSfx(kind: LiteSfxKind): void {
  const src = LITE_SFX_DEFAULTS[kind].src;
  clearStopTimerForSrc(src);
  audioBySrc.get(src)?.pause();
}

type ScrubCue = { at: number; fn: () => void };

const scrubCueBuckets = new WeakMap<gsap.core.Timeline, ScrubCue[]>();
const scrubCueLastTime = new WeakMap<gsap.core.Timeline, number>();
const scrubCueFiredAt = new WeakMap<gsap.core.Timeline, Set<number>>();

function getScrubCueFiredSet(tl: gsap.core.Timeline): Set<number> {
  let set = scrubCueFiredAt.get(tl);
  if (!set) {
    set = new Set();
    scrubCueFiredAt.set(tl, set);
  }
  return set;
}

function canFireScrubTimelineCue(
  tl: gsap.core.Timeline,
  prevT?: number,
): boolean {
  if (!sfxUnlocked) return false;
  const st = tl.scrollTrigger;
  if (!isScrubbingForward(tl, st, prevT)) return false;
  if (!hasScrubbedForwardSinceUnlock(tl)) return false;
  return true;
}

function scrubCueOnUpdate(tl: gsap.core.Timeline): void {
  const t = tl.time();
  const prevT = scrubCueLastTime.get(tl) ?? t;
  const cues = scrubCueBuckets.get(tl);
  const fired = getScrubCueFiredSet(tl);
  const st = tl.scrollTrigger;

  if (cues?.length) {
    for (const c of cues) {
      if (t < c.at && prevT >= c.at) {
        fired.delete(c.at);
      }
    }
  }

  if (!canFireScrubTimelineCue(tl, prevT) || !cues?.length) {
    // Scrub can run before the pin is active (e.g. webdev after smo handoff).
    // Do not advance prevT forward while inactive or cue crossings are lost.
    if (!st?.isActive && t >= prevT) {
      return;
    }
    scrubCueLastTime.set(tl, t);
    return;
  }

  for (const c of cues) {
    if (prevT < c.at && t >= c.at && !fired.has(c.at)) {
      fired.add(c.at);
      c.fn();
    }
  }
  scrubCueLastTime.set(tl, t);
}

/** Fire any cues already passed when entering a scan pin (first forward entry). */
export function catchUpScrubTimelineCues(
  tl: gsap.core.Timeline,
  baselineTime = 0,
): void {
  if (!scrubCueBuckets.has(tl)) return;

  const cues = scrubCueBuckets.get(tl);
  const fired = getScrubCueFiredSet(tl);
  const t = tl.time();
  const st = tl.scrollTrigger;

  scrubCueLastTime.set(tl, baselineTime);
  postUnlockMinTimeByTimeline.delete(tl);

  if (
    !sfxUnlocked ||
    !cues?.length ||
    isScrollingBackward(st) ||
    !hasScrubbedForwardSinceUnlock(tl)
  ) {
    scrubCueLastTime.set(tl, t);
    return;
  }

  for (const c of cues) {
    if (t >= c.at && !fired.has(c.at)) {
      fired.add(c.at);
      c.fn();
    }
  }
  scrubCueLastTime.set(tl, t);
}

export function resetScrubTimelineCueBaseline(
  tl: gsap.core.Timeline,
  baselineTime?: number,
): void {
  if (scrubCueBuckets.has(tl)) {
    scrubCueLastTime.set(tl, baselineTime ?? tl.time());
    postUnlockMinTimeByTimeline.delete(tl);
    scrubCueFiredAt.get(tl)?.clear();
  }
}

export function addScrubTimelineCue(
  tl: gsap.core.Timeline,
  at: number,
  fn: () => void,
): () => void {
  const cue: ScrubCue = { at, fn };

  scrubCueTimelines.add(tl);

  let cues = scrubCueBuckets.get(tl);
  if (!cues) {
    cues = [];
    scrubCueBuckets.set(tl, cues);
    scrubCueLastTime.set(tl, tl.time());
    tl.eventCallback("onUpdate", () => scrubCueOnUpdate(tl));
  }
  cues.push(cue);

  return () => {
    const list = scrubCueBuckets.get(tl);
    if (!list) return;
    const i = list.indexOf(cue);
    if (i !== -1) list.splice(i, 1);
    if (list.length === 0) {
      tl.eventCallback("onUpdate", null);
      scrubCueBuckets.delete(tl);
      scrubCueLastTime.delete(tl);
      scrubCueFiredAt.delete(tl);
      scrubCueTimelines.delete(tl);
    }
  };
}
