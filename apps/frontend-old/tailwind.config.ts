import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
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
        accent: colors.red,
        black: {
          DEFAULT: "#060504",
        },
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

export default config;
