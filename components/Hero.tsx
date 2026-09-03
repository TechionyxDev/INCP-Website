"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero(): React.JSX.Element {
  return (
    /* The serene system has no dedicated hero-background colour (the
       accent is scoped to secondary actions and focus), so the hero sits
       on the page background with a single soft brand wash rather than a
       high-contrast slab. */
    <section
      className="relative overflow-hidden pb-[var(--section-y)]"
      style={{ paddingTop: "calc(var(--nav-h) + var(--safe-top) + clamp(3.5rem, 12vw, 8rem))" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(64rem 32rem at 50% -12%, rgb(var(--brand-accent-rgb) / 0.16), transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-gutter text-center">
        <ScrollReveal delay={0}>
          <div className="inline-flex max-w-full items-center gap-2 rounded border border-border bg-surface-1 px-3.5 py-1.5 text-[11px] sm:text-xs text-muted-strong mb-6 sm:mb-8 shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-solid" />
            <span className="truncate">Inventory Network Coordination Platform</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-display font-medium tracking-tight text-foreground max-w-4xl mx-auto">
            Coordination for complex <br className="hidden md:inline" />
            <span className="text-brand-text">physical inventory.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-6 sm:mt-8 text-lead text-muted-strong max-w-2xl mx-auto">
            Synchronize stock balances, inter-hub transfers, shift handovers, and predictive replenishment across your headquarters, regional hubs, and field sites.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href="/dashboard"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors shadow-brand"
            >
              <span>View the Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#platform"
              className="inline-flex min-h-12 items-center justify-center rounded border border-border bg-surface-1 text-foreground hover:border-border-hover hover:bg-surface-2 px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              Explore Platform
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
