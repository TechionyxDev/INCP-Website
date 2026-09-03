"use client";

import { ScrollReveal } from "./ScrollReveal";
import { GitFork, History, TrendingUp, ShieldCheck } from "lucide-react";

export function PlatformOverview() {
  const pillars = [
    {
      icon: GitFork,
      title: "Multi-Tier Topology",
      desc: "Model your network from central headquarters down through regional distribution hubs to field sites and extraction quarries.",
    },
    {
      icon: History,
      title: "Immutable Ledger",
      desc: "Every stock adjustment and transfer is written to an append-only ledger enforced by database triggers that prevent tampering.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Replenishment",
      desc: "Forecast stock depletion based on rolling consumption velocity and vendor lead times to prevent unexpected site downtime.",
    },
    {
      icon: ShieldCheck,
      title: "Zero-Trust Security",
      desc: "Enforce strict role-based permissions, two-factor authentication, and audited chain of custody across every location.",
    },
  ];

  return (
    <section id="platform" className="py-section border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-gutter">
        <div className="max-w-2xl">
          <ScrollReveal delay={0}>
            <p className="text-xs font-semibold text-brand-text tracking-wider uppercase">
              Platform Architecture
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-h2 font-medium tracking-tight text-[var(--text)]">
              An operating system for every facility.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-base text-muted-strong leading-relaxed">
              INCP replaces disconnected spreadsheets and legacy ERPs with a unified platform that keeps physical inventory in sync across your entire organization.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Clean Pillars: 1 col on phones, 2 on tablets, 4 from lg */}
        <div className="mt-section-gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 sm:gap-y-10">
          {pillars.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 80}>
              <div className="flex flex-col justify-between h-full pt-5 sm:pt-6 border-t border-[var(--border)]">
                <div>
                  <item.icon className="h-5 w-5 text-brand-text" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] text-muted-strong leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
