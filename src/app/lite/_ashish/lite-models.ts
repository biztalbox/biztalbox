export type WiggleAnimation = { x: number; y: number; z: number };

export type LiteModel = {
  id: string;
  /** GLB URL (file in /public) */
  src: string;
  position: [number, number, number];
  animation: WiggleAnimation;
  phase?: number;
  speed?: number;
  /** At most one model should use this if you keep scroll-linked rotation */
  scrollDriven?: boolean;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
};

/**
 * Add a row per mesh. Reuse the same `src` for clones — each row is still its own instance.
 */
/** Layout tuned for Hero canvas camera [0, 30, 180] fov 70 — wide arc, no overlap. */
export const LITE_MODELS: LiteModel[] = [
  {
    id: "smo",
    src: "/assets/lite_models/smo.glb",
    position: [-100, 18, 4],
    animation: { x: 0.08, y: 0.06, z: 0.1 },
    scrollDriven: true,
  },
  {
    id: "seo",
    src: "/assets/lite_models/seo.glb",
    position: [-150, 5, -5],
    animation: { x: 0.06, y: 0.1, z: 0.07 },
    phase: 1.7,
    speed: 1.05,
  },
  {
    id: "webdev",
    src: "/assets/lite_models/webdev.glb",
    position: [-150, 5, 0],
    animation: { x: 0.1, y: 0.05, z: 0.09 },
    phase: 0.85,
    speed: 0.92,
  },
  {
    id: "appdev",
    src: "/assets/lite_models/appdev.glb",
    position: [-150, 8, -12],
    animation: { x: 0.1, y: 0.05, z: 0.09 },
    phase: 0.35,
    speed: 0.95,
  },
  {
    id: "graphic",
    src: "/assets/lite_models/graphic.glb",
    position: [-130, 8, 10],
    animation: { x: 0.1, y: 0.05, z: 0.09 },
    phase: 0.10,
    speed: 0.88,
  },
  {
    id: "video",
    src: "/assets/lite_models/video.glb",
    position: [-130, 0, 10],
    animation: { x: 0.1, y: 0.05, z: 0.09 },
    phase: 0.55,
    speed: 0.94,
  },
  {
    id: "algo",
    src: "/assets/lite_models/algo.glb",
    position: [-120, 0, -12],
    animation: { x: 0.1, y: 0.05, z: 0.09 },
    phase: 1.35,
    speed: 0.9,
  },
  {
    id: "ads",
    src: "/assets/lite_models/ads.glb",
    position: [-100, 6, -16],
    animation: { x: 0.1, y: 0.05, z: 0.09 },
    phase: 0.2,
    speed: 0.93,
  },
];

/** Deduped load list (computed from LITE_MODELS; you don’t edit this). */
export const LITE_GLB_URLS = Array.from(new Set(LITE_MODELS.map((m) => m.src)));
