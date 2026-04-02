import type gsap from "gsap";

export const SFX_BEEP = "/assets/lite_models/beep.mp3";

const audioBySrc = new Map<string, HTMLAudioElement>();

let unlockInstalled = false;
let sfxUnlocked = false;
const pendingAfterUnlock = new Set<string>();

/** Tiny WAV so we can unlock playback before any real file is cached (tap once → later scroll SFX work). */
const SILENT_WAV =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

function getOrCreateAudio(src: string): HTMLAudioElement {
  let el = audioBySrc.get(src);
  if (!el) {
    el = new Audio(src);
    el.preload = "auto";
    el.playsInline = true;
    el.setAttribute("playsinline", "");
    audioBySrc.set(src, el);
  }
  return el;
}

/** Prime playback in a real user gesture (pointer / key). Scrolling alone is often not enough for autoplay policy. */
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
  const queued = [...pendingAfterUnlock];
  pendingAfterUnlock.clear();
  for (const src of queued) {
    playSfx(src);
  }
}

function installUnlockListenersOnce(): void {
  if (typeof window === "undefined" || unlockInstalled) return;
  unlockInstalled = true;

  const onGesture = (): void => {
    if (sfxUnlocked) return;
    sfxUnlocked = true;
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
    for (const el of audioBySrc.values()) {
      primeAudioInGesture(el);
    }
    flushPendingAfterUnlock();
  };

  window.addEventListener("pointerdown", onGesture, { capture: true, passive: true });
  window.addEventListener("keydown", onGesture, { capture: true, passive: true });
  window.addEventListener("touchstart", onGesture, { capture: true, passive: true });
}

function tryPlayFromBeginning(el: HTMLAudioElement, srcKey: string): void {
  el.currentTime = 0;
  const p = el.play();
  if (p != null) {
    void p.catch((err: DOMException) => {
      if (err?.name === "NotAllowedError") {
        installUnlockListenersOnce();
        pendingAfterUnlock.add(srcKey);
      }
    });
  }
}

/**
 * Play a short sound. If the browser blocks autoplay, the clip is queued until the next tap / key / touch
 * (listeners are installed automatically on first blocked play).
 */
export function playSfx(src: string): void {
  if (typeof window === "undefined") return;
  installUnlockListenersOnce();

  const el = getOrCreateAudio(src);

  const run = (): void => {
    installUnlockListenersOnce();
    tryPlayFromBeginning(el, src);
  };

  if (el.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
    run();
    return;
  }

  const onReady = (): void => {
    el.removeEventListener("canplay", onReady);
    run();
  };
  el.addEventListener("canplay", onReady, { once: true });
  el.addEventListener("error", () => el.removeEventListener("canplay", onReady), { once: true });
  try {
    el.load();
  } catch {
    /* ignore */
  }
}

export function pauseSfx(src: string): void {
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

/**
 * When a timeline is scrub-linked to scroll, run `fn` when the playhead crosses `at` moving forward
 * (handles large jumps in one frame; init uses time at registration so starting already past `at` does not fire).
 */
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
