# Performance Optimizations — kaise apply karein

Ye folder (`_perf_optimizations/`) dev branch ke against banaye gaye optimized
files rakhta hai. Aapki working tree abhi `main` pe thi, isliye files ko
directly overwrite nahi kiya — taaki main branch me galti se mix na ho.

## Option 1 (recommended): script chalao
PowerShell kholo aur:

    cd "C:\Users\HP\Documents\Biztal Box\biztalbox.com\_perf_optimizations"
    powershell -ExecutionPolicy Bypass -File .\apply.ps1

Script khud: dev checkout karega -> files copy karega ->
`perf/speed-optimizations` branch pe commit karega.

## Option 2: manual
1. `git checkout dev` (working tree clean ho)
2. `files\` ke andar ka sab kuch repo root pe copy/overwrite karo
3. `git add -A && git commit`

## Baad me (dono options ke baad)
- `yarn build` chala ke verify karo
- Light + dark home visually check karo (cart animation, awards hover,
  eyeball intro, dart intro)
- Deploy karke PageSpeed dobara chalao
- Extra squeeze (optional): `npm i -D @gltf-transform/cli && npm run optimize:models`
  (cart_box 14.7MB ko Draco se ~3-5MB tak aur gira dega)

Pura changelog: `files/docs/PERFORMANCE-OPTIMIZATIONS.md`
