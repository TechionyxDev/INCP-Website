/**
 * Mock fixtures mirroring the production API payload shapes
 * (GET /api/v1/analytics/dashboard, /inventory/stock, /transfers,
 * /shifts/logs, /analytics/trends). Values are representative sample data.
 */

export type Criticality = "critical" | "high" | "medium" | "low";

export interface Item {
  sku: string;
  name: string;
  category: string;
  unit: string;
  criticality: Criticality;
  reorderPoint: number;
  unitCost: number;
  active: boolean;
}

export const CATEGORIES = [
  "PPE",
  "Tools",
  "Filters",
  "Electrical",
  "Welding",
  "Fasteners",
  "Fluids",
  "Safety Signage",
];

export const ITEMS: Item[] = [
  { sku: "PPE-002", name: "Safety Helmet Type II", category: "PPE", unit: "piece", criticality: "high", reorderPoint: 15, unitCost: 30.53, active: true },
  { sku: "PPE-003", name: "High-Vis Vest Orange", category: "PPE", unit: "piece", criticality: "high", reorderPoint: 20, unitCost: 14.42, active: true },
  { sku: "PPE-005", name: "Safety Goggles Clear", category: "PPE", unit: "piece", criticality: "medium", reorderPoint: 10, unitCost: 8.78, active: true },
  { sku: "PPE-006", name: "Nitrile Gloves M Box", category: "PPE", unit: "box", criticality: "critical", reorderPoint: 25, unitCost: 17.6, active: true },
  { sku: "PPE-008", name: "Steel Toe Boots Size 9", category: "PPE", unit: "pair", criticality: "high", reorderPoint: 12, unitCost: 84.2, active: true },
  { sku: "TLS-011", name: "Hacksaw Frame + Blades", category: "Tools", unit: "set", criticality: "medium", reorderPoint: 8, unitCost: 26.4, active: true },
  { sku: "TLS-015", name: "Screwdriver Set 12pc", category: "Tools", unit: "set", criticality: "low", reorderPoint: 6, unitCost: 41.15, active: true },
  { sku: "FLT-002", name: "Air Filter Panel 20x20", category: "Filters", unit: "piece", criticality: "medium", reorderPoint: 30, unitCost: 9.35, active: true },
  { sku: "FLT-008", name: "HEPA Filter H13 600x600", category: "Filters", unit: "piece", criticality: "high", reorderPoint: 10, unitCost: 132.9, active: true },
  { sku: "ELC-011", name: "Flexible Conduit 20mm 25m", category: "Electrical", unit: "roll", criticality: "critical", reorderPoint: 18, unitCost: 58.0, active: true },
  { sku: "ELC-014", name: "Fuse Cartridge 10A 10pk", category: "Electrical", unit: "pack", criticality: "low", reorderPoint: 20, unitCost: 7.85, active: true },
  { sku: "WLD-003", name: "Welding Rod 3.2mm 5kg", category: "Welding", unit: "box", criticality: "high", reorderPoint: 14, unitCost: 46.3, active: true },
  { sku: "FST-021", name: "Hex Bolt M12x60 100pk", category: "Fasteners", unit: "pack", criticality: "low", reorderPoint: 25, unitCost: 22.1, active: true },
  { sku: "FLD-006", name: "Hydraulic Oil ISO 46 20L", category: "Fluids", unit: "drum", criticality: "critical", reorderPoint: 6, unitCost: 189.0, active: true },
  { sku: "SGN-004", name: "Safety Signage Kit A", category: "Safety Signage", unit: "kit", criticality: "medium", reorderPoint: 5, unitCost: 63.4, active: true },
  { sku: "TLS-019", name: "Torque Wrench 1/2in", category: "Tools", unit: "piece", criticality: "medium", reorderPoint: 4, unitCost: 154.7, active: false },
];

export interface StockRow {
  sku: string;
  name: string;
  location: string;
  onHand: number;
  reserved: number;
  reorderPoint: number;
}

