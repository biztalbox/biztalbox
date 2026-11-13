let cached: boolean | null = null;

/**
 * Whether the current browser can create a WebGL context.
 * Crawlers (e.g. Googlebot's headless Chromium) often cannot; creating a
 * Three.js renderer there throws and, without a guard, crashes the whole page.
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl")) as WebGLRenderingContext | null;
    cached = !!gl;
    // Release the throwaway context so it does not count against the browser limit.
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    cached = false;
  }
  return cached;
}
