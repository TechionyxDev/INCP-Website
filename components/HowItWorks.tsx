import { ScrollReveal } from "./ScrollReveal";
import { GitFork, UploadCloud, Radio } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: GitFork,
      title: "Model Your 3-Tier Hierarchy",
      desc: "Define your organizational topology with HQ parent nodes, regional consolidation hubs, and field sites. Escalation paths and role permissions derive automatically.",
    },
    {
      num: "02",
      icon: UploadCloud,
      title: "Bulk Ingest Operations Data",
      desc: "Import catalogue SKUs, supplier price books, active machinery assets, and opening stock balances via integrated multi-tab CSV bulk ingestion pipelines.",
    },
    {
      num: "03",
      icon: Radio,
      title: "Operate with Real-Time Intelligence",
      desc: "Coordinate atomic inventory transfers, log shift reconciliations, auto-escalate SLA tickets, and let the depletion forecasting engine trigger automated procurement.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded border border-[var(--border)] bg-[var(--surface-1)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-strong font-mono">
              How It Works
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-medium tracking-tight text-[var(--text)] leading-[1.1]">
              From disconnected sites <br />
              <span className="text-brand-text">to unified control in 3 steps.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-strong leading-relaxed">
              Deploy INCP in days — not quarters. Connect your physical nodes, seed data cleanly,
              and empower every site official with audited digital workflows.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.title} delay={idx * 100}>
              <div className="relative h-full rounded-3xl border border-[var(--border)] bg-[var(--surface-1)] p-8 flex flex-col justify-between group hover:border-brand-solid hover:-translate-y-1 transition-all shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-brand-solid/10 text-brand-text flex items-center justify-center border border-brand-solid/20 group-hover:scale-110 transition-transform">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xl font-bold text-muted-strong">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-medium text-[var(--text)] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-strong leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center text-xs font-mono text-brand-text">
                  <span>Step {step.num} Completed</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
