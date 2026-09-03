"use client";

import { Fragment, useState } from "react";
import { ChevronDown, Truck, ShieldCheck, User } from "lucide-react";
import { TRANSFERS, type TransferStatus } from "../demoData";
import { Card, Th, Td, Badge, Dot, criticalityTone, statusTone } from "../primitives";
import { useAppWidth } from "../useWidth";

const TABS: (TransferStatus | "all")[] = [
  "all",
  "pending",
  "approved",
  "in transit",
  "delivered",
  "cancelled",
];

export function TransfersScreen({ query }: { query: string }) {
  const w = useAppWidth();
  const [tab, setTab] = useState<TransferStatus | "all">("all");
  const [open, setOpen] = useState<string | null>("BEEDF88D");

  const term = query.toLowerCase();
  const rows = TRANSFERS.filter((t) => tab === "all" || t.status === tab).filter(
    (t) => !term || `${t.id} ${t.item} ${t.sku} ${t.from} ${t.to}`.toLowerCase().includes(term)
  );

  const count = (s: TransferStatus | "all") =>
    s === "all" ? TRANSFERS.length : TRANSFERS.filter((t) => t.status === s).length;

  return (
    <div className="flex flex-col gap-4">
      {/* Status tabs */}
      <div className="flex overflow-x-auto border-b" style={{ borderColor: "var(--a-border)" }}>
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className="shrink-0 whitespace-nowrap px-3 sm:px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] border-b-2 -mb-px flex items-center gap-1.5"
            style={{
              borderColor: tab === t ? "var(--a-text)" : "transparent",
              color: tab === t ? "var(--a-text)" : "var(--a-muted)",
            }}
          >
            {t}
            <span
              className="rounded px-1.5 py-[1px] text-[9px] tabular-nums"
              style={{ background: "var(--a-slate-soft)", color: "var(--a-muted)" }}
            >
              {count(t)}
            </span>
          </button>
        ))}
      </div>

      <Card pad={false}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px]">
            <thead style={{ background: "var(--a-raised)" }}>
              <tr className="border-b" style={{ borderColor: "var(--a-border)" }}>
                <Th>Transfer #</Th>
                <Th>Item</Th>
                <Th>From → To</Th>
                <Th>Qty</Th>
                <Th>Priority</Th>
                <Th>Status</Th>
                <Th>Initiated By</Th>
                <Th>Created</Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {rows.map((t) => {
                const expanded = open === t.id;
                return (
                  <Fragment key={t.id}>
                    <tr
                      onClick={() => setOpen(expanded ? null : t.id)}
                      className="border-b cursor-pointer"
                      style={{
                        borderColor: "var(--a-border)",
                        background: expanded ? "var(--a-raised)" : "transparent",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--a-raised)")}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = expanded ? "var(--a-raised)" : "transparent")
                      }
                    >
                      <Td className="font-bold">{t.id}</Td>
                      <Td className="min-w-[170px]">
                        <div className="font-bold" style={{ color: "var(--a-text)" }}>{t.item}</div>
                        <div className="text-[10px]" style={{ color: "var(--a-muted)" }}>{t.sku}</div>
                      </Td>
                      <Td className="whitespace-nowrap">
                        {t.from} <span style={{ color: "var(--a-muted)" }}>→</span> {t.to}
                      </Td>
                      <Td className="tabular-nums font-bold">
                        <span style={{ color: "var(--a-text)" }}>{t.qty}</span>
                      </Td>
                      <Td>
                        <Badge tone={criticalityTone(t.priority)}>{t.priority}</Badge>
                      </Td>
                      <Td>
                        <div className="flex items-center gap-2">
                          <Dot tone={statusTone(t.status)} />
                          <Badge tone={statusTone(t.status)} dot={false} solid={t.status === "cancelled"}>
                            {t.status}
                          </Badge>
                        </div>
                      </Td>
                      <Td>{t.initiatedBy}</Td>
                      <Td className="whitespace-nowrap">{t.created}</Td>
                      <Td>
                        <ChevronDown
                          className="h-3.5 w-3.5 transition-transform"
                          style={{
                            color: "var(--a-muted)",
                            transform: expanded ? "rotate(180deg)" : "none",
                          }}
                        />
                      </Td>
                    </tr>

                    {expanded && (
                      <tr style={{ background: "var(--a-raised)" }}>
                        <td colSpan={9} className="px-4 pb-5 pt-1">
                          <div
                            className="grid gap-5"
                            style={{
                              gridTemplateColumns:
                                w > 760 ? "minmax(0,1.3fr) minmax(0,1fr)" : "minmax(0,1fr)",
                            }}
                          >
                            {/* Custody timeline */}
                            <div>
                              <div
                                className="text-[10px] uppercase tracking-[0.14em] mb-3"
                                style={{ color: "var(--a-muted)" }}
                              >
                                Custody chain · transfer {t.id}
                              </div>
                              <div className="flex flex-col gap-0">
                                {t.timeline.map((step, i) => (
                                  <div key={step.label} className="flex gap-3">
                                    <div className="flex flex-col items-center">
                                      <span
                                        className="h-2.5 w-2.5 rounded-full mt-1 shrink-0"
                                        style={{
                                          background: step.done ? "var(--a-accent)" : "var(--a-border-strong)",
                                          boxShadow: step.done ? "0 0 0 3px var(--a-accent-soft)" : "none",
                                        }}
                                      />
                                      {i < t.timeline.length - 1 && (
                                        <span
                                          className="w-px flex-1 my-1"
                                          style={{
                                            background: step.done ? "var(--a-accent)" : "var(--a-border)",
                                          }}
                                        />
                                      )}
                                    </div>
                                    <div className="pb-3">
                                      <div
                                        className="text-[11px] font-bold"
                                        style={{ color: step.done ? "var(--a-text)" : "var(--a-faint)" }}
                                      >
                                        {step.label}
                                      </div>
                                      <div className="text-[10px]" style={{ color: "var(--a-muted)" }}>
                                        {step.done ? step.at : "awaiting"}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Metadata */}
                            <div className="flex flex-col gap-2.5">
                              {[
                                { icon: Truck, label: "Carrier", value: t.carrier },
                                { icon: User, label: "Driver", value: t.driver },
                                { icon: ShieldCheck, label: "Receipt hash", value: t.receipt },
                              ].map((m) => (
                                <div
                                  key={m.label}
                                  className="flex items-center gap-3 rounded-xl border px-3.5 py-2.5"
                                  style={{ borderColor: "var(--a-border)", background: "var(--a-card)" }}
                                >
                                  <m.icon className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--a-accent)" }} />
                                  <div className="min-w-0">
                                    <div
                                      className="text-[9px] uppercase tracking-[0.14em]"
                                      style={{ color: "var(--a-muted)" }}
                                    >
                                      {m.label}
                                    </div>
                                    <div className="text-[11px] truncate" style={{ color: "var(--a-text)" }}>
                                      {m.value}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-3 py-8 text-center text-[11px]" style={{ color: "var(--a-muted)" }}>
                    No transfers in this state.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-3 py-2.5 border-t text-[10px]"
          style={{ borderColor: "var(--a-border)", color: "var(--a-muted)" }}
        >
          <span>Click any row to inspect its custody chain</span>
          <span className="truncate">GET /api/v1/transfers</span>
        </div>
      </Card>
    </div>
  );
}
