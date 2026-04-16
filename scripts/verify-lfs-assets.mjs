import fs from "node:fs";
import path from "node:path";

const LFS_PREFIX = "version https://git-lfs.github.com/spec/v1";

function isLikelyLfsPointer(buf) {
  const head = buf.slice(0, 200).toString("utf8");
  return head.startsWith(LFS_PREFIX);
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const targets = [
  "public/assets/lite_models",
  "public/models",
];

const suspect = [];
for (const t of targets) {
  for (const f of walk(t)) {
    if (!f.toLowerCase().endsWith(".glb")) continue;
    const buf = fs.readFileSync(f);
    if (isLikelyLfsPointer(buf)) suspect.push(f);
  }
}

if (suspect.length) {
  console.error("\n[LFS] GLB assets are Git LFS pointers (not downloaded):\n");
  for (const f of suspect) console.error(`- ${f}`);
  console.error(
    "\nFix:\n" +
      "- Install Git LFS and pull binaries: `git lfs install` then `git lfs pull`\n" +
      "- On CI/hosting, enable Git LFS checkout (otherwise Next will serve pointer text and GLTFLoader will crash).\n",
  );
  process.exit(1);
}

console.log("[LFS] OK: GLB assets look like binary files.");

