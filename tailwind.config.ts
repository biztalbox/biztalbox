import type { Config } from "tailwindcss";

/**
 * Tailwind is scoped to `[data-tw-scope]` only (see `TailwindScope` + route layouts).
 * Preflight is off so Bootstrap / SCSS are not reset.
 *
 * Import `tailwind-tw.css` only via `TailwindScope` on: lite home, /lite, career,
 * graphic, and video routes.
 */
const config: Config = {
  important: "[data-tw-scope]",
  content: [
    "./src/components/ashish3dComp/**/*.{js,ts,jsx,tsx}",
    "./src/components/LiteHomePage.tsx",
    "./src/components/TailwindScope.tsx",
    "./src/components/career/**/*.{js,ts,jsx,tsx}",
    "./src/app/_lite/**/*.{js,ts,jsx,tsx}",
    "./src/app/career/**/*.{js,ts,jsx,tsx}",
    "./src/app/graphic/**/*.{js,ts,jsx,tsx}",
    "./src/app/video/**/*.{js,ts,jsx,tsx}",
    "./src/styles/tailwind-tw.css",
  ],
  theme: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
