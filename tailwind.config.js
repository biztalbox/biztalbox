/** @type {import('tailwindcss').Config} */
module.exports = {
  /** Must match `next-themes` `attribute="data-theme"` on `<html>` (Tailwind CLI loads this file, not `.ts`). */
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "hero-orbit": "hero-orbit 22s linear infinite",
      },
      keyframes: {
        "hero-orbit": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

