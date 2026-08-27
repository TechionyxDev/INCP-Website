"use client";

import { Sun, Moon } from "lucide-react";
import { useSiteTheme } from "./useSiteTheme";

interface ThemeToggleProps {
  /** True while the toggle floats over the dark hero band in either theme. */
  overHero?: boolean;
}

export function ThemeToggle({ overHero = false }: ThemeToggleProps) {
  const { theme, mounted, toggle } = useSiteTheme();

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full border border-border opacity-0" />;
  }

  const chrome = overHero
    ? "border-white/20 bg-white/10 text-on-brand hover:bg-white/20"
    : "border-border bg-surface-1 text-foreground hover:border-border-hover";

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label="Toggle dark/light theme"
      className={`inline-flex items-center justify-center h-9 w-9 rounded-full border transition-colors duration-200 ${chrome}`}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
