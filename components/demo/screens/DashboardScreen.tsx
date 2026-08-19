"use client";

import { useState } from "react";
import { HEALTH, ALERTS } from "../demoData";
import { Card, CardHead, Kpi, Th, Td, Badge, Dot, GhostBtn } from "../primitives";
import { useAppWidth, cols } from "../useWidth";
import type { ScreenId } from "../types";

const PAGE = 5;

export function DashboardScreen({ onNavigate }: { onNavigate: (id: ScreenId) => void }) {
  const w = useAppWidth();
  const [page, setPage] = useState(0);
  const pages = Math.ceil(HEALTH.length / PAGE);
  const rows = HEALTH.slice(page * PAGE, page * PAGE + PAGE);

  return (
    <div className="flex flex-col gap-5">
      {/* Greeting */}
      <div className="pb-4 border-b" style={{ borderColor: "var(--a-border)" }}>
        <div
          className="grid gap-6 items-end"
          style={{ gridTemplateColumns: w > 720 ? "minmax(0,1.4fr) minmax(0,1fr)" : "minmax(0,1fr)" }}
        >
          <h1
            className="leading-[1.06] font-bold tracking-tight m-0"
            style={{ color: "var(--a-text)", fontSize: w > 720 ? 44 : 30 }}
          >
            Good evening,
            <br />
            <em className="italic font-normal" style={{ color: "var(--a-faint)" }}>
              Dhanasekaran
            </em>
          </h1>
          <div className="text-[12px] leading-relaxed" style={{ color: "var(--a-text-2)" }}>
            <div className="flex items-center gap-2 mb-2">
              <Dot tone="accent" />
              <span>Tuesday, August 18, 2026</span>
            </div>
            System active · Live operational status, asset health metrics, and pending actions across the
            network.
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid gap-3" style={cols(w > 900 ? 6 : w > 600 ? 3 : 2)}>
        <Kpi label="Locations" value="50" sub="Active" />
        <Kpi label="Items" value="132" sub="In catalogue" onClick={() => onNavigate("inventory")} />
        <Kpi label="Alerts" value="41" sub="Active" tone="danger" />
        <Kpi label="Tickets" value="84" sub="Open" />
        <Kpi label="Transfers" value="51" sub="In transit" onClick={() => onNavigate("transfers")} />
        <Kpi label="Stock Value" value="$15.9M" sub="—" />
      </div>

      {/* Health + alerts */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: w > 700 ? "minmax(0,1.8fr) minmax(0,1fr)" : "minmax(0,1fr)" }}
      >
        <Card>
          <CardHead
            title="INVENTORY HEALTH BY LOCATION"
            right={
              <div className="flex items-center gap-2">
                <GhostBtn onClick={() => setPage((p) => Math.max(0, p - 1))}>Prev</GhostBtn>
                <span className="text-[10px] tabular-nums" style={{ color: "var(--a-muted)" }}>
                  {page + 1} / {pages}
                </span>
                <GhostBtn onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}>Next</GhostBtn>
              </div>
            }
          />
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--a-border)" }}>
                <Th>Location</Th>
                <Th>Below Reorder</Th>
                <Th>Healthy</Th>
                <Th>Low</Th>
                <Th>Out of Stock</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.location}
                  className="border-b last:border-0"
                  style={{ borderColor: "var(--a-border)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--a-raised)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <Td>
                    <span style={{ color: "var(--a-accent)" }}>{r.location}</span>
                  </Td>
                  <Td className="tabular-nums">
                    <span style={{ color: "var(--a-warning)" }}>{r.belowReorder}</span>
                  </Td>
                  <Td className="tabular-nums">
                    <span style={{ color: "var(--a-success)" }}>{r.healthy}</span>
                  </Td>
                  <Td className="tabular-nums">{r.low}</Td>
                  <Td className="tabular-nums">
                    <span style={{ color: "var(--a-danger)" }}>{r.outOfStock}</span>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card>
          <CardHead title="Active Alerts" right={<Badge tone="danger">{ALERTS.length}</Badge>} />
          <div className="flex flex-col">
            {ALERTS.slice(0, 6).map((a) => (
              <div
                key={a.item}
                className="flex items-center justify-between gap-3 py-2.5 border-b last:border-0"
                style={{ borderColor: "var(--a-border)" }}
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="mt-1">
                    <Dot tone={a.severity} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold truncate" style={{ color: "var(--a-text)" }}>
                      {a.item}
                    </div>
                    <div className="text-[10px]" style={{ color: "var(--a-muted)" }}>
                      {a.location}
                    </div>
                  </div>
                </div>
                <span
                  className="text-[10px] whitespace-nowrap"
                  style={{ color: a.severity === "danger" ? "var(--a-danger)" : "var(--a-warning)" }}
                >
                  {a.kind}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
