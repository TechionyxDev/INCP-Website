"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Lock, KeyRound, FileCheck, Shield } from "lucide-react";

export function SecuritySection() {
  const securityItems = [
    {
      icon: FileCheck,
      title: "Immutable Database Triggers",
      desc: "PostgreSQL kernel-level triggers reject direct updates and deletions on movement records, ensuring audit trails remain permanent.",
    },
    {
      icon: KeyRound,
      title: "Two-Factor Authentication",
      desc: "Standard RFC 6238 TOTP authenticator integration with encrypted secrets and hashed recovery backup codes.",
    },
    {
      icon: Lock,
      title: "Role-Based Access Control",
      desc: "Six distinct hierarchical access tiers that restrict administrative capabilities to verified location scopes.",
    },
    {
      icon: Shield,
      title: "Rate Limiting and Protection",
      desc: "Direct TCP peer-IP inspection prevents credential stuffing and brute-force attempts without relying on spoofable headers.",
    },
  ];

  return (
    <section id="security" className="py-24 sm:py-32 border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <ScrollReveal delay={0}>
            <p className="text-xs font-semibold text-brand-text tracking-wider uppercase">
              Enterprise Security
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
              Security built into every layer.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-base text-muted-strong leading-relaxed">
              Designed from the database schema up to meet strict data sovereignty and compliance requirements for high-consequence operations.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {securityItems.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 80}>
              <div className="pt-6 border-t border-[var(--border)]">
                <item.icon className="h-5 w-5 text-brand-text" />
                <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-strong leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
