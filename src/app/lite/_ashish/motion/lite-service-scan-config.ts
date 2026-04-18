import type { RefObject } from "react";
import type { Group } from "three";
import scrollBundle from "./lite-services-scroll.config.json";

/** Matches GSAP `matchMedia` in `MyCanvas` and `getLiteSceneBreakpoint` widths. */
export type LiteScrollServiceBreakpoint = "mobile" | "tablet" | "desktop";

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

type ScrollDefaultsShape = ScrollJson["scrollDefaults"];

type ScrollBundleWithResponsive = ScrollJson & {
  /** Optional per-breakpoint overrides for `scrollDefaults` (shallow merge). */
  scrollDefaultsResponsive?: Partial<Record<LiteScrollServiceBreakpoint, Partial<ScrollDefaultsShape>>>;
};

const scrollBundleExt = scrollBundle as ScrollBundleWithResponsive;

type ServiceApproachJson = {
  trigger: string;
  endTrigger: string;
  start?: string;
  end?: string;
};

type ServiceScanJson = {
  endTrigger: string;
  pinStart?: string;
  pinEnd?: string;
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type DeepPartialMotion = {
  approach?: DeepPartial<LiteApproachMotion>;
  scan?: DeepPartial<LiteScanMotion>;
};

type ServiceResponsiveLayer = {
  approach?: Partial<ServiceApproachJson>;
  scan?: Partial<ServiceScanJson>;
  motion?: DeepPartialMotion;
};

/** Shape of each row in `lite-services-scroll.config.json` (optional scroll overrides). */
type ServiceRowJson = {
  modelKey: string;
  scannerId: string;
  approach: ServiceApproachJson;
  scan: ServiceScanJson;
  motion?: LiteServiceScanDefinition["motion"];
  /**
   * Optional per-breakpoint overrides (deep-merge over the base row).
   * Base `approach` / `scan` / `motion` = desktop default (current JSON).
   */
  responsive?: Partial<Record<LiteScrollServiceBreakpoint, ServiceResponsiveLayer>>;
};

const defaults = scrollBundleExt.scrollDefaults;

/** Base `scrollDefaults` from JSON (no `scrollDefaultsResponsive`). */
export const LITE_SCROLL_DEFAULTS = {
  approachStart: defaults.approachStart,
  approachEnd: defaults.approachEnd,
  scanPinEnd: defaults.scanPinEnd,
} as const;

function mergeScrollDefaultsForBreakpoint(breakpoint: LiteScrollServiceBreakpoint): ScrollDefaultsShape {
  const over = scrollBundleExt.scrollDefaultsResponsive?.[breakpoint];
  if (!over) return defaults;
  return deepMerge(
    { ...defaults } as Record<string, unknown>,
    over as Partial<Record<string, unknown>>,
  ) as ScrollDefaultsShape;
}

function isPlainRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Deep-merge plain objects; override wins. Undefined keys in `over` are skipped. */
function deepMerge<T extends Record<string, unknown>>(base: T, over: Partial<T> | undefined): T {
  if (!over) return base;
  const out = { ...base };
  for (const key of Object.keys(over) as (keyof T)[]) {
    const ov = over[key];
    if (ov === undefined) continue;
    const bv = base[key];
    if (isPlainRecord(bv) && isPlainRecord(ov)) {
      out[key] = deepMerge(bv as Record<string, unknown>, ov as Record<string, unknown>) as T[keyof T];
    } else {
      out[key] = ov as T[keyof T];
    }
  }
  return out;
}

function mergeMotionLayer(
  base: LiteServiceScanDefinition["motion"] | undefined,
  over: DeepPartialMotion | undefined,
): LiteServiceScanDefinition["motion"] | undefined {
  if (!base && !over) return undefined;
  return deepMerge((base ?? {}) as Record<string, unknown>, (over ?? {}) as Record<string, unknown>) as LiteServiceScanDefinition["motion"];
}

/**
 * Merges `responsive[breakpoint]` over the base service row (desktop defaults).
 * Does not apply `scrollDefaults` — use `normalizeService` after this.
 */
export function mergeServiceScrollRowForBreakpoint(
  row: ServiceRowJson,
  breakpoint: LiteScrollServiceBreakpoint,
): Omit<ServiceRowJson, "responsive"> {
  const { responsive, ...core } = row;
  const layer = responsive?.[breakpoint];
  if (!layer) {
    return core;
  }
  return {
    ...core,
    approach: deepMerge(core.approach, layer.approach),
    scan: deepMerge(core.scan, layer.scan),
    motion: mergeMotionLayer(core.motion, layer.motion),
  };
}

function normalizeService(
  s: Omit<ServiceRowJson, "responsive">,
  scrollDefaults: ScrollDefaultsShape,
): LiteServiceScanDefinition {
  return {
    modelKey: s.modelKey as LiteModelKey,
    scannerId: s.scannerId,
    approach: {
      trigger: s.approach.trigger,
      endTrigger: s.approach.endTrigger,
      start: s.approach.start ?? scrollDefaults.approachStart,
      end: s.approach.end ?? scrollDefaults.approachEnd,
    },
    scan: {
      endTrigger: s.scan.endTrigger,
      pinStart: s.scan.pinStart,
      pinEnd: s.scan.pinEnd ?? scrollDefaults.scanPinEnd,
    },
    motion: s.motion,
  };
}

const rawServices = scrollBundle.services as unknown as ServiceRowJson[];

/**
 * Resolved `scrollDefaults` for a viewport (base + optional `scrollDefaultsResponsive[breakpoint]`).
 */
export function resolveLiteScrollDefaults(breakpoint: LiteScrollServiceBreakpoint): ScrollDefaultsShape {
  return mergeScrollDefaultsForBreakpoint(breakpoint);
}

/**
 * Resolved service list for a viewport band (after `responsive` merge + merged scroll defaults).
 *
 * JSON shape (base = current desktop values; omit `responsive` until you need overrides):
 *
 * - Per service: `responsive.mobile` | `responsive.tablet` | `responsive.desktop` — each may include
 *   `approach`, `scan`, `motion` partials; nested fields (e.g. `motion.approach.position.y`) deep-merge.
 * - Global: optional top-level `scrollDefaultsResponsive` with the same breakpoint keys for
 *   `approachStart`, `approachEnd`, `scanPinEnd`.
 */
export function resolveLiteServiceScans(breakpoint: LiteScrollServiceBreakpoint): readonly LiteServiceScanDefinition[] {
  const scrollDefaults = mergeScrollDefaultsForBreakpoint(breakpoint);
  return rawServices.map((row) =>
    normalizeService(mergeServiceScrollRowForBreakpoint(row, breakpoint), scrollDefaults),
  );
}

/**
 * Desktop-resolved list (base JSON + optional `responsive.desktop`).
 * Prefer `resolveLiteServiceScans` when the active breakpoint is known.
 */
export const LITE_SERVICE_SCANS: readonly LiteServiceScanDefinition[] = resolveLiteServiceScans("desktop");

/**
 * `outer` — layout + approach-phase GSAP (position / scale / rotation).
 * `inner` — scan-phase GSAP (spin + shrink) so two scrub timelines never fight the same props.
 */
export type LiteModelGroupRefs = {
  outer: RefObject<Group | null>;
  inner: RefObject<Group | null>;
};

export type LiteModelRefMap = Record<LiteModelKey, LiteModelGroupRefs>;
