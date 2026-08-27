import type { Config } from "tailwindcss";

/** Build a Tailwind colour that supports opacity modifiers from a `--x-rgb` var. */
const rgb = (v: string) => `rgb(var(--${v}-rgb) / <alpha-value>)`;

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
        /* ── Surfaces & text (theme-aware) ───────────────────────── */
        background: rgb("bg"),
        surface: {
          DEFAULT: rgb("surface-1"),
          1: rgb("surface-1"),
          2: rgb("surface-2"),
        },
        foreground: rgb("text"),
        band: rgb("band"),
        muted: {
          DEFAULT: rgb("text-2"),
          foreground: rgb("text-2"),
        },
        border: {
          DEFAULT: rgb("border"),
          hover: rgb("border-hover"),
        },

        /* ── Brand ───────────────────────────────────────────────── */
        brand: {
          DEFAULT: rgb("brand"),
          hover: rgb("brand-hover"),
          muted: rgb("brand-muted"),
          foreground: rgb("on-brand"),
          text: rgb("brand-text"),
        },
        accent: {
          DEFAULT: rgb("accent"),
          dark: rgb("brand-hover"),
        },

        /* ── Semantic ────────────────────────────────────────────── */
        success: { DEFAULT: rgb("success"), text: rgb("success-text") },
        warning: { DEFAULT: rgb("warning"), text: rgb("warning-text") },
        info: { DEFAULT: rgb("info"), text: rgb("info-text") },
        destructive: { DEFAULT: rgb("danger"), text: rgb("danger-text") },

        /* ── Legacy aliases (kept so existing markup keeps working) ─ */
        scarlet: rgb("brand"),
        crimson: rgb("brand-hover"),
        silver: rgb("text-2"),
        "bg-soft": rgb("surface-2"),
        "bg-card": rgb("surface-1"),
        "muted-text": rgb("text-2"),
        "muted-strong": rgb("text"),
        "border-hover": rgb("border-hover"),
        ink: rgb("bg"),
        canvas: rgb("bg"),
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-lg)",
        "2xl": "var(--shadow-lg)",
        brand: "0 12px 32px -12px rgb(var(--brand-rgb) / 0.55)",
      },
      ringColor: {
        DEFAULT: "rgb(var(--accent-rgb) / 0.6)",
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
