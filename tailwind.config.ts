import type { Config } from "tailwindcss";

/**
 * Tailwind uses the `tw-` prefix so utilities never clash with Bootstrap
 * (e.g. `.container`, `.flex`, `.text-center`).
 *
 * Preflight is disabled so Tailwind’s CSS reset does not fight Bootstrap / existing SCSS.
 * Use `tw-` utilities on top of your current styles.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default config;
