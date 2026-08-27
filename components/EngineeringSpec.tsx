"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Check, X } from "lucide-react";

export function EngineeringSpec() {
  const comparison = [
    {
      dimension: "Inventory State Synchronization",
      traditional: "Nightly batch sync or manual spreadsheet updates. High data drift across locations.",
      incp: "Microsecond atomic state engine tracking Available, Reserved, and In-Transit quantities.",
    },
    {
      dimension: "Inter-Facility Transfers",
      traditional: "Phone calls and paper slips. Frequent unaccounted stock loss between regional hubs.",
      incp: "Strict 4-stage custody lifecycle (Pending > Approved > Dispatched > Delivered) with row locks.",
    },
    {
      dimension: "Shift Audits & Shrinkage",
      traditional: "Reconciliation performed monthly. Theft and consumption drift go undetected.",
      incp: "Cryptographic Opening Snapshot freezing with automated discrepancy computation at shift close.",
    },
    {
      dimension: "Procurement & Reorders",
      traditional: "Reactive ordering after stockouts occur. Unpredictable vendor lead times.",
      incp: "Rolling consumption velocity forecasting with automated PO generation before reorder breach.",
    },
    {
      dimension: "Historical Auditability",
      traditional: "Standard tables allowing UPDATE and DELETE queries. Easily altered by rogue accounts.",
      incp: "Tamper-proof PostgreSQL triggers physically blocking historical row modifications.",
    },
    {
      dimension: "Operational Ticketing (ITSM)",
      traditional: "Generic helpdesk tickets with manual reminders and frequent SLA breaches.",
      incp: "Automated cron jobs that auto-escalate facility fault tickets up the 3-tier hierarchy every 15m.",
    },
  ];

  return (
    <section id="engineering" className="py-24 sm:py-32 border-b border-[var(--border)] bg-band">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <div className="text-xs font-mono text-brand-text tracking-widest uppercase font-bold">
              [ TECHNICAL SPECIFICATION // ARCHITECTURE COMPARISON ]
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--text)] tracking-tight leading-[1.08] font-sans">
              Engineering comparison. <br />
              <span className="text-brand-text">Traditional ERP vs. INCP OS.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-sm sm:text-base text-muted leading-relaxed font-sans">
              Traditional ERPs treat multi-site inventory as static balance records. INCP treats
              every physical movement, shift handover, and supply order as an atomic, immutable event.
            </p>
          </ScrollReveal>
        </div>

        {/* Technical Comparison Table */}
        <div className="mt-14 border border-[var(--border)] bg-[var(--surface-1)] overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface-2)] text-muted">
                <th className="py-4 px-6 font-bold uppercase w-1/4">Operational Layer</th>
                <th className="py-4 px-6 font-bold uppercase w-3/8 text-muted">
                  Conventional ERP / Siloed Spreadsheets
                </th>
                <th className="py-4 px-6 font-bold uppercase w-3/8 text-brand-text bg-brand-solid/5">
                  INCP Coordination Platform
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {comparison.map((row, idx) => (
                <tr key={row.dimension} className="hover:bg-[var(--surface-2)] transition-colors">
                  <td className="py-5 px-6 font-bold text-[var(--text)] font-sans text-sm">
                    {row.dimension}
                  </td>
                  <td className="py-5 px-6 text-muted font-sans text-xs leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <X className="h-4 w-4 text-brand-text shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-[var(--text)] font-sans text-xs leading-relaxed bg-brand-solid/5 font-medium">
                    <div className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-brand-text shrink-0 mt-0.5" />
                      <span>{row.incp}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
