"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import {
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Database,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  FileCode,
} from "lucide-react";

export function LiveLedger() {
  const [terminalLog, setTerminalLog] = useState<{
    type: "neutral" | "error" | "success";
    title: string;
    detail: string;
  }>({
    type: "neutral",
    title: "READY FOR QUERY EXECUTION",
    detail: "Awaiting database transaction simulation on table public.movement_ledger...",
  });

  const [simulating, setSimulating] = useState(false);

  const handleTestIllegalMutation = () => {
    setSimulating(true);
    setTimeout(() => {
      setTerminalLog({
        type: "error",
        title: "POSTGRES TRIGGER VIOLATION: MUTATION BLOCKED",
        detail:
          "ERROR 42501: UPDATE statement rejected by trigger trg_prevent_ledger_mutation() ON movement_ledger. Row #TR-8921 is permanently immutable.",
      });
      setSimulating(false);
    }, 400);
  };

  const handleTestValidAppend = () => {
    setSimulating(true);
    const hash = "0x" + Math.random().toString(16).substring(2, 12);
    setTimeout(() => {
      setTerminalLog({
        type: "success",
        title: "TRANSACTION COMMITTED (11ms)",
        detail: `INSERT INTO movement_ledger (from_loc, to_loc, sku_id, qty, hash) VALUES ('HUB-01', 'SITE-04', 'COPPER-99', 500, '${hash}') -> OK.`,
      });
      setSimulating(false);
    }, 400);
  };

  return (
    <section id="ledger" className="relative py-28 sm:py-36 border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="max-w-3xl">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-scarlet/40 bg-scarlet/10 px-3.5 py-1 text-xs uppercase tracking-[0.18em] text-scarlet font-mono">
              <Database className="h-3.5 w-3.5" />
              The Immutable Truth Layer
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] leading-[1.1] font-sans">
              Traditional ERPs allow edits. <br />
              <span className="text-scarlet">INCP makes fraud mathematically impossible.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-silver leading-relaxed font-sans">
              When shift workers or rogue admins attempt to alter inventory numbers after the fact,
              traditional databases quietly overwrite history. INCP uses PostgreSQL kernel-level
              triggers that enforce an append-only, cryptographic movement ledger.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Terminal Inspector */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Simulation Console (7 cols) */}
          <ScrollReveal delay={300} className="lg:col-span-7">
            <div className="h-full rounded-3xl border-2 border-crimson/50 bg-black p-6 flex flex-col justify-between shadow-2xl">
              <div>
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] font-mono text-xs text-silver">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-scarlet" />
                    <span className="h-3 w-3 rounded-full bg-crimson" />
                    <span className="h-3 w-3 rounded-full bg-silver" />
                    <span className="ml-2 text-white font-bold">psql://incp-core-prod:5432/mllc</span>
                  </div>
                  <span className="text-scarlet">READ_COMMITTED</span>
                </div>

                {/* Interactive Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleTestIllegalMutation}
                    disabled={simulating}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-black border border-scarlet/50 hover:bg-crimson/20 hover:border-scarlet py-3 px-4 text-xs font-mono font-bold text-white transition-all shadow"
                  >
                    <ShieldAlert className="h-4 w-4 text-scarlet" />
                    SIMULATE ILLEGAL &quot;UPDATE&quot; QUERY
                  </button>

                  <button
                    onClick={handleTestValidAppend}
                    disabled={simulating}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-scarlet hover:bg-crimson py-3 px-4 text-xs font-mono font-bold text-white transition-all shadow-lg shadow-scarlet/25"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    SIMULATE APPEND EVENT
                  </button>
                </div>

                {/* Terminal Screen Readout */}
                <div className="mt-6 p-5 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] font-mono min-h-[140px] flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    {terminalLog.type === "error" && (
                      <>
                        <XCircle className="h-4 w-4 text-scarlet" />
                        <span className="text-scarlet">{terminalLog.title}</span>
                      </>
                    )}
                    {terminalLog.type === "success" && (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-white" />
                        <span className="text-white">{terminalLog.title}</span>
                      </>
                    )}
                    {terminalLog.type === "neutral" && (
                      <>
                        <Terminal className="h-4 w-4 text-silver" />
                        <span className="text-silver">{terminalLog.title}</span>
                      </>
                    )}
                  </div>
                  <p className="mt-2.5 text-xs text-silver leading-relaxed break-all">
                    {terminalLog.detail}
                  </p>
                </div>
              </div>

              {/* Code Snippet Trigger Definition */}
              <div className="mt-6 pt-4 border-t border-[var(--border)] font-mono text-[11px] text-silver flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <FileCode className="h-3.5 w-3.5 text-scarlet" />
                  Database Trigger: <code>trg_prevent_ledger_mutation()</code>
                </span>
                <span className="text-white font-semibold">Zero Bypass Guarantee</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 4-Phase Custody Chain (5 cols) */}
          <ScrollReveal delay={400} className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[var(--text)] tracking-tight font-sans">
                  Atomic State Transition Lifecycle
                </h3>
                <p className="mt-1.5 text-xs text-silver">
                  Every inventory unit transitions through strict mathematical states:
                </p>

                <div className="mt-6 space-y-3.5 font-mono text-xs">
                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] flex items-start gap-3">
                    <span className="h-6 w-6 rounded-lg bg-black border border-[var(--border)] flex items-center justify-center font-bold text-scarlet shrink-0">
                      01
                    </span>
                    <div>
                      <div className="text-white font-bold">AVAILABLE STOCK</div>
                      <div className="text-[11px] text-silver mt-0.5">
                        Free balance on location. Visible in global replenishment queries.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-scarlet/30 bg-crimson/10 flex items-start gap-3">
                    <span className="h-6 w-6 rounded-lg bg-scarlet flex items-center justify-center font-bold text-white shrink-0">
                      02
                    </span>
                    <div>
                      <div className="text-white font-bold flex items-center gap-1.5">
                        <Lock className="h-3 w-3 text-scarlet" /> LOCKED RESERVATION
                      </div>
                      <div className="text-[11px] text-silver mt-0.5">
                        Transfers lock reserve atomically to prevent double-dispatch race conditions.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] flex items-start gap-3">
                    <span className="h-6 w-6 rounded-lg bg-black border border-[var(--border)] flex items-center justify-center font-bold text-scarlet shrink-0">
                      03
                    </span>
                    <div>
                      <div className="text-white font-bold">IN-TRANSIT CUSTODY</div>
                      <div className="text-[11px] text-silver mt-0.5">
                        Carrier driver assigned. Location coordinates tracked until delivery signoff.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] flex items-start gap-3">
                    <span className="h-6 w-6 rounded-lg bg-black border border-[var(--border)] flex items-center justify-center font-bold text-white shrink-0">
                      04
                    </span>
                    <div>
                      <div className="text-white font-bold">DELIVERED & RECONCILED</div>
                      <div className="text-[11px] text-silver mt-0.5">
                        Destination opening snapshot updated with tamper-proof receipt record.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-silver">
                <span>Race Condition Proof</span>
                <span className="text-scarlet font-bold">PostgreSQL Row Locks</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
