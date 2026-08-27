import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = {
  title: "Dashboard — INCP",
  description:
    "Network overview: fill rate, value in transit, open stockouts, and the active transfer ledger across every hub and field site.",
};

export default function DashboardPage(): React.JSX.Element {
  return <DashboardShell />;
}
