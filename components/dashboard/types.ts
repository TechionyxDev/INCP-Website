/**
 * Shared domain + UI types for the INCP dashboard.
 *
 * Everything the dashboard renders is described here so the view layer
 * stays free of inline shapes and `any`. Unions are declared as const
 * tuples and derived with `[number]`, which keeps a single source of
 * truth for both the type and its runtime keys.
 */

import type { LucideIcon } from "lucide-react";

/* ── Semantic tone ──────────────────────────────────────────────── */

export const TONES = ["neutral", "success", "warning", "info", "danger"] as const;
export type Tone = (typeof TONES)[number];

/* ── Navigation ─────────────────────────────────────────────────── */

export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly icon: LucideIcon;
  /** Optional count pill (open alerts, pending approvals, …). */
  readonly badge?: number;
}

export interface NavSection {
  readonly id: string;
  readonly label: string;
  readonly items: readonly NavItem[];
}

/* ── Metric cards ───────────────────────────────────────────────── */

export type TrendDirection = "up" | "down" | "flat";

export interface MetricTrend {
  readonly direction: TrendDirection;
  /** Percentage-point change over the comparison window. */
  readonly value: number;
  readonly label: string;
  /**
   * Whether an upward movement is good for this metric. Stockouts rising
   * is bad; fill rate rising is good. Drives the trend colour so the UI
   * never implies "green = up".
   */
  readonly higherIsBetter: boolean;
}

export interface Metric {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly caption: string;
  readonly icon: LucideIcon;
  readonly trend: MetricTrend;
}

/* ── Data table ─────────────────────────────────────────────────── */

export const TRANSFER_STATUSES = [
  "in-transit",
  "awaiting-approval",
  "reconciled",
  "exception",
] as const;
export type TransferStatus = (typeof TRANSFER_STATUSES)[number];

export interface TransferRow {
  readonly id: string;
  readonly reference: string;
  readonly origin: string;
  readonly destination: string;
  readonly items: number;
  readonly value: number;
  readonly status: TransferStatus;
  /** ISO-8601 timestamp; formatted deterministically at render time. */
  readonly updatedAt: string;
  readonly owner: string;
}

/** Column ids are constrained to the sortable keys of a row. */
export type SortableColumn = Extract<
  keyof TransferRow,
  "reference" | "origin" | "destination" | "items" | "value" | "status" | "updatedAt"
>;

export type SortDirection = "asc" | "desc";

export interface SortState {
  readonly column: SortableColumn;
  readonly direction: SortDirection;
}

export interface TableColumn {
  readonly id: SortableColumn | "owner";
  readonly label: string;
  readonly sortable: boolean;
  readonly align: "left" | "right";
  /** Hide low-priority columns below the given breakpoint. */
  readonly hideBelow?: "sm" | "md" | "lg";
}

/* ── User context ───────────────────────────────────────────────── */

export interface DashboardUser {
  readonly name: string;
  readonly role: string;
  readonly initials: string;
  readonly scope: string;
}
