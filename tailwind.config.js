/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  darkmode: 'class',
  theme: {
    extend: {
      colors: {
        bgprimary: "#2d2f33",
        bgsecondary: "#1e1e21",
        bgaccent: "#40444a",
        primary: "#57b3ad",
        secondary: "#348c6a",
      },
    },
  },
  plugins: [],
};
