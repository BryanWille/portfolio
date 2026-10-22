/** @type {import('tailwindcss').Config} */
module.exports = {
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
          bg: "#FAFAFA",
          surface: "#FFFFFF",
          border: "#E5E7EB",
          text: "#111827",
          muted: "#4B5563",
          accent: "#2563EB",
          forest: "#0F5338",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        editorial: "0 1px 2px 0 rgba(17, 24, 39, 0.03), 0 1px 3px 0 rgba(17, 24, 39, 0.04)",
        "editorial-hover": "0 8px 24px -4px rgba(17, 24, 39, 0.06), 0 2px 6px -1px rgba(17, 24, 39, 0.04)",
      },
    },
  },
  plugins: [],
};
