/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    data: {
      show: 'show="true"',
      active: 'active="true"',
    },
    fontFamily: {
      sans: ["custom", "helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        gray: colors.neutral,
        accent: colors.emerald,
      },
      animation: {
        "text-spin": "spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};
