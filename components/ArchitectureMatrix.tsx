"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import {
  GitFork,
  Clock,
  TrendingUp,
  Shield,
  Layers,
  Check,
  ChevronRight,
  Cpu,
} from "lucide-react";

export function ArchitectureMatrix() {
  const [activeTab, setActiveTab] = useState<"topology" | "shifts" | "predictive" | "rbac">(
    "topology"
  );

  return (
    <section id="architecture" className="relative py-28 sm:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-solid/40 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
              <Cpu className="h-3.5 w-3.5" />
              Core Architecture
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] font-sans">
              Precision engineered <br />
              <span className="text-brand-text">for high-stakes operations.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-strong leading-relaxed font-sans">
              Inspect how the 3-tier organizational topology, 6-tier RBAC security engine, shift
              discrepancy algorithms, and rolling depletion forecasts operate together.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Navigator */}
        <ScrollReveal delay={300} className="mt-12">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] max-w-fit">
            <button
              onClick={() => setActiveTab("topology")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "topology"
                  ? "bg-brand-solid text-brand-foreground shadow-lg shadow-brand"
                  : "text-muted-strong hover:text-foreground hover:bg-[var(--surface-2)]"
              }`}
            >
              <GitFork className="h-3.5 w-3.5" />
              01 // 3-TIER TOPOLOGY
            </button>
            <button
              onClick={() => setActiveTab("shifts")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "shifts"
                  ? "bg-brand-solid text-brand-foreground shadow-lg shadow-brand"
                  : "text-muted-strong hover:text-foreground hover:bg-[var(--surface-2)]"
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              02 // SHIFT RECONCILIATION
            </button>
            <button
              onClick={() => setActiveTab("predictive")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "predictive"
                  ? "bg-brand-solid text-brand-foreground shadow-lg shadow-brand"
                  : "text-muted-strong hover:text-foreground hover:bg-[var(--surface-2)]"
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              03 // PREDICTIVE FORECASTS
            </button>
            <button
              onClick={() => setActiveTab("rbac")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === "rbac"
                  ? "bg-brand-solid text-brand-foreground shadow-lg shadow-brand"
                  : "text-muted-strong hover:text-foreground hover:bg-[var(--surface-2)]"
              }`}
            >
              <Shield className="h-3.5 w-3.5" />
              04 // 6-TIER RBAC GOVERNANCE
            </button>
          </div>
        </ScrollReveal>

        {/* Tab Content Display Area */}
        <div className="mt-8 rounded-3xl border-2 border-brand-solid/50 bg-surface-1 p-6 sm:p-10 shadow-2xl">
          {activeTab === "topology" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-brand-text font-bold uppercase">Tier 01 // Level 1</div>
                  <h3 className="mt-2 text-xl font-bold text-foreground font-sans">HQ Global Command</h3>
                  <p className="mt-3 text-xs text-muted-strong leading-relaxed font-sans">
                    Master catalogue governance, global supplier contracts, multi-tenant billing, and
                    cross-hub rebalancing policy definitions.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] text-[11px] font-mono text-muted-strong">
                  • 100% Global Visibility
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-brand-solid/40 bg-brand-muted/15 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-brand-text font-bold uppercase">Tier 02 // Level 2</div>
                  <h3 className="mt-2 text-xl font-bold text-foreground font-sans">Regional Consolidation Hubs</h3>
                  <p className="mt-3 text-xs text-muted-strong leading-relaxed font-sans">
                    High-volume cross-dock facilities that buffer stock for remote clusters, receive bulk
                    PO shipments, and approve field site requisition orders.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-solid/20 text-[11px] font-mono text-foreground font-semibold">
                  • Inter-Hub Freight Routing & Custody
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-brand-text font-bold uppercase">Tier 03 // Level 3</div>
                  <h3 className="mt-2 text-xl font-bold text-foreground font-sans">Operational Field Sites & Mines</h3>
                  <p className="mt-3 text-xs text-muted-strong leading-relaxed font-sans">
                    Direct consumption points: extraction quarries, construction yards, and production
                    lines with mobile QR checkout and shift logs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border)] text-[11px] font-mono text-muted-strong">
                  • Mobile Barcode & Shift Reconciliation
                </div>
              </div>
            </div>
          )}

          {activeTab === "shifts" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs font-mono text-brand-text font-bold uppercase">
                  Shift Chain of Custody
                </div>
                <h3 className="mt-2 text-2xl font-bold text-foreground font-sans">
                  The Zero-Drift Shift Reconciliation Engine
                </h3>
                <p className="mt-4 text-sm text-muted-strong leading-relaxed font-sans">
                  At the start of every shift, INCP captures a cryptographic Opening Snapshot. When
                  workers log material usage or tool checkout, the closing algorithm automatically
                  computes discrepancies.
                </p>
                <div className="mt-6 space-y-2.5 font-mono text-xs text-muted-strong">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-text" />
                    <span>Opening Snapshot Auto-Freezing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-text" />
                    <span>Non-Fungible Tool Issue & Return Scanning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-text" />
                    <span>Immediate Anti-Theft Anomaly Flags</span>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] font-mono text-xs text-muted-strong">
                <div className="text-foreground font-bold pb-2 border-b border-[var(--border)]">
                  SHIFT LOG #SH-49102 // CLOSED
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <span>Opening Snapshot:</span>
                    <span className="text-foreground font-bold">1,400 Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Logged Consumption:</span>
                    <span className="text-foreground font-bold">-120 Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Physical Count:</span>
                    <span className="text-brand-text font-bold">1,265 Units (-15 Discrepancy)</span>
                  </div>
                  <div className="mt-4 p-2.5 rounded-lg bg-brand-muted/20 border border-brand-solid/40 text-brand-foreground text-[11px]">
                    FLAGGED: Anomaly reported to Hub Manager and logged in Immutable Audit Trail.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "predictive" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-xs font-mono text-brand-text font-bold uppercase">
                  Predictive Maintenance & Stockout Advisory
                </div>
                <h3 className="mt-2 text-2xl font-bold text-foreground font-sans">
                  Rolling Consumption Forecasting
                </h3>
                <p className="mt-4 text-sm text-muted-strong leading-relaxed font-sans">
                  INCP combines historical consumption velocity with supplier lead time scorecards to
                  calculate exact stockout risks before reorder points are breached.
                </p>
                <div className="mt-6 space-y-2.5 font-mono text-xs text-muted-strong">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-text" />
                    <span>Weighted Rolling 7-Day & 30-Day Velocity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-text" />
                    <span>Vendor On-Time Reliability Scoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-text" />
                    <span>Draft PO Auto-Generation with 1-Click Approval</span>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] font-mono text-xs text-muted-strong">
                <div className="text-foreground font-bold pb-2 border-b border-[var(--border)]">
                  DEPLETION RISK MONITOR // ACTIVE
                </div>
                <div className="mt-3 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs">
                      <span>Copper Rods (Grade A)</span>
                      <span className="text-brand-text font-bold">Stockout in 4.2 Days</span>
                    </div>
                    <div className="h-2 w-full bg-surface-2 rounded-full mt-1.5 overflow-hidden">
                      <div className="h-full bg-brand-solid rounded-full w-[85%]" />
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-brand-muted/20 border border-brand-solid/40 text-brand-foreground text-[11px]">
                    ACTION TAKEN: Automated PO #PO-941 drafted for Supplier &quot;Apex Metal Corp&quot; (Avg Lead: 3 days).
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rbac" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
                <div className="text-brand-text font-bold">LEVEL 01</div>
                <div className="text-foreground font-bold mt-1">Super Admin</div>
                <div className="text-[10px] text-muted-strong mt-2">Full platform config, TOTP 2FA enforced.</div>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
                <div className="text-brand-text font-bold">LEVEL 02</div>
                <div className="text-foreground font-bold mt-1">HQ Admin</div>
                <div className="text-[10px] text-muted-strong mt-2">Catalogue, Global POs, Audit logs.</div>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
                <div className="text-brand-text font-bold">LEVEL 03</div>
                <div className="text-foreground font-bold mt-1">Hub Manager</div>
                <div className="text-[10px] text-muted-strong mt-2">Transfer approvals, Hub stock orders.</div>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
                <div className="text-brand-text font-bold">LEVEL 04</div>
                <div className="text-foreground font-bold mt-1">Site Manager</div>
                <div className="text-[10px] text-muted-strong mt-2">Site receipts, ITSM ticket creation.</div>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]">
                <div className="text-brand-text font-bold">LEVEL 05</div>
                <div className="text-foreground font-bold mt-1">Shift Supervisor</div>
                <div className="text-[10px] text-muted-strong mt-2">Opening snapshots, shift close signoff.</div>
              </div>
              <div className="p-4 rounded-xl border border-brand-solid/40 bg-brand-muted/20">
                <div className="text-brand-text font-bold">LEVEL 06</div>
                <div className="text-foreground font-bold mt-1">Site Official</div>
                <div className="text-[10px] text-foreground mt-2">Material usage scan, mobile QR issue.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
