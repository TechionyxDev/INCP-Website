"use client";

import type { ReactNode } from "react";

/** Severity in the site palette reads as depth of brand, not as new hues:
 *  danger (deep brand) → warning (light brand) → slate → faint, with
 *  success reserved for the calm neutral of a settled record. */
type Tone = "accent" | "success" | "warning" | "danger" | "slate" | "faint";

const TONE: Record<Tone, { fg: string; bg: string }> = {
  accent: { fg: "var(--a-accent)", bg: "var(--a-accent-soft)" },
  success: { fg: "var(--a-success)", bg: "var(--a-success-soft)" },
  warning: { fg: "var(--a-warning)", bg: "var(--a-warning-soft)" },
  danger: { fg: "var(--a-danger)", bg: "var(--a-danger-soft)" },
  slate: { fg: "var(--a-muted)", bg: "var(--a-slate-soft)" },
  faint: { fg: "var(--a-faint)", bg: "transparent" },
};

export function Badge({
  tone = "slate",
  dot = true,
  solid = false,
  children,
}: {
  tone?: Tone;
  dot?: boolean;
  /** Filled treatment — reserved for terminal states (e.g. cancelled), which
   *  need to separate from in-flight states sharing the same brand. */
  solid?: boolean;
  children: ReactNode;
}) {
  const t = TONE[tone];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded px-2 py-[3px] text-[10px] font-bold leading-none whitespace-nowrap"
      style={{
        color: solid ? "var(--a-card)" : t.fg,
        background: solid ? t.fg : t.bg,
      }}
    >
      {dot && !solid && <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.fg }} />}
      {children}
    </span>
  );
}

export function Dot({ tone = "success" }: { tone?: Tone }) {
  const t = TONE[tone];
  return (
    <span
      className="inline-block h-2 w-2 rounded-full shrink-0"
      style={{ background: t.fg, boxShadow: `0 0 0 3px ${t.bg}` }}
    />
  );
}

export function Card({
  children,
  className = "",
  pad = true,
}: {
  children: ReactNode;
  className?: string;
  pad?: boolean;
}) {
  return (
    <div
      className={`rounded-[14px] border ${pad ? "p-4" : ""} ${className}`}
      style={{ borderColor: "var(--a-border)", background: "var(--a-card)" }}
    >
      {children}
    </div>
  );
}

export function CardHead({ title, right }: { title: ReactNode; right?: ReactNode }) {
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pb-3 mb-3 border-b"
      style={{ borderColor: "var(--a-border)" }}
    >
      <span className="text-[12px] font-bold tracking-wide min-w-0" style={{ color: "var(--a-text)" }}>
        {title}
      </span>
      {right}
    </div>
  );
}

export function Kpi({
  label,
  value,
  sub,
  tone,
  onClick,
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: Tone;
  onClick?: () => void;
}) {
  const color = tone ? TONE[tone].fg : "var(--a-text)";
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-w-0 rounded-[14px] border px-3.5 py-3 sm:px-4 sm:py-3.5 text-left transition-all duration-150 hover:-translate-y-[2px]"
      style={{
        borderColor: "var(--a-border)",
        background: "var(--a-card)",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <div className="text-[9px] uppercase tracking-[0.14em]" style={{ color: "var(--a-muted)" }}>
        {label}
      </div>
      <div className="mt-1.5 text-[22px] sm:text-[26px] leading-none font-bold tabular-nums truncate" style={{ color }}>
        {value}
      </div>
      {sub && (
        <div className="mt-1.5 text-[10px]" style={{ color: tone ? color : "var(--a-muted)" }}>
          {sub}
        </div>
      )}
    </button>
  );
}

export function Th({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <th
      className={`px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-[0.1em] whitespace-nowrap ${className}`}
      style={{ color: "var(--a-muted)" }}
    >
      {children}
    </th>
  );
}

export function Td({ children, className = "" }: { children?: ReactNode; className?: string }) {
  return (
    <td className={`px-3 py-2.5 text-[11px] align-middle ${className}`} style={{ color: "var(--a-text-2)" }}>
      {children}
    </td>
  );
}

export function GhostBtn({
  children,
  onClick,
  tone = "slate",
  active = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  tone?: Tone;
  active?: boolean;
}) {
  const t = TONE[tone];
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md border px-2 py-[5px] text-[9px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
      style={{
        borderColor: active ? t.fg : "var(--a-border-strong)",
        color: active ? t.fg : tone === "slate" ? "var(--a-muted)" : t.fg,
        background: active ? t.bg : "transparent",
      }}
    >
      {children}
    </button>
  );
}

export function Select({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-lg border pl-3 pr-7 py-2 text-[11px] outline-none cursor-pointer"
        style={{
          borderColor: "var(--a-border)",
          background: "var(--a-raised)",
          color: "var(--a-text-2)",
        }}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--a-muted)"
        strokeWidth="2.5"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export const criticalityTone = (c: string): Tone =>
  c === "critical" ? "danger" : c === "high" ? "warning" : c === "medium" ? "slate" : "faint";

export const statusTone = (s: string): Tone =>
  s === "delivered" ? "success"
    : s === "cancelled" ? "danger"
    : s === "pending" ? "warning"
    : s === "in transit" ? "accent"
    : s === "approved" ? "slate"
    : "slate";
