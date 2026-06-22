/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        "dart-fade-in-up": {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "dart-fade-in-up": "dart-fade-in-up 0.45s ease-out forwards",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

