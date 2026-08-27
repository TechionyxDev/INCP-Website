"use client";

import { useCallback, useState } from "react";

import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { Sidebar } from "./Sidebar";
import { TransfersTable } from "./TransfersTable";
import { METRICS, NAV_SECTIONS, TABLE_COLUMNS, TRANSFERS, USER } from "./data";
import type { NavItem } from "./types";

/** Flattened lookup so the header title can follow the active nav item. */
const NAV_ITEMS: readonly NavItem[] = NAV_SECTIONS.flatMap((section) => section.items);

export function DashboardShell(): React.JSX.Element {
  const [activeItemId, setActiveItemId] = useState<string>("dashboard");
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const activeItem = NAV_ITEMS.find((item) => item.id === activeItemId);
  const title = activeItem?.label ?? "Dashboard";

  const handleSelect = useCallback((itemId: string): void => {
    setActiveItemId(itemId);
    setNavOpen(false);
  }, []);

  const closeNav = useCallback((): void => setNavOpen(false), []);
  const openNav = useCallback((): void => setNavOpen(true), []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        sections={NAV_SECTIONS}
        activeItemId={activeItemId}
        onSelect={handleSelect}
        open={navOpen}
        onClose={closeNav}
      />

      {/* Offset matches the 17rem fixed sidebar from `lg` upward. */}
      <div className="flex min-h-screen flex-col lg:pl-[17rem]">
        <DashboardHeader
          user={USER}
          title={title}
          notificationCount={12}
          onOpenNav={openNav}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto w-full max-w-[80rem]">
            <div className="mb-6">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Network overview
              </h2>
              <p className="mt-1 text-sm text-muted-strong">
                Live coordination status across every hub and field site.
              </p>
            </div>

            <section aria-label="Key metrics" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {METRICS.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </section>

            <div className="mt-6">
              <TransfersTable rows={TRANSFERS} columns={TABLE_COLUMNS} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
