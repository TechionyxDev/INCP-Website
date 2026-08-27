import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import {
  FileSpreadsheet,
  Truck,
  AlertTriangle,
  Users2,
  Wrench,
} from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Stock scattered across locations",
      desc: "Static spreadsheets and siloed legacy systems mean no single source of truth for what's on site, in reserve, or in transit.",
    },
    {
      icon: Truck,
      title: "Transfers lost in communication",
      desc: "Manual dispatch calls and unverified handover slips cause stock to disappear between regional hubs and remote sites.",
    },
    {
      icon: AlertTriangle,
      title: "Theft & discrepancies undetected",
      desc: "Shift end discrepancies go unnoticed until monthly reconciliations, making anti-theft audits impossible to enforce.",
    },
    {
      icon: Users2,
      title: "Suppliers with zero reliability scoring",
      desc: "Overdue purchase orders and unreliable vendor lead times stall production lines without predictive warnings.",
    },
    {
      icon: Wrench,
      title: "Maintenance schedules missed",
      desc: "High-value machinery and non-fungible assets drift across locations, missing critical service intervals.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 border-t border-[var(--border)] bg-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-1)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
              The Operations Tax
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-[1.1]">
              Inventory operations is everywhere. <br />
              <span className="text-muted">
                Inventory intelligence is nowhere.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
              Multi-site enterprises run on dozens of disjointed systems that don't synchronize.
              The result is a quiet operational tax on every shift, transfer, and procurement decision.
            </p>
          </ScrollReveal>
        </div>

        {/* Visual & Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 80}>
              <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-7 transition-all duration-300 hover:border-brand hover:-translate-y-1 hover:shadow-lg">
                <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand-text flex items-center justify-center border border-brand/20 group-hover:scale-105 transition-transform">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--text)] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}

          {/* The Solution Fix Card */}
          <ScrollReveal delay={400} className="md:col-span-2 lg:col-span-1">
            <div className="h-full rounded-2xl border border-brand-hover/50 bg-surface-1 p-7 flex flex-col justify-between relative overflow-hidden group hover:border-brand transition-colors">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-brand-text">
                  The INCP Fix
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground tracking-tight">
                  Unified Inventory State Engine
                </h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  Treat multi-tier logistics as a single immutable ledger. Every reserve, transfer,
                  shift log, and maintenance cycle syncs atomically.
                </p>
              </div>

              {/* Illustration Thumbnail */}
              <div className="relative mt-6 h-28 w-full rounded-xl overflow-hidden border border-brand-hover/30 bg-surface-1">
                <Image
                  src="/images/problem-fragmented.png"
                  alt="Fragmented operations unified"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
