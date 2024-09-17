/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
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
        timelineprimary: "var(--timeline-primary)",
        timelinesecondary: "var(--timeline-secondary)",
        timelinetertiary: "var(--timeline-tertiary)",
      },
      scale: {
        "-100": "-1",
      },
    },
  },
  plugins: [],
};
