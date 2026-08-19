"use client";

import { Fragment, useState } from "react";
import { Clock, Plus, TriangleAlert } from "lucide-react";
import { SHIFT_LOGS, DISCREPANCY_PATTERNS, type ShiftLog } from "../demoData";
import { Card, Th, Td, Badge, Dot, GhostBtn, Select } from "../primitives";

const LOCATIONS = ["All Locations", "Site W-10", "Site W-09", "Site W-08", "Site W-07", "Site W-06", "Site N-01", "Site N-05"];

const ACTIVE: ShiftLog = {
  id: "SL-2292",
  date: "Tue, Aug 18, 2026",
  shift: "day",
  location: "Site N-05",
  openedBy: "Dhanasekaran",
  openedAt: "06:00 AM",
  closedBy: "—",
  closedAt: "—",
  status: "open",
  discrepancies: 0,
  detail: [{ item: "Nitrile Gloves M Box", opening: 12, used: 0, closing: 12, expected: 12 }],
};

export function ShiftsScreen() {
  const [tab, setTab] = useState<"logs" | "patterns">("logs");
  const [location, setLocation] = useState("All Locations");
  const [status, setStatus] = useState("All Statuses");
  const [shift, setShift] = useState("All Shifts");
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  const all = active ? [ACTIVE, ...SHIFT_LOGS] : SHIFT_LOGS;
  const rows = all.filter(
    (r) =>
      (location === "All Locations" || r.location === location) &&
      (status === "All Statuses" || r.status === status.toLowerCase()) &&
      (shift === "All Shifts" || r.shift === shift.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex border-b" style={{ borderColor: "var(--a-border)" }}>
        {(["logs", "patterns"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className="px-4 py-2.5 text-[12px] font-bold border-b-2 -mb-px"
            style={{
              borderColor: tab === t ? "var(--a-text)" : "transparent",
              color: tab === t ? "var(--a-text)" : "var(--a-muted)",
            }}
          >
            {t === "logs" ? "Shift Logs" : "Discrepancy Patterns"}
          </button>
        ))}
      </div>

      {tab === "logs" ? (
        <>
          {/* Active-shift banner */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border-l-[3px] border px-4 py-3"
            style={{
              borderColor: "var(--a-border)",
              borderLeftColor: active ? "var(--a-accent)" : "var(--a-warning)",
              background: active ? "var(--a-accent-soft)" : "var(--a-warning-soft)",
            }}
          >
            <div className="flex items-center gap-2.5 text-[12px]" style={{ color: "var(--a-text)" }}>
              <Clock className="h-4 w-4" style={{ color: active ? "var(--a-accent)" : "var(--a-warning)" }} />
              {active ? (
                <span>
                  Active shift · <strong>Site N-05</strong> · day · opened 06:00 AM · opening snapshot frozen
                </span>
              ) : (
                <span>No active shift</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                setActive((a) => !a);
                setOpen(null);
              }}
              className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider"
              style={{ background: "var(--a-text)", color: "var(--a-card)" }}
            >
              {active ? "Close Shift" : <><Plus className="h-3.5 w-3.5" /> Open Shift</>}
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2.5">
            <Select value={location} options={LOCATIONS} onChange={setLocation} />
            <Select value={status} options={["All Statuses", "Closed", "Open"]} onChange={setStatus} />
            <Select value={shift} options={["All Shifts", "Day", "Night"]} onChange={setShift} />
          </div>

          <Card pad={false}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[880px]">
                <thead style={{ background: "var(--a-raised)" }}>
                  <tr className="border-b" style={{ borderColor: "var(--a-border)" }}>
                    <Th>Date</Th>
                    <Th>Shift</Th>
                    <Th>Location</Th>
                    <Th>Opened By</Th>
                    <Th>Closed By</Th>
                    <Th>Status</Th>
                    <Th>Discrepancies</Th>
                    <Th />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <Fragment key={r.id}>
                      <tr
                        className="border-b"
                        style={{ borderColor: "var(--a-border)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--a-raised)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <Td className="whitespace-nowrap">{r.date}</Td>
                        <Td>
                          <Badge tone={r.shift === "day" ? "slate" : "faint"}>{r.shift}</Badge>
                        </Td>
                        <Td>{r.location}</Td>
                        <Td>
                          {r.openedBy} <span style={{ color: "var(--a-muted)" }}>at {r.openedAt}</span>
                        </Td>
                        <Td>
                          {r.closedBy}{" "}
                          {r.closedAt !== "—" && <span style={{ color: "var(--a-muted)" }}>at {r.closedAt}</span>}
                        </Td>
                        <Td>
                          <div className="flex items-center gap-2">
                            <Dot tone={r.status === "open" ? "accent" : "slate"} />
                            <Badge tone={r.status === "open" ? "accent" : "slate"} dot={false}>
                              {r.status}
                            </Badge>
                          </div>
                        </Td>
                        <Td>
                          {r.discrepancies > 0 ? (
                            <span className="inline-flex items-center gap-1.5" style={{ color: "var(--a-danger)" }}>
                              <TriangleAlert className="h-3.5 w-3.5" />
                              {r.discrepancies}
                            </span>
                          ) : (
                            <span style={{ color: "var(--a-muted)" }}>—</span>
                          )}
                        </Td>
                        <Td>
                          <GhostBtn
                            active={open === r.id}
                            tone={open === r.id ? "accent" : "slate"}
                            onClick={() => setOpen(open === r.id ? null : r.id)}
                          >
                            View
                          </GhostBtn>
                        </Td>
                      </tr>

                      {open === r.id && (
                        <tr style={{ background: "var(--a-raised)" }}>
                          <td colSpan={8} className="px-4 pb-4 pt-2">
                            <div
                              className="text-[10px] uppercase tracking-[0.14em] mb-2"
                              style={{ color: "var(--a-muted)" }}
                            >
                              Reconciliation · {r.id} · opening snapshot vs closing count
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full min-w-[560px]">
                                <thead>
                                  <tr className="border-b" style={{ borderColor: "var(--a-border)" }}>
                                    <Th>Item</Th>
                                    <Th>Opening</Th>
                                    <Th>Logged Usage</Th>
                                    <Th>Expected</Th>
                                    <Th>Counted</Th>
                                    <Th>Delta</Th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {r.detail.map((d) => {
                                    const delta = d.closing - d.expected;
                                    return (
                                      <tr key={d.item} className="border-b last:border-0" style={{ borderColor: "var(--a-border)" }}>
                                        <Td>
                                          <span className="font-bold" style={{ color: "var(--a-text)" }}>{d.item}</span>
                                        </Td>
                                        <Td className="tabular-nums">{d.opening}</Td>
                                        <Td className="tabular-nums">{d.used}</Td>
                                        <Td className="tabular-nums">{d.expected}</Td>
                                        <Td className="tabular-nums">{d.closing}</Td>
                                        <Td>
                                          <Badge tone={delta === 0 ? "success" : "danger"} dot={delta !== 0}>
                                            {delta === 0 ? "matched" : `${delta > 0 ? "+" : ""}${delta}`}
                                          </Badge>
                                        </Td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="flex items-center justify-between px-3 py-2.5 border-t text-[10px]"
              style={{ borderColor: "var(--a-border)", color: "var(--a-muted)" }}
            >
              <span>{rows.length} shift logs · snapshots frozen at open, deltas computed at close</span>
              <span>GET /api/v1/shifts/logs</span>
            </div>
          </Card>
        </>
      ) : (
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[13px] font-bold" style={{ color: "var(--a-text)" }}>
                Recurring drift by item
              </div>
              <div className="text-[10px] mt-0.5" style={{ color: "var(--a-muted)" }}>
                Items whose closing count repeatedly lands below the expected balance across shifts.
              </div>
            </div>
            <Badge tone="danger">last 90 days</Badge>
          </div>
          <div className="flex flex-col gap-3">
            {DISCREPANCY_PATTERNS.map((p) => {
              const max = DISCREPANCY_PATTERNS[0].occurrences;
              return (
                <div key={p.item} className="grid grid-cols-[1.4fr_2fr_auto] items-center gap-4">
                  <span className="text-[11px] font-bold truncate" style={{ color: "var(--a-text)" }}>
                    {p.item}
                  </span>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--a-slate-soft)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${(p.occurrences / max) * 100}%`, background: "var(--a-danger)" }}
                    />
                  </div>
                  <span className="text-[10px] tabular-nums whitespace-nowrap" style={{ color: "var(--a-muted)" }}>
                    {p.occurrences} events · {p.netDrift} units · {p.sites} sites
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}
