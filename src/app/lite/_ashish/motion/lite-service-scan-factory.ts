import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import type { Group } from "three";
import { addScrubTimelineCue, playLiteSfx } from "../sfx";
import {
  resolveLiteServiceScans,
  type LiteApproachMotion,
  type LiteModelRefMap,
  type LiteScanMotion,
  type LiteScrollServiceBreakpoint,
} from "./lite-service-scan-config";
import scrollBundle from "./lite-services-scroll.config.json";

gsap.registerPlugin(ScrollTrigger);

/** One shared “recipe” for all services; tweak via matchMedia presets. */
export type LiteScanTimingPreset = {
  approachScrub: number;
  scanScrub: number;
  scanPinStart: string;
  approachScale: number;
  approachPosition: { x: string; y: string };
  approachRotationY: number;
  spinRadians: number;
  /** Card slide after scan — use `vw` on small screens for robustness */
  cardSlideX: string;
};

export const LITE_SCAN_TIMING_DESKTOP: LiteScanTimingPreset = {
  approachScrub: 1.2,
  scanScrub: 5,
  scanPinStart: "top 28%",
  approachScale: 2.5,
  approachPosition: { x: "-=140", y: "+=70" },
  approachRotationY: 10,
  spinRadians: Math.PI / 1,
  cardSlideX: "+=600",
};

export const LITE_SCAN_TIMING_TABLET: LiteScanTimingPreset = {
  approachScrub: 0.9,
  scanScrub: 3,
  scanPinStart: "top 25%",
  approachScale: 2.15,
  approachPosition: { x: "-=115", y: "+=62" },
  approachRotationY: 8,
  spinRadians: Math.PI/ 1,
  cardSlideX: "+=520",
};

export const LITE_SCAN_TIMING_MOBILE: LiteScanTimingPreset = {
  approachScrub: 0.65,
  scanScrub: 1.75,
  scanPinStart: "top 22%",
  approachScale: 1.85,
  approachPosition: { x: "-=85", y: "+=55" },
  approachRotationY: 6,
  spinRadians: Math.PI/1,
  cardSlideX: "+=48vw",
};

type ScanTimingPresetsJson = Partial<
  Record<LiteScrollServiceBreakpoint, Partial<LiteScanTimingPreset>>
>;

const scrollBundleTiming = scrollBundle as typeof scrollBundle & {
  scanTimingPresets?: ScanTimingPresetsJson;
};

/**
 * Active timing preset for a breakpoint: TS defaults, shallow-overridden by
 * `scanTimingPresets` in `lite-services-scroll.config.json` (e.g. `cardSlideX`).
 */
export function getLiteScanTimingForBreakpoint(
  breakpoint: LiteScrollServiceBreakpoint,
): LiteScanTimingPreset {
  const base =
    breakpoint === "mobile"
      ? LITE_SCAN_TIMING_MOBILE
      : breakpoint === "tablet"
        ? LITE_SCAN_TIMING_TABLET
        : LITE_SCAN_TIMING_DESKTOP;
  const over = scrollBundleTiming.scanTimingPresets?.[breakpoint];
  return over ? { ...base, ...over } : base;
}

function sel(id: string): string {
  return id.startsWith("#") ? id : `#${id}`;
}

function resolveApproachScale(
  timing: LiteScanTimingPreset,
  approach?: LiteApproachMotion,
): { x: number; y: number; z: number } {
  if (approach?.scaleXYZ) {
    return { ...approach.scaleXYZ };
  }
  const u = approach?.scale ?? timing.approachScale;
  return { x: u, y: u, z: u };
}

function resolveApproachPosition(
  timing: LiteScanTimingPreset,
  approach?: LiteApproachMotion,
): { x: string; y: string; z?: string } {
  return {
    x: approach?.position?.x ?? timing.approachPosition.x,
    y: approach?.position?.y ?? timing.approachPosition.y,
    ...(approach?.position?.z !== undefined ? { z: approach.position.z } : {}),
  };
}

