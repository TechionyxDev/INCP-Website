import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
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
    <html lang="en" data-theme="dark" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="antialiased selection:bg-brand-solid selection:text-brand-foreground">
        {children}
      </body>
    </html>
  );
}
