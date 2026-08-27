"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";

export function DeploymentTiers() {
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

  const plans = [
    {
      name: "Pilot Deployment",
      nodes: "1 – 5 NODES",
      desc: "For regional teams establishing verified movement ledgers and shift reconciliations.",
      features: [
        "Up to 5 physical location nodes",
        "Append-only PostgreSQL Movement Ledger",
        "Atomic Reserve & Transfer Engine",
        "Shift Opening Snapshot Freezing",
        "Multi-tab CSV Bulk Migration Pipeline",
        "6-Tier Role-Based Access Control",
      ],
    },
    {
      name: "Regional Cluster",
      nodes: "UP TO 25 NODES",
      desc: "For scaling multi-facility enterprises requiring predictive stockout alerts and SLA ticketing.",
      highlight: true,
      features: [
        "Everything in Pilot Deployment",
        "Up to 25 regional cross-dock hubs and sites",
        "Rolling Depletion Velocity Forecasting",
        "15-Minute SLA Auto-Escalation Cron Engine",
        "Vendor Lead-Time Reliability Scoring",
        "Asset Registry QR/RFID Tag Tracking",
        "Chromedp PDF Executive Reports",
        "Dedicated Solution Architect",
      ],
    },
    {
      name: "Global Sovereign",
      nodes: "UNLIMITED NODES",
      desc: "For global enterprises requiring isolated dedicated VPCs, mining yield modules, and custom SLA.",
      features: [
        "Everything in Regional Cluster",
        "Unlimited global nodes & cross-dock facilities",
        "Mining Extraction & Quality Grade Module",
        "Dedicated Sovereign VPC / On-Prem Option",
        "Custom ERP Integrations (SAP, NetSuite)",
        "Direct database replica streaming & pgvector AI",
        "24/7 Priority Ops Response (15m SLA)",
        "SOC 2 Type II Compliance Package",
      ],
    },
  ];

  return (
    <section id="deployment" className="py-24 sm:py-32 border-b border-[var(--border)] bg-band">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <div className="text-xs font-mono text-brand-text tracking-widest uppercase font-bold">
              [ DEPLOYMENT SPECIFICATION // TOPOLOGY ROLLOUT ]
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--text)] tracking-tight leading-[1.08] font-sans">
              Deployment topologies. <br />
              <span className="text-brand-text">Engineered for your network scale.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-sm sm:text-base text-muted-strong leading-relaxed font-sans">
              Every tier includes the core immutable ledger, zero-trust RBAC, and automated CSV migration pipelines.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Plans Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 border-t border-l border-[var(--border)]">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={idx * 80}>
              <div
                className={`h-full p-8 border-r border-b border-[var(--border)] flex flex-col justify-between ${
                  plan.highlight ? "bg-brand-solid/5 border-t-2 border-t-brand" : "bg-[var(--surface-1)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-muted-strong pb-4 border-b border-[var(--border)]">
                    <span className="text-brand-text font-bold font-mono">{plan.nodes}</span>
                    {plan.highlight && (
                      <span className="text-[10px] bg-brand-solid text-brand-foreground px-2 py-0.5 font-bold uppercase">
                        MOST DEPLOYED
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[var(--text)] tracking-tight font-sans">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-strong font-sans leading-relaxed">
                    {plan.desc}
                  </p>

                  <div className="mt-6 py-4 border-y border-[var(--border)] font-mono text-xl font-bold text-[var(--text)]">
                    Custom Deployment
                  </div>

                  <ul className="mt-6 space-y-3 font-mono text-xs text-muted-strong">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-brand-text shrink-0 mt-0.5" />
                        <span className="text-[var(--text)] font-sans">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <a
                    href="#contact"
                    className={`block text-center py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                      plan.highlight
                        ? "bg-brand-solid text-brand-foreground hover:bg-brand-solid-hover"
                        : "border border-[var(--border)] text-[var(--text)] hover:border-brand-solid hover:text-brand-text"
                    }`}
                  >
                    Request Deployment Spec
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Access Request Form */}
        <div id="contact" className="mt-16 border border-[var(--border)] bg-[var(--surface-1)] p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs font-mono text-brand-text tracking-widest uppercase font-bold">
              [ DIRECT ENGINEERING ENGAGEMENT ]
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[var(--text)] font-sans">
              Schedule a technical network walkthrough.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-muted-strong font-sans">
              Our systems engineers will model your active location topology and demonstrate atomic
              reconciliation on live hardware.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 bg-brand-solid/10 border border-brand-solid text-[var(--text)] font-mono text-xs flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-text shrink-0" />
                <span>
                  Deployment request received. Our logistics engineering team will contact{" "}
                  <strong>{email}</strong> within 1 business day.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-muted-strong uppercase mb-1.5 font-bold">Work Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="logistics.lead@enterprise.com"
                      className="w-full h-12 bg-[var(--surface-2)] border border-[var(--border)] px-4 text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover"
                    />
                  </div>
                  <div>
                    <label className="block text-muted-strong uppercase mb-1.5 font-bold">Enterprise Organization</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Apex Mining & Logistics Ltd."
                      className="w-full h-12 bg-[var(--surface-2)] border border-[var(--border)] px-4 text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-muted-strong uppercase mb-1.5 font-bold">Operating Locations Scale</label>
                  <select
                    value={nodes}
                    onChange={(e) => setNodes(e.target.value)}
                    className="w-full h-12 bg-[var(--surface-2)] border border-[var(--border)] px-4 text-sm text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover"
                  >
                    <option value="1-5">1 – 5 Locations (Regional Pilot)</option>
                    <option value="5-20">5 – 20 Locations (Multi-Hub Cluster)</option>
                    <option value="20-50">20 – 50 Locations (National Network)</option>
                    <option value="50+">50+ Locations (Global Enterprise)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-brand-solid hover:bg-brand-solid-hover font-mono text-xs font-bold text-brand-foreground uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>SUBMIT DEPLOYMENT REQUEST</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            <p className="mt-4 text-[11px] font-mono text-muted-strong">
              Mutual NDA provided upon request · ISO 27001 / SOC 2 Ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
