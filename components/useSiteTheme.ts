"use client";

import { useEffect, useState } from "react";

export type SiteTheme = "dark" | "light";

const KEY = "incp-theme";

function apply(theme: SiteTheme) {
  localStorage.setItem(KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
}

/**
 * Single source of truth for the site theme. Every consumer observes the
 * `data-theme` attribute, so toggling from anywhere (header, embedded demo)
 * keeps the rest in sync.
 */
export function useSiteTheme() {
  const [theme, setTheme] = useState<SiteTheme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem(KEY) as SiteTheme | null) ?? "dark";
    apply(saved);
    setTheme(saved);

    const observer = new MutationObserver(() => {
      setTheme((document.documentElement.getAttribute("data-theme") as SiteTheme) ?? "dark");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return {
    theme,
    mounted,
    toggle: () => apply(theme === "dark" ? "light" : "dark"),
  };
}