export const STOCK: StockRow[] = [
  { sku: "PPE-006", name: "Nitrile Gloves M Box", location: "Site N-05", onHand: 12, reserved: 8, reorderPoint: 25 },
  { sku: "PPE-002", name: "Safety Helmet Type II", location: "Site N-05", onHand: 64, reserved: 6, reorderPoint: 15 },
  { sku: "FLD-006", name: "Hydraulic Oil ISO 46 20L", location: "Regional Hub West", onHand: 3, reserved: 2, reorderPoint: 6 },
  { sku: "ELC-011", name: "Flexible Conduit 20mm 25m", location: "Site E-03", onHand: 21, reserved: 12, reorderPoint: 18 },
  { sku: "FLT-008", name: "HEPA Filter H13 600x600", location: "Site S-08", onHand: 0, reserved: 0, reorderPoint: 10 },
  { sku: "PPE-008", name: "Steel Toe Boots Size 9", location: "Site S-08", onHand: 4, reserved: 4, reorderPoint: 12 },
  { sku: "TLS-011", name: "Hacksaw Frame + Blades", location: "Site W-08", onHand: 33, reserved: 3, reorderPoint: 8 },
  { sku: "WLD-003", name: "Welding Rod 3.2mm 5kg", location: "Central HQ", onHand: 118, reserved: 24, reorderPoint: 14 },
  { sku: "FLT-002", name: "Air Filter Panel 20x20", location: "Site N-09", onHand: 27, reserved: 0, reorderPoint: 30 },
  { sku: "FST-021", name: "Hex Bolt M12x60 100pk", location: "Site W-04", onHand: 96, reserved: 10, reorderPoint: 25 },
];

export type TransferStatus = "pending" | "approved" | "in transit" | "delivered" | "cancelled";

export interface Transfer {
  id: string;
  item: string;
  sku: string;
  from: string;
  to: string;
  qty: number;
  priority: Criticality;
  status: TransferStatus;
  initiatedBy: string;
  created: string;
  carrier: string;
  driver: string;
  receipt: string;
  timeline: { label: string; at: string; done: boolean }[];
}

const chain = (stage: number) => [
  { label: "Requested at origin site", at: "08:14", done: stage >= 0 },
  { label: "Hub approval (Regional)", at: "09:02", done: stage >= 1 },
  { label: "Dispatched · carrier assigned", at: "11:37", done: stage >= 2 },
  { label: "Received · signed off", at: "16:48", done: stage >= 3 },
];

