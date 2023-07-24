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
      keyframes: {
        reveal: {
          "0%": { opacity: 0 },
          "10%": { opacity: 100 },
          "90%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        reveal: "reveal 3s ease forwards",
      },
    },
  },
  plugins: [],
};
