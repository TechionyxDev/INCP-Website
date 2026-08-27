"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section className="relative pt-36 sm:pt-48 pb-20 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-1 text-xs text-muted mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span>Inventory Network Coordination Platform</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text)] leading-[1.08] max-w-4xl mx-auto">
            Coordination for complex <br className="hidden sm:inline" />
            <span className="text-brand-text">physical inventory.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Synchronize stock balances, inter-hub transfers, shift handovers, and predictive replenishment across your headquarters, regional hubs, and field sites.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-hover text-brand-foreground px-7 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[var(--border)] hover:border-brand hover:text-brand-text px-7 py-3.5 text-sm font-semibold transition-all text-[var(--text)]"
            >
              Explore Platform
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
