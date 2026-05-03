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
          // Imperial Bronze / Terracotta
          50: "#fdf8f5",
          100: "#faeadb",
          200: "#f4d3b0",
          300: "#ebb67f",
          400: "#e0934e",
          500: "#d6782b",
          600: "#c25e21",
          700: "#a2441d",
          800: "#82361d",
          900: "#692e1a",
          950: "#3d160b",
        },
        ink: {
          // Warm dark charcoal / Ink
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
        imperial: {
          // Palace Red
          50: '#fcf3f3',
          100: '#f8e3e4',
          200: '#f1cace',
          300: '#e7a6ad',
          400: '#d97883',
          500: '#c84b59',
          600: '#b03241',
          700: '#942633',
          800: '#7a222c',
          900: '#67212a',
          950: '#380f14',
        },
        jade: {
          50: '#f4fbf7',
          100: '#e4f6eb',
          200: '#c8ead7',
          300: '#9ed5b9',
          400: '#6eb894',
          500: '#489c75',
          600: '#347c5b',
          700: '#2b634a',
          800: '#25503d',
          900: '#204233',
          950: '#11251d',
        },
        paper: {
          DEFAULT: '#fcfbf8',
          dark: '#f0ede1',
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
