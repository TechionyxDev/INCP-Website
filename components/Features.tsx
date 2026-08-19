import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import {
  Layers,
  ArrowLeftRight,
  BarChart3,
  FileCheck2,
  Lock,
  UploadCloud,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

export function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36 border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-silver font-mono">
              Features
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-[1.1]">
              Every module, <br />
              <span className="text-scarlet">deeply connected.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-silver leading-relaxed">
              Explore how real-time stock balances, transfer dispatches, shift logs, and predictive
              alerts synchronize across the entire network.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Bento Item 1: Inventory Table (Wide 2-col on lg) */}
          <ScrollReveal delay={0} className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:border-scarlet transition-all">
              <div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-scarlet/10 text-scarlet p-2.5 border border-scarlet/20">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--text)] tracking-tight">
                  Inventory State & Reorder Points
                </h3>
                <p className="mt-2 text-sm text-silver max-w-xl">
                  Granular SKU catalogue with atomic reservations, criticality classifications, and
                  custom reorder thresholds per location.
                </p>
              </div>

              <div className="relative mt-6 aspect-[16/8] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-black shadow-inner">
                <Image
                  src="/images/screenshot-inventory.png"
                  alt="INCP Inventory Stock Table Screenshot"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Item 2: Transfer Lifecycle */}
          <ScrollReveal delay={100} className="lg:col-span-1">
            <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:border-scarlet transition-all">
              <div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-crimson/20 text-scarlet p-2.5 border border-crimson/30">
                  <ArrowLeftRight className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--text)] tracking-tight">
                  Multi-Tier Transfers
                </h3>
                <p className="mt-2 text-sm text-silver">
                  Move items with custody verification from pending approval through in-transit to delivery.
                </p>
              </div>

              <div className="relative mt-6 aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-black shadow-inner">
                <Image
                  src="/images/screenshot-transfers.png"
                  alt="INCP Logistics Transfers Screenshot"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Item 3: Analytics & Exporting */}
          <ScrollReveal delay={200} className="lg:col-span-1">
            <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:border-scarlet transition-all">
              <div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-scarlet/10 text-scarlet p-2.5 border border-scarlet/20">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--text)] tracking-tight">
                  14 Analytics Endpoints
                </h3>
                <p className="mt-2 text-sm text-silver">
                  Instant network summaries, consumption trends, supplier spend, and PDF/CSV reporting.
                </p>
              </div>

              <div className="relative mt-6 aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-black shadow-inner">
                <Image
                  src="/images/screenshot-analytics.png"
                  alt="INCP Analytics & Trends Screenshot"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Item 4: Shift Logs & Discrepancies (Wide 2-col on lg) */}
          <ScrollReveal delay={300} className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:border-scarlet transition-all">
              <div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-crimson/20 text-scarlet p-2.5 border border-crimson/30">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--text)] tracking-tight">
                  Shift Logs & Chain of Custody
                </h3>
                <p className="mt-2 text-sm text-silver max-w-xl">
                  Opening snapshot freezing, material consumption tracking, tool checkout, and automatic
                  discrepancy detection to identify theft patterns.
                </p>
              </div>

              <div className="relative mt-6 aspect-[16/8] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-black shadow-inner">
                <Image
                  src="/images/screenshot-shifts.png"
                  alt="INCP Shift Logs & Reconciliation Screenshot"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature Pill Highlights */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center hover:border-scarlet transition-colors">
            <Lock className="h-5 w-5 text-scarlet mx-auto" />
            <div className="mt-2 text-sm font-semibold text-[var(--text)]">6-Tier RBAC</div>
            <div className="text-xs text-silver mt-1">Super Admin to Site Official</div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center hover:border-scarlet transition-colors">
            <UploadCloud className="h-5 w-5 text-scarlet mx-auto" />
            <div className="mt-2 text-sm font-semibold text-[var(--text)]">CSV Bulk Import</div>
            <div className="text-xs text-silver mt-1">Items, Locations, Suppliers, Stock</div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center hover:border-scarlet transition-colors">
            <FileSpreadsheet className="h-5 w-5 text-scarlet mx-auto" />
            <div className="mt-2 text-sm font-semibold text-[var(--text)]">SLA Breach Jobs</div>
            <div className="text-xs text-silver mt-1">Auto-escalation every 15 min</div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center hover:border-scarlet transition-colors">
            <FileText className="h-5 w-5 text-scarlet mx-auto" />
            <div className="mt-2 text-sm font-semibold text-[var(--text)]">PDF & CSV Reports</div>
            <div className="text-xs text-silver mt-1">Styled chromedp & lite exports</div>
          </div>
        </div>
      </div>
    </section>
  );
}