export const TRANSFERS: Transfer[] = [
  { id: "2D1DDB35", item: "Hacksaw Frame + Blades", sku: "TLS-011", from: "Site W-08", to: "Site N-06", qty: 8, priority: "medium", status: "delivered", initiatedBy: "System Administrator", created: "25d ago", carrier: "Northline Freight", driver: "R. Okafor · TN-4417", receipt: "sha256:9f3a…c012", timeline: chain(3) },
  { id: "BDBE561F", item: "Steel Toe Boots Size 9", sku: "PPE-008", from: "Site S-10", to: "Site N-07", qty: 10, priority: "critical", status: "delivered", initiatedBy: "System Administrator", created: "26d ago", carrier: "Northline Freight", driver: "A. Menon · TN-2290", receipt: "sha256:41bd…7ae1", timeline: chain(3) },
  { id: "8E33CAE6", item: "Air Filter Panel 20x20", sku: "FLT-002", from: "Site E-04", to: "Site N-05", qty: 30, priority: "medium", status: "cancelled", initiatedBy: "System Administrator", created: "26d ago", carrier: "—", driver: "—", receipt: "—", timeline: [{ label: "Requested at origin site", at: "07:55", done: true }, { label: "Cancelled by hub · stock rebalanced", at: "10:20", done: true }] },
  { id: "094B3B93", item: "HEPA Filter H13 600x600", sku: "FLT-008", from: "Site S-08", to: "Site S-05", qty: 25, priority: "high", status: "pending", initiatedBy: "System Administrator", created: "26d ago", carrier: "Awaiting assignment", driver: "—", receipt: "—", timeline: chain(0) },
  { id: "6EAC7E09", item: "Fuse Cartridge 10A 10pk", sku: "ELC-014", from: "Site W-04", to: "Site E-09", qty: 7, priority: "high", status: "delivered", initiatedBy: "System Administrator", created: "27d ago", carrier: "Eastgate Logistics", driver: "P. Raman · TN-8801", receipt: "sha256:cc71…0b4f", timeline: chain(3) },
  { id: "BEEDF88D", item: "Flexible Conduit 20mm 25m", sku: "ELC-011", from: "Regional Hub West", to: "Site E-03", qty: 35, priority: "critical", status: "in transit", initiatedBy: "System Administrator", created: "27d ago", carrier: "Eastgate Logistics", driver: "K. Fernandes · TN-6042", receipt: "pending", timeline: chain(2) },
  { id: "5667F317", item: "Screwdriver Set 12pc", sku: "TLS-015", from: "Central HQ", to: "Site E-03", qty: 37, priority: "low", status: "in transit", initiatedBy: "System Administrator", created: "27d ago", carrier: "Central Fleet", driver: "S. Iyer · TN-1173", receipt: "pending", timeline: chain(2) },
  { id: "A19C4402", item: "Nitrile Gloves M Box", sku: "PPE-006", from: "Central HQ", to: "Site N-05", qty: 60, priority: "critical", status: "approved", initiatedBy: "D. Rajan", created: "28d ago", carrier: "Central Fleet", driver: "Awaiting dispatch", receipt: "—", timeline: chain(1) },
  { id: "77F0B2A1", item: "Hydraulic Oil ISO 46 20L", sku: "FLD-006", from: "Regional Hub West", to: "Site W-08", qty: 4, priority: "critical", status: "pending", initiatedBy: "M. Balan", created: "29d ago", carrier: "Awaiting assignment", driver: "—", receipt: "—", timeline: chain(0) },
  { id: "3C08D5E7", item: "Welding Rod 3.2mm 5kg", sku: "WLD-003", from: "Central HQ", to: "Regional Hub West", qty: 22, priority: "medium", status: "approved", initiatedBy: "System Administrator", created: "30d ago", carrier: "Northline Freight", driver: "Awaiting dispatch", receipt: "—", timeline: chain(1) },
];

export interface HealthRow {
  location: string;
  belowReorder: number;
  healthy: number;
  low: number;
  outOfStock: number;
}

export const HEALTH: HealthRow[] = [
  { location: "Site S-04", belowReorder: 29, healthy: 92, low: 0, outOfStock: 11 },
  { location: "Site N-10", belowReorder: 23, healthy: 98, low: 0, outOfStock: 11 },
  { location: "Site N-09", belowReorder: 35, healthy: 87, low: 0, outOfStock: 10 },
  { location: "Site W-08", belowReorder: 18, healthy: 104, low: 2, outOfStock: 8 },
  { location: "Site E-03", belowReorder: 41, healthy: 79, low: 1, outOfStock: 12 },
  { location: "Site S-08", belowReorder: 26, healthy: 95, low: 0, outOfStock: 11 },
  { location: "Regional Hub West", belowReorder: 12, healthy: 116, low: 0, outOfStock: 4 },
  { location: "Central HQ", belowReorder: 7, healthy: 124, low: 1, outOfStock: 0 },
  { location: "Site N-05", belowReorder: 33, healthy: 88, low: 0, outOfStock: 11 },
  { location: "Site W-04", belowReorder: 21, healthy: 101, low: 0, outOfStock: 10 },
];

