"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftRight,
  BarChart2,
  Bell,
  BookOpen,
  ClipboardList,
  FileText,
  Gem,
  LayoutDashboard,
  LogOut,
  MapPin,
  Moon,
  Package,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  ShoppingCart,
  Sun,
  Ticket,
  Truck,
  User,
  Wrench,
} from "lucide-react";
import { WidthProvider, useMeasuredWidth } from "./useWidth";
import { useSiteTheme } from "../useSiteTheme";
import type { ScreenId } from "./types";
import { DashboardScreen } from "./screens/DashboardScreen";
import { InventoryScreen } from "./screens/InventoryScreen";
import { TransfersScreen } from "./screens/TransfersScreen";
import { ShiftsScreen } from "./screens/ShiftsScreen";
import { AnalyticsScreen } from "./screens/AnalyticsScreen";

type NavItem = {
  label: string;
  icon: React.ElementType;
  screen?: ScreenId;
  badge?: number;
};

const NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, screen: "dashboard" },
      { label: "Alerts", icon: Bell, badge: 41 },
    ],
  },
  {
    title: "Inventory",
    items: [
      { label: "Inventory", icon: Package, screen: "inventory" },
      { label: "Resources", icon: Gem },
      { label: "Asset Registry", icon: Wrench },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Overview", icon: BarChart2 },
      { label: "Transfers", icon: ArrowLeftRight, screen: "transfers" },
      { label: "Purchase Orders", icon: ShoppingCart },
      { label: "ITSM Tickets", icon: Ticket },
      { label: "Shift Logs", icon: ClipboardList, screen: "shifts" },
    ],
  },
  {
    title: "Network",
    items: [
      { label: "Locations", icon: MapPin },
      { label: "Suppliers", icon: Truck },
    ],
  },
  {
    title: "Analytics",
    items: [
      { label: "Analytics", icon: BarChart2, screen: "analytics" },
      { label: "Reports", icon: FileText },
    ],
  },
];

const META: Record<ScreenId, { title: string; path: string }> = {
  dashboard: { title: "Dashboard", path: "/dashboard" },
  inventory: { title: "Inventory", path: "/inventory" },
  transfers: { title: "Transfers", path: "/transfers" },
  shifts: { title: "Shift Logs", path: "/shifts" },
  analytics: { title: "Analytics", path: "/analytics" },
};

