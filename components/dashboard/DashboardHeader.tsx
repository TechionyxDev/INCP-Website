"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, ChevronDown, LogOut, Menu, Search, Settings, UserRound } from "lucide-react";

import { ThemeToggle } from "../ThemeToggle";
import type { DashboardUser } from "./types";

interface DashboardHeaderProps {
  readonly user: DashboardUser;
  readonly title: string;
  readonly notificationCount: number;
  readonly onOpenNav: () => void;
}

/**
 * Sticky top bar: page context on the left, search and user context on
 * the right. The user menu closes on outside-click and on Escape, and
 * exposes the usual `aria-expanded` / `aria-haspopup` wiring.
 */
export function DashboardHeader({
  user,
  title,
  notificationCount,
  onOpenNav,
}: DashboardHeaderProps): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 sm:gap-3 border-b border-border bg-surface-1/95 px-gutter pt-safe backdrop-blur-md">
      <button
        type="button"
        onClick={onOpenNav}
        aria-label="Open navigation"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-muted-strong hover:bg-surface-2 hover:text-foreground lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="min-w-0">
        <h1 className="truncate text-sm font-semibold text-foreground">{title}</h1>
        <p className="truncate text-xs text-muted-strong">{user.scope}</p>
      </div>

      {/* Search — collapses to an icon-free spacer on narrow screens. */}
      <div className="ml-auto hidden max-w-xs flex-1 md:block">
        <label htmlFor="dashboard-search" className="sr-only">
          Search inventory, transfers, and locations
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-strong"
            aria-hidden
          />
          <input
            id="dashboard-search"
            type="search"
            placeholder="Search…"
            className="h-9 w-full rounded-lg border border-border bg-surface-2 pl-9 pr-3 text-sm text-foreground transition-colors placeholder:text-muted focus:border-border-hover focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-1.5 md:ml-0">
        <button
          type="button"
          className="relative grid h-9 w-9 place-items-center rounded-lg text-muted-strong transition-colors hover:bg-surface-2 hover:text-foreground"
          aria-label={`Notifications, ${notificationCount} unread`}
        >
          <Bell className="h-[1.125rem] w-[1.125rem]" />
          {notificationCount > 0 && (
            <span
              className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-surface-1"
              aria-hidden
            />
          )}
        </button>

        <ThemeToggle />

        {/* User context */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            className="flex items-center gap-2 rounded-lg py-1 pl-1 pr-1.5 transition-colors hover:bg-surface-2 sm:pr-2"
          >
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-solid text-xs font-semibold text-brand-foreground"
              aria-hidden
            >
              {user.initials}
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-xs font-semibold leading-tight text-foreground">
                {user.name}
              </span>
              <span className="block text-[0.6875rem] leading-tight text-muted-strong">
                {user.role}
              </span>
            </span>
            <ChevronDown
              className={`hidden h-4 w-4 text-muted-strong transition-transform sm:block ${
                menuOpen ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </button>

          {menuOpen && (
            <div
              role="menu"
              aria-label="User menu"
              className="absolute right-0 top-[calc(100%+0.5rem)] w-56 overflow-hidden rounded-xl border border-border bg-surface-1 py-1 shadow-lg"
            >
              <div className="border-b border-border px-3 py-2.5 sm:hidden">
                <p className="text-xs font-semibold text-foreground">{user.name}</p>
                <p className="text-[0.6875rem] text-muted-strong">{user.role}</p>
              </div>

              {[
                { id: "profile", label: "Profile", icon: UserRound },
                { id: "settings", label: "Account settings", icon: Settings },
              ].map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  role="menuitem"
                  className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-muted-strong transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <entry.icon className="h-4 w-4" aria-hidden />
                  {entry.label}
                </button>
              ))}

              <div className="my-1 border-t border-border" />

              <button
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive-text transition-colors hover:bg-destructive/10"
              >
                <LogOut className="h-4 w-4" aria-hidden />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
