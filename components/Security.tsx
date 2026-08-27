import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import {
  KeyRound,
  QrCode,
  Shield,
  Gauge,
  Lock,
  FileLock2,
  Users,
  ShieldAlert,
} from "lucide-react";

export function Security() {
  const securityFeatures = [
    {
      icon: KeyRound,
      title: "JWT + HttpOnly Cookies",
      desc: "15-minute access token TTL paired with SameSite=Strict HttpOnly refresh cookies to eliminate XSS token theft.",
    },
    {
      icon: QrCode,
      title: "TOTP Two-Factor (2FA)",
      desc: "Authenticator app integration, bcrypt-hashed backup recovery codes, and 30-day trusted device tracking.",
    },
    {
      icon: Shield,
      title: "AES-256-GCM Encryption",
      desc: "Cryptographic envelope protection for TOTP secrets and sensitive session payloads stored at rest.",
    },
    {
      icon: Gauge,
      title: "Spoof-Resistant Rate Limiting",
      desc: "Direct TCP peer-IP inspection prevents header spoofing and brute force authentication attacks.",
    },
    {
      icon: Lock,
      title: "Account Lockout Policy",
      desc: "Automatic 15-minute lockout triggered after 5 consecutive failed login attempts.",
    },
    {
      icon: FileLock2,
      title: "Tamper-Proof Audit Ledger",
      desc: "PostgreSQL database triggers physically block UPDATE and DELETE queries on movement history.",
    },
    {
      icon: Users,
      title: "2FA Admin Role Enforcement",
      desc: "Super Admin and HQ Admin accounts are required to maintain active 2FA before executing sensitive mutations.",
    },
    {
      icon: ShieldAlert,
      title: "Enterprise CSP & Security Headers",
      desc: "Strict Content Security Policy, X-Frame-Options, body size caps, and automated request audit logging.",
    },
  ];

  return (
    <section id="security" className="relative py-28 sm:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Visual */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-1)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted font-mono">
                Enterprise Security
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)] leading-[1.1]">
                Security designed <br />
                <span className="text-brand-text">for regulated industries.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-5 text-base text-muted leading-relaxed">
                INCP treats every physical item movement and data transaction with financial-grade
                immutability. Every API request is rate-limited, authenticated, and audited.
              </p>
            </ScrollReveal>

            {/* Shield Visual */}
            <ScrollReveal delay={300} className="mt-8">
              <div className="relative aspect-square max-w-xs rounded-3xl overflow-hidden border border-[var(--border)] bg-surface-2 shadow-2xl p-4 hover:border-brand/40 transition-colors">
                <Image
                  src="/images/security-shield.png"
                  alt="Enterprise Security Shield"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 8 Security Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map((feat, idx) => (
              <ScrollReveal key={feat.title} delay={idx * 60}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6 hover:border-brand hover:-translate-y-0.5 transition-all">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand-text flex items-center justify-center border border-brand/20">
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[var(--text)] tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
