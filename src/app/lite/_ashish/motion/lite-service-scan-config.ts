import type { RefObject } from "react";
import type { Group } from "three";
import scrollBundle from "./lite-services-scroll.config.json";

/** Keys must match GLB / ref names in `MyCanvas`. */
export type LiteModelKey =
  | "seo"
  | "smo"
  | "webdev"
  | "graphic"
  | "video"
  | "content"
  | "ads"
  | "appdev"
  | "algo";

/**
 * Per-service 3D approach tweens. Omitted fields fall back to the active
 * `LiteScanTimingPreset` (desktop / tablet / mobile).
 */
export type LiteApproachMotion = {
  scale?: number;
  scaleXYZ?: { x: number; y: number; z: number };
  position?: { x?: string; y?: string; z?: string };
  rotation?: Partial<{ x: number | string; y: number | string; z: number | string }>;
  durations?: { scale?: number; position?: number; rotation?: number };
};

export type LiteScanMotion = {
  spinRadians?: number;
  cardSlideX?: string;
  /**
   * After the main exit + number strip, extra timeline seconds where the card
   * stays small — maps to more scroll before the pin ends (avoids “snap” to full size).
   */
  postScanScrollPad?: number;
  /** Extra horizontal move after pad (GSAP `x`), e.g. `"+=160"` or `"-=120"`. Scrubbed. */
  postScanDriftX?: string;
  /** When drift starts (timeline seconds). Default: after strip (~4.05) + pad. */
  postScanDriftStart?: number;
  postScanDriftDuration?: number;
};

export type LiteServiceScanDefinition = {
  modelKey: LiteModelKey;
  scannerId: string;
  approach: {
    trigger: string;
    endTrigger: string;
    /** ScrollTrigger start (viewport strings). From JSON or `scrollDefaults`. */
    start: string;
    /** ScrollTrigger end relative to `endTrigger`. From JSON or `scrollDefaults`. */
    end: string;
  };
  scan: {
    endTrigger: string;
    /**
     * Pin `start` for this scanner. If omitted, `LiteScanTimingPreset.scanPinStart`
     * is used (per breakpoint: mobile / tablet / desktop).
     */
    pinStart?: string;
    /** Pin `end` relative to `endTrigger`. From JSON or `scrollDefaults`. */
    pinEnd: string;
  };
  motion?: {
    approach?: LiteApproachMotion;
    scan?: LiteScanMotion;
  };
};

type ScrollJson = typeof scrollBundle;

/** Shape of each row in `lite-services-scroll.config.json` (optional scroll overrides). */
type ServiceRowJson = {
  modelKey: string;
  scannerId: string;
  approach: {
    trigger: string;
    endTrigger: string;
    start?: string;
    end?: string;
  };
  scan: {
    endTrigger: string;
    pinStart?: string;
    pinEnd?: string;
  };
  motion?: LiteServiceScanDefinition["motion"];
};

const defaults = scrollBundle.scrollDefaults as ScrollJson["scrollDefaults"];

/** Defaults merged from `lite-services-scroll.config.json` (edit that file). */
export const LITE_SCROLL_DEFAULTS = {
  approachStart: defaults.approachStart,
  approachEnd: defaults.approachEnd,
  scanPinEnd: defaults.scanPinEnd,
} as const;

function normalizeService(s: ServiceRowJson): LiteServiceScanDefinition {
  return {
    modelKey: s.modelKey as LiteModelKey,
    scannerId: s.scannerId,
    approach: {
      trigger: s.approach.trigger,
      endTrigger: s.approach.endTrigger,
      start: s.approach.start ?? defaults.approachStart,
      end: s.approach.end ?? defaults.approachEnd,
    },
    scan: {
      endTrigger: s.scan.endTrigger,
      pinStart: s.scan.pinStart,
      pinEnd: s.scan.pinEnd ?? defaults.scanPinEnd,
    },
    motion: s.motion,
  };
}

/**
 * Service list + scroll positions: edit **`lite-services-scroll.config.json`** only.
 * Optional per-service `approach.start` / `approach.end` / `scan.pinStart` / `scan.pinEnd`
 * override `scrollDefaults` (and preset for `pinStart` when omitted).
 */
export const LITE_SERVICE_SCANS: readonly LiteServiceScanDefinition[] = (
  scrollBundle.services as unknown as ServiceRowJson[]
).map(normalizeService);

export type LiteModelRefMap = Record<LiteModelKey, RefObject<Group | null>>;
