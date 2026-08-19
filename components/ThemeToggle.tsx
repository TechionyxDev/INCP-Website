"use client";

import { Sun, Moon } from "lucide-react";
import { useSiteTheme } from "./useSiteTheme";

export function ThemeToggle() {
  const { theme, mounted, toggle } = useSiteTheme();

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full border border-[var(--border)] opacity-0" />;
  }

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label="Toggle dark/light theme"
      className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-[var(--border)] hover:border-scarlet bg-[var(--card)] text-[var(--text)] transition-colors duration-200"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-scarlet" />
      ) : (
        <Moon className="h-4 w-4 text-crimson" />
      )}
    </button>
  );
}
