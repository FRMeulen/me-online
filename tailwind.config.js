/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        highlight: "var(--highlight)",
        bgprimary: "var(--background-primary)",
        bgsecondary: "var(--background-secondary)",
        bgtertiary: "var(--background-tertiary)",
        bgaccent: "var(--background-accent)",
        textprimary: "var(--text-primary)",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [],
};
