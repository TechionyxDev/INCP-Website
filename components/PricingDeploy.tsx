"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { Check, Sparkles, ArrowRight, CheckCircle2, Shield, Boxes } from "lucide-react";

export function PricingDeploy() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [nodes, setNodes] = useState("5-20");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const tiers = [
    {
      name: "Pilot Deployment",
      badge: "1-5 Nodes",
      desc: "For regional distribution teams validating atomic movement ledgers and shift reconciliations.",
      price: "Custom",
      subprice: "/ dedicated instance",
      popular: false,
      features: [
        "Up to 5 physical location nodes",
        "Append-only PostgreSQL Movement Ledger",
        "Atomic Reserve & Transfer State Engine",
        "Shift Opening Snapshot & Discrepancy Log",
        "Multi-tab CSV Bulk Ingestion",
        "Role-Based Access Control (6 Tiers)",
      ],
    },
    {
      name: "Regional Cluster",
      badge: "Up to 25 Nodes",
      desc: "For scaling multi-facility operations requiring predictive stockout alerts and SLA ticketing.",
      price: "Custom",
      subprice: "/ enterprise rollout",
      popular: true,
      features: [
        "Everything in Pilot Deployment",
        "Up to 25 regional hubs and field sites",
        "Rolling Depletion Velocity Forecasting",
        "15-Minute SLA Auto-Escalation Engine",
        "Supplier Lead-Time Reliability Scorecards",
        "Asset Registry QR/RFID Tag Tracking",
        "Chromedp PDF Executive Reports",
        "Dedicated Solution Architect",
      ],
    },
    {
      name: "Global Sovereign",
      badge: "Unlimited Nodes",
      desc: "For global enterprises requiring isolated dedicated VPCs, mining yield modules, and custom SLA.",
      price: "Custom",
      subprice: "/ sovereign VPC",
      popular: false,
      features: [
        "Everything in Regional Cluster",
        "Unlimited global nodes & cross-dock hubs",
        "Mining Extraction & Quality Grade Module",
        "Dedicated Sovereign VPC / On-Prem Option",
        "Direct DB replica streaming & pgvector AI",
        "Custom ERP Integrations (SAP, NetSuite)",
        "24/7 Priority Ops Response (15m SLA)",
        "SOC 2 Type II Compliance Package",
      ],
    },
  ];

  return (
    <section id="deploy" className="relative py-28 sm:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded border border-brand-solid/40 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
              <Boxes className="h-3.5 w-3.5" />
              Deployment & Onboarding
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] font-sans">
              Tailored deployment topologies <br />
              <span className="text-brand-text">built for your operational scale.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 text-base sm:text-lg text-muted-strong leading-relaxed font-sans">
              Every plan includes the core immutable ledger, zero-trust RBAC, and automated CSV migration pipelines.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <ScrollReveal key={tier.name} delay={idx * 100}>
              <div
                className={`relative h-full rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.popular
                    ? "border-2 border-brand-solid bg-surface-1 shadow-2xl shadow-brand -translate-y-2"
                    : "border border-[var(--border)] bg-[var(--surface-1)] hover:border-brand-solid"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded border border-brand-solid/40 bg-brand-solid px-4 py-1 text-xs font-mono font-bold text-brand-foreground uppercase tracking-wider shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      MOST DEPLOYED
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-brand-text font-bold">
                    {tier.badge}
                  </div>
                  <h3 className="mt-2 text-2xl font-medium text-[var(--text)] tracking-tight font-sans">
                    {tier.name}
                  </h3>
                  <p className="mt-2.5 text-xs text-muted-strong leading-relaxed font-sans">
                    {tier.desc}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5 border-y border-[var(--border)] py-4 font-mono">
                    <span className="text-3xl font-extrabold text-[var(--text)] tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-muted-strong">{tier.subprice}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs text-[var(--text)] font-sans">
                        <span className="h-4 w-4 rounded-full bg-brand-solid/15 text-brand-text border border-brand-solid/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <a
                    href="#contact-form"
                    className={`inline-flex items-center justify-center w-full h-12 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                      tier.popular
                        ? "bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground shadow-lg shadow-brand"
                        : "border border-[var(--border)] hover:border-brand-solid hover:text-brand-text bg-surface-1 text-foreground"
                    }`}
                  >
                    Request Deployment Spec
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Integrated Instant Contact / Demo Request Form */}
        <div id="contact-form" className="mt-20">
          <ScrollReveal delay={400}>
            <div className="relative overflow-hidden rounded-3xl border-2 border-brand-solid/50 bg-surface-1 px-6 sm:px-12 py-14 sm:py-20 shadow-2xl">
            <div className="absolute inset-0 -z-10 opacity-30">
              <Image
                src="/images/cta-background.png"
                alt="Network Matrix Background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded border border-brand-solid/40 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                Direct Engineering Access
              </span>

              <h3 className="mt-6 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight font-sans">
                Schedule a live multi-node walkthrough.
              </h3>
              <p className="mt-4 text-sm text-muted-strong font-sans">
                Our logistics systems engineers will model your active facility topology and
                demonstrate atomic PostgreSQL reconciliation in real-time.
              </p>

              {submitted ? (
                <div className="mt-8 p-6 rounded-2xl bg-brand-muted/30 border border-brand-solid/50 text-brand-foreground font-mono text-sm flex items-center justify-center gap-3 animate-fade-in">
                  <CheckCircle2 className="h-6 w-6 text-brand-text shrink-0" />
                  <span>Deployment request received. Our solutions team will contact {email} within 1 business day.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-muted-strong mb-1.5 uppercase">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vp.logistics@enterprise.com"
                        className="w-full h-12 rounded-xl bg-surface-2 border border-[var(--border)] px-4 text-sm text-foreground placeholder:text-muted-strong/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-muted-strong mb-1.5 uppercase">
                        Enterprise Name
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Apex Logistics Corp"
                        className="w-full h-12 rounded-xl bg-surface-2 border border-[var(--border)] px-4 text-sm text-foreground placeholder:text-muted-strong/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-strong mb-1.5 uppercase">
                      Estimated Operating Nodes
                    </label>
                    <select
                      value={nodes}
                      onChange={(e) => setNodes(e.target.value)}
                      className="w-full h-12 rounded-xl bg-surface-2 border border-[var(--border)] px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover transition-colors font-mono"
                    >
                      <option value="1-5">1 - 5 Locations (Regional Pilot)</option>
                      <option value="5-20">5 - 20 Locations (Multi-Hub Cluster)</option>
                      <option value="20-50">20 - 50 Locations (National Network)</option>
                      <option value="50+">50+ Locations (Global Enterprise)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-brand-solid hover:bg-brand-solid-hover active:scale-[0.99] font-mono text-xs font-bold text-brand-foreground uppercase tracking-wider transition-all shadow-xl shadow-brand flex items-center justify-center gap-2"
                  >
                    Submit Deployment Request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}

              <p className="mt-4 text-[11px] font-mono text-muted-strong">
                Mutual NDA provided upon request · ISO 27001 / SOC 2 Ready
              </p>
            </div>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
