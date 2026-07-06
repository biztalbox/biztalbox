/**
 * Extra GLB squeeze using gltf-transform (Draco + texture compression).
 *
 * The repo's big GLBs were already optimized (quantization + vertex welding +
 * unused-UV removal + WebP textures) which cut them 55–97%. Running this
 * script locally applies Draco geometry compression on top for another
 * ~60–80% reduction on the remaining geometry-heavy files (cart_box.glb).
 *
 * Usage:
 *   npm i -D @gltf-transform/cli
 *   node scripts/optimize-models.mjs
 *
 * NOTE: drei's useGLTF already handles Draco automatically (decoder loads
 * from Google's CDN), and scene.tsx configures DRACOLoader + meshopt too,
 * so no code change is needed after running this.
 */
import { execSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';

const TARGETS = [
  'public/assets/lite_models/minified/cart_box.glb',
  'public/assets/lite_models/minified/graphic.glb',
  'public/assets/lite_models/minified/webdev.glb',
  'public/assets/lite_models/dartboard2.glb',
  'public/models/b-logo.glb',
  'public/models/eyeball.glb',
];

for (const file of TARGETS) {
  if (!existsSync(file)) {
    console.warn(`skip (missing): ${file}`);
    continue;
  }
  const before = statSync(file).size;
  try {
    execSync(
      `npx gltf-transform optimize "${file}" "${file}" --compress draco --texture-compress webp --simplify false`,
      { stdio: 'inherit' },
    );
    const after = statSync(file).size;
    console.log(
      `${file}: ${(before / 1e6).toFixed(2)}MB -> ${(after / 1e6).toFixed(2)}MB`,
    );
  } catch (e) {
    console.error(`failed: ${file}`, e.message);
  }
}
