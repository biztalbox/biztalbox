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
    // scrollDriven: true,
  },
  
  {
    id: "ads",
    src: "/assets/lite_models/ads.glb",
    position: [-450, 170, -100],
    animation: { x: 0.1, y: 0.01, z: 0.01 },
    phase: 0.2,
    scale: 0.9,
    speed: 1,
  },
  {
    id: "content",
    src: "/assets/lite_models/content.glb",
    position: [120, 50, 700],
    animation: { x: 0.01, y: 0.01, z: 0.1 },
    phase: 0.1,
    speed: 1,
    scale: 1.1,
  },
  {
    id: "seo",
    src: "/assets/lite_models/seo.glb",
    position: [100, 120, 500],
    animation: { x: 0.06, y: 0.1, z: 0.07 },
    phase: 1.7,
    speed: 1,
  },
  {
    id: "webdev",
    src: "/assets/lite_models/webdev.glb",
    position: [-140, -50, 600],
    animation: { x: 0.1, y: 0.01, z: 0.01 },
    phase: 0.85,
    speed: 0.92,
  },
  {
    id: "appdev",
    src: "/assets/lite_models/appdev.glb",
    position: [350, 80, 500],
    animation: { x: 0.1, y: 0.05, z: 0.09 },
    phase: 0.35,
    speed: 0.95,
  },
  {
    id: "video",
    src: "/assets/lite_models/video.glb",
    position: [500, 120, 200],
    animation: { x: 0.1, y: 0.0, z: 0.01 },
    phase: 0.55,
    speed: 0.94,
    scale: 1.3
  },
  {
    id: "algo",
    src: "/assets/lite_models/algo.glb",
    position: [-200, 180, -100],
    animation: { x: 0, y: -0.02, z: 0.01 },
    phase: 0.35,
    speed: 0.8,
  },
];

/** Deduped load list (computed from LITE_MODELS; you don’t edit this). */
export const LITE_GLB_URLS = Array.from(new Set(LITE_MODELS.map((m) => m.src)));
