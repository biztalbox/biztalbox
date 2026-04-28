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

type PendingPlay = {
  kind: LiteSfxKind;
  startSeconds?: number;
  durationSeconds?: number;
};
const pendingAfterUnlock: PendingPlay[] = [];

let unlockInstalled = false;
let sfxUnlocked = false;
let audioCtx: AudioContext | null = null;

const SILENT_WAV =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

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

function primeAudioInGesture(el: HTMLAudioElement): void {
  const prevVol = el.volume;
  el.volume = 0;
  void el
    .play()
    .then(() => {
      el.pause();
      el.currentTime = 0;
      el.volume = prevVol;
    })
    .catch(() => {
      el.volume = prevVol;
    });
}

function flushPendingAfterUnlock(): void {
  const queued = pendingAfterUnlock.splice(0, pendingAfterUnlock.length);
  for (const p of queued) {
    playLiteSfx(p.kind, p.startSeconds, p.durationSeconds);
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
    // Resume is required on iOS/Safari in a user gesture.
    void ctx.resume();
    // Also start a near-silent oscillator (some Safari versions "resume" but still need a start).
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
  // Create audio elements early so they can be primed on the first gesture.
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

  const silent = new Audio(SILENT_WAV);
  silent.volume = 0;
  void silent.play().then(
    () => {
      silent.pause();
      silent.src = "";
    },
    () => {
      silent.src = "";
    },
  );

  audioBySrc.forEach((el) => {
    primeAudioInGesture(el);
  });
  flushPendingAfterUnlock();
}

export function isLiteSfxUnlocked(): boolean {
  return sfxUnlocked;
}

function installUnlockListenersOnce(): void {
  if (typeof window === "undefined" || unlockInstalled) return;
  unlockInstalled = true;

  const onGesture = (): void => unlockLiteSfx();

  window.addEventListener("pointerdown", onGesture, { capture: true, passive: true });
  window.addEventListener("pointerup", onGesture, { capture: true, passive: true });
  window.addEventListener("keydown", onGesture, { capture: true, passive: true });
  window.addEventListener("touchstart", onGesture, { capture: true, passive: true });
  window.addEventListener("touchend", onGesture, { capture: true, passive: true });
  // Desktop users often "interact" first by scrolling (trackpad/mouse wheel) without a click.
  // Without listening to wheel, audio can remain locked until a later gesture (e.g. volume keys).
  window.addEventListener("wheel", onGesture, { capture: true, passive: true });
}

/**
 * Lite page SFX — ek hi function.
 * @param kind `"beep"` | `"bill"`
 * @param startSeconds seek (seconds); omit → `LITE_SFX_DEFAULTS[kind].startTime`
 * @param durationSeconds play this many seconds then stop; omit → default; `undefined` from default = natural end / no timer
 */
export function playLiteSfx(kind: LiteSfxKind, startSeconds?: number, durationSeconds?: number): void {
  if (typeof window === "undefined") return;
  // Ensure we have elements ready to prime in the next gesture.
  preloadLiteSfx();
  installUnlockListenersOnce();

  const def = LITE_SFX_DEFAULTS[kind];
  const start = startSeconds ?? def.startTime;
  const duration = durationSeconds !== undefined ? durationSeconds : def.durationSec;

  const el = getOrCreateAudio(def.src);
  const src = def.src;

  const run = (): void => {
    clearStopTimerForSrc(src);

    try {
      el.currentTime = Math.max(0, start);
    } catch {
      el.currentTime = 0;
    }

    const p = el.play();
    if (p != null) {
      void p.catch((err: DOMException) => {
        if (err?.name === "NotAllowedError") {
          pendingAfterUnlock.push({ kind, startSeconds, durationSeconds });
          installUnlockListenersOnce();
          // Optional UX hook: allow UI to prompt the user to tap to enable audio.
          try {
            window.dispatchEvent(new CustomEvent("lite-sfx:unlock-needed"));
          } catch {
            // ignore
          }
        }
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

function scrubCueOnUpdate(tl: gsap.core.Timeline): void {
  const t = tl.time();
  let prevT = scrubCueLastTime.get(tl);
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

export function addScrubTimelineCue(tl: gsap.core.Timeline, at: number, fn: () => void): () => void {
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
