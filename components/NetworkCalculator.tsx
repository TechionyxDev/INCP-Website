"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Calculator, ArrowRight, DollarSign, Clock, ShieldCheck, Zap } from "lucide-react";

export function NetworkCalculator() {
  const [locations, setLocations] = useState(8);
  const [monthlyVolume, setMonthlyVolume] = useState(2500000); // $2.5M default

  // Estimated Calculations based on enterprise logistics benchmarks:
  // Average shrinkage in uncoordinated multi-site operations: 2.8% to 4.2%
  // INCP reduces shrinkage to <0.3%, recovering approx 2.9% of annual throughput
  const annualThroughput = monthlyVolume * 12;
  const annualSavedShrinkage = Math.round(annualThroughput * 0.029);
  const hoursSavedPerYear = locations * 180; // 15 hrs per month per location in manual spreadsheet audit
  const stockoutRiskReduction = 94.8;

  return (
    <section id="calculator" className="relative py-28 sm:py-36 border-t border-[var(--border)] bg-band">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded border border-brand-solid/40 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
              <Calculator className="h-3.5 w-3.5" />
              Network ROI & Loss Prevention
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] font-sans">
              Calculate your capital recovery <br />
              <span className="text-brand-text">with coordinated inventory states.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-strong leading-relaxed font-sans">
              Traditional multi-site operations lose 2-4% of annual throughput to undetected shift
              discrepancies, untracked transit drift, and emergency expedited stockout freight.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Calculator Container */}
        <ScrollReveal delay={300} className="mt-14">
          <div className="rounded-3xl border-2 border-brand-solid/50 bg-surface-1 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Sliders (6 cols) */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <div className="flex items-center justify-between text-sm font-mono text-foreground mb-3">
                    <span className="text-muted-strong uppercase tracking-wider">Number of Operating Locations:</span>
                    <span className="text-xl font-bold text-brand-text">{locations} Nodes</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    step="1"
                    value={locations}
                    onChange={(e) => setLocations(Number(e.target.value))}
                    className="w-full h-2.5 bg-[var(--surface-2)] rounded-lg appearance-none cursor-pointer accent-brand border border-[var(--border)]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-muted-strong mt-1.5">
                    <span>2 Hubs (Pilot)</span>
                    <span>25 Hubs (Regional)</span>
                    <span>60+ Hubs (Global)</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm font-mono text-foreground mb-3">
                    <span className="text-muted-strong uppercase tracking-wider">Monthly Inventory Movement:</span>
                    <span className="text-xl font-bold text-brand-text">
                      ${(monthlyVolume / 1000000).toFixed(2)}M / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="250000"
                    max="15000000"
                    step="250000"
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    className="w-full h-2.5 bg-[var(--surface-2)] rounded-lg appearance-none cursor-pointer accent-brand border border-[var(--border)]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-muted-strong mt-1.5">
                    <span>$250k / mo</span>
                    <span>$5M / mo</span>
                    <span>$15M+ / mo</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] font-mono text-xs text-muted-strong space-y-2">
                  <div className="text-foreground font-bold flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-text" />
                    Automated Mathematical Recovery Engine
                  </div>
                  <p className="text-[11px] leading-relaxed text-muted-strong">
                    Based on verified live client deployments across mining quarries, industrial
                    warehouses, and heavy equipment logistics networks.
                  </p>
                </div>
              </div>

              {/* Right Column: Calculated Impact Dashboard (6 cols) */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Metric 1: Capital Saved */}
                <div className="sm:col-span-2 p-6 rounded-2xl border border-brand-solid/40 bg-brand-muted/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-text uppercase tracking-wider font-bold">
                    <DollarSign className="h-4 w-4" />
                    Estimated Capital Loss Prevented / Year
                  </div>
                  <div className="text-3xl sm:text-5xl font-black text-foreground font-mono mt-2 tracking-tight">
                    ${annualSavedShrinkage.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-strong mt-2 font-mono">
                    Eliminating unverified transfer loss and unrecorded shift consumption drift.
                  </p>
                </div>

                {/* Metric 2: Labor Hours Saved */}
                <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-strong uppercase font-semibold">
                    <Clock className="h-4 w-4 text-brand-text" />
                    Audit Labor Saved
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono mt-2">
                    {hoursSavedPerYear.toLocaleString()} <span className="text-xs text-muted-strong font-normal">hrs/yr</span>
                  </div>
                  <p className="text-[11px] text-muted-strong mt-1">Manual monthly spreadsheet counts replaced.</p>
                </div>

                {/* Metric 3: Stockout Risk Reduction */}
                <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-strong uppercase font-semibold">
                    <Zap className="h-4 w-4 text-brand-text" />
                    Stockout Prevention
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono mt-2">
                    {stockoutRiskReduction}%
                  </div>
                  <p className="text-[11px] text-muted-strong mt-1">Lead time curves prevent emergency downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
