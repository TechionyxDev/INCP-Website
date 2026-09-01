"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import {
  ShieldAlert,
  KeyRound,
  QrCode,
  Shield,
  Gauge,
  Lock,
  FileLock2,
  Users,
  Terminal,
} from "lucide-react";

export function SecurityMatrix() {
  const securitySpecs = [
    {
      icon: KeyRound,
      code: "AUTH-01",
      title: "JWT + HttpOnly Rotating Cookies",
      desc: "15-minute access token lifespan backed by SameSite=Strict HttpOnly refresh tokens. Prevents client-side XSS token exfiltration.",
    },
    {
      icon: QrCode,
      code: "2FA-02",
      title: "TOTP Two-Factor Authentication",
      desc: "RFC 6238 authenticator app integration, bcrypt-hashed emergency backup codes, and 30-day trusted hardware signature verification.",
    },
    {
      icon: Shield,
      code: "CRYPTO-03",
      title: "AES-256-GCM Envelope Encryption",
      desc: "Cryptographic envelope protection for TOTP secrets, session cookies, and sensitive supplier billing records stored at rest.",
    },
    {
      icon: Gauge,
      code: "NET-04",
      title: "Direct TCP Peer-IP Rate Limiter",
      desc: "Kernel-level TCP inspection prevents X-Forwarded-For header spoofing and mitigates automated brute-force attacks.",
    },
    {
      icon: Lock,
      code: "SECD-05",
      title: "Account Lockout & Anomaly Guard",
      desc: "Automatic 15-minute account freeze triggered after 5 consecutive failed login attempts with security admin notification.",
    },
    {
      icon: FileLock2,
      code: "TRG-06",
      title: "Immutable PostgreSQL Ledger Triggers",
      desc: "Database triggers physically reject UPDATE and DELETE SQL queries, creating a mathematically tamper-proof audit trail.",
    },
  ];

  return (
    <section id="security" className="relative py-28 sm:py-36 border-t border-[var(--border)] bg-band">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Visual (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded border border-brand-solid/40 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
                <ShieldAlert className="h-3.5 w-3.5" />
                Zero-Trust Defense Architecture
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] font-sans">
                Financial-grade immutability <br />
                <span className="text-brand-text">for physical supply chains.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-5 text-base text-muted-strong leading-relaxed font-sans">
                Every movement event, inventory reservation, and shift reconciliation is
                cryptographically signed, authenticated, rate-limited, and audited to SOC 2 compliance standards.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300} className="mt-8">
              <div className="relative aspect-square max-w-sm rounded-3xl overflow-hidden border-2 border-brand-solid/50 bg-surface-2 p-4 shadow-2xl">
                <Image
                  src="/images/security-shield.png"
                  alt="Enterprise Defense Shield"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 6 Security Architecture Spec Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securitySpecs.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 60}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-surface-1 p-6 hover:border-brand-solid transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl bg-brand-solid/10 text-brand-text flex items-center justify-center border border-brand-solid/20">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-strong uppercase font-bold px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border)]">
                        {item.code}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-medium text-foreground tracking-tight font-sans">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-strong leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[10px] font-mono text-muted-strong">
                    <span>Enforced at DB Layer</span>
                    <span className="text-brand-text font-bold">ACTIVE</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
