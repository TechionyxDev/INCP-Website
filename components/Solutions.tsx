import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { Mountain, Warehouse, Truck, ShieldCheck } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      icon: Mountain,
      title: "Mining & Resource Operations",
      desc: "Extractable mineral tracking, quality grade specifications (e.g. Copper 99% vs 95%), raw haul verification, yield target performance, and spot contract billing.",
      image: "/images/solution-mining.png",
      tags: ["Yield Targets", "Quality Grades", "Haul Verification"],
    },
    {
      icon: Warehouse,
      title: "Multi-Site Warehouse Networks",
      desc: "Coordinate inventory between central HQ, regional distribution hubs, and remote operational sites with automated reserve locking and approval workflows.",
      image: "/images/solution-warehouse.png",
      tags: ["Tier Topology", "Inter-Hub Transfer", "Live Balances"],
    },
    {
      icon: Truck,
      title: "Industrial Supply Chain",
      desc: "Monitor vendor on-time performance, automate purchase orders based on depletion forecasts, and eliminate production bottlenecks with lead time curves.",
      image: "/images/solution-supply.png",
      tags: ["Vendor Scorecards", "PO Lifecycle", "Lead Time Models"],
    },
    {
      icon: ShieldCheck,
      title: "Regulated Enterprise Operations",
      desc: "Enforce strict compliance with tamper-proof audit trails, mandatory TOTP two-factor authentication, and IP-level security policies across all organizational tiers.",
      image: "/images/security-shield.png",
      tags: ["Append-Only Ledger", "TOTP 2FA", "Audit Trails"],
    },
  ];

  return (
    <section id="solutions" className="relative py-28 sm:py-36 border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-silver font-mono">
              Solutions
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-[1.1]">
              Engineered for high-stakes <br />
              <span className="text-scarlet">multi-location operations.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-silver leading-relaxed">
              From heavy resource extraction to nationwide distribution networks, INCP provides
              the control and auditability required by modern operational leaders.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Solution Cards with Generated Visuals */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 100}>
              <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7 flex flex-col justify-between group hover:border-scarlet hover:-translate-y-1 transition-all overflow-hidden">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl bg-scarlet/10 text-scarlet flex items-center justify-center border border-scarlet/20 group-hover:scale-105 transition-transform">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[var(--text)] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-silver leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-black shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[var(--border)] bg-[var(--bg-soft)] px-2.5 py-1 text-[11px] font-mono text-silver"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
