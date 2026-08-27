"use client";

import { X } from "lucide-react";

import type { NavSection } from "./types";

interface SidebarProps {
  readonly sections: readonly NavSection[];
  readonly activeItemId: string;
  readonly onSelect: (itemId: string) => void;
  /** Controls the slide-over on small screens. */
  readonly open: boolean;
  readonly onClose: () => void;
}

/**
 * Persistent left navigation.
 *
 * Fixed on `lg` and up, a focus-trapped-adjacent slide-over below that.
 * The active item is filled with `brand-solid`, which resolves to the
 * spec brand (#4E3C52) in light theme and to the accent (#7C6579) in
 * dark, where the raw brand is only 1.62:1 against the background.
 */
export function Sidebar({
  sections,
  activeItemId,
  onSelect,
  open,
  onClose,
}: SidebarProps): React.JSX.Element {
  return (
    <>
      {/* Scrim — only interactive while the slide-over is open. */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="Primary"
        className={`fixed inset-y-0 left-0 z-50 flex w-[17rem] flex-col border-r border-border bg-surface-1 transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand row */}
        <div className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-border px-5">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-solid text-brand-foreground text-xs font-bold">
              IN
            </span>
            <span className="text-sm font-bold tracking-tight text-foreground">INCP</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="grid h-8 w-8 place-items-center rounded-lg text-muted-strong hover:bg-surface-2 hover:text-foreground lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable nav body */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {sections.map((section) => (
            <div key={section.id} className="mb-6 last:mb-0">
              <p className="px-2 pb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-strong">
                {section.label}
              </p>

              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = item.id === activeItemId;

                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => onSelect(item.id)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                          isActive
                            ? "bg-brand-solid font-semibold text-brand-foreground"
                            : "font-medium text-muted-strong hover:bg-surface-2 hover:text-foreground"
                        }`}
                      >
                        <item.icon className="h-4 w-4 shrink-0" aria-hidden />
                        <span className="truncate">{item.label}</span>

                        {item.badge !== undefined && (
                          <span
                            className={`ml-auto rounded-full px-1.5 py-0.5 text-[0.6875rem] font-semibold tabular-nums ${
                              isActive
                                ? "bg-on-brand/20 text-brand-foreground"
                                : "bg-surface-2 text-muted-strong"
                            }`}
                          >
                            {item.badge}
                            <span className="sr-only"> pending</span>
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer status */}
        <div className="shrink-0 border-t border-border px-5 py-4">
          <div className="flex items-center gap-2 text-xs text-muted-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            <span>All systems operational</span>
          </div>
        </div>
      </aside>
    </>
  );
}
