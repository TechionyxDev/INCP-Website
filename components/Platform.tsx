import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import {
  Boxes,
  History,
  Send,
  LifeBuoy,
  ShoppingCart,
  Clock,
  ScanLine,
  TrendingUp,
} from "lucide-react";

export function Platform() {
  const pillars = [
    {
      num: "01",
      icon: Boxes,
      title: "Inventory State Engine",
      desc: "Atomic tracking across available, reserved, and in-transit states with location-level reorder point overrides.",
      tags: ["Available", "Reserved", "In-Transit"],
    },
    {
      num: "02",
      icon: History,
      title: "Movement Ledger",
      desc: "Tamper-proof audit trail enforced by PostgreSQL triggers preventing UPDATE and DELETE mutations.",
      tags: ["Immutable", "Append-Only", "Audited"],
    },
    {
      num: "03",
      icon: Send,
      title: "Logistics & Transfers",
      desc: "End-to-end custody tracking across pending, approved, dispatched, and delivered lifecycle stages.",
      tags: ["Approval Chain", "Reservations", "Receipts"],
    },
    {
      num: "04",
      icon: LifeBuoy,
      title: "ITSM System Tickets",
      desc: "Operational fault tracking with automatic SLA escalation paths up the 3-tier location hierarchy.",
      tags: ["SLA Deadlines", "Auto-Escalate", "Comments"],
    },
    {
      num: "05",
      icon: ShoppingCart,
      title: "Procurement & POs",
      desc: "Automated vendor reliability scoring, expected lead times, overdue PO checkers, and goods receipt.",
      tags: ["Scorecards", "Lead Times", "PO Lifecycle"],
    },
    {
      num: "06",
      icon: Clock,
      title: "Shift Reconciliation",
      desc: "Opening snapshots, material consumption logging, temporary tool issues, and discrepancy detection.",
      tags: ["Opening Snapshots", "Discrepancy Engine"],
    },
    {
      num: "07",
      icon: ScanLine,
      title: "Asset Registry",
      desc: "Non-fungible machinery tracking, QR/RFID tag scanning, custodianship history, and maintenance due dates.",
      tags: ["Tag Scanner", "Maintenance", "Relocations"],
    },
    {
      num: "08",
      icon: TrendingUp,
      title: "Predictive Alert Engine",
      desc: "Rolling weighted consumption forecasting that anticipates stockouts before supplier lead time thresholds.",
      tags: ["Depletion Forecast", "Risk Scores"],
    },
  ];

  return (
    <section id="platform" className="relative py-28 sm:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-1)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
              The Platform
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-[1.1]">
              One operating system <br />
              <span className="text-brand-text">for every location.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
              INCP combines eight modular engines into a cohesive control center — giving operations
              leaders immediate visibility across HQ, regional hubs, and field sites.
            </p>
          </ScrollReveal>
        </div>

        {/* Real App Screenshot Showcase */}
        <ScrollReveal delay={300} className="mt-14">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-3 sm:p-4 shadow-2xl overflow-hidden hover:border-brand/40 transition-colors">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-surface-2">
              <Image
                src="/images/screenshot-dashboard.png"
                alt="INCP Dashboard Master View"
                fill
                className="object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="mt-3 px-2 flex flex-wrap items-center justify-between text-xs text-muted font-mono gap-2">
              <span>Actual Production Screenshot · Live Dashboard Overview</span>
              <span>17 Modules · 90+ REST Endpoints</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 Platform Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 60}>
              <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 transition-all duration-300 hover:border-brand hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand-text flex items-center justify-center border border-brand/20 group-hover:scale-105 transition-transform">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-[var(--text)] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2 py-0.5 text-[10px] font-mono text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
