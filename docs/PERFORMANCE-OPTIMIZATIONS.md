# Performance Optimizations (Jul 2026)

PageSpeed analysis (light: mobile 41 / desktop 59; dark: Lighthouse crashed with
"page stopped responding") identified the bottlenecks below. All fixes are in
this changeset.

## What was wrong

| Problem | Impact |
|---|---|
| `cart_box.glb` 37.6 MB downloaded at page load (module-level `useGLTF.preload`) | ~90% of page weight, killed LCP/TBT |
| 6 × `Model3D` (awards) each ran a WebGL context + infinite rAF loop from page load | Main thread pegged → dark home "page stopped responding" in Lighthouse |
| `EyeBall` full-screen shadow-mapped scene rendered unconditionally (forced always-visible) | Same as above |
| `font-awesome-pro.css` 454 KB with 3,340 icons (only ~30 used) + full FA fonts (1.15 MB woff2) | CSS bundle bloat, render-blocking chain |
| Century Gothic shipped as 4 × TTF (1.15 MB) | Slow font loads |
| Loader GIFs (black 319 KB / white 178 KB) | Wasted bytes on first paint |
| No cache headers for `/assets`, `/models` | Repeat visits re-downloaded everything |

## What changed

### 3D assets (custom optimizer: vertex welding + KHR_mesh_quantization + unused-UV removal + WebP textures)
- `cart_box.glb` **37.60 → 14.68 MB** (−61%)
- `graphic.glb` **6.99 → 1.92 MB** (−73%)
- `webdev.glb` **6.88 → 2.78 MB** (−60%)
- `dartboard2.glb` **2.39 → 1.07 MB** (−55%)
- `b-logo.glb` **6.03 → 0.18 MB** (−97%)
- `eyeball_animate.glb` **2.87 → 0.56 MB** (−80%)
- Already-Draco files (ads/box/content/seo/smo/video/webdev2) left untouched.
- Optional extra squeeze: `npm i -D @gltf-transform/cli && npm run optimize:models`
  (applies Draco on top; `useGLTF`/GLTFLoader already handle it).

### Code
- `CartBoxScene.tsx`: removed module-level `useGLTF.preload` — the cart model
  no longer downloads during initial page load.
- `CartCanvas.tsx`: the CTA `<Canvas>` mounts only when the section is ~1.5
  screens from the viewport (IntersectionObserver).
- `3d-model.tsx` (awards OBJ viewer): WebGL context + `.obj` download created
  only near the viewport; rAF loop pauses off-screen / hidden tab; pixel ratio
  capped at 1.5; proper geometry/material disposal.
- `3d-model-glb.tsx`: rAF loop pauses off-screen / hidden tab; pixel ratio cap.
- `EyeBall.tsx`: render/mixer work skipped while off-screen or tab hidden
  (loop stays alive so the intro animation state machine is untouched).

### Fonts
- Century Gothic subset (Latin + punctuation) → WOFF: **1.15 MB → 88 KB**,
  TTF kept as fallback source.
- Font Awesome subset to the ~90 icons actually used → WOFF: **1.15 MB → 18 KB**.
- `font-awesome-pro.css` pruned (unused icons + duotone rules): **454 → 20 KB**.
- `font-display: swap` everywhere.

### Media
- `black.gif` 319 KB → `black.webp` 23 KB; `white.gif` 178 KB → `white.webp` 19 KB.

### Delivery
- `next.config.mjs`: `Cache-Control: public, max-age=31536000, immutable` for
  `/assets/*`, `/models/*`, `/clients/*` and root media; AVIF/WebP enabled for
  `next/image`.

## Expected results
- Initial network weight (light home): ~41 MB → **~2–3 MB** (cart model loads
  later, near the CTA section, now 14.7 MB → further reducible with Draco).
- Dark home no longer hangs Lighthouse → becomes measurable/indexable.
- Mobile performance score should move from ~41 to ~75–90 (re-run PSI after
  deploy to confirm).

## Verify after applying
1. `yarn build` (or `npm run build`)
2. Test light + dark home locally — check cart animation, awards hover,
   eyeball intro, dart intro.
3. Re-run PageSpeed Insights on the deployed preview.
