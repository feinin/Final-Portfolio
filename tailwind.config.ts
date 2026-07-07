import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1115",
        surface: "#171A21",
        surface2: "#1D212B",
        grid: "#232733",
        paper: "#E8E6E1",
        muted: "#8B92A0",
        teal: "#4FD1C5",
        amber: "#E8A33D",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-paper":
          "linear-gradient(#232733 1px, transparent 1px), linear-gradient(90deg, #232733 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "28px 28px",
      },
    },
  },
  plugins: [],
};
export default config;
