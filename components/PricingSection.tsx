"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Check, CheckCircle2, ArrowRight } from "lucide-react";

export function PricingSection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const plans = [
    {
      name: "Pilot",
      badge: "1 to 5 Locations",
      desc: "For regional distribution teams validating coordinated movement ledgers and shift workflows.",
      features: [
        "Up to 5 physical location nodes",
        "Append-only movement ledger",
        "Inter-hub transfer approvals",
        "Shift opening snapshot logs",
        "CSV data migration pipeline",
      ],
    },
    {
      name: "Regional Cluster",
      badge: "Up to 25 Locations",
      desc: "For multi-site operations requiring predictive depletion forecasts and SLA ticketing.",
      highlight: true,
      features: [
        "Everything in Pilot",
        "Up to 25 location nodes",
        "Rolling depletion forecasting",
        "Automated 15-minute SLA ticketing",
        "Supplier reliability scorecards",
        "PDF executive reporting",
        "Dedicated onboarding manager",
      ],
    },
    {
      name: "Global Sovereign",
      badge: "Unlimited Locations",
      premium: true,
      desc: "For global enterprises requiring isolated dedicated VPCs, mining yield modules, and custom SLAs.",
      features: [
        "Everything in Regional Cluster",
        "Unlimited global facilities",
        "Resource extraction & quality grades",
        "Dedicated VPC or on-prem deployment",
        "Custom ERP integration pipeline",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 border-t border-[var(--border)] bg-band">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <ScrollReveal delay={0}>
            <p className="text-xs font-semibold text-brand-text tracking-wider uppercase">
              Deployment Plans
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text)]">
              Predictable deployments for any network scale.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-base text-muted-strong leading-relaxed">
              Every plan includes our immutable movement ledger, zero-trust RBAC, and responsive web interface.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Clean Plan Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={idx * 80}>
              <div
                className={`h-full rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  plan.highlight
                    ? "bg-[var(--surface-1)] border-2 border-accent-blue-text shadow-md"
                    : plan.premium
                      ? "bg-[var(--surface-1)] border border-accent-purple-text/45"
                      : "bg-[var(--surface-1)] border border-[var(--border)]"
                }`}
              >
                <div>
                  <div
                    className={`text-xs font-medium uppercase tracking-wider ${
                      plan.premium ? "text-accent-purple-text" : "text-accent-blue-text"
                    }`}
                  >
                    {plan.badge}
                  </div>
                  <h3 className="mt-3 text-2xl font-medium text-[var(--text)]">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-strong leading-relaxed">
                    {plan.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[var(--border)]">
                    <ul className="space-y-3 text-sm text-[var(--text)]">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              plan.premium ? "text-accent-purple-text" : "text-accent-blue-text"
                            }`}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 rounded text-sm font-semibold transition-all ${
                      plan.highlight
                        ? "bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground shadow-sm"
                        : "border border-[var(--border)] hover:border-brand-solid hover:text-brand-text text-[var(--text)]"
                    }`}
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Simple Contact / Demo Request */}
        <div id="contact" className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-8 sm:p-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-medium text-[var(--text)]">
              Schedule a personalized walkthrough.
            </h3>
            <p className="mt-3 text-sm text-muted-strong leading-relaxed">
              See how your locations model in real-time with our logistics engineering team.
            </p>

            {submitted ? (
              <div className="mt-8 p-4 rounded-xl bg-brand-solid/10 border border-brand-solid text-[var(--text)] text-sm flex items-center justify-center gap-2.5 animate-fade-in">
                <CheckCircle2 className="h-5 w-5 text-brand-text shrink-0" />
                <span>Thank you. Our team will contact {email} within one business day.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 h-12 rounded bg-[var(--surface-2)] border border-[var(--border)] px-5 text-sm text-[var(--text)] placeholder:text-muted-strong focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 px-7 rounded bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground text-sm font-semibold transition-all shrink-0 inline-flex items-center justify-center gap-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-muted-strong">
              Confidential · Mutual NDA provided upon request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
