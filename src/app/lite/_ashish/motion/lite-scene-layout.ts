import type { RefObject } from "react";
import type { Group, Object3D } from "three";
import layoutBundle from "./lite-scene-layout.config.json";
import type { LiteModelKey, LiteModelRefMap } from "./lite-service-scan-config";

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

/** GSAP `x` / `y` / `z` for `bucket.position` at timeline start (instant tween at t0); strings like `"+=80"` or numbers. */
type CtaCartBucketPositionNudge = {
  x?: string | number;
  y?: string | number;
  z?: string | number;
};

type CtaCartDesktopJson = {
  times: { bucketGrow: number; arrange: number; move: number; asa: number };
  bucket: {
    scale0: Vec3;
    scaleGrow: Vec3;
    rotationArrange: { x: number; y: number; duration: number; ease: string };
    scaleArrange: { x: number; y: number; z: number; duration: number; ease: string };
    /** Instant offset for bucket position at scrub t0 (`x` / `y` / `z`, e.g. `"+=80"`, `"-=20"`, `"+=0"`). */
    positionNudge?: CtaCartBucketPositionNudge;
  };
  asa: { z1: string; z2: string; duration: number; ease: string };
  models: Record<
    string,
    {
      scale0: Vec3;
      scaleArrange?: Vec3;
      positionMove?: Record<string, string | number> & { duration: number; ease: string };
    }
  >;
};

/** Same pattern as `modelLayouts`: full `desktop`, partial `tablet` / `mobile` merged on top. */
type HeroFadeOutFile = {
  desktop: Record<string, number>;
  tablet?: Record<string, number>;
  mobile?: Record<string, number>;
};

const bundle = layoutBundle as unknown as {
  modelLayouts: ModelLayoutsFile;
  heroFadeOut: HeroFadeOutFile;
  ctaCart: {
    desktop: CtaCartDesktopJson;
    tablet: CtaCartDesktopJson | null;
    mobile: CtaCartDesktopJson | null;
  };
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

const CTA_SCALE0_ORDER: LiteModelKey[] = [
  "seo",
  "smo",
  "webdev",
  "video",
  "content",
  "ads",
  "algo",
  "graphic",
  "appdev",
];

function isNonEmptyObject(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === "object" && Object.keys(v as Record<string, unknown>).length > 0;
}

function mergeCtaCart(desktop: CtaCartDesktopJson, over: Partial<CtaCartDesktopJson> | null | undefined): CtaCartDesktopJson {
  if (!over || !isNonEmptyObject(over)) return desktop;
  const mergedModels = { ...desktop.models };
  if (over.models) {
    for (const key of Object.keys(over.models)) {
      const k = key as keyof typeof mergedModels;
      const b = desktop.models[k];
      const o = over.models[k];
      if (!o) continue;
      if (!b) {
        (mergedModels as Record<string, (typeof mergedModels)[keyof typeof mergedModels]>)[k] = o;
        continue;
      }
      const pm =
        b.positionMove && o.positionMove
          ? { ...b.positionMove, ...o.positionMove }
          : (o.positionMove ?? b.positionMove);
      mergedModels[k] = {
        ...b,
        ...o,
        ...(pm ? { positionMove: pm } : {}),
      } as (typeof mergedModels)[typeof k];
    }
  }
  return {
    ...desktop,
    ...over,
    times: { ...desktop.times, ...over.times },
    bucket: {
      ...desktop.bucket,
      ...over.bucket,
      positionNudge: {
        ...desktop.bucket.positionNudge,
        ...over.bucket?.positionNudge,
      },
    },
    asa: { ...desktop.asa, ...over.asa },
    models: mergedModels,
  };
}

export function resolveCtaCartConfig(bp: LiteSceneBreakpoint): CtaCartDesktopJson {
  const d = bundle.ctaCart.desktop;
  if (bp === "desktop") return d;
  if (bp === "tablet") return mergeCtaCart(d, bundle.ctaCart.tablet as Partial<CtaCartDesktopJson> | null);
  return mergeCtaCart(d, bundle.ctaCart.mobile as Partial<CtaCartDesktopJson> | null);
}

/**
 * Appends the CTA / bucket choreography (scrubbed) — values from `lite-scene-layout.config.json` → `ctaCart`.
 */
export function addCtaCartTweensToTimeline(
  tl: gsap.core.Timeline,
  modelRefs: LiteModelRefMap,
  bucketRef: RefObject<Group | null>,
  asa1: Object3D | null,
  asa2: Object3D | null,
  cfg: CtaCartDesktopJson,
): void {
  const bucket = bucketRef.current;
  if (!bucket) return;

  const { times, bucket: b, models, asa } = cfg;
  const safeModels = (models ?? {}) as CtaCartDesktopJson["models"];
  const t0 = 0;
  const ease0 = "power3.inOut" as const;

  for (const key of CTA_SCALE0_ORDER) {
    const g = modelRefs?.[key]?.current ?? null;
    const m = safeModels[key];
    if (!g || !m?.scale0) continue;
    tl.to(g.scale, { x: m.scale0[0], y: m.scale0[1], z: m.scale0[2], duration: 0, ease: ease0 }, t0);
  }

  tl.to(bucket.scale, { x: b.scale0[0], y: b.scale0[1], z: b.scale0[2], duration: 0, ease: ease0 }, t0);
  tl.to(
    bucket.scale,
    { x: b.scaleGrow[0], y: b.scaleGrow[1], z: b.scaleGrow[2], duration: 0, ease: ease0 },
    times.bucketGrow,
  );
  const defaultNudge: CtaCartBucketPositionNudge = { x: "-=20", y: "+=80" };
  const nudge = { ...defaultNudge, ...b.positionNudge };
  tl.to(
    bucket.position,
    {
      ...(nudge.x !== undefined ? { x: nudge.x } : {}),
      ...(nudge.y !== undefined ? { y: nudge.y } : {}),
      ...(nudge.z !== undefined ? { z: nudge.z } : {}),
      duration: 0,
      ease: ease0,
    },
    0,
  );
  tl.to(bucket.rotation, b.rotationArrange, times.arrange);
  tl.to(bucket.scale, b.scaleArrange, times.arrange);

  for (const key of CTA_SCALE0_ORDER) {
    const g = modelRefs?.[key]?.current ?? null;
    const m = safeModels[key];
    if (!g || !m?.scaleArrange) continue;
    const [sx, sy, sz] = m.scaleArrange;
    tl.to(g.scale, { x: sx, y: sy, z: sz, duration: 0, ease: ease0 }, times.arrange);
  }

  for (const key of CTA_SCALE0_ORDER) {
    const g = modelRefs?.[key]?.current ?? null;
    const m = safeModels[key];
    if (!g || !m?.positionMove) continue;
    const { duration, ease, ...rest } = m.positionMove;
    tl.to(g.position, { ...rest, duration, ease }, times.move);
  }

  if (asa1) {
    tl.to(asa1.rotation, { z: asa.z1, duration: asa.duration, ease: asa.ease }, times.asa);
  }
  if (asa2) {
    tl.to(asa2.rotation, { z: asa.z2, duration: asa.duration, ease: asa.ease }, times.asa);
  }
}
