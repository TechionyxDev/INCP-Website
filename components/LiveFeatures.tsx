"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { Check } from "lucide-react";

export function LiveFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      label: "Stock Management",
      title: "Real-time stock states and custom reorder points",
      desc: "Track available, reserved, and in-transit inventory per SKU. Set location-specific reorder points to maintain optimal safety stock at each hub.",
      image: "/images/screenshot-inventory.png",
      bullets: [
        "Atomic reservations prevent double-dispatch errors",
        "Granular material grades and specifications",
        "Location-level threshold overrides",
      ],
    },
    {
      label: "Inter-Hub Transfers",
      title: "End-to-end custody tracking across locations",
      desc: "Manage transfer lifecycles from creation through approval and dispatch to verified delivery at the receiving site.",
      image: "/images/screenshot-transfers.png",
      bullets: [
        "Hierarchical approval chains",
        "Carrier and driver assignment tracking",
        "Digital proof of receipt signoff",
      ],
    },
    {
      label: "Shift Reconciliations",
      title: "Opening snapshots and discrepancy detection",
      desc: "Capture opening stock snapshots at the start of each shift. Log usage and tool checkouts to immediately flag inventory drift.",
      image: "/images/screenshot-shifts.png",
      bullets: [
        "Shift opening snapshot freezing",
        "Material consumption logging",
        "Automated discrepancy alerts",
      ],
    },
    {
      label: "Analytics & Trends",
      title: "Operational analytics and exportable reports",
      desc: "Monitor consumption velocity, supplier on-time delivery performance, and export styled PDF reports for management reviews.",
      image: "/images/screenshot-analytics.png",
      bullets: [
        "Rolling consumption forecasting",
        "Supplier lead-time scorecards",
        "Automated PDF and CSV report exports",
      ],
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 border-t border-[var(--border)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <ScrollReveal delay={0}>
            <p className="text-xs font-semibold text-scarlet tracking-wider uppercase">
              Core Capabilities
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
              Everything required to coordinate your supply chain.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-base text-silver leading-relaxed">
              Designed to give leadership complete visibility while keeping daily workflows fast and intuitive for on-site teams.
            </p>
          </ScrollReveal>
        </div>

        {/* Minimal Tab Switcher */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-[var(--border)] pb-4">
          {features.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeTab === idx
                  ? "bg-scarlet text-white"
                  : "text-silver hover:text-[var(--text)] hover:bg-[var(--card)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Feature Display */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Copy & Bullets */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-[var(--text)] tracking-tight">
              {features[activeTab].title}
            </h3>
            <p className="text-sm text-silver leading-relaxed">
              {features[activeTab].desc}
            </p>

            <ul className="space-y-3 pt-2">
              {features[activeTab].bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                  <Check className="h-4 w-4 text-scarlet shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Clean Screenshot Viewport */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-sm">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black">
                <Image
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
