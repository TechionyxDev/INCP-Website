"use client";

import { useMemo, useState } from "react";
import { Download, Plus, Search, Settings2 } from "lucide-react";
import { ITEMS, STOCK, CATEGORIES, type Item } from "../demoData";
import { Card, Th, Td, Badge, Dot, GhostBtn, Select, criticalityTone } from "../primitives";
import { useAppWidth, cols } from "../useWidth";

type SortKey = "sku" | "name" | "unitCost" | "reorderPoint";

export function InventoryScreen({ query }: { query: string }) {
  const w = useAppWidth();
  const [tab, setTab] = useState<"catalogue" | "stock">("catalogue");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [level, setLevel] = useState("All Levels");
  const [showInactive, setShowInactive] = useState(false);
  const [sort, setSort] = useState<{ key: SortKey; dir: 1 | -1 }>({ key: "sku", dir: 1 });
  const [deactivated, setDeactivated] = useState<string[]>([]);

  const term = (query || search).toLowerCase();

  const rows = useMemo(() => {
    const isActive = (i: Item) => i.active && !deactivated.includes(i.sku);
    const out = ITEMS.filter((i) => {
      if (!showInactive && !isActive(i)) return false;
      if (category !== "All Categories" && i.category !== category) return false;
      if (level !== "All Levels" && i.criticality !== level.toLowerCase()) return false;
      if (term && !`${i.sku} ${i.name} ${i.category}`.toLowerCase().includes(term)) return false;
      return true;
    });
    return [...out].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * sort.dir;
      return String(av).localeCompare(String(bv)) * sort.dir;
    });
  }, [term, category, level, showInactive, sort, deactivated]);

  const toggleSort = (key: SortKey) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === 1 ? -1 : 1 }));

  const SortTh = ({ k, children }: { k: SortKey; children: string }) => (
    <th
      onClick={() => toggleSort(k)}
      className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-[0.1em] cursor-pointer select-none whitespace-nowrap"
      style={{ color: sort.key === k ? "var(--a-accent)" : "var(--a-muted)" }}
    >
      {children}
      <span className="ml-1">{sort.key === k ? (sort.dir === 1 ? "↑" : "↓") : "↕"}</span>
    </th>
  );

  return (
    <div className="flex flex-col gap-5">
      {/* KPI strip */}
      <Card pad={false}>
        <div className="grid divide-x" style={{ ...cols(w > 640 ? 4 : 2), borderColor: "var(--a-border)" }}>
          {[
            ["Total SKUs", "132", "Active items"],
            ["Stock Records", "6,600", "Across locations"],
            ["Categories", "8", "Classifications"],
            ["Locations", "50", "Active network"],
          ].map(([l, v, s]) => (
            <div key={l} className="px-5 py-4" style={{ borderColor: "var(--a-border)" }}>
              <div className="text-[9px] uppercase tracking-[0.14em]" style={{ color: "var(--a-muted)" }}>
                {l}
              </div>
              <div className="mt-1 text-[28px] leading-none font-bold tabular-nums" style={{ color: "var(--a-text)" }}>
                {v}
              </div>
              <div className="mt-1.5 text-[9px] uppercase tracking-[0.12em]" style={{ color: "var(--a-muted)" }}>
                {s}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-[11px] font-bold"
          style={{ borderColor: "var(--a-border-strong)", color: "var(--a-text-2)", background: "var(--a-card)" }}
        >
          <Download className="h-3.5 w-3.5" /> Export
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider"
          style={{ background: "var(--a-text)", color: "var(--a-card)" }}
        >
          <Plus className="h-3.5 w-3.5" /> Add Item
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b" style={{ borderColor: "var(--a-border)" }}>
        {(["catalogue", "stock"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] border-b-2 -mb-px"
            style={{
              borderColor: tab === t ? "var(--a-text)" : "transparent",
              color: tab === t ? "var(--a-text)" : "var(--a-muted)",
            }}
          >
            {t === "catalogue" ? "Catalogue" : "Stock Levels"}
          </button>
        ))}
      </div>

      {tab === "catalogue" ? (
        <>
          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5" style={{ color: "var(--a-muted)" }} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search items..."
                className="w-full rounded-lg border pl-9 pr-3 py-2 text-[11px] outline-none"
                style={{ borderColor: "var(--a-border)", background: "var(--a-raised)", color: "var(--a-text)" }}
              />
            </div>
            <Select value={category} options={["All Categories", ...CATEGORIES]} onChange={setCategory} />
            <div
              className="grid place-items-center h-[34px] w-[34px] rounded-lg border"
              style={{ borderColor: "var(--a-border)", background: "var(--a-raised)" }}
            >
              <Settings2 className="h-3.5 w-3.5" style={{ color: "var(--a-muted)" }} />
            </div>
            <Select value={level} options={["All Levels", "Critical", "High", "Medium", "Low"]} onChange={setLevel} />
            <label className="flex items-center gap-2 text-[11px] cursor-pointer" style={{ color: "var(--a-text-2)" }}>
              <input
                type="checkbox"
                checked={showInactive}
                onChange={(e) => setShowInactive(e.target.checked)}
                className="h-3.5 w-3.5 accent-[var(--a-accent)]"
              />
              Show inactive
            </label>
          </div>

          <Card pad={false}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px]">
                <thead style={{ background: "var(--a-raised)" }}>
                  <tr className="border-b" style={{ borderColor: "var(--a-border)" }}>
                    <SortTh k="sku">SKU</SortTh>
                    <SortTh k="name">Item Name</SortTh>
                    <Th>Category</Th>
                    <Th>Unit</Th>
                    <Th>Criticality</Th>
                    <SortTh k="reorderPoint">Reorder Pt</SortTh>
                    <SortTh k="unitCost">Unit Cost</SortTh>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((i) => {
                    const active = i.active && !deactivated.includes(i.sku);
                    return (
                      <tr
                        key={i.sku}
                        className="border-b last:border-0"
                        style={{ borderColor: "var(--a-border)", opacity: active ? 1 : 0.55 }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--a-raised)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <Td className="font-bold">{i.sku}</Td>
                        <Td>
                          <span className="font-bold" style={{ color: "var(--a-text)" }}>{i.name}</span>
                        </Td>
                        <Td>{i.category}</Td>
                        <Td>{i.unit}</Td>
                        <Td>
                          <Badge tone={criticalityTone(i.criticality)}>{i.criticality}</Badge>
                        </Td>
                        <Td className="tabular-nums">{i.reorderPoint}</Td>
                        <Td className="tabular-nums">${i.unitCost.toFixed(2)}</Td>
                        <Td>
                          <Dot tone={active ? "success" : "slate"} />
                        </Td>
                        <Td>
                          <div className="flex gap-1.5">
                            <GhostBtn>Edit</GhostBtn>
                            <GhostBtn
                              tone="danger"
                              onClick={() =>
                                setDeactivated((d) =>
                                  d.includes(i.sku) ? d.filter((s) => s !== i.sku) : [...d, i.sku]
                                )
                              }
                            >
                              {active ? "Deactivate" : "Restore"}
                            </GhostBtn>
                          </div>
                        </Td>
                      </tr>
                    );
                  })}
                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={9} className="px-3 py-8 text-center text-[11px]" style={{ color: "var(--a-muted)" }}>
                        No items match the current filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div
              className="flex items-center justify-between px-3 py-2.5 border-t text-[10px]"
              style={{ borderColor: "var(--a-border)", color: "var(--a-muted)" }}
            >
              <span>
                Showing {rows.length} of {ITEMS.length} catalogue rows
              </span>
              <span>GET /api/v1/inventory/items</span>
            </div>
          </Card>
        </>
      ) : (
        <Card pad={false}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead style={{ background: "var(--a-raised)" }}>
                <tr className="border-b" style={{ borderColor: "var(--a-border)" }}>
                  <Th>SKU</Th>
                  <Th>Item</Th>
                  <Th>Location</Th>
                  <Th>On Hand</Th>
                  <Th>Reserved</Th>
                  <Th>Available</Th>
                  <Th>Reorder Pt</Th>
                  <Th>Level</Th>
                </tr>
              </thead>
              <tbody>
                {STOCK.filter((s) => !term || `${s.sku} ${s.name} ${s.location}`.toLowerCase().includes(term)).map(
                  (s) => {
                    const available = s.onHand - s.reserved;
                    const pct = Math.min(100, Math.round((available / Math.max(1, s.reorderPoint)) * 100));
                    const tone = available === 0 ? "danger" : available < s.reorderPoint ? "warning" : "success";
                    return (
                      <tr
                        key={`${s.sku}-${s.location}`}
                        className="border-b last:border-0"
                        style={{ borderColor: "var(--a-border)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--a-raised)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <Td className="font-bold">{s.sku}</Td>
                        <Td>
                          <span className="font-bold" style={{ color: "var(--a-text)" }}>{s.name}</span>
                        </Td>
                        <Td>{s.location}</Td>
                        <Td className="tabular-nums">{s.onHand}</Td>
                        <Td className="tabular-nums">
                          <span style={{ color: "var(--a-warning)" }}>{s.reserved}</span>
                        </Td>
                        <Td className="tabular-nums font-bold">
                          <span style={{ color: "var(--a-text)" }}>{available}</span>
                        </Td>
                        <Td className="tabular-nums">{s.reorderPoint}</Td>
                        <Td>
                          <div className="flex items-center gap-2 min-w-[110px]">
                            <div className="h-1.5 flex-1 rounded-full overflow-hidden" style={{ background: "var(--a-slate-soft)" }}>
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${pct}%`,
                                  background:
                                    tone === "danger"
                                      ? "var(--a-danger)"
                                      : tone === "warning"
                                        ? "var(--a-warning)"
                                        : "var(--a-success)",
                                }}
                              />
                            </div>
                            <Badge tone={tone} dot={false}>
                              {available === 0 ? "out" : available < s.reorderPoint ? "low" : "ok"}
                            </Badge>
                          </div>
                        </Td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
          <div
            className="flex items-center justify-between px-3 py-2.5 border-t text-[10px]"
            style={{ borderColor: "var(--a-border)", color: "var(--a-muted)" }}
          >
            <span>Atomic available = on hand − reserved (reserved locks on transfer creation)</span>
            <span>GET /api/v1/inventory/stock</span>
          </div>
        </Card>
      )}
    </div>
  );
}
