"use client";

import { useState, useEffect, useCallback } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export function Header(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = useCallback(() => setMobileOpen(false), []);

  /* Lock body scroll, close on Escape, and close if the viewport grows past
     the mobile breakpoint while the sheet is open. */
  useEffect(() => {
    if (!mobileOpen) return;
    document.documentElement.classList.add("nav-open");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => {
      if (mq.matches) close();
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.documentElement.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [mobileOpen, close]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-safe transition-[background-color,border-color,box-shadow] duration-200 ${
        solid
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-gutter">
        <div
          className={`flex items-center justify-between gap-3 transition-[height] duration-200 ${
            scrolled ? "h-14" : "h-16 sm:h-[4.5rem]"
          }`}
        >
          {/* Wordmark */}
          <a
            href="#"
            className="flex h-11 items-center gap-2 -ml-1 pl-1 pr-2 rounded"
            aria-label="INCP home"
            onClick={close}
          >
            <span className="h-3 w-3 rounded-full bg-brand-solid" />
            <span className="font-bold text-lg tracking-tight text-foreground">INCP</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded text-muted-strong hover:text-foreground hover:bg-surface-2/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 text-sm">
            <ThemeToggle />

            <a
              href="https://iimcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 h-10 px-2 rounded text-muted-strong hover:text-foreground transition-colors"
            >
              <span>Live App</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 rounded bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground px-4 sm:px-5 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap"
              onClick={close}
            >
              Get Started
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden grid h-11 w-11 -mr-2 place-items-center rounded text-foreground hover:bg-surface-2/60 transition-colors"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scrim under the sheet; tapping it closes the menu. */}
      <div
        aria-hidden
        onClick={close}
        className={`md:hidden fixed inset-0 -z-10 bg-background/60 backdrop-blur-sm transition-opacity duration-200 ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile sheet: full remaining height, own scroll, safe-area padding. */}
      <div
        id="mobile-nav"
        className={`md:hidden absolute inset-x-0 top-full border-t border-border bg-background shadow-lg transition-[opacity,transform] duration-200 ease-out ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
        style={{ maxHeight: "calc(100dvh - 100%)" }}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="px-gutter pb-safe overflow-y-auto"
          style={{ maxHeight: "calc(100dvh - 4rem)" }}
          aria-label="Mobile"
        >
          <ul className="py-3 divide-y divide-border-subtle">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  tabIndex={mobileOpen ? 0 : -1}
                  className="flex items-center justify-between min-h-[3.25rem] py-3 text-base text-foreground/90 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://iimcp.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={mobileOpen ? 0 : -1}
                className="flex items-center justify-between min-h-[3.25rem] py-3 text-base font-semibold text-brand-text"
              >
                <span>Open Live App</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
          <div className="pb-5 pt-1">
            <a
              href="#contact"
              onClick={close}
              tabIndex={mobileOpen ? 0 : -1}
              className="flex h-12 w-full items-center justify-center rounded bg-brand-solid text-brand-foreground text-sm font-semibold hover:bg-brand-solid-hover transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
