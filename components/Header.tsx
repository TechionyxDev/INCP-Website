"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          {/* Minimal Wordmark */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="h-3 w-3 rounded-full bg-scarlet" />
            <span className="font-bold text-lg tracking-tight text-[var(--text)]">
              INCP
            </span>
          </a>

          {/* Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-silver hover:text-[var(--text)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 text-sm">
            <ThemeToggle />

            <a
              href="https://iimcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-silver hover:text-scarlet transition-colors"
            >
              <span>Live App</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-scarlet hover:bg-crimson text-white px-5 py-2 text-xs font-semibold tracking-wide transition-all"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[var(--text)]"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[var(--border)] flex flex-col gap-3 text-sm animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-silver hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://iimcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 text-scarlet font-semibold flex items-center justify-between"
            >
              <span>Open Live App</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