function resolveApproachRotation(
  timing: LiteScanTimingPreset,
  approach?: LiteApproachMotion,
): Record<string, number | string> {
  const r = approach?.rotation;
  if (r && (r.x !== undefined || r.y !== undefined || r.z !== undefined)) {
    const out: Record<string, number | string> = {};
    if (r.x !== undefined) out.x = r.x;
    if (r.y !== undefined) out.y = r.y;
    if (r.z !== undefined) out.z = r.z;
    return out;
  }
  return { y: timing.approachRotationY };
}

function resolveScanSpin(
  timing: LiteScanTimingPreset,
  scan?: LiteScanMotion,
): number {
  return scan?.spinRadians ?? timing.spinRadians;
}

function resolveCardSlideX(
  timing: LiteScanTimingPreset,
  scan?: LiteScanMotion,
): string {
  return scan?.cardSlideX ?? timing.cardSlideX;
}

/** End of number-strip chapter: startTime 2.9 + delay 0.25 + duration 0.9 */
const SCAN_STRIP_END_TIME = 2.9 + 0.25 + 0.9;

/** Soft coral emissive — “scan warmth”, not flat red */
const SCAN_TINT_EMISSIVE = new THREE.Color("#ff2424");
const SCAN_TINT_EMISSIVE_INTENSITY = 1;
/** Fallback for non-PBR mats: gentle lerp toward dusty rose */
const SCAN_TINT_COLOR_MIX = new THREE.Color("#c86b62");
const SCAN_TINT_COLOR_LERP = 0.1;

function isPbrMaterial(
  m: THREE.Material,
): m is THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial {
  return (
    (m as THREE.MeshStandardMaterial).isMeshStandardMaterial === true ||
    (m as THREE.MeshPhysicalMaterial).isMeshPhysicalMaterial === true
  );
}

/**
 * Brief warm / rosy shading on all meshes under the model group (scrub-reversible).
 * PBR: emissive + emissiveIntensity. Others: slight diffuse color lerp.
 */
function addScanWarmTintToTimeline(
  tl: gsap.core.Timeline,
  root: Group,
  startTime: number,
  duration: number,
): void {
  const restoreAt = startTime + duration + 0.06;
  const restoreDur = Math.min(0.22, Math.max(0.12, duration * 0.6));
  root.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    const raw = obj.material;
    const list = Array.isArray(raw) ? raw : [raw];
    for (const m of list) {
      if (!m) continue;
      if (isPbrMaterial(m)) {
        if (!m.emissive) m.emissive = new THREE.Color(0x000000);
        const e = m.emissive;
        const r0 = e.r;
        const g0 = e.g;
        const b0 = e.b;
        const i0 = m.emissiveIntensity ?? 0;
        tl.fromTo(
          e,
          { r: r0, g: g0, b: b0 },
          {
            r: SCAN_TINT_EMISSIVE.r,
            g: SCAN_TINT_EMISSIVE.g,
            b: SCAN_TINT_EMISSIVE.b,
            duration,
            ease: "power2.out",
          },
          startTime,
        );
        tl.fromTo(
          m,
          { emissiveIntensity: i0 },
          {
            emissiveIntensity: SCAN_TINT_EMISSIVE_INTENSITY,
            duration,
            ease: "power2.out",
          },
          startTime,
        );
        tl.to(
          e,
          { r: r0, g: g0, b: b0, duration: restoreDur, ease: "power2.out" },
          restoreAt,
        );
        tl.to(
          m,
          { emissiveIntensity: i0, duration: restoreDur, ease: "power2.out" },
          restoreAt,
        );
      } else if ("color" in m && m.color instanceof THREE.Color) {
        const c = m.color;
        const sr = c.r;
        const sg = c.g;
        const sb = c.b;
        const end = new THREE.Color(sr, sg, sb).lerp(
          SCAN_TINT_COLOR_MIX,
          SCAN_TINT_COLOR_LERP,
        );
        tl.fromTo(
          c,
          { r: sr, g: sg, b: sb },
          { r: end.r, g: end.g, b: end.b, duration, ease: "power2.out" },
          startTime,
        );
        tl.to(
          c,
          { r: sr, g: sg, b: sb, duration: restoreDur, ease: "power2.out" },
          restoreAt,
        );
      }
    }
  });
}

