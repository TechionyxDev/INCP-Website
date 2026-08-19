"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Shield, KeyRound, QrCode, Lock, Gauge, FileLock2 } from "lucide-react";

export function SecurityArchitecture() {
  const securitySpecs = [
    {
      code: "SEC-01",
      title: "Immutable PostgreSQL Ledger Triggers",
      desc: "PostgreSQL database triggers physically reject direct UPDATE and DELETE queries on table movement_ledger, guaranteeing a tamper-proof audit trail.",
    },
    {
      code: "SEC-02",
      title: "TOTP Two-Factor Authentication (2FA)",
      desc: "RFC 6238 time-based one-time password integration with bcrypt-hashed emergency recovery codes and trusted hardware signature verification.",
    },
    {
      code: "SEC-03",
      title: "AES-256-GCM Envelope Encryption",
      desc: "Cryptographic envelope protection for TOTP secrets, session payloads, and supplier billing contracts stored at rest.",
    },
    {
      code: "SEC-04",
      title: "Direct TCP Peer-IP Rate Limiting",
      desc: "Kernel-level TCP peer IP inspection mitigates brute-force attacks and prevents X-Forwarded-For header spoofing across reverse proxies.",
    },
    {
      code: "SEC-05",
      title: "6-Tier RBAC & Scope Derivation",
      desc: "Zero-trust hierarchical role permissions enforced from Super Admin down to Site Officials with location-scoped access tokens.",
    },
    {
      code: "SEC-06",
      title: "Account Lockout & Anomaly Guard",
      desc: "Automatic 15-minute account freeze triggered after 5 consecutive failed login attempts with security notification logging.",
    },
  ];

  return (
    <section id="security" className="py-24 sm:py-32 border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <div className="text-xs font-mono text-scarlet tracking-widest uppercase font-bold">
              [ ENTERPRISE SECURITY // DEFENSE SPECIFICATION ]
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[var(--text)] tracking-tight leading-[1.08] font-sans">
              Zero-trust defense. <br />
              <span className="text-scarlet">Financial-grade immutability.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-sm sm:text-base text-silver leading-relaxed font-sans">
              Designed for regulated industries where inventory provenance and chain of custody must
              withstand external compliance audits and zero data tampering.
            </p>
          </ScrollReveal>
        </div>

        {/* Security Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--border)]">
          {securitySpecs.map((item, idx) => (
            <ScrollReveal key={item.code} delay={idx * 60}>
              <div className="h-full p-8 border-r border-b border-[var(--border)] bg-[var(--card)] flex flex-col justify-between hover:bg-[var(--bg-soft)] transition-colors">
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-silver pb-4 border-b border-[var(--border)]">
                    <span className="text-scarlet font-bold font-mono">// {item.code}</span>
                    <span>ENFORCED AT DB LAYER</span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[var(--text)] tracking-tight font-sans">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-silver leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs text-silver">
                  <span>Standard: SOC 2 Ready</span>
                  <span className="text-scarlet font-bold">VERIFIED</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
