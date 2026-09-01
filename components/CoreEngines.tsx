"use client";

import { ScrollReveal } from "./ScrollReveal";
import {
  Boxes,
  History,
  Send,
  Clock,
  TrendingUp,
  LifeBuoy,
} from "lucide-react";

export function CoreEngines() {
  const engines = [
    {
      num: "01",
      title: "Inventory State Engine",
      subtitle: "SKU Catalog & Atomic State Machine",
      desc: "Maintains triple-state stock balances (Available, Reserved, In-Transit) per SKU. Applies location-specific safety reorder thresholds with automatic reserve locking during pending dispatches.",
      specs: ["Atomic Reserve Locking", "Criticality Tiering", "Per-Site Reorder Overrides"],
    },
    {
      num: "02",
      title: "Immutable Movement Ledger",
      subtitle: "PostgreSQL Kernel-Enforced Audit",
      desc: "Tamper-proof financial-grade ledger capturing every physical stock increment and decrement. Database triggers reject direct UPDATE and DELETE mutations to prevent insider fraud.",
      specs: ["Append-Only Architecture", "Trigger-Level Mutation Block", "Cryptographic Hashes"],
    },
    {
      num: "03",
      title: "Multi-Tier Transfer Engine",
      subtitle: "Inter-Facility Chain of Custody",
      desc: "Coordinates multi-phase material transfers across the 3-tier topology. Enforces hierarchical approvals (Site > Hub > HQ), carrier driver assignment, and destination delivery confirmation.",
      specs: ["Hierarchical Approval Chains", "Carrier Tracking Metadata", "Tamper-Proof Receipt Signoff"],
    },
    {
      num: "04",
      title: "Shift Reconciliation Engine",
      subtitle: "Opening Snapshot Freezing",
      desc: "Captures a frozen stock snapshot at shift start. Tracks shift consumption, temporary non-fungible tool checkouts, and automatically flags discrepancy anomalies at shift close.",
      specs: ["Opening Snapshot Snapshots", "Tool Issue / Return Scanning", "Automated Anomaly Scoring"],
    },
    {
      num: "05",
      title: "Predictive Depletion Engine",
      subtitle: "Rolling Velocity Forecasting",
      desc: "Computes weighted rolling 7-day and 30-day consumption velocity against supplier lead-time curves. Automatically drafts purchase orders with 1-click approval before stockouts breach.",
      specs: ["Lead-Time Reliability Curve", "Stockout Risk Scoring", "Automated PO Generation"],
    },
    {
      num: "06",
      title: "ITSM Facility Ticket Engine",
      subtitle: "Automated SLA Escalation Cron",
      desc: "Tracks physical plant machinery faults and facility tickets. Automated background cron jobs evaluate SLA breach deadlines every 15 minutes, auto-escalating tickets up the hierarchy.",
      specs: ["15-Minute Cron Evaluator", "Hierarchy Auto-Escalation", "Location-Scoped Comments"],
    },
  ];

  return (
    <section id="specification" className="py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <div className="text-xs font-mono text-brand-text tracking-widest uppercase font-bold">
              [ CORE SYSTEM MODULES // SUBSYSTEM DEEP DIVE ]
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--text)] tracking-tight leading-[1.08] font-sans">
              Six modular engines. <br />
              <span className="text-brand-text">One synchronized ledger.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-sm sm:text-base text-muted-strong leading-relaxed font-sans">
              Designed as independent, hardened subsystems that interlock cleanly through shared
              domain invariants and atomic PostgreSQL transactions.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Engine Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--border)]">
          {engines.map((eng, idx) => (
            <ScrollReveal key={eng.num} delay={idx * 60}>
              <div className="h-full p-8 border-r border-b border-[var(--border)] bg-[var(--surface-1)] flex flex-col justify-between hover:bg-[var(--surface-2)] transition-colors">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-muted-strong pb-4 border-b border-[var(--border)]">
                    <span className="text-brand-text font-bold font-mono">// ENGINE {eng.num}</span>
                    <span>ACTIVE</span>
                  </div>

                  <h3 className="mt-6 text-xl font-medium text-[var(--text)] tracking-tight font-sans">
                    {eng.title}
                  </h3>
                  <div className="mt-1 text-xs font-mono text-muted-strong">{eng.subtitle}</div>

                  <p className="mt-4 text-xs sm:text-sm text-muted-strong leading-relaxed font-sans">
                    {eng.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] space-y-1.5 font-mono text-xs text-muted-strong">
                  {eng.specs.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-solid" />
                      <span>{s}</span>
                    </div>
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
