/**
 * GLB + HDR asset URLs for the lite hero 3D scene.
 *
 * Kept in a dependency-free module (no react / three imports) so it can be
 * imported by both the R3F scene and the page-level preloader without pulling
 * the heavy WebGL bundle into the page chunk.
 */
export const LITE_GLB_URLS = [
  "/assets/lite_models/minified/smo.glb",
  "/assets/lite_models/minified/ads.glb",
  "/assets/lite_models/minified/content.glb",
  "/assets/lite_models/minified/seo.glb",
  "/assets/lite_models/minified/webdev.glb",
  "/assets/lite_models/minified/graphic.glb",
  "/assets/lite_models/minified/video.glb",
] as const;

export const LITE_HERO_HDR_URL = "/assets/hdr/scene.hdr";

/**
 * CTA cart model. Loaded separately via drei `useGLTF` in CartBoxScene (not part
 * of the hero `useLoader` batch), so it is preloaded through `useGLTF.preload`
 * at that module's scope rather than the fetch warm below.
 */
export const LITE_CART_GLB_URL = "/assets/lite_models/minified/cart_box.glb";

let assetsPreloaded = false;

/**
 * Warm the HTTP cache for the hero GLBs + HDR as early as possible (page mount,
 * while the route loader / Dart intro is still on screen) so the models are
 * fully downloaded by the time the idle-deferred WebGL canvas mounts. Without
 * this, the 7 GLBs only start downloading when the canvas appears, so they
 * "pop in" mid-view once the network finishes.
 *
 * Uses fetch() rather than <link rel="preload" as="fetch"> so same-origin reuse
 * is guaranteed without crossorigin-matching pitfalls; the response body is
 * discarded — only the browser cache is warmed. The GLTF parse (incl. KTX2
 * transcode, which needs the renderer) still happens on canvas mount, but the
 * dominant network cost is already paid.
 */
export function preloadLiteModelAssets(): void {
  if (typeof window === "undefined" || assetsPreloaded) return;
  assetsPreloaded = true;

  for (const url of [...LITE_GLB_URLS, LITE_HERO_HDR_URL]) {
    void fetch(url, { cache: "force-cache" }).catch(() => {
      /* best-effort cache warm */
    });
  }
}
