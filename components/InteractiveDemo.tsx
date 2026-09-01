"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  BarChart3,
  Boxes,
  ClipboardList,
  ExternalLink,
  Layers,
  MousePointerClick,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { AppDemo } from "./demo/AppDemo";
import type { ScreenId } from "./demo/types";

const MODULES: {
  id: ScreenId;
  label: string;
  badge: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  bullets: string[];
  try: string;
}[] = [
  {
    id: "dashboard",
    label: "Control Center",
    badge: "Live cockpit",
    icon: Boxes,
    title: "Network control center",
    desc: "Consolidated KPIs, inventory health per location, and the active alert queue across every connected hub.",
    bullets: [
      "Real-time health status across all connected sites",
      "Stockout and below-reorder alerts ranked by severity",
      "Drilldown from any KPI into the underlying module",
    ],
    try: "Page through the location health table, or click the Items / Transfers KPI to jump modules.",
  },
  {
    id: "inventory",
    label: "Inventory",
    badge: "State engine",
    icon: Layers,
    title: "SKU catalogue & reorder engine",
    desc: "Atomic available vs reserved tracking with per-location reorder thresholds and criticality classification.",
    bullets: [
      "Reserved quantities lock automatically on transfer creation",
      "Material grades, units, and criticality per SKU",
      "Location-level reorder point overrides",
    ],
    try: "Search, filter by category or criticality, sort any column, or deactivate a SKU.",
  },
  {
    id: "transfers",
    label: "Transfers",
    badge: "Custody ledger",
    icon: ArrowLeftRight,
    title: "Multi-tier transfer lifecycle",
    desc: "End-to-end custody tracking across pending, approved, in-transit, delivered, and cancelled states.",
    bullets: [
      "Hierarchical approval chains (Site → Hub → HQ)",
      "Carrier and driver assignment with tracking metadata",
      "Hashed proof of receipt on physical delivery",
    ],
    try: "Filter by status, then click any row to open its custody chain and carrier metadata.",
  },
  {
    id: "shifts",
    label: "Shift Logs",
    badge: "Audit layer",
    icon: ClipboardList,
    title: "Shift logs & discrepancy engine",
    desc: "Opening snapshots freeze stock at shift start; closing counts are reconciled against logged usage.",
    bullets: [
      "Automatic snapshot capture at shift open",
      "Material consumption and tool checkout logging",
      "Instant discrepancy computation on close",
    ],
    try: "Open a shift, filter the log, and expand a row to see the opening-vs-counted reconciliation.",
  },
  {
    id: "analytics",
    label: "Analytics",
    badge: "Intelligence",
    icon: BarChart3,
    title: "14-metric analytics & reporting",
    desc: "Consumption velocity, category composition and turnover, supplier scorecards, and PDF executive exports.",
    bullets: [
      "Weighted rolling consumption velocity curves",
      "Supplier on-time delivery and lead-time scorecards",
      "Styled PDF executive reports in under two seconds",
    ],
    try: "Switch the range, hover the chart and donut, or trigger a PDF export.",
  },
];

export function InteractiveDemo() {
  const [screen, setScreen] = useState<ScreenId>("dashboard");
  const active = MODULES.find((m) => m.id === screen)!;

  return (
    <section
      id="features"
      className="py-24 sm:py-32 border-t border-[var(--border)] bg-band"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <ScrollReveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded border border-brand-solid/40 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
                <MousePointerClick className="h-3.5 w-3.5" />
                Interactive product tour
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1]">
                Not screenshots. <br />
                <span className="text-brand-text">
                  The actual interface, running here.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mt-4 text-sm text-muted-strong leading-relaxed max-w-2xl">
                Five production modules rebuilt with sample data. Click through
                the sidebar, filter tables, expand records, switch the app theme
                — every control below responds exactly as it does in the
                deployed platform.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <a
              href="https://iimcp.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-brand-solid bg-brand-solid/10 hover:bg-brand-solid hover:text-brand-foreground px-5 py-2.5 text-xs font-mono font-bold text-brand-text transition-all shadow-md whitespace-nowrap"
            >
              <span>OPEN THE LIVE APP</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </ScrollReveal>
        </div>

        {/* Module switcher */}
        <ScrollReveal delay={250} className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {MODULES.map((m) => {
              const on = m.id === screen;
              return (
                <button
                  key={m.id}
                  onClick={() => setScreen(m.id)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    on
                      ? "border-brand-solid bg-[var(--surface-1)] shadow-xl shadow-brand -translate-y-1"
                      : "border-[var(--border)] bg-[var(--surface-1)] hover:border-brand-solid/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <m.icon
                      className={`h-5 w-5 ${on ? "text-brand-text" : "text-muted-strong"}`}
                    />
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-brand-muted/20 text-brand-text font-bold whitespace-nowrap">
                      {m.badge}
                    </span>
                  </div>
                  <div className="mt-3 text-xs font-bold text-[var(--text)] truncate">
                    {m.label}
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Live app */}
        <ScrollReveal delay={300} className="mt-6">
          <AppDemo screen={screen} onScreenChange={setScreen} />
        </ScrollReveal>

        {/* Module context strip */}
        <ScrollReveal delay={100} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-brand-text font-bold">
                {active.badge}
              </div>
              <h3 className="mt-2 text-xl font-medium text-[var(--text)] tracking-tight">
                {active.title}
              </h3>
              <p className="mt-3 text-sm text-muted-strong leading-relaxed">
                {active.desc}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-strong font-bold">
                What it does
              </div>
              <ul className="mt-3 space-y-3">
                {active.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-[var(--text)]"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-solid shrink-0" />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-solid/30 bg-brand-solid/5 p-6">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-brand-text font-bold">
                <MousePointerClick className="h-3.5 w-3.5" />
                Try it in the panel above
              </div>
              <p className="mt-3 text-sm text-[var(--text)] leading-relaxed">
                {active.try}
              </p>
              <p className="mt-4 text-[11px] font-mono text-muted-strong leading-relaxed">
                Sample data shown. Production instances run against your own
                tenant with role-scoped access and full audit logging.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