/**
 * Builds approach + pinned scan timelines for one service. Same choreography as the original SEO block.
 */
export function attachLiteServiceScanPair(options: {
  group: Group;
  scannerId: string;
  approachTrigger: string;
  approachEndTrigger: string;
  approachScrollStart: string;
  approachScrollEnd: string;
  scanEndTrigger: string;
  scanPinStart: string;
  scanPinEnd: string;
  timing: LiteScanTimingPreset;
  motion?: {
    approach?: LiteApproachMotion;
    scan?: LiteScanMotion;
  };
  lowPowerMode?: boolean;
  isCancelled: () => boolean;
}): () => void {
  const {
    group,
    scannerId,
    approachTrigger,
    approachEndTrigger,
    approachScrollStart,
    approachScrollEnd,
    scanEndTrigger,
    scanPinStart,
    scanPinEnd,
    timing,
    motion,
    lowPowerMode = false,
    isCancelled,
  } = options;

  const approach = motion?.approach;
  const scanMotion = motion?.scan;
  const scaleTriple = resolveApproachScale(timing, approach);
  const posTriple = resolveApproachPosition(timing, approach);
  const rotProps = resolveApproachRotation(timing, approach);
  const scaleDur = approach?.durations?.scale ?? 2;
  const posDur = approach?.durations?.position ?? 1;
  const rotDur = approach?.durations?.rotation ?? 1;
  const spinRad = resolveScanSpin(timing, scanMotion);
  const cardX = resolveCardSlideX(timing, scanMotion);

  const scanner = sel(scannerId);

  const approachTl = gsap.timeline({
    scrollTrigger: {
      trigger: approachTrigger,
      endTrigger: approachEndTrigger,
      start: approachScrollStart,
      end: approachScrollEnd,
      scrub: timing.approachScrub,
    },
  });

  approachTl.to(
    group.scale,
    {
      x: scaleTriple.x,
      y: scaleTriple.y,
      z: scaleTriple.z,
      duration: scaleDur,
      ease: "power1.inOut",
    },
    0,
  );
  approachTl.to(
    group.position,
    {
      x: posTriple.x,
      y: posTriple.y,
      ...(posTriple.z !== undefined ? { z: posTriple.z } : {}),
      duration: posDur,
      ease: "power1.inOut",
    },
    0,
  );
  approachTl.to(
    group.rotation,
    { ...rotProps, duration: rotDur, ease: "power1.inOut" },
    0,
  );

  const scanTl = gsap.timeline({
    scrollTrigger: {
      trigger: scanner,
      endTrigger: scanEndTrigger,
      start: scanPinStart,
      end: scanPinEnd,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: 1,
      invalidateOnRefresh: true,
      /**
       * Prevent “fast scroll” race where the approach scrub keeps rendering and
       * overwrites scan end-state (e.g. model scale not reaching 0).
       * Scan owns the model transforms while pinned; approach re-enables when
       * user scrolls back above the scan start.
       */
      onEnter: () => {
        approachTl.scrollTrigger?.disable(false);
      },
      onEnterBack: () => {
        approachTl.scrollTrigger?.disable(false);
      },
      onLeaveBack: () => {
        approachTl.scrollTrigger?.enable(false, false);
      },
    },
  });

  // Avoid layout thrash during scrubbing: prefer transforms/opacity over width/height/display.
  // Pin + width/height animations are a common source of jitter (esp. mobile).
  gsap.set(scanner, {
    willChange: "transform",
    force3D: true,
    transformOrigin: "50% 50%",
  });
  gsap.set(`${scanner} .numberTrack`, {
    willChange: "visibility",
    force3D: true,
  });
  gsap.set(`${scanner} .purchaseStatus`, {
    willChange: "width, color",
    force3D: true,
  });
  scanTl.to(`${scanner} .purchaseStatus`, { width: "135px", duration: 1 },0);
  scanTl.to(`${scanner} .purchaseStatus`, { color: "red", duration: 0 },0.8);
  scanTl.to(`${scanner} .barcoadCheck`, { visibility: "visible", duration: 0 },0.8);

  scanTl.to(
    group.rotation,
    { y: `+=${spinRad}`, duration: 1, ease: "none" },
    0,
  );

  const removeBeepCue = addScrubTimelineCue(scanTl, 0.8 + 0.1, () => {
    if (!isCancelled()) playLiteSfx("beep");
  });

  /** Warm rosy “scan” read on the GLB, peaking as the model vanishes (scrub reverses cleanly). */
  if (!lowPowerMode) {
    addScanWarmTintToTimeline(scanTl, group, 0.5, 0.36);
  }

  scanTl.to(
    group.scale,
    { x: 0, y: 0, z: 0, duration: 0.15, ease: "power1.inOut" },
    0.8,
  );
  // Instead of animating height/width (layout), scale the whole card.
  // scanTl.fromTo(
  //   scanner,
  //   { scale: 1 },
  //   { scale: 0, duration: 0.5, ease: "power1.inOut" },
  //   1.1,
  // );
  // scanTl.to(scanner, { height: "150px", width: "150px", duration: 0.5, ease: "power1.inOut" }, 1.1);
  // scanTl.to(scanner, { x: cardX, duration: 1, ease: "power1.inOut" }, 1.2);
  scanTl.to(
    `${scanner} .numberTrack`,
    { x: "-=50%", duration: 0.5, ease: "back.inOut" },
    1,
  );
  // scanTl.to(scanner, { y: "-=200", duration: 0.3 }, 1.8);
  scanTl.to(scanner, { height: "150px", width: "150px", duration: 0.4 }, 1.2);
  // scanTl.to(scanner, { scale: 0.86, duration: 0.4, ease: "power1.inOut" }, 1.8);

  return () => {
    removeBeepCue();
    approachTl.scrollTrigger?.kill();
    approachTl.kill();
    scanTl.scrollTrigger?.kill();
    scanTl.kill();
  };
}

