import layoutBundle from "./lite-scene-layout.config.json";
import type { LiteModelKey } from "./lite-service-scan-config";

export type LiteSceneBreakpoint = "mobile" | "tablet" | "desktop";

type Vec3 = [number, number, number];

type FloatJson = {
  speed: number;
  rotationIntensity: number;
  floatIntensity: number;
  floatingRange: [number, number];
};

type ModelLayoutJson = {
  position: Vec3;
  scale: number | Vec3;
  rotation?: Vec3;
  float: FloatJson;
};

type ModelLayoutsFile = {
  desktop: Record<string, ModelLayoutJson>;
  tablet: Record<string, Partial<ModelLayoutJson>>;
  mobile: Record<string, Partial<ModelLayoutJson>>;
};

export type ResolvedHeroModelLayout = {
  position: Vec3;
  scale: number | Vec3;
  rotation: Vec3;
  float: FloatJson;
};

type HeroFadeOutFile = {
  desktop: Record<string, number>;
  tablet?: Record<string, number>;
  mobile?: Record<string, number>;
};

const bundle = layoutBundle as unknown as {
  modelLayouts: ModelLayoutsFile;
  heroFadeOut: HeroFadeOutFile;
};

/** Match GSAP `registerAllLiteServiceScans` breakpoints (CSS px). */
export function getLiteSceneBreakpoint(widthPx: number): LiteSceneBreakpoint {
  if (widthPx < 640) return "mobile";
  if (widthPx < 1024) return "tablet";
  return "desktop";
}

function mergeModelLayout(base: ModelLayoutJson, over: Partial<ModelLayoutJson>): ModelLayoutJson {
  return {
    position: (over.position ?? base.position) as Vec3,
    scale: over.scale !== undefined ? over.scale : base.scale,
    rotation: over.rotation !== undefined ? over.rotation : base.rotation,
    float: { ...base.float, ...over.float },
  };
}

function normalizeRotation(r: Vec3 | undefined): Vec3 {
  return r ?? [0, 0, 0];
}

/** Per-model transforms for WigglingModel; tablet/mobile deep-merge over desktop. */
export function getResolvedModelLayouts(bp: LiteSceneBreakpoint): Record<string, ResolvedHeroModelLayout> {
  const { desktop, tablet, mobile } = bundle.modelLayouts;
  const overlay = bp === "tablet" ? tablet : bp === "mobile" ? mobile : {};
  const out: Record<string, ResolvedHeroModelLayout> = {};

  for (const key of Object.keys(desktop)) {
    const base = desktop[key];
    if (!base) continue;
    const partial = overlay[key] ?? {};
    const merged = mergeModelLayout(base as ModelLayoutJson, partial);
    out[key] = {
      position: merged.position,
      scale: merged.scale,
      rotation: normalizeRotation(merged.rotation),
      float: merged.float,
    };
  }
  return out;
}

function mergeHeroFadeOutRecords(
  base: Record<string, number>,
  over: Record<string, number> | undefined,
): Record<string, number> {
  if (!over || Object.keys(over).length === 0) return { ...base };
  return { ...base, ...over };
}

function mergeHeroFadeOutForBreakpoint(bp: LiteSceneBreakpoint): Record<string, number> {
  const hf = bundle.heroFadeOut;
  const desktop = hf.desktop ?? {};
  if (bp === "desktop") return { ...desktop };
  if (bp === "tablet") return mergeHeroFadeOutRecords(desktop, hf.tablet);
  return mergeHeroFadeOutRecords(desktop, hf.mobile);
}

/**
 * GSAP `y +=` delta for the hero fade strip from `heroFadeOut` in
 * `lite-scene-layout.config.json` (`desktop` + merged `tablet` / `mobile` partials).
 */
export function getHeroFadeOutYDelta(modelKey: LiteModelKey, breakpoint: LiteSceneBreakpoint): number {
  const merged = mergeHeroFadeOutForBreakpoint(breakpoint);
  const v = merged[modelKey];
  return typeof v === "number" && !Number.isNaN(v) ? v : 0;
}
