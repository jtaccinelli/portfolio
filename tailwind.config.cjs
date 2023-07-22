/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    data: {
      show: 'show="true"',
      active: 'active="true"',
    },
    fontFamily: {
      sans: ["font", "arial", "sans-serif"],
    },
    extend: {
      colors: {
        gray: colors.neutral,
        accent: colors.emerald,
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