export function AppDemo({
  screen,
  onScreenChange,
}: {
  screen: ScreenId;
  onScreenChange: (s: ScreenId) => void;
}) {
  const { theme, toggle: toggleTheme } = useSiteTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const { ref: scrollRef, width } = useMeasuredWidth<HTMLDivElement>();
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
    setQuery("");
  }, [screen]);

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  const lockedClick = (label: string) => {
    setToast(`${label} is part of the live platform — this demo covers five modules.`);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  };

  const showLabels = !collapsed;

  return (
    <div className="relative font-mono overflow-hidden rounded-2xl border border-[var(--border)] shadow-2xl">
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 border-b"
        style={{ background: "var(--a-raised)", borderColor: "var(--a-border)" }}
      >
        <div className="flex gap-1.5">
          {["var(--a-accent)", "var(--a-border-strong)", "var(--a-border-strong)"].map((c, i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div
          className="flex-1 flex items-center justify-center gap-2 rounded-md px-3 py-1 text-[10px] max-w-md mx-auto"
          style={{ background: "var(--a-card)", color: "var(--a-muted)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--a-accent)" }} />
          iimcp.vercel.app{META[screen].path}
        </div>
        <span
          className="hidden sm:inline text-[9px] font-bold uppercase tracking-[0.14em] rounded px-2 py-1"
          style={{ background: "var(--a-accent-soft)", color: "var(--a-accent)" }}
        >
          Interactive · sample data
        </span>
      </div>

      <div className="flex h-[608px] sm:h-[708px]" style={{ background: "var(--a-bg)" }}>
        {/* Sidebar */}
        <aside
          className={`hidden sm:flex flex-col shrink-0 min-h-0 transition-[width] duration-200 ${
            showLabels ? "w-[190px]" : "w-[58px]"
          }`}
          style={{ background: "var(--a-bg)" }}
        >
          <div className="flex items-center gap-2.5 px-3 py-3.5">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-[13px] font-bold shrink-0"
              style={{ background: "var(--a-accent)", color: "var(--a-on-accent)" }}
            >
              M
            </span>
            {showLabels && (
              <div className="min-w-0">
                <div className="text-[12px] font-bold leading-none" style={{ color: "var(--a-text)" }}>
                  MLLC
                </div>
                <div className="text-[9px] mt-1 truncate" style={{ color: "var(--a-muted)" }}>
                  Inventory Network
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto px-2 pb-2">
            {NAV.map((section) => (
              <div key={section.title} className="mb-2.5">
                {showLabels && (
                  <div
                    className="px-2 pb-1.5 text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: "var(--a-faint)" }}
                  >
                    {section.title}
                  </div>
                )}
                {section.items.map((item) => {
                  const active = item.screen === screen;
                  const live = Boolean(item.screen);
                  return (
                    <button
                      key={item.label}
                      type="button"
                      title={live ? item.label : `${item.label} — live app`}
                      onClick={() => (item.screen ? onScreenChange(item.screen) : lockedClick(item.label))}
                      className="w-full flex items-center gap-2.5 rounded-lg px-2 py-[6px] mb-[2px] text-left transition-colors"
                      style={{
                        background: active ? "var(--a-slate-soft)" : "transparent",
                        color: active ? "var(--a-text)" : live ? "var(--a-muted)" : "var(--a-faint)",
                      }}
                      onMouseEnter={(e) => {
                        if (!active) e.currentTarget.style.background = "var(--a-raised)";
                      }}
                      onMouseLeave={(e) => {
                        if (!active) e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {showLabels && (
                        <span className="flex-1 text-[11px] font-bold truncate">{item.label}</span>
                      )}
                      {showLabels && item.badge && (
                        <span
                          className="rounded-full px-1.5 py-[1px] text-[9px] font-bold"
                          style={{ background: "var(--a-danger-soft)", color: "var(--a-danger)" }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="px-2 pb-2">
            <button
              type="button"
              onClick={() => lockedClick("Guide")}
              className="w-full flex items-center gap-2.5 rounded-lg px-2 py-2 mb-1.5"
              style={{ background: "var(--a-accent-soft)", color: "var(--a-accent)" }}
            >
              <BookOpen className="h-4 w-4 shrink-0" />
              {showLabels && <span className="text-[11px] font-bold">Guide</span>}
            </button>
            <button
              type="button"
              onClick={() => setCollapsed((c) => !c)}
              className="w-full flex items-center gap-2.5 rounded-lg px-2 py-2"
              style={{ color: "var(--a-muted)" }}
            >
              {collapsed ? (
                <PanelLeftOpen className="h-4 w-4 shrink-0" />
              ) : (
                <PanelLeftClose className="h-4 w-4 shrink-0" />
              )}
              {showLabels && <span className="text-[11px] font-bold">Collapse</span>}
            </button>

            <div
              className="mt-1.5 flex items-center gap-2.5 rounded-xl px-2 py-2"
              style={{ background: "var(--a-card)" }}
            >
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold"
                style={{ background: "var(--a-accent)", color: "var(--a-on-accent)" }}
              >
                D
              </span>
              {showLabels && (
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold truncate" style={{ color: "var(--a-text)" }}>
                    Dhanasekaran
                  </div>
                  <div className="text-[9px]" style={{ color: "var(--a-muted)" }}>
                    Super Admin
                  </div>
                </div>
              )}
              {showLabels && <LogOut className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--a-muted)" }} />}
            </div>
          </div>
        </aside>

        {/* Main column */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Top bar */}
          <div className="flex items-center gap-3 px-3 sm:px-4 py-3">
            <div className="shrink-0">
              <div className="text-[15px] font-bold leading-none" style={{ color: "var(--a-text)" }}>
                {META[screen].title}
              </div>
              <div className="text-[9px] mt-1" style={{ color: "var(--a-muted)" }}>
                MLLC Internal
              </div>
            </div>

            <div className="relative flex-1 min-w-0 max-w-lg mx-auto">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5"
                style={{ color: "var(--a-muted)" }}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search inventory, resources, tickets…"
                className="w-full rounded-full pl-9 pr-12 py-2 text-[11px] outline-none"
                style={{ background: "var(--a-raised)", color: "var(--a-text)" }}
              />
              <span
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded px-1.5 py-[2px] text-[9px]"
                style={{ background: "var(--a-card)", color: "var(--a-muted)" }}
              >
                ⌘K
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                title="Toggle theme"
                className="grid h-8 w-8 place-items-center rounded-full transition-colors"
                style={{ color: "var(--a-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--a-raised)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => lockedClick("Notifications")}
                className="relative grid h-8 w-8 place-items-center rounded-full"
                style={{ color: "var(--a-muted)" }}
              >
                <Bell className="h-4 w-4" />
                <span
                  className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--a-danger)" }}
                />
              </button>
              <button
                type="button"
                onClick={() => lockedClick("Profile")}
                className="grid h-8 w-8 place-items-center rounded-full"
                style={{ color: "var(--a-muted)" }}
              >
                <User className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Screen surface */}
          <div className="px-2 sm:px-3 pb-3">
            <div
              ref={scrollRef}
              className="relative h-[540px] sm:h-[640px] overflow-y-auto rounded-2xl border p-4 sm:p-6"
              style={{ background: "var(--a-card)", borderColor: "var(--a-border)" }}
            >
              <WidthProvider value={width}>
                {screen === "dashboard" && <DashboardScreen onNavigate={onScreenChange} />}
                {screen === "inventory" && <InventoryScreen query={query} />}
                {screen === "transfers" && <TransfersScreen query={query} />}
                {screen === "shifts" && <ShiftsScreen />}
                {screen === "analytics" && <AnalyticsScreen />}
              </WidthProvider>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        className="pointer-events-none fixed sm:absolute bottom-4 right-4 z-20 transition-all duration-200"
        style={{ opacity: toast ? 1 : 0, transform: toast ? "translateY(0)" : "translateY(6px)" }}
      >
        {toast && (
          <div
            className="rounded-xl border px-3.5 py-2.5 text-[10px] shadow-lg max-w-[260px]"
            style={{ background: "var(--a-card)", borderColor: "var(--a-border)", color: "var(--a-text-2)" }}
          >
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
