export type FloatConfig = {
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
};

export type LiteModel = {
  id: string;
  /** GLB URL (file in /public) */
  src: string;
  position: [number, number, number];
  floatConfig?: FloatConfig;
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
    floatConfig: { speed: 5, rotationIntensity: 1, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
    scrollDriven: true,
  },
  
  {
    id: "ads",
    src: "/assets/lite_models/ads.glb",
    position: [-450, 170, -100],
    floatConfig: { speed: 5, rotationIntensity: 0.5, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
    scale: 0.9,
  },
  {
    id: "content",
    src: "/assets/lite_models/content.glb",
    position: [120, 50, 700],
    floatConfig: { speed: 5, rotationIntensity: 0.5, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
    scale: 1.1,
  },
  {
    id: "seo",
    src: "/assets/lite_models/seo.glb",
    position: [100, 120, 500],
    floatConfig: { speed: 5, rotationIntensity: 0.9, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
  },
  {
    id: "webdev",
    src: "/assets/lite_models/webdev.glb",
    position: [-140, -50, 600],
    floatConfig: { speed: 5, rotationIntensity: 0.5, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
  },
  {
    id: "appdev",
    src: "/assets/lite_models/appdev.glb",
    position: [350, 80, 500],
    floatConfig: { speed: 5, rotationIntensity: 0.8, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
  },
  {
    id: "graphic",
    src: "/assets/lite_models/graphic.glb",
    position: [450, 150, 1],
    floatConfig: { speed: 5, rotationIntensity: 0.5, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
  },
  {
    id: "video",
    src: "/assets/lite_models/video.glb",
    position: [500, 120, 200],
    floatConfig: { speed: 5, rotationIntensity: 0.5, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
    scale: 1.3
  },
  {
    id: "algo",
    src: "/assets/lite_models/algo.glb",
    position: [-200, 180, -100],
    floatConfig: { speed: 5, rotationIntensity: 0.3, floatIntensity: 1, floatingRange: [-0.1, 0.1] },
  },
];

/** Deduped load list (computed from LITE_MODELS; you don’t edit this). */
export const LITE_GLB_URLS = Array.from(new Set(LITE_MODELS.map((m) => m.src)));
