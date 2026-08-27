"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal delay={0}>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-surface-1 px-6 sm:px-12 py-16 sm:py-24 shadow-2xl hover:border-brand-solid/40 transition-colors">
            {/* Background Texture Image */}
            <div className="absolute inset-0 -z-10 opacity-40">
              <Image
                src="/images/cta-background.png"
                alt="Network Mesh Background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-solid/30 bg-brand-solid/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-brand-text font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                Get Started
              </span>

              <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
                Turn inventory operations <br />
                <span className="text-brand-text">into inventory intelligence.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
                Schedule a personalized walkthrough of INCP with our logistics engineering team.
                See how your locations model in real-time.
              </p>

              {submitted ? (
                <div className="mt-9 flex items-center gap-2 rounded-full border border-brand-solid/40 bg-brand-muted/30 px-6 py-3 text-brand-foreground font-medium text-sm animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-brand-text" />
                  Thank you! Our enterprise logistics team will contact you within 1 business day.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-9 flex w-full max-w-lg flex-col sm:flex-row items-stretch gap-3"
                >
                  <label className="flex-1">
                    <span className="sr-only">Work email address</span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full h-12 rounded-full bg-surface-2 border border-[var(--border)] px-5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring focus:border-border-hover transition-colors"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold text-brand-foreground bg-brand-solid hover:bg-brand-solid-hover active:scale-[0.98] transition-all h-12 px-7 text-sm shadow-lg shadow-brand shrink-0"
                  >
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}

              <p className="mt-4 text-xs text-muted font-mono">
                Typical response &lt; 1 business day · Enterprise NDA available upon request
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
