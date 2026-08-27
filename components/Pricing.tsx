import { ScrollReveal } from "./ScrollReveal";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const tiers = [
    {
      name: "Team",
      badge: "Up to 5 Locations",
      desc: "For growing logistics hubs that need clean inventory visibility and audited transfer workflows.",
      price: "Custom",
      subprice: "/ tailored deployment",
      highlight: false,
      features: [
        "Up to 5 physical location nodes",
        "Inventory State Engine (Available/Reserved)",
        "Movement Ledger audit trail",
        "Inter-location transfer lifecycle",
        "Shift opening snapshots & consumption logs",
        "Standard CSV data bulk import",
        "Email & community documentation support",
      ],
    },
    {
      name: "Business",
      badge: "Up to 25 Locations",
      desc: "For multi-site regional enterprises that require predictive forecasting and SLA governance.",
      price: "Custom",
      subprice: "/ tailored deployment",
      highlight: true,
      popular: "Most Chosen",
      features: [
        "Everything in Team",
        "Up to 25 physical location nodes",
        "Predictive Depletion & Lead Time Alerts",
        "Full ITSM Ticket & SLA auto-escalations",
        "Supplier reliability scorecard analytics",
        "Asset registry & QR maintenance tracking",
        "Role-Permission matrix customization",
        "Dedicated onboarding manager",
      ],
    },
    {
      name: "Enterprise",
      badge: "Unlimited Nodes",
      desc: "For global operations with heavy resource yield tracking, dedicated VPCs, and compliance mandates.",
      price: "Custom",
      subprice: "/ tailored deployment",
      highlight: false,
      features: [
        "Everything in Business",
        "Unlimited locations & regional hubs",
        "Resource Mining, Grades & Yield Module",
        "Multi-tenant data isolation & VPC hosting",
        "Custom pgvector AI assistant integrations",
        "Chromedp PDF reporting & live exports",
        "24/7 dedicated enterprise support & 99.99% SLA",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-28 sm:py-36 border-t border-[var(--border)] bg-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-1)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-strong font-mono">
              Pricing & Plans
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-[1.1]">
              Flexible tiers for networks <br />
              <span className="text-brand-text">of any scale.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 text-base sm:text-lg text-muted-strong leading-relaxed">
              Every plan includes our immutable movement ledger, zero-trust RBAC, and responsive mobile scanner.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <ScrollReveal key={tier.name} delay={idx * 100}>
              <div
                className={`relative h-full rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  tier.highlight
                    ? "border-2 border-brand-solid bg-brand-muted/10 shadow-2xl shadow-brand -translate-y-2"
                    : "border border-[var(--border)] bg-[var(--surface-1)] hover:border-brand-solid"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-solid/40 bg-brand-solid px-3.5 py-1 text-xs font-semibold text-brand-foreground uppercase tracking-wider shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      {tier.popular}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-strong">
                    {tier.badge}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--text)] tracking-tight">
                    {tier.name}
                  </h3>
                  <p className="mt-2.5 text-xs text-muted-strong leading-relaxed">
                    {tier.desc}
                  </p>

                  <div className="mt-6 flex items-baseline gap-1.5 border-y border-[var(--border)] py-4">
                    <span className="text-3xl font-bold text-[var(--text)] tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-muted-strong font-mono">
                      {tier.subprice}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs text-[var(--text)]">
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
                    href="#contact"
                    className={`inline-flex items-center justify-center w-full h-11 rounded-full text-sm font-semibold tracking-tight transition-all ${
                      tier.highlight
                        ? "bg-brand-solid hover:bg-brand-solid-hover text-brand-foreground shadow-lg shadow-brand"
                        : "border border-[var(--border)] hover:border-brand-solid hover:text-brand-text bg-[var(--surface-1)] text-[var(--text)]"
                    }`}
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
