import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
        card: "#111216",
        border: "#23252b",
        muted: "#a1a1aa",
        brand: {
          green: "#16a34a",
          gold: "#c9a227",
          charcoal: "#0d0e11"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 10px 40px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