export const ALERTS = [
  { item: "Safety Goggles Clear", location: "Site N-05", kind: "Out of stock", severity: "danger" as const },
  { item: "Steel Toe Boots Size 9", location: "Site S-08", kind: "Out of stock", severity: "danger" as const },
  { item: "First Aid Kit Industrial", location: "Site S-05", kind: "Out of stock", severity: "danger" as const },
  { item: "Hydraulic Oil ISO 46 20L", location: "Regional Hub West", kind: "Below reorder", severity: "warning" as const },
  { item: "Nitrile Gloves M Box", location: "Site N-05", kind: "Below reorder", severity: "warning" as const },
  { item: "HEPA Filter H13 600x600", location: "Site S-08", kind: "Out of stock", severity: "danger" as const },
  { item: "Air Filter Panel 20x20", location: "Site N-09", kind: "Below reorder", severity: "warning" as const },
  { item: "Transfer 094B3B93 ageing", location: "Site S-08", kind: "Approval overdue", severity: "warning" as const },
];

export interface ShiftLog {
  id: string;
  date: string;
  shift: "day" | "night";
  location: string;
  openedBy: string;
  openedAt: string;
  closedBy: string;
  closedAt: string;
  status: "closed" | "open";
  discrepancies: number;
  detail: { item: string; opening: number; used: number; closing: number; expected: number }[];
}

export const SHIFT_LOGS: ShiftLog[] = [
  { id: "SL-2291", date: "Fri, Jul 24, 2026", shift: "day", location: "Site W-10", openedBy: "System A.", openedAt: "02:47 PM", closedBy: "System A.", closedAt: "10:47 PM", status: "closed", discrepancies: 0, detail: [{ item: "Nitrile Gloves M Box", opening: 40, used: 6, closing: 34, expected: 34 }, { item: "Welding Rod 3.2mm 5kg", opening: 22, used: 3, closing: 19, expected: 19 }] },
  { id: "SL-2290", date: "Fri, Jul 24, 2026", shift: "day", location: "Site W-09", openedBy: "System A.", openedAt: "02:47 PM", closedBy: "System A.", closedAt: "10:47 PM", status: "closed", discrepancies: 2, detail: [{ item: "Safety Goggles Clear", opening: 30, used: 4, closing: 24, expected: 26 }, { item: "Hex Bolt M12x60 100pk", opening: 18, used: 2, closing: 15, expected: 16 }] },
  { id: "SL-2289", date: "Fri, Jul 24, 2026", shift: "day", location: "Site W-08", openedBy: "System A.", openedAt: "02:47 PM", closedBy: "System A.", closedAt: "10:47 PM", status: "closed", discrepancies: 0, detail: [{ item: "Hacksaw Frame + Blades", opening: 33, used: 1, closing: 32, expected: 32 }] },
  { id: "SL-2288", date: "Fri, Jul 24, 2026", shift: "night", location: "Site W-07", openedBy: "System A.", openedAt: "10:47 PM", closedBy: "System A.", closedAt: "06:47 AM", status: "closed", discrepancies: 1, detail: [{ item: "Fuse Cartridge 10A 10pk", opening: 25, used: 5, closing: 19, expected: 20 }] },
  { id: "SL-2287", date: "Thu, Jul 23, 2026", shift: "day", location: "Site W-06", openedBy: "System A.", openedAt: "02:47 PM", closedBy: "System A.", closedAt: "10:47 PM", status: "closed", discrepancies: 0, detail: [{ item: "Air Filter Panel 20x20", opening: 27, used: 2, closing: 25, expected: 25 }] },
  { id: "SL-2286", date: "Thu, Jul 23, 2026", shift: "night", location: "Site N-01", openedBy: "System A.", openedAt: "10:47 PM", closedBy: "System A.", closedAt: "06:47 AM", status: "closed", discrepancies: 3, detail: [{ item: "Steel Toe Boots Size 9", opening: 12, used: 1, closing: 8, expected: 11 }, { item: "High-Vis Vest Orange", opening: 44, used: 6, closing: 36, expected: 38 }] },
  { id: "SL-2285", date: "Thu, Jul 23, 2026", shift: "day", location: "Site N-05", openedBy: "D. Rajan", openedAt: "06:00 AM", closedBy: "D. Rajan", closedAt: "02:00 PM", status: "closed", discrepancies: 0, detail: [{ item: "Safety Helmet Type II", opening: 64, used: 0, closing: 64, expected: 64 }] },
];

