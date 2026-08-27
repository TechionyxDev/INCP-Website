import {
  AlertTriangle,
  ArrowLeftRight,
  BarChart3,
  Boxes,
  ClipboardList,
  LayoutDashboard,
  MapPin,
  PackageCheck,
  Settings,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import type {
  DashboardUser,
  Metric,
  NavSection,
  TableColumn,
  TransferRow,
} from "./types";

export const USER: DashboardUser = {
  name: "Dhanasekaran R",
  role: "Network Administrator",
  initials: "DR",
  scope: "All regions",
};

export const NAV_SECTIONS: readonly NavSection[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      { id: "alerts", label: "Alerts", icon: AlertTriangle, badge: 12 },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    items: [
      { id: "catalogue", label: "Catalogue", icon: Boxes },
      { id: "stock", label: "Stock on hand", icon: PackageCheck },
      { id: "locations", label: "Locations", icon: MapPin },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    items: [
      { id: "transfers", label: "Transfers", icon: ArrowLeftRight, badge: 4 },
      { id: "shipments", label: "Shipments", icon: Truck },
      { id: "shift-logs", label: "Shift logs", icon: ClipboardList },
    ],
  },
  {
    id: "insight",
    label: "Insight",
    items: [
      { id: "analytics", label: "Analytics", icon: BarChart3 },
      { id: "audit", label: "Audit trail", icon: ShieldCheck },
      { id: "team", label: "Team", icon: Users },
      { id: "settings", label: "Settings", icon: Settings },
    ],
  },
];

export const METRICS: readonly Metric[] = [
  {
    id: "fill-rate",
    label: "Network fill rate",
    value: "94.2%",
    caption: "Lines fulfilled without substitution",
    icon: PackageCheck,
    trend: { direction: "up", value: 2.4, label: "vs. last 30 days", higherIsBetter: true },
  },
  {
    id: "in-transit",
    label: "Value in transit",
    value: "$4.18M",
    caption: "Across 51 active transfers",
    icon: Truck,
    trend: { direction: "up", value: 6.1, label: "vs. last 30 days", higherIsBetter: true },
  },
  {
    id: "stockouts",
    label: "Open stockouts",
    value: "17",
    caption: "8 critical, 9 below reorder point",
    icon: AlertTriangle,
    // Rising stockouts is a regression, so this trend renders in the
    // danger tone despite pointing up.
    trend: { direction: "up", value: 3.5, label: "vs. last 30 days", higherIsBetter: false },
  },
];

export const TABLE_COLUMNS: readonly TableColumn[] = [
  { id: "reference", label: "Reference", sortable: true, align: "left" },
  { id: "origin", label: "Origin", sortable: true, align: "left", hideBelow: "md" },
  { id: "destination", label: "Destination", sortable: true, align: "left" },
  { id: "items", label: "Items", sortable: true, align: "right", hideBelow: "sm" },
  { id: "value", label: "Value", sortable: true, align: "right" },
  { id: "status", label: "Status", sortable: true, align: "left" },
  { id: "updatedAt", label: "Updated", sortable: true, align: "left", hideBelow: "lg" },
  { id: "owner", label: "Owner", sortable: false, align: "left", hideBelow: "lg" },
];

export const TRANSFERS: readonly TransferRow[] = [
  {
    id: "t-1",
    reference: "TRF-20841",
    origin: "HQ Central",
    destination: "Hub West",
    items: 128,
    value: 486_200,
    status: "in-transit",
    updatedAt: "2026-08-18T09:24:00Z",
    owner: "A. Kulkarni",
  },
  {
    id: "t-2",
    reference: "TRF-20839",
    origin: "Hub West",
    destination: "Site S-04",
    items: 42,
    value: 118_450,
    status: "awaiting-approval",
    updatedAt: "2026-08-18T08:57:00Z",
    owner: "M. Okonjo",
  },
  {
    id: "t-3",
    reference: "TRF-20834",
    origin: "Hub North",
    destination: "Site N-09",
    items: 76,
    value: 233_900,
    status: "exception",
    updatedAt: "2026-08-18T08:12:00Z",
    owner: "L. Fernandes",
  },
  {
    id: "t-4",
    reference: "TRF-20830",
    origin: "HQ Central",
    destination: "Hub North",
    items: 214,
    value: 902_775,
    status: "reconciled",
    updatedAt: "2026-08-17T18:40:00Z",
    owner: "A. Kulkarni",
  },
  {
    id: "t-5",
    reference: "TRF-20826",
    origin: "Hub East",
    destination: "Site E-03",
    items: 19,
    value: 54_180,
    status: "in-transit",
    updatedAt: "2026-08-17T16:05:00Z",
    owner: "P. Raghavan",
  },
  {
    id: "t-6",
    reference: "TRF-20821",
    origin: "Hub West",
    destination: "Quarry W-11",
    items: 63,
    value: 175_640,
    status: "awaiting-approval",
    updatedAt: "2026-08-17T14:22:00Z",
    owner: "M. Okonjo",
  },
  {
    id: "t-7",
    reference: "TRF-20818",
    origin: "Hub North",
    destination: "Site N-05",
    items: 97,
    value: 311_020,
    status: "reconciled",
    updatedAt: "2026-08-17T11:48:00Z",
    owner: "L. Fernandes",
  },
];
