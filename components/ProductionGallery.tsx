"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import {
  Layers,
  Boxes,
  ArrowLeftRight,
  FileCheck2,
  BarChart3,
  ExternalLink,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export function ProductionGallery() {
  const [activeModule, setActiveModule] = useState<number>(0);

  const modules = [
    {
      id: "dashboard",
      title: "01 // Network Control Center",
      subtitle: "Multi-facility real-time KPI telemetry and critical stockout alerts",
      image: "/images/screenshot-dashboard.png",
      specs: [
        "Real-time health status of all 7 connected hubs",
        "Active transfer queue with live delay notifications",
        "Instant drilldown into location-specific stock allocations",
      ],
      icon: Boxes,
      badge: "LIVE COCKPIT",
    },
    {
      id: "inventory",
      title: "02 // SKU Catalogue & Reorder Engine",
      subtitle: "Atomic available vs reserved tracking with location-specific thresholds",
      image: "/images/screenshot-inventory.png",
      specs: [
        "Granular material specifications & quality grades",
        "Automated reserve locking during active transfer generation",
        "Custom reorder thresholds per individual site",
      ],
      icon: Layers,
      badge: "STATE ENGINE",
    },
    {
      id: "transfers",
      title: "03 // Multi-Tier Transfer Lifecycle",
      subtitle: "End-to-end custody tracking across pending, in-transit, and delivered states",
      image: "/images/screenshot-transfers.png",
      specs: [
        "Hierarchical approval chains (Site -> Hub -> HQ)",
        "Driver and carrier assignment with tracking metadata",
        "Cryptographic proof of receipt upon physical delivery",
      ],
      icon: ArrowLeftRight,
      badge: "CUSTODY LEDGER",
    },
    {
      id: "shifts",
      title: "04 // Shift Logs & Discrepancy Engine",
      subtitle: "Opening snapshot freezing, material usage logging, and anomaly detection",
      image: "/images/screenshot-shifts.png",
      specs: [
        "Automatic snapshot capture at shift start",
        "Non-fungible tool checkout and return scanning",
        "Instant discrepancy computation to eliminate theft",
      ],
      icon: FileCheck2,
      badge: "AUDIT LAYER",
    },
    {
      id: "analytics",
      title: "05 // 14-Metric Analytics & Reporting",
      subtitle: "Consolidated trends, consumption velocity, and automated Chromedp PDF exports",
      image: "/images/screenshot-analytics.png",
      specs: [
        "Weighted rolling consumption velocity curves",
        "Supplier on-time delivery scorecards & lead times",
        "Styled PDF executive reports generated in <2 seconds",
      ],
      icon: BarChart3,
      badge: "INTELLIGENCE",
    },
  ];

  const activeMod = modules[activeModule] ?? modules[0];

  return (
    <section id="showcase" className="relative py-28 sm:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <ScrollReveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded border border-brand-solid/40 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
                <Terminal className="h-3.5 w-3.5" />
                Live Production Interface
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] font-sans">
                Real software in production. <br />
                <span className="text-brand-text">No mockups. Zero vaporware.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <a
              href="https://iimcp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-brand-solid bg-brand-solid/10 hover:bg-brand-solid hover:text-brand-foreground px-5 py-2.5 text-xs font-mono font-bold text-brand-text transition-all shadow-md"
            >
              <span>ACCESS PRODUCTION APP (iimcp.vercel.app)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </ScrollReveal>
        </div>

        {/* Module Selector Tab Bar */}
        <ScrollReveal delay={300} className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {modules.map((mod, idx) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeModule === idx
                    ? "border-brand-solid bg-surface-1 shadow-xl shadow-brand -translate-y-1"
                    : "border-[var(--border)] bg-[var(--surface-1)] hover:border-brand-solid/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <mod.icon
                    className={`h-5 w-5 ${
                      activeModule === idx ? "text-brand-text" : "text-muted-strong"
                    }`}
                  />
                  <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-brand-muted/20 text-brand-text font-bold">
                    {mod.badge}
                  </span>
                </div>
                <div className="mt-3 text-xs font-bold text-[var(--text)] font-sans truncate">
                  {mod.title.split("//")[1]}
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Module Showcase Deck */}
        <ScrollReveal delay={400} className="mt-6">
          <div className="rounded-3xl border-2 border-brand-solid/50 bg-surface-1 p-4 sm:p-7 shadow-2xl">
            {/* Top Bar info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[var(--border)] gap-2">
              <div>
                <h3 className="text-xl font-medium text-foreground font-sans">
                  {activeMod?.title}
                </h3>
                <p className="text-xs text-muted-strong mt-0.5 font-mono">
                  {activeMod?.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-strong">
                <span className="h-2 w-2 rounded-full bg-brand-solid animate-pulse" />
                <span>INCP Cluster Node Live</span>
              </div>
            </div>

            {/* High-Resolution Screenshot Viewer */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-surface-2 shadow-inner">
              <Image
                src={activeMod?.image ?? ""}
                alt={activeMod?.title ?? ""}
                fill
                className="object-cover object-top hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Module Technical Capability Specs */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs text-muted-strong">
              {(activeMod?.specs ?? []).map((spec, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex items-start gap-2.5"
                >
                  <ShieldCheck className="h-4 w-4 text-brand-text shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
