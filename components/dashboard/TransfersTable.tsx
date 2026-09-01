"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react";

import type {
  SortDirection,
  SortState,
  SortableColumn,
  TableColumn,
  Tone,
  TransferRow,
  TransferStatus,
} from "./types";

interface TransfersTableProps {
  readonly rows: readonly TransferRow[];
  readonly columns: readonly TableColumn[];
}

/* ── Presentation maps ──────────────────────────────────────────── */

const STATUS_META: Record<TransferStatus, { readonly label: string; readonly tone: Tone }> = {
  "in-transit": { label: "In transit", tone: "info" },
  "awaiting-approval": { label: "Awaiting approval", tone: "warning" },
  reconciled: { label: "Reconciled", tone: "success" },
  exception: { label: "Exception", tone: "danger" },
};

const TONE_CLASS: Record<Tone, string> = {
  neutral: "bg-surface-2 text-muted-strong ring-border",
  success: "bg-success/12 text-success-text ring-success/30",
  warning: "bg-warning/12 text-warning-text ring-warning/30",
  info: "bg-info/12 text-info-text ring-info/30",
  danger: "bg-destructive/12 text-destructive-text ring-destructive/30",
};

const HIDE_BELOW_CLASS: Record<NonNullable<TableColumn["hideBelow"]>, string> = {
  sm: "hidden sm:table-cell",
  md: "hidden md:table-cell",
  lg: "hidden lg:table-cell",
};

/* ── Formatting (fixed locale + UTC so SSR and client agree) ────── */

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const dateTime = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC",
});

/** Compare two rows on a column, with numeric columns compared numerically. */
function compareRows(a: TransferRow, b: TransferRow, column: SortableColumn): number {
  switch (column) {
    case "items":
      return a.items - b.items;
    case "value":
      return a.value - b.value;
    case "updatedAt":
      return Date.parse(a.updatedAt) - Date.parse(b.updatedAt);
    case "status":
      return STATUS_META[a.status].label.localeCompare(STATUS_META[b.status].label);
    default:
      return String(a[column]).localeCompare(String(b[column]));
  }
}

export function TransfersTable({ rows, columns }: TransfersTableProps): React.JSX.Element {
  const [sort, setSort] = useState<SortState>({ column: "updatedAt", direction: "desc" });

  const sortedRows = useMemo<readonly TransferRow[]>(() => {
    const factor = sort.direction === "asc" ? 1 : -1;
    // Copy before sorting: `rows` is readonly and callers may reuse it.
    return [...rows].sort((a, b) => compareRows(a, b, sort.column) * factor);
  }, [rows, sort]);

  const toggleSort = (column: SortableColumn): void => {
    setSort((prev): SortState => {
      if (prev.column !== column) return { column, direction: "asc" };
      const direction: SortDirection = prev.direction === "asc" ? "desc" : "asc";
      return { column, direction };
    });
  };

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-surface-1 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Active transfers</h2>
          <p className="text-xs text-muted-strong">
            {sortedRows.length} movements across the network
          </p>
        </div>
        <a
          href="#"
          className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-border-hover hover:bg-surface-2"
        >
          View all
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[44rem] border-collapse text-sm">
          <caption className="sr-only">
            Active inventory transfers, sortable by column.
          </caption>

          <thead>
            <tr className="border-b border-border bg-surface-2">
              {columns.map((column) => {
                const isSorted = column.sortable && sort.column === column.id;
                const hideClass = column.hideBelow ? HIDE_BELOW_CLASS[column.hideBelow] : "";
                const alignClass = column.align === "right" ? "text-right" : "text-left";

                return (
                  <th
                    key={column.id}
                    scope="col"
                    /* aria-sort belongs on the header cell, and must be
                       omitted (not "none") on non-sortable columns. */
                    aria-sort={
                      isSorted
                        ? sort.direction === "asc"
                          ? "ascending"
                          : "descending"
                        : undefined
                    }
                    className={`px-4 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-strong ${alignClass} ${hideClass}`}
                  >
                    {column.sortable ? (
                      <button
                        type="button"
                        onClick={() => toggleSort(column.id as SortableColumn)}
                        className={`inline-flex items-center gap-1 rounded transition-colors hover:text-foreground ${
                          column.align === "right" ? "flex-row-reverse" : ""
                        } ${isSorted ? "text-foreground" : ""}`}
                      >
                        {column.label}
                        {isSorted ? (
                          sort.direction === "asc" ? (
                            <ChevronUp className="h-3.5 w-3.5" aria-hidden />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                          )
                        ) : (
                          <ArrowUpDown className="h-3 w-3 opacity-50" aria-hidden />
                        )}
                      </button>
                    ) : (
                      column.label
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {sortedRows.map((row) => {
              const status = STATUS_META[row.status];

              return (
                <tr
                  key={row.id}
                  className="border-b border-border-subtle transition-colors last:border-b-0 hover:bg-surface-2"
                >
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-foreground">
                    {row.reference}
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-3 text-muted-strong md:table-cell">
                    {row.origin}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted-strong">
                    {row.destination}
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-3 text-right tabular-nums text-muted-strong sm:table-cell">
                    {row.items}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-foreground">
                    {currency.format(row.value)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${TONE_CLASS[status.tone]}`}
                    >
                      {status.label}
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-3 tabular-nums text-muted-strong lg:table-cell">
                    <time dateTime={row.updatedAt}>
                      {dateTime.format(new Date(row.updatedAt))}
                    </time>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-3 text-muted-strong lg:table-cell">
                    {row.owner}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
