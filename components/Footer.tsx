import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 border-t border-[var(--border)] bg-[var(--bg)] text-xs text-muted-strong">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-solid" />
            <span className="font-bold text-sm text-[var(--text)]">INCP</span>
            <span className="text-muted-strong">· Inventory Network Coordination Platform</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#platform" className="hover:text-[var(--text)] transition-colors">
              Platform
            </a>
            <a href="#features" className="hover:text-[var(--text)] transition-colors">
              Features
            </a>
            <a href="#security" className="hover:text-[var(--text)] transition-colors">
              Security
            </a>
            <a href="#pricing" className="hover:text-[var(--text)] transition-colors">
              Pricing
            </a>
            <a
              href="https://iimcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-text transition-colors inline-flex items-center gap-1"
            >
              <span>Live Console</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Techionyx. All rights reserved.</p>
          <p>Built for multi-location enterprise logistics.</p>
        </div>
      </div>
    </footer>
  );
}
