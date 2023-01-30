/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
      animation: {
        "text-spin": "spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};
