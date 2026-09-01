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
    <section id="platform" className="py-24 sm:py-32 border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <ScrollReveal delay={0}>
            <p className="text-xs font-semibold text-brand-text tracking-wider uppercase">
              Platform Architecture
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text)]">
              An operating system for every facility.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-base text-muted-strong leading-relaxed">
              INCP replaces disconnected spreadsheets and legacy ERPs with a unified platform that keeps physical inventory in sync across your entire organization.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Clean Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 80}>
              <div className="flex flex-col justify-between h-full pt-6 border-t border-[var(--border)]">
                <div>
                  <item.icon className="h-5 w-5 text-brand-text" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-strong leading-relaxed">
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
