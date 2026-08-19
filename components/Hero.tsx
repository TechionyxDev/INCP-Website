"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section className="relative pt-36 sm:pt-48 pb-20 sm:pb-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-1 text-xs text-silver mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-scarlet" />
            <span>Inventory Network Coordination Platform</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text)] leading-[1.08] max-w-4xl mx-auto">
            Coordination for complex <br className="hidden sm:inline" />
            <span className="text-scarlet">physical inventory.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-lg sm:text-xl text-silver max-w-2xl mx-auto leading-relaxed">
            Synchronize stock balances, inter-hub transfers, shift handovers, and predictive replenishment across your headquarters, regional hubs, and field sites.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-scarlet hover:bg-crimson text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-[var(--border)] hover:border-scarlet hover:text-scarlet px-7 py-3.5 text-sm font-semibold transition-all text-[var(--text)]"
            >
              Explore Platform
            </a>
          </div>
        </ScrollReveal>

        {/* Minimal Screenshot Frame */}
        <ScrollReveal delay={400} className="mt-16 sm:mt-20">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-2 sm:p-3 shadow-sm">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black">
              <Image
                src="/images/screenshot-dashboard.png"
                alt="INCP Production Platform"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
