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
      sans: ["helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        gray: colors.stone,
        accent: colors.orange,
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-100%))",
          },
        },
      },
      animation: {
        "text-spin": "spin 60s linear infinite",
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
