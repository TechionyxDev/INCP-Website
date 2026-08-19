"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("incp-theme") as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("incp-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-[var(--border)] opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
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
