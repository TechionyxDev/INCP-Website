import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Geist is the Techionyx type voice: a neutral grotesque that carries
   hierarchy through weight and tracking rather than through colour. */
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INCP — Inventory Network Coordination Platform",
  description:
    "INCP coordinates inventory, logistics, procurement, maintenance, and operations across a multi-tier network of locations (HQ > Regional Hubs > Sites).",
  keywords: [
    "Inventory Network",
    "Coordination Platform",
    "INCP",
    "Multi-location inventory",
    "Supply chain",
    "Predictive inventory",
    "Movement ledger",
  ],
  authors: [{ name: "Techionyx" }],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased selection:bg-brand-solid selection:text-brand-foreground">
        {children}
      </body>
    </html>
  );
}
