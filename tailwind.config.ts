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
        band: rgb("band"),
        surface: {
          DEFAULT: rgb("surface-1"),
          1: rgb("surface-1"),
          2: rgb("surface-2"),
        },
        foreground: rgb("text"),
        muted: {
          DEFAULT: rgb("text-2"),
          foreground: rgb("text-2"),
          /* Contrast-safe muted for small text in both themes. */
          text: rgb("muted-text"),
        },
        border: {
          DEFAULT: rgb("border"),
          hover: rgb("border-hover"),
        },
        ring: rgb("ring"),
        "on-brand": rgb("on-brand"),
        "hero-edge": rgb("hero-edge"),

        /* ── Brand ───────────────────────────────────────────────── */
        brand: {
          DEFAULT: rgb("brand"),
          hover: rgb("brand-hover"),
          accent: rgb("brand-accent"),
          muted: rgb("brand-muted"),
          foreground: rgb("on-brand"),
          /* Use `solid` for filled buttons and `text` for brand-coloured
             type; both stay legible in dark theme where the raw brand
             is only 1.84:1 against the background. */
          solid: rgb("brand-solid"),
          "solid-hover": rgb("brand-solid-hover"),
          text: rgb("brand-text"),
        },

        /* ── Semantic (DEFAULT = fill, .text = legible as type) ──── */
        success: { DEFAULT: rgb("success"), text: rgb("success-text") },
        warning: { DEFAULT: rgb("warning"), text: rgb("warning-text") },
        info: { DEFAULT: rgb("info"), text: rgb("info-text") },
        destructive: { DEFAULT: rgb("danger"), text: rgb("danger-text") },

        /* ── Legacy aliases (older markup keeps resolving) ───────── */
        scarlet: rgb("brand-solid"),
        crimson: rgb("brand-solid-hover"),
        silver: rgb("text-2"),
        accent: {
          DEFAULT: rgb("brand-accent"),
          dark: rgb("brand-hover"),
        },
        "bg-soft": rgb("surface-2"),
        "bg-card": rgb("surface-1"),
        "muted-text": rgb("text-2"),
        "muted-strong": rgb("text"),
        "border-hover": rgb("border-hover"),
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-lg)",
        "2xl": "var(--shadow-lg)",
        brand: "var(--shadow-brand)",
      },
      ringColor: {
        DEFAULT: "rgb(var(--ring-rgb) / 0.7)",
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
