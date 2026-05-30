import type { RefObject } from "react";
import type { Group } from "three";
import scrollBundle from "./lite-services-scroll.config.json";

/** Matches GSAP `matchMedia` in `scene.tsx` and `getLiteSceneBreakpoint` widths. */
export type LiteScrollServiceBreakpoint = "mobile" | "tablet" | "desktop";

/** Keys must match GLB / ref names in the 3D scene. */
export type LiteModelKey =
  | "seo"
  | "smo"
  | "webdev"
  | "graphic"
  | "video"
  | "content"
  | "ads";

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
  postScanScrollPad?: number;
  postScanDriftX?: string;
  postScanDriftStart?: number;
  postScanDriftDuration?: number;
};

export type LiteServiceScanDefinition = {
  modelKey: LiteModelKey;
  scannerId: string;
  approach: {
    trigger: string;
    endTrigger: string;
    start: string;
    end: string;
  };
  scan: {
    endTrigger: string;
    pinStart?: string;
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
  scrollDefaultsResponsive?: Partial<Record<LiteScrollServiceBreakpoint, Partial<ScrollDefaultsShape>>>;
};

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

type ServiceRowJson = {
  modelKey: string;
  scannerId: string;
  approach: ServiceApproachJson;
  scan: ServiceScanJson;
  motion?: LiteServiceScanDefinition["motion"];
  responsive?: Partial<Record<LiteScrollServiceBreakpoint, ServiceResponsiveLayer>>;
};

function getBundle(): ScrollBundleWithResponsive {
  return scrollBundle as ScrollBundleWithResponsive;
}

function mergeScrollDefaultsForBreakpoint(breakpoint: LiteScrollServiceBreakpoint): ScrollDefaultsShape {
  const { scrollDefaults: defaults, scrollDefaultsResponsive } = getBundle();
  const over = scrollDefaultsResponsive?.[breakpoint];
  if (!over) return defaults;
  return deepMerge(
    { ...defaults } as Record<string, unknown>,
    over as Partial<Record<string, unknown>>,
  ) as ScrollDefaultsShape;
}

function isPlainRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

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

export function mergeServiceScrollRowForBreakpoint(
  row: ServiceRowJson,
  breakpoint: LiteScrollServiceBreakpoint,
): Omit<ServiceRowJson, "responsive"> {
  const { responsive, ...core } = row;
  const layer = responsive?.[breakpoint];
  if (!layer) return core;
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

export function resolveLiteScrollDefaults(breakpoint: LiteScrollServiceBreakpoint): ScrollDefaultsShape {
  return mergeScrollDefaultsForBreakpoint(breakpoint);
}

export function resolveLiteServiceScans(
  breakpoint: LiteScrollServiceBreakpoint,
): readonly LiteServiceScanDefinition[] {
  const scrollDefaults = mergeScrollDefaultsForBreakpoint(breakpoint);
  const rows = getBundle().services as unknown as ServiceRowJson[];
  return rows.map((row) =>
    normalizeService(mergeServiceScrollRowForBreakpoint(row, breakpoint), scrollDefaults),
  );
}

export type LiteModelRefMap = Record<LiteModelKey, RefObject<Group | null>>;
