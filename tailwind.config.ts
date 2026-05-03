import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf8f0",
          100: "#faebd7",
          200: "#f5d5ae",
          300: "#e8b96d",
          400: "#d4983e",
          500: "#c47f25",
          600: "#a6631b",
          700: "#874b18",
          800: "#6e3c1b",
          900: "#5b3319",
          950: "#33190b",
        },
        ink: {
          50: "#f6f6f4",
          100: "#e7e6e1",
          200: "#d0cdc4",
          300: "#b3aea0",
          400: "#9a937e",
          500: "#8b8470",
          600: "#76705f",
          700: "#615b4f",
          800: "#534e45",
          900: "#49443e",
          950: "#282521",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        display: [
          "Playfair Display",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