export const DISCREPANCY_PATTERNS = [
  { item: "Safety Goggles Clear", occurrences: 14, netDrift: -38, sites: 6 },
  { item: "Steel Toe Boots Size 9", occurrences: 11, netDrift: -22, sites: 4 },
  { item: "Hex Bolt M12x60 100pk", occurrences: 9, netDrift: -17, sites: 5 },
  { item: "Fuse Cartridge 10A 10pk", occurrences: 7, netDrift: -12, sites: 3 },
  { item: "High-Vis Vest Orange", occurrences: 6, netDrift: -9, sites: 3 },
  { item: "Nitrile Gloves M Box", occurrences: 4, netDrift: -5, sites: 2 },
];

export const CATEGORY_VALUE = [
  { name: "Fluids", value: 3820 },
  { name: "PPE", value: 3140 },
  { name: "Electrical", value: 2460 },
  { name: "Filters", value: 1980 },
  { name: "Tools", value: 1720 },
  { name: "Welding", value: 1180 },
  { name: "Safety Signage", value: 940 },
  { name: "Fasteners", value: 660 },
];

export const TURNOVER = [
  { name: "Filters", days: 109 },
  { name: "Fluids", days: 118.2 },
  { name: "Electrical", days: 128.4 },
  { name: "Safety Signage", days: 131 },
  { name: "PPE", days: 138.1 },
  { name: "Tools", days: 144.9 },
  { name: "Welding", days: 159.9 },
  { name: "Fasteners", days: 171 },
];

export const CONSUMPTION: Record<"7d" | "30d" | "90d", { label: string; issued: number; received: number }[]> = {
  "7d": [
    { label: "Mon", issued: 412, received: 380 },
    { label: "Tue", issued: 468, received: 402 },
    { label: "Wed", issued: 391, received: 455 },
    { label: "Thu", issued: 524, received: 470 },
    { label: "Fri", issued: 610, received: 512 },
    { label: "Sat", issued: 288, received: 240 },
    { label: "Sun", issued: 196, received: 175 },
  ],
  "30d": [
    { label: "W1", issued: 2480, received: 2310 },
    { label: "W2", issued: 2712, received: 2504 },
    { label: "W3", issued: 2596, received: 2760 },
    { label: "W4", issued: 2889, received: 2634 },
    { label: "W5", issued: 3104, received: 2902 },
    { label: "W6", issued: 2965, received: 3040 },
  ],
  "90d": [
    { label: "Apr", issued: 8940, received: 8420 },
    { label: "May", issued: 9620, received: 9180 },
    { label: "Jun", issued: 10240, received: 9905 },
    { label: "Jul", issued: 11180, received: 10460 },
    { label: "Aug", issued: 11840, received: 11720 },
  ],
};

export const SUPPLIERS = [
  { name: "Northline Industrial", onTime: 96.4, leadTime: 4.2, orders: 128, spend: "$2.41M" },
  { name: "Eastgate Supply Co.", onTime: 91.8, leadTime: 6.1, orders: 94, spend: "$1.86M" },
  { name: "Meridian Safety", onTime: 88.2, leadTime: 7.4, orders: 76, spend: "$1.12M" },
  { name: "Fluidtech Partners", onTime: 82.5, leadTime: 9.8, orders: 41, spend: "$0.94M" },
  { name: "Apex Fasteners", onTime: 74.1, leadTime: 12.3, orders: 33, spend: "$0.38M" },
];
