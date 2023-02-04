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
        gray: colors.stone,
        accent: colors.orange,
        black: {
          DEFAULT: "#101010",
        },
      },
      animation: {
        "text-spin": "spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};