/**
 * Registers all service scans for the current breakpoint. Call inside `gsap.matchMedia().add(...)`.
 * Scroll positions / motion come from `lite-services-scroll.config.json` (base + `responsive[breakpoint]`).
 */
export function registerAllLiteServiceScans(
  refs: LiteModelRefMap,
  timing: LiteScanTimingPreset,
  isCancelled: () => boolean,
  breakpoint: LiteScrollServiceBreakpoint,
): () => void {
  const disposers: (() => void)[] = [];
  const defs = resolveLiteServiceScans(breakpoint);
  const lowPowerMode = breakpoint !== "desktop";

  for (const def of defs) {
    const group = refs[def.modelKey].current;
    if (!group) continue;

    const scanPinStart = def.scan.pinStart ?? timing.scanPinStart;

    disposers.push(
      attachLiteServiceScanPair({
        group,
        scannerId: def.scannerId,
        approachTrigger: def.approach.trigger,
        approachEndTrigger: def.approach.endTrigger,
        approachScrollStart: def.approach.start,
        approachScrollEnd: def.approach.end,
        scanEndTrigger: def.scan.endTrigger,
        scanPinStart,
        scanPinEnd: def.scan.pinEnd,
        timing,
        motion: def.motion,
        lowPowerMode,
        isCancelled,
      }),
    );
  }

  return () => {
    for (const d of disposers) d();
  };
}
