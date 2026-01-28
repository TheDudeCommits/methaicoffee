import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#FAF6F3",
          100: "#F5EDE6",
          200: "#E8D5C4",
          300: "#D4B896",
          400: "#B8956A",
          500: "#8B6B4A",
          600: "#5A3B2E",
          700: "#4A3125",
          800: "#3A271E",
          900: "#2A1D16",
        },
        terracotta: {
          50: "#FDF8F6",
          100: "#F9EDE8",
          200: "#F0D9D0",
          300: "#E4BDB0",
          400: "#B97A6A",
          500: "#A66B5B",
          600: "#8B574A",
          700: "#6F4539",
          800: "#5A392F",
          900: "#472D26",
        },
        cream: "#FAF8F5",
        "warm-cream": "#FBF7F2",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Cambria", "Times New Roman", "serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        bebas: ["var(--font-bebas)", "Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"],
      },
      fontSize: {
        display: ["var(--text-display)", { lineHeight: "var(--leading-display)" }],
        title: ["var(--text-title)", { lineHeight: "var(--leading-title)" }],
        heading: ["var(--text-heading)", { lineHeight: "var(--leading-title)" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(90, 59, 46, 0.08)",
        glow: "0 8px 40px rgba(90, 59, 46, 0.12)",
      },
      animation: {
        "float-slow": "float 12s ease-in-out infinite",
        "float-slower": "float 16s ease-in-out infinite",
        "drift": "drift 14s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(6px, -8px) rotate(2deg)" },
          "50%": { transform: "translate(-4px, -14px) rotate(-1deg)" },
          "75%": { transform: "translate(8px, -6px) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

