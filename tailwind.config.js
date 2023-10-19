/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat Brush", "cursive"],
        serifDisplay: ["DM Serif Display", "serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
        sedan: ["Sedan-SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
