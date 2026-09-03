import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 pb-safe border-t border-[var(--border)] bg-[var(--bg)] text-xs text-muted-strong">
      <div className="mx-auto max-w-6xl px-gutter">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-solid" />
              <span className="font-bold text-sm text-[var(--text)]">INCP</span>
            </span>
            <span className="text-muted-strong">
              <span className="hidden sm:inline">· </span>Inventory Network Coordination Platform
            </span>
          </div>

          {/* Links: touch-friendly rows on phones, inline from sm */}
          <nav aria-label="Footer" className="-mx-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex min-h-10 items-center px-2 rounded hover:text-[var(--text)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://iimcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1 px-2 rounded hover:text-brand-text transition-colors"
            >
              <span>Live Console</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-[11px]">
          <p>© 2026 Techionyx. All rights reserved.</p>
          <p>Built for multi-location enterprise logistics.</p>
        </div>
      </div>
    </footer>
  );
}
