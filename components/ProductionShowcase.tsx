"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Check } from "lucide-react";

export function ProductionShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const screens = [
    {
      label: "DASHBOARD",
      title: "Executive Network Overview",
      desc: "Real-time consolidated inventory balances, active transfer queue health, urgent reorder alerts, and facility status across all 7 connected hubs.",
      image: "/images/screenshot-dashboard.png",
      endpoint: "GET /api/v1/analytics/dashboard",
      features: ["Multi-location aggregation", "Stockout risk warnings", "Real-time transfer status"],
    },
    {
      label: "INVENTORY",
      title: "SKU Catalog & Reorder Engine",
      desc: "Granular material catalogue tracking Available vs Reserved quantities, quality grade specifications (e.g. Copper 99%), and location-specific reorder triggers.",
      image: "/images/screenshot-inventory.png",
      endpoint: "GET /api/v1/inventory/stock",
      features: ["Atomic reserve lock", "Criticality classification", "Custom location overrides"],
    },
    {
      label: "TRANSFERS",
      title: "Multi-Tier Custody Transfers",
      desc: "End-to-end custody tracking across pending, approved, in-transit, and delivered lifecycle stages with carrier assignment and immutable receipt signoff.",
      image: "/images/screenshot-transfers.png",
      endpoint: "GET /api/v1/transfers",
      features: ["Hierarchical approvals", "Carrier tracking metadata", "Receipt hash generation"],
    },
    {
      label: "SHIFTS",
      title: "Shift Reconciliation & Anomaly Engine",
      desc: "Cryptographic opening snapshot capture, shift material consumption logging, temporary tool issue scanning, and automated anomaly discrepancy detection.",
      image: "/images/screenshot-shifts.png",
      endpoint: "GET /api/v1/shifts/logs",
      features: ["Opening snapshot freeze", "Non-fungible tool checkouts", "Immediate discrepancy flags"],
    },
    {
      label: "ANALYTICS",
      title: "14-Metric Analytics & Executive Reports",
      desc: "Weighted rolling consumption trends, supplier on-time performance scorecards, and styled Chromedp PDF executive reports generated in under two seconds.",
      image: "/images/screenshot-analytics.png",
      endpoint: "GET /api/v1/analytics/trends",
      features: ["Consumption velocity curves", "Vendor scorecards", "Chromedp PDF exports"],
    },
  ];

  const activeScreen = screens[activeTab] ?? screens[0];

  return (
    <section id="production" className="py-24 sm:py-32 border-b border-[var(--border)] bg-band">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <ScrollReveal delay={0}>
              <div className="text-xs font-mono text-brand-text tracking-widest uppercase font-bold">
                [ PRODUCTION VERIFICATION // LIVE INTERFACE EXHIBIT ]
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--text)] tracking-tight leading-[1.08] font-sans">
                Production interface. <br />
                <span className="text-brand-text">Live platform, actual screenshots.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <a
              href="https://iimcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] bg-[var(--surface-1)] hover:border-brand-solid hover:text-brand-text font-mono text-xs font-bold uppercase tracking-wider transition-colors text-[var(--text)]"
            >
              <span>ACCESS LIVE APP (iimcp.vercel.app)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </ScrollReveal>
        </div>

        {/* Tab Buttons Bar */}
        <div className="mt-12 flex flex-wrap border-b border-[var(--border)] font-mono text-xs">
          {screens.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(idx)}
              className={`py-3.5 px-6 font-bold uppercase tracking-wider transition-colors border-b-2 -mb-[1px] ${
                activeTab === idx
                  ? "border-brand-solid text-brand-text bg-[var(--surface-1)]"
                  : "border-transparent text-muted-strong hover:text-[var(--text)]"
              }`}
            >
              {`0${idx + 1} // ${item.label}`}
            </button>
          ))}
        </div>

        {/* Active Exhibit Display Container */}
        <div className="mt-8 border border-[var(--border)] bg-[var(--surface-1)]">
          {/* Top Bar Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-[var(--border)] gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text)] font-sans">
                {activeScreen?.title}
              </h3>
              <p className="mt-1 text-xs text-muted-strong font-sans max-w-2xl">
                {activeScreen?.desc}
              </p>
            </div>
            <div className="font-mono text-xs text-muted-strong sm:text-right shrink-0">
              <div className="text-brand-text font-bold">REST ENDPOINT</div>
              <div className="text-[11px] text-[var(--text)] mt-0.5">{activeScreen?.endpoint}</div>
            </div>
          </div>

          {/* Screenshot Viewport */}
          <div className="relative aspect-[16/9] w-full bg-surface-2">
            <Image
              src={activeScreen?.image ?? ""}
              alt={activeScreen?.title ?? ""}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Bottom Capabilities Row */}
          <div className="p-6 border-t border-[var(--border)] bg-[var(--surface-2)] grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-muted-strong">
            {(activeScreen?.features ?? []).map((f) => (
              <div key={f} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-text shrink-0" />
                <span className="text-[var(--text)] font-sans">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
