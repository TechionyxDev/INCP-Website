"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero(): React.JSX.Element {
  return (
    /* The serene system has no dedicated hero-background colour (the
       accent is scoped to secondary actions and focus), so the hero sits
       on the page background with a single soft brand wash rather than a
       high-contrast slab. */
    <section className="relative overflow-hidden pt-36 sm:pt-48 pb-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(64rem 32rem at 50% -12%, rgb(var(--brand-accent-rgb) / 0.16), transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-1 px-3.5 py-1 text-xs text-muted-strong mb-8 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-solid" />
            <span>Inventory Network Coordination Platform</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl mx-auto">
            Coordination for complex <br className="hidden sm:inline" />
            <span className="text-brand-text">physical inventory.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-lg sm:text-xl text-muted-strong max-w-2xl mx-auto leading-relaxed">
            Synchronize stock balances, inter-hub transfers, shift handovers, and predictive replenishment across your headquarters, regional hubs, and field sites.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground px-7 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-brand"
            >
              <span>View the Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border bg-surface-1 text-foreground hover:border-border-hover hover:bg-surface-2 px-7 py-3.5 text-sm font-semibold transition-all"
            >
              Explore Platform
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
