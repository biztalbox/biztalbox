import type { Config } from "tailwindcss";

/**
 * Tailwind is scoped to `[data-tw-scope]` only (see `TailwindScope` + route layouts).
 * Preflight is off so Bootstrap / SCSS are not reset.
 *
 * Import `tailwind-tw.css` only via `TailwindScope` on: lite home, /lite, career,
 * graphic, and video routes (UI under src/components/video-page and graphic-page).
 */
const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
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
    // Video/graphic page UI lives outside the route folders, so renaming a
    // route folder never drops these classes.
    "./src/components/video-page/**/*.{js,ts,jsx,tsx}",
    "./src/components/graphic-page/**/*.{js,ts,jsx,tsx}",
    "./src/components/location-pages/**/*.{js,ts,jsx,tsx}",
    "./src/styles/tailwind-tw.css",
  ],
  theme: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
