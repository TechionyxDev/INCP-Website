"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    /* The spec assigns #082533 (brand accent) as the high-contrast hero
       background. It is applied as a full-bleed band that reads as a
       deliberate slab in light theme and as a subtle lift out of the
       #04121A page background in dark theme. */
    <section className="relative overflow-hidden bg-brand-accent pt-36 sm:pt-48 pb-20 sm:pb-28">
      {/* Moody radial wash + hairline base to keep the band from ending flat. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(70rem 38rem at 50% -8%, rgb(var(--brand-solid-rgb) / 0.60), transparent 62%)",
        }}
      />
      {/* Explicit bottom edge. In dark theme #082533 sits only 1.2:1 above
          the #04121A page, so the band needs a drawn boundary to register
          as a distinct surface. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-hero-edge"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs text-brand-muted mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-muted" />
            <span>Inventory Network Coordination Platform</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-on-brand leading-[1.08] max-w-4xl mx-auto">
            Coordination for complex <br className="hidden sm:inline" />
            <span className="text-brand-muted">physical inventory.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Synchronize stock balances, inter-hub transfers, shift handovers, and predictive replenishment across your headquarters, regional hubs, and field sites.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground px-7 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-brand"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 text-on-brand hover:bg-white/10 hover:border-white/35 px-7 py-3.5 text-sm font-semibold transition-all"
            >
              Explore Platform
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
