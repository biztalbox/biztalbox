import type gsap from "gsap";

const SFX_BEEP_SRC = "/assets/lite_models/beep.mp3";
const SFX_BILL_SRC = "/assets/lite_models/bill.mp3";
const SFX_PRINT_SRC = "/assets/lite_models/print.mp3";

export type LiteSfxKind = "beep" | "bill" | "print";

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
const stopTimersBySrc = new Map<string, ReturnType<typeof setTimeout>>();

let unlockInstalled = false;
let sfxUnlocked = false;
let audioCtx: AudioContext | null = null;

const SILENT_WAV =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

/** Receipt UI is desktop-only (`lg:block` on `#recieptSection`). */
export function isLiteReceiptSfxEnabled(): boolean {
  return typeof window !== "undefined" && window.innerWidth >= 1024;
}

function getOrCreateAudio(src: string): HTMLAudioElement {
  let el = audioBySrc.get(src);
  if (!el) {
    el = new Audio(src);
    el.preload = "auto";
    el.setAttribute("playsinline", "");
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

function getOrCreateAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as
    | (new () => AudioContext)
    | undefined;
  if (!Ctx) return null;
  if (!audioCtx) audioCtx = new Ctx();
  return audioCtx;
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

export function preloadLiteSfx(): void {
  for (const k of Object.keys(LITE_SFX_DEFAULTS) as LiteSfxKind[]) {
    getOrCreateAudio(LITE_SFX_DEFAULTS[k].src);
  }
  installUnlockListenersOnce();
}

export function unlockLiteSfx(): void {
  if (typeof window === "undefined") return;
  if (sfxUnlocked) return;
  sfxUnlocked = true;
  unlockWithAudioContext();

  // Unlock HTMLAudio without playing real SFX (avoids bill/print leaking on first tap).
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
  window.addEventListener("keydown", onGesture, { capture: true, passive: true });
  window.addEventListener("touchstart", onGesture, { capture: true, passive: true });
}

/**
 * Lite page SFX — only after an explicit user gesture unlocked audio.
 * Receipt sounds (bill/print) are desktop-only because the receipt UI is hidden below lg.
 */
export function playLiteSfx(
  kind: LiteSfxKind,
  startSeconds?: number,
  durationSeconds?: number,
): void {
  if (typeof window === "undefined") return;
  if (!sfxUnlocked) return;
  if ((kind === "bill" || kind === "print") && !isLiteReceiptSfxEnabled()) return;

  const def = LITE_SFX_DEFAULTS[kind];
  const start = startSeconds ?? def.startTime;
  const duration = durationSeconds !== undefined ? durationSeconds : def.durationSec;

  const el = getOrCreateAudio(def.src);
  const src = def.src;

  const run = (): void => {
    if (!sfxUnlocked) return;

    clearStopTimerForSrc(src);

    try {
      el.currentTime = Math.max(0, start);
    } catch {
      el.currentTime = 0;
    }

    const p = el.play();
    if (p != null) {
      void p.catch(() => {
        /* blocked — do not queue for later replay */
      });
    }

    if (duration != null && Number.isFinite(duration) && duration > 0) {
      const id = setTimeout(() => {
        el.pause();
        stopTimersBySrc.delete(src);
      }, duration * 1000);
      stopTimersBySrc.set(src, id);
    }
  };

  if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    run();
    return;
  }

  let ran = false;
  const onReady = (): void => {
    if (ran) return;
    ran = true;
    el.removeEventListener("canplaythrough", onReady);
    el.removeEventListener("canplay", onReady);
    run();
  };
  el.addEventListener("canplaythrough", onReady);
  el.addEventListener("canplay", onReady);
  el.addEventListener(
    "error",
    () => {
      el.removeEventListener("canplaythrough", onReady);
      el.removeEventListener("canplay", onReady);
    },
    { once: true },
  );
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

/** Scrub sounds only while this timeline's ScrollTrigger is active and scrolling forward. */
function canFireScrubTimelineCue(tl: gsap.core.Timeline): boolean {
  if (!sfxUnlocked) return false;
  const st = tl.scrollTrigger;
  if (!st?.isActive) return false;
  if (st.direction < 1) return false;
  return true;
}

function scrubCueOnUpdate(tl: gsap.core.Timeline): void {
  const t = tl.time();
  const prevT = scrubCueLastTime.get(tl);

  if (!canFireScrubTimelineCue(tl)) {
    scrubCueLastTime.set(tl, t);
    return;
  }

  if (prevT === undefined) {
    scrubCueLastTime.set(tl, t);
    return;
  }

  const cues = scrubCueBuckets.get(tl);
  if (!cues?.length) {
    scrubCueLastTime.set(tl, t);
    return;
  }

  for (const c of cues) {
    if (prevT < c.at && t >= c.at) {
      c.fn();
    }
  }
  scrubCueLastTime.set(tl, t);
}

export function resetScrubTimelineCueBaseline(tl: gsap.core.Timeline): void {
  if (scrubCueBuckets.has(tl)) {
    scrubCueLastTime.set(tl, tl.time());
  }
}

export function addScrubTimelineCue(
  tl: gsap.core.Timeline,
  at: number,
  fn: () => void,
): () => void {
  const cue: ScrubCue = { at, fn };

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
    }
  };
}
