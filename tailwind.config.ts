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
      screens: {
        xs: "400px",
        "3xl": "1800px",
      },
      colors: {
        /* ── Surfaces & text (theme-aware) ───────────────────────── */
        background: rgb("bg"),
        band: rgb("band"),
        surface: {
          DEFAULT: rgb("surface-1"),
          1: rgb("surface-1"),
          2: rgb("surface-2"),
          raised: rgb("surface-raised"),
        },
        foreground: rgb("text"),
        muted: {
          DEFAULT: rgb("text-2"),
          foreground: rgb("text-2"),
          /* Use `strong` for body copy on cards; the base token is
             3.33:1 on the dark #3F4F62 card and fails as small text. */
          strong: rgb("text-2-strong"),
        },
        border: {
          DEFAULT: rgb("border"),
          hover: rgb("border-hover"),
          subtle: rgb("border-subtle"),
        },
        ring: rgb("ring"),
        "on-brand": rgb("on-brand"),

        /* ── Brand ───────────────────────────────────────────────── */
        brand: {
          DEFAULT: rgb("brand"),
          hover: rgb("brand-hover"),
          accent: rgb("brand-accent"),
          muted: rgb("brand-muted"),
          foreground: rgb("on-brand"),
          /* `solid` for filled controls, `text` for brand-coloured type.
             Both stay legible in dark theme, where the raw brand is
             1.62:1 against the background. */
          solid: rgb("brand-solid"),
          "solid-hover": rgb("brand-solid-hover"),
          text: rgb("brand-text"),
        },

        /* ── Accents: blue is the primary product accent, purple the
           secondary / AI / premium one. `.text` variants are legible
           on light surfaces, where the raw accents are decorative. ── */
        "accent-blue": {
          DEFAULT: rgb("accent-blue"),
          soft: rgb("accent-blue-soft"),
          text: rgb("accent-blue-text"),
        },
        "accent-purple": {
          DEFAULT: rgb("accent-purple"),
          soft: rgb("accent-purple-soft"),
          text: rgb("accent-purple-text"),
        },

        /* ── Semantic (DEFAULT = fill, .text = legible as type) ──── */
        success: { DEFAULT: rgb("success"), text: rgb("success-text") },
        warning: { DEFAULT: rgb("warning"), text: rgb("warning-text") },
        info: { DEFAULT: rgb("info"), text: rgb("info-text") },
        destructive: { DEFAULT: rgb("danger"), text: rgb("danger-text") },

        /* ── Achromatic ramp — hue 0, saturation 0%. The only palette. ─ */
        gray: {
          0: rgb("g-0"),
          50: rgb("g-50"),
          100: rgb("g-100"),
          200: rgb("g-200"),
          300: rgb("g-300"),
          400: rgb("g-400"),
          500: rgb("g-500"),
          600: rgb("g-600"),
          700: rgb("g-700"),
          800: rgb("g-800"),
          900: rgb("g-900"),
          950: rgb("g-950"),
          1000: rgb("g-1000"),
        },

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
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      /* Sharp-edge shape lock, ported from Techionyx: nothing on the site
         is rounder than 4px. `full` is kept for pills, dots, and avatars,
         which read as shapes rather than as panels. */
      borderRadius: {
        none: "0",
        xs: "1px",
        sm: "2px",
        DEFAULT: "2px",
        md: "2px",
        lg: "3px",
        xl: "4px",
        "2xl": "4px",
        "3xl": "4px",
        full: "999px",
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
