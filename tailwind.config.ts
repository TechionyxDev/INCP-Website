import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        "bg-card": "var(--card)",
        foreground: "var(--text)",
        "muted-text": "var(--text-muted)",
        "muted-strong": "var(--text-muted-strong)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        // Restricted 5-color palette (Updated to deep red #8A0000):
        scarlet: "#8A0000",
        crimson: "#600000",
        silver: "#C0C0C0",
        white: "#FFFFFF",
        black: "#050505",
        accent: {
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "pulse-dot": "pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
