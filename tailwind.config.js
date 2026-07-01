/** @type {import('tailwindcss').Config} */
module.exports = {
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
