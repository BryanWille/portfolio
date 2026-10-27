/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: "#FAFAF9",
          surface: "#FFFFFF",
          border: "#E2E8F0",
          text: "#0F172A",
          muted: "#475569",
          accent: "#064E3B",
          forest: "#064E3B",
          "forest-hover": "#04392B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        editorial:
          "0 1px 2px 0 rgba(15, 23, 42, 0.03), 0 1px 3px 0 rgba(15, 23, 42, 0.03)",
        "editorial-hover":
          "0 10px 30px -6px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
      },
    },
  },
  plugins: [],
};
