"use client";

import { useMemo, useState } from "react";
import { FileDown, Loader2, Check } from "lucide-react";
import { CONSUMPTION, CATEGORY_VALUE, TURNOVER, SUPPLIERS } from "../demoData";
import { CHART_VARS } from "../theme";
import { Card, CardHead, Th, Td, Badge } from "../primitives";
import { useAppWidth, useMeasuredWidth, cols } from "../useWidth";

type Range = "7d" | "30d" | "90d";

function AreaChart({ range }: { range: Range }) {
  const data = CONSUMPTION[range];
  const [hover, setHover] = useState<number | null>(null);
  // Resolve once so the JSX below narrows cleanly under noUncheckedIndexedAccess.
  const hoveredPoint = hover === null ? undefined : data[hover];
  const { ref, width } = useMeasuredWidth<HTMLDivElement>();

  const W = Math.max(280, Math.round(width));
  const H = 220;
  const P = { t: 16, r: 12, b: 26, l: 40 };
  const max = Math.max(...data.flatMap((d) => [d.issued, d.received])) * 1.12;
  const x = (i: number) => P.l + (i * (W - P.l - P.r)) / Math.max(1, data.length - 1);
  const y = (v: number) => P.t + (1 - v / max) * (H - P.t - P.b);

  const line = (key: "issued" | "received") =>
    data.map((d, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(d[key])}`).join(" ");
  const area = `${line("issued")} L${x(data.length - 1)},${H - P.b} L${x(0)},${H - P.b} Z`;

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(((px - P.l) / (W - P.l - P.r)) * (data.length - 1));
    setHover(Math.max(0, Math.min(data.length - 1, i)));
  };

  return (
    <div className="relative" ref={ref}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-[220px]"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="incp-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--a-c1)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--a-c1)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <g key={t}>
            <line
              x1={P.l}
              x2={W - P.r}
              y1={P.t + t * (H - P.t - P.b)}
              y2={P.t + t * (H - P.t - P.b)}
              stroke="var(--a-border)"
              strokeWidth="1"
            />
            <text
              x={P.l - 8}
              y={P.t + t * (H - P.t - P.b) + 3}
              textAnchor="end"
              fontSize="9"
              fill="var(--a-muted)"
            >
              {Math.round((max * (1 - t)) / 100) / 10}k
            </text>
          </g>
        ))}

        <path d={area} fill="url(#incp-area)" />
        <path d={line("issued")} fill="none" stroke="var(--a-c1)" strokeWidth="2" />
        <path d={line("received")} fill="none" stroke="var(--a-c5)" strokeWidth="2" strokeDasharray="4 3" />

        {data.map((d, i) => (
          <text key={d.label} x={x(i)} y={H - 8} textAnchor="middle" fontSize="9" fill="var(--a-muted)">
            {d.label}
          </text>
        ))}

        {hover !== null && hoveredPoint && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={P.t} y2={H - P.b} stroke="var(--a-border-strong)" strokeWidth="1" />
            <circle cx={x(hover)} cy={y(hoveredPoint.issued)} r="4" fill="var(--a-c1)" />
            <circle cx={x(hover)} cy={y(hoveredPoint.received)} r="4" fill="var(--a-c5)" />
          </g>
        )}
      </svg>

      {hover !== null && hoveredPoint && (
        <div
          className="pointer-events-none absolute top-2 rounded-lg border px-3 py-2 text-[10px] shadow-lg"
          style={{
            borderColor: "var(--a-border)",
            background: "var(--a-card)",
            color: "var(--a-text)",
            left: `${(x(hover) / W) * 100}%`,
            transform: `translateX(${hover > data.length / 2 ? "-110%" : "10%"})`,
          }}
        >
          <div className="font-bold mb-1">{hoveredPoint.label}</div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--a-c1)" }} />
            Issued <strong className="tabular-nums">{hoveredPoint.issued.toLocaleString()}</strong>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--a-c5)" }} />
            Received <strong className="tabular-nums">{hoveredPoint.received.toLocaleString()}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

function Donut() {
  const [hover, setHover] = useState<number | null>(null);
  const total = CATEGORY_VALUE.reduce((s, c) => s + c.value, 0);
  const R = 54;
  const C = 2 * Math.PI * R;

  const segments = useMemo(() => {
    let acc = 0;
    return CATEGORY_VALUE.map((c, i) => {
      const frac = c.value / total;
      const seg = { ...c, i, frac, offset: acc };
      acc += frac;
      return seg;
    });
  }, [total]);

  const hoveredSegment = hover === null ? undefined : segments[hover];

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox="0 0 140 140" className="h-[160px] w-[160px] sm:h-[190px] sm:w-[190px] -rotate-90">
          {segments.map((s) => (
            <circle
              key={s.name}
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke={CHART_VARS[s.i % CHART_VARS.length]}
              strokeWidth={hover === s.i ? 24 : 18}
              strokeDasharray={`${s.frac * C} ${C}`}
              strokeDashoffset={-s.offset * C}
              opacity={hover === null || hover === s.i ? 1 : 0.35}
              onMouseEnter={() => setHover(s.i)}
              onMouseLeave={() => setHover(null)}
              style={{ transition: "stroke-width 150ms, opacity 150ms", cursor: "pointer" }}
            />
          ))}
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <div className="text-[9px] uppercase tracking-[0.14em]" style={{ color: "var(--a-muted)" }}>
              {hover === null || !hoveredSegment ? "Total" : hoveredSegment.name}
            </div>
            <div className="text-[18px] font-bold tabular-nums" style={{ color: "var(--a-text)" }}>
              ${((hover === null || !hoveredSegment ? total : hoveredSegment.value) / 1000).toFixed(2)}M
            </div>
            {hover !== null && hoveredSegment && (
              <div className="text-[10px] tabular-nums" style={{ color: "var(--a-muted)" }}>
                {(hoveredSegment.frac * 100).toFixed(1)}% of value
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1.5">
        {segments.map((s) => (
          <button
            key={s.name}
            type="button"
            onMouseEnter={() => setHover(s.i)}
            onMouseLeave={() => setHover(null)}
            className="flex items-center gap-1.5 text-[10px]"
            style={{ color: hover === null || hover === s.i ? "var(--a-text-2)" : "var(--a-faint)" }}
          >
            <span
              className="h-2 w-2 rounded-[2px]"
              style={{ background: CHART_VARS[s.i % CHART_VARS.length] }}
            />
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsScreen() {
  const w = useAppWidth();
  const [range, setRange] = useState<Range>("30d");
  const [pdf, setPdf] = useState<"idle" | "working" | "done">("idle");

  const exportPdf = () => {
    if (pdf !== "idle") return;
    setPdf("working");
    setTimeout(() => setPdf("done"), 1400);
    setTimeout(() => setPdf("idle"), 4200);
  };

  const maxDays = Math.max(...TURNOVER.map((t) => t.days));

  return (
    <div className="flex flex-col gap-5">
      {/* Header row */}
      <div className="flex flex-wrap items-end justify-between gap-4 pb-4 border-b" style={{ borderColor: "var(--a-border)" }}>
        <div>
          <h2 className="text-[20px] sm:text-[24px] font-bold tracking-tight m-0" style={{ color: "var(--a-text)" }}>
            <em className="italic font-normal" style={{ color: "var(--a-faint)" }}>I. Movement</em> · issued vs received
          </h2>
          <p className="mt-1 text-[11px]" style={{ color: "var(--a-muted)" }}>
            Rolling consumption velocity across all 50 locations · live data
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex rounded-lg border overflow-hidden shrink-0" style={{ borderColor: "var(--a-border)" }}>
            {(["7d", "30d", "90d"] as Range[]).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: range === r ? "var(--a-accent-soft)" : "transparent",
                  color: range === r ? "var(--a-accent)" : "var(--a-muted)",
                }}
              >
                {r}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={exportPdf}
            className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider"
            style={{ background: "var(--a-text)", color: "var(--a-card)" }}
          >
            {pdf === "working" ? (
              <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Rendering</>
            ) : pdf === "done" ? (
              <><Check className="h-3.5 w-3.5" /> Report ready</>
            ) : (
              <><FileDown className="h-3.5 w-3.5" /> Export PDF</>
            )}
          </button>
        </div>
      </div>

      <Card>
        <CardHead
          title="Consumption velocity"
          right={
            <div className="flex items-center gap-3 text-[10px]" style={{ color: "var(--a-muted)" }}>
              <span className="flex items-center gap-1.5">
                <span className="h-[2px] w-4" style={{ background: "var(--a-c1)" }} /> Issued
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-[2px] w-4" style={{ background: "var(--a-c5)" }} /> Received
              </span>
            </div>
          }
        />
        <AreaChart range={range} />
      </Card>

      <div className="grid gap-4" style={cols(w > 720 ? 2 : 1)}>
        <Card>
          <CardHead
            title="Stock value by category"
            right={<span className="text-[10px]" style={{ color: "var(--a-muted)" }}>8 groups</span>}
          />
          <Donut />
        </Card>

        <Card>
          <CardHead
            title="Turnover by category"
            right={<span className="text-[10px]" style={{ color: "var(--a-muted)" }}>lower = faster</span>}
          />
          <div className="flex flex-col gap-2.5">
            {TURNOVER.map((t) => (
              <div key={t.name} className="grid grid-cols-[minmax(72px,100px)_1fr_44px] items-center gap-3">
                <span className="text-[11px] truncate" style={{ color: "var(--a-text-2)" }}>{t.name}</span>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--a-slate-soft)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${(t.days / maxDays) * 100}%`, background: "var(--a-c3)" }}
                  />
                </div>
                <span className="text-[10px] tabular-nums text-right" style={{ color: "var(--a-muted)" }}>
                  {t.days}d
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px]" style={{ color: "var(--a-muted)" }}>
            Fewer days means stock in that category cycles faster.
          </p>
        </Card>
      </div>

      <Card pad={false}>
        <div className="px-4 pt-4">
          <CardHead
            title="Supplier scorecards"
            right={<Badge tone="accent">on-time · lead time · spend</Badge>}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px]">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--a-border)" }}>
                <Th>Supplier</Th>
                <Th>On-time %</Th>
                <Th>Avg lead time</Th>
                <Th>Orders</Th>
                <Th>Spend</Th>
              </tr>
            </thead>
            <tbody>
              {SUPPLIERS.map((s) => (
                <tr
                  key={s.name}
                  className="border-b last:border-0"
                  style={{ borderColor: "var(--a-border)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--a-raised)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <Td>
                    <span className="font-bold" style={{ color: "var(--a-text)" }}>{s.name}</span>
                  </Td>
                  <Td>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full overflow-hidden" style={{ background: "var(--a-slate-soft)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${s.onTime}%`,
                            background:
                              s.onTime >= 90 ? "var(--a-success)" : s.onTime >= 80 ? "var(--a-warning)" : "var(--a-danger)",
                          }}
                        />
                      </div>
                      <span className="tabular-nums">{s.onTime}%</span>
                    </div>
                  </Td>
                  <Td className="tabular-nums">{s.leadTime} days</Td>
                  <Td className="tabular-nums">{s.orders}</Td>
                  <Td className="tabular-nums font-bold">
                    <span style={{ color: "var(--a-text)" }}>{s.spend}</span>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2.5 border-t text-[10px]"
          style={{ borderColor: "var(--a-border)", color: "var(--a-muted)" }}
        >
          <span>14 metrics tracked · Chromedp PDF export renders in under 2s</span>
          <span className="truncate">GET /api/v1/analytics/trends</span>
        </div>
      </Card>
    </div>
  );
}
