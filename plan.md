# MLLC Home — Marketing Landing Page Plan

> A single-page marketing website to sell MLLC, modeled after [ewip.app](https://ewip.app). Supports both **dark** and **light** themes.

---

## Reference: EWIP Site Structure (what we're mirroring)

The EWIP site is a **single-page** app with these sections in order:

```
Header → Hero → Problem → Platform → Features → HowItWorks → Solutions → AIIntelligence → Security → Pricing → FinalCTA → Footer
```

**12 total** (10 content sections + header + footer). All on one page, all hash-linked from the navbar. No separate routes. We follow the same pattern.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 15** (App Router, same as EWIP) |
| Styling | **TailwindCSS v3** (same as EWIP — utility-first, fast iteration) |
| Fonts | **Space Grotesk** (headings) + **Space Mono** (monospace accents) via `next/font` |
| Icons | **Lucide React** |
| Animations | **CSS transitions + Intersection Observer** (scroll reveals) |
| Theme | **Dark + Light** via CSS variables + `data-theme` attribute toggle |
| Deploy | Static export → Vercel |

---

## Theme System (Dark + Light)

Toggle in the navbar. Default = dark. Persisted in `localStorage`.

### Dark Theme (default)
```css
--bg: #07070B;
--bg-soft: #0E0F1A;
--text: #FAFAFA;
--text-muted: #71717A;
--text-muted-strong: #A1A1AA;
--border: rgba(255,255,255,0.07);
--border-hover: rgba(255,255,255,0.16);
--card: rgba(255,255,255,0.015);
--accent: #6366F1;
--accent-violet: #8B5CF6;
--accent-cyan: #22D3EE;
```

### Light Theme
```css
--bg: #FFFFFF;
--bg-soft: #F8F9FA;
--text: #09090B;
--text-muted: #6B7280;
--text-muted-strong: #4B5563;
--border: rgba(0,0,0,0.08);
--border-hover: rgba(0,0,0,0.16);
--card: rgba(0,0,0,0.02);
--accent: #6366F1;
--accent-violet: #8B5CF6;
--accent-cyan: #0EA5E9;
```

---

## Sections (matching EWIP's pattern, adapted for MLLC)

### 1. Header (sticky navbar)
- Logo: MLLC + "Enterprise" badge
- Nav links: Platform, Features, Solutions, Security, Pricing, Contact — all `#hash` links
- Right side: **Theme toggle** (sun/moon icon) + "Sign In" (→ MLLC app) + "Request Demo" (CTA button)
- Sticky with blur on scroll

### 2. Hero
- Eyebrow pill: "✦ Introducing MLLC — Inventory Network Operating System"
- Large headline: **"Inventory Network Intelligence, Connected."**
- Subtitle: "MLLC coordinates inventory, logistics, procurement, maintenance, and operations across your entire multi-location network — from HQ down to every site."
- Two CTAs: "Request Demo" + "Explore Platform"
- Trust badges: SOC 2 READY · SSO + SCIM · AES-256 ENCRYPTION · RBAC + 2FA
- **🖼 IMAGE: Hero visual** — wide abstract network illustration below the headline area (see Prompt #1)
- Dashboard mockup below (built with HTML/CSS like EWIP — fake UI with stats cards, sidebar, project list)

### 3. Problem
- Eyebrow: "The operations tax"
- Headline: "Inventory operations is everywhere. Inventory intelligence is nowhere."
- 6 pain-point cards in a grid:
  1. Stock scattered across locations
  2. Transfers lost in spreadsheets
  3. Theft and discrepancies undetected
  4. Suppliers with no reliability scoring
  5. Maintenance schedules missed
  6. "The fix" — treat inventory as a connected fabric
- **🖼 IMAGE: Problem illustration** — small visual of fragmented/disconnected operations (see Prompt #2)

### 4. Platform (8 building blocks)
- Eyebrow: "The platform"
- Headline: "One operating system for every location."
- 8 cards (4×2 grid), each with icon, title, description, tags:
  1. Inventory State Engine
  2. Movement Ledger
  3. Logistics & Transfers
  4. ITSM Tickets
  5. Procurement Engine
  6. Shift Reconciliation
  7. Asset Registry
  8. Predictive Alerts
- **🖼 IMAGE: Platform screenshot** — real MLLC Dashboard screenshot beside the headline (see screenshot-dashboard.png)

### 5. Features (detailed feature bento grid)
- Eyebrow: "Features"
- Headline: "Every module, deeply connected."
- Bento grid layout showing:
  - Real-time stock tracking (available / reserved / in-transit)
  - Immutable audit trail
  - Multi-tier hierarchy (HQ → Regional → Sites)
  - CSV bulk import
  - 6-role RBAC system
  - 14 analytics endpoints + CSV/PDF export
  - Background jobs (SLA checker, PO overdue, forecasting)
- **🖼 IMAGES: Feature screenshots** — 3–4 real app screenshots inside bento grid cells (see `screenshot-inventory.png`, `screenshot-transfers.png`, `screenshot-analytics.png`, `screenshot-shifts.png`)

### 6. How It Works (3 steps)
- Step 1: Connect Your Locations — 3-tier hierarchy setup
- Step 2: Import Your Data — CSV bulk import
- Step 3: Operate in Real-Time — transfers, tickets, shifts, alerts

### 7. Solutions (industry use cases)
- Eyebrow: "Solutions"
- 3–4 solution cards:
  - Mining & Resource Operations
  - Multi-Site Inventory Management
  - Supply Chain Coordination
  - Enterprise Operations
- **🖼 IMAGES: Solution illustrations** — one per card (see Prompts #3, #4, #5)

### 8. Security
- Eyebrow: "Enterprise security"
- Headline: "Security designed for regulated industries."
- Feature grid:
  - JWT + httpOnly cookies
  - TOTP 2FA + backup codes
  - AES-256-GCM encryption
  - IP-based rate limiting
  - Account lockout
  - Immutable audit logs
  - RBAC (6 roles)
  - CSP + XSS prevention
- **🖼 IMAGE: Security visual** — abstract shield/encryption illustration (see Prompt #6)

### 9. Pricing (3 tiers)
- Team / Business / Enterprise
- All "Contact sales" (no self-serve pricing for now)
- Feature comparison checklist per tier
- "Most chosen" badge on Business

### 10. Final CTA
- Headline: "Turn inventory operations into inventory intelligence."
- Email input + "Request Demo" button
- Subtext: "Typical response < 1 business day"
- **🖼 IMAGE: CTA background** — subtle wide abstract visual behind the section (see Prompt #7)

### 11. Footer
- 5-column grid: Logo+description, Product, Company, Resources, Legal
- Bottom bar: "© 2026 Techionyx. All rights reserved." + status indicator

---

## Folder Structure

```
MLLC-Home/
├── app/
│   ├── layout.tsx          # Root layout (fonts, theme provider, metadata)
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Tailwind imports + CSS variables + theme tokens
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Platform.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Solutions.tsx
│   ├── Security.tsx
│   ├── Pricing.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx     # Sun/Moon toggle, persists to localStorage
│   ├── ScrollReveal.tsx    # Intersection Observer wrapper
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── Card.tsx
├── assets/                         # Generated & captured image assets
│   ├── hero-network.png          # ✅ Generated: hero visual
│   ├── problem-fragmented.png    # ✅ Generated: problem illustration
│   ├── solution-mining.png       # ✅ Generated: mining industry
│   ├── solution-warehouse.png    # ✅ Generated: multi-site operations
│   ├── solution-supply.png       # ✅ Generated: supply chain
│   ├── security-shield.png       # ✅ Generated: security visual
│   ├── cta-background.png        # ✅ Generated: CTA background
│   ├── screenshot-dashboard.png  # ✅ Real: MLLC dashboard
│   ├── screenshot-inventory.png  # ✅ Real: inventory page
│   ├── screenshot-transfers.png  # ✅ Real: transfers page
│   ├── screenshot-analytics.png  # ✅ Real: analytics page
│   └── screenshot-shifts.png     # ✅ Real: shift reconciliation
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── plan.md
```

---

## Build Checklist

### Phase 1: Setup + Foundation
- [x] Init Next.js 15 project with TypeScript
- [x] Configure Tailwind + CSS variables (dark/light theme tokens)
- [x] Set up fonts (Space Grotesk + Space Mono)
- [x] Build ThemeToggle component
- [x] Build ScrollReveal component
- [x] Build reusable UI (Button, Badge, Card)

### Phase 2: Build All Sections (top to bottom)
- [x] Header (sticky, blur, theme toggle, mobile hamburger)
- [x] Hero (headline, CTAs, trust badges, dashboard mockup)
- [x] Problem (6 pain-point cards)
- [x] Platform (8 capability cards)
- [x] Features (bento grid)
- [x] How It Works (3 steps)
- [x] Solutions (industry cards)
- [x] Security (feature grid)
- [x] Pricing (3 tiers)
- [x] Final CTA (email input + button)
- [x] Footer (5-column)

### Phase 3: Polish
- [x] Responsive design (mobile / tablet / desktop)
- [x] SEO meta tags
- [x] Scroll animations tuning
- [x] Theme transition smoothness
- [x] Accessibility (contrast, focus, alt text)

---

## Key Differences from EWIP

| EWIP | MLLC Home |
|------|-----------|
| Dark only | **Dark + Light** theme toggle |
| Work Intelligence Platform | Inventory Network Operating System |
| 8 platform pillars (projects, tasks, meetings, etc.) | 8 platform pillars (inventory, transfers, tickets, etc.) |
| AI Copilot section | Predictive Alerts / Analytics section |
| No images | **Mix: generated visuals + real app screenshots** |
| Next.js + Tailwind | Same stack |
| Space Grotesk + Space Mono | Same fonts |

---

## Notes

- **Single page only** — no `/features`, `/pricing`, etc. — all `#hash` anchors like EWIP
- "Sign In" links to actual MLLC app URL
- Dashboard mockup in hero is **built with HTML/CSS** (not an image) — same as EWIP
- No backend — pure static marketing site
- The GitHub repo `GiriRock/ewip-website` returned 404 — studied the live site at `ewip.app` instead
- All generated images should work on **both dark AND light themes** — use transparent PNGs or provide two variants where needed

---

## Image Generation Prompts

> Color reference: `#6366F1` (indigo), `#8B5CF6` (violet), `#22D3EE` (cyan), dark bg `#07070B`, light bg `#FFFFFF`
> All images should be clean, minimal, and premium — not busy or cartoonish.

### Prompt #1 — Hero Network Visual
**File:** `hero-network.png` | **Aspect:** 16:9 | **Used in:** Hero section

```
Minimalist abstract visualization of an interconnected logistics network on a pure black background (#07070B). Multiple glowing nodes of different sizes connected by thin luminous lines forming a distributed network graph. The nodes represent locations — three large hub nodes in the center with smaller satellite nodes branching outward. Use a restrained color palette: cool indigo (#6366F1), soft violet (#8B5CF6), and subtle cyan (#22D3EE) for the node glows and connection lines. The connections should have a slight pulse or flow effect suggesting data movement. No text, no icons, no gradients — just clean geometric nodes and edges with a subtle depth-of-field blur on distant nodes. Ultra clean, dark, premium. Think: constellation map meets supply chain topology.
```

### Prompt #2 — Problem: Fragmented Operations
**File:** `problem-fragmented.png` | **Aspect:** 16:9 | **Used in:** Problem section

```
Abstract minimal illustration representing fragmented and disconnected business operations on a dark background (#0E0F1A). Show 5-6 isolated geometric shapes — squares, circles, hexagons — each containing a faint icon silhouette (clipboard, truck, box, chart, wrench, shield). The shapes are scattered with broken connection lines between them, some fading out. The shapes use muted gray tones (#3F3F46, #52525B) with very subtle indigo (#6366F1) accent on one or two that are trying to connect. Overall feeling: isolation, disconnection, entropy. No text. Clean vector-like aesthetic, not 3D. Transparent or near-black background.
```

### Prompt #3 — Solution: Mining & Resources
**File:** `solution-mining.png` | **Aspect:** 3:4 | **Used in:** Solutions card

```
Minimal isometric illustration of a mining operation viewed from a slight top-down angle. Show a stylized open-pit mine or quarry with geometric terraced levels, a small conveyor belt, and a few abstract mineral nodes glowing in violet (#8B5CF6) and cyan (#22D3EE). A single haul truck silhouette on a road. Dark muted background (#0E0F1A). The style should be flat geometric with subtle depth — not photorealistic. Color palette: dark grays for the terrain, indigo and violet accents for minerals and machinery highlights. No text, no people. Clean, premium, almost blueprint-like.
```

### Prompt #4 — Solution: Multi-Site Warehouse
**File:** `solution-warehouse.png` | **Aspect:** 3:4 | **Used in:** Solutions card

```
Minimal isometric illustration of three interconnected warehouse buildings at different scales — one large (HQ), one medium (regional hub), one small (site) — connected by thin glowing lines suggesting data flow. Each building is a clean geometric block with a subtle grid pattern on the facade. Small abstract shelving units visible inside through cutaway walls. Dark background (#0E0F1A). Accent colors: indigo (#6366F1) for the connection lines, warm white for building interiors. Style: flat isometric, clean edges, no shadows, no people. Premium and minimal.
```

### Prompt #5 — Solution: Supply Chain
**File:** `solution-supply.png` | **Aspect:** 3:4 | **Used in:** Solutions card

```
Minimal isometric illustration of a supply chain flow. Show a linear sequence: supplier factory (left) → shipping container/truck (center) → warehouse receiving dock (right), connected by a clean horizontal flow line with small directional arrows. Each element is a simplified geometric form. Accent glows in cyan (#22D3EE) on the flow line and indigo (#6366F1) on the nodes. Dark background (#0E0F1A). Small abstract data readout panels floating near each node showing status. No text, no people. Clean technical aesthetic — like a system architecture diagram rendered beautifully.
```

### Prompt #6 — Security Shield
**File:** `security-shield.png` | **Aspect:** 1:1 | **Used in:** Security section

```
Abstract geometric security shield icon centered on a dark background (#07070B). The shield is constructed from thin wireframe lines forming a hexagonal or faceted 3D shape. Inside the shield, subtle concentric rings or a keyhole silhouette suggesting encryption. Thin radiating lines extend outward from the shield like a protective field. Color palette: primary indigo (#6366F1) for the shield wireframe, very subtle violet (#8B5CF6) glow around the edges, faint cyan (#22D3EE) for the inner encryption pattern. No text. Ultra minimal, no busy details. The shield should feel mathematical and precise — not decorative or cartoonish. Dark, premium, trust-evoking.
```

### Prompt #7 — CTA Background
**File:** `cta-background.png` | **Aspect:** 16:9 | **Used in:** Final CTA section (background, low opacity)

```
Wide abstract background texture for a call-to-action section. Subtle network topology pattern — very thin, barely visible connecting lines and small dots forming a sparse mesh across the canvas. The pattern should be densest in the center and fade to nothing at the edges (radial fade). Colors: extremely muted indigo (#6366F1 at 10-15% opacity) and faint violet (#8B5CF6 at 8% opacity) on a near-black background (#0B0B11). This image will be used at low opacity behind text, so it must be very subtle and not compete with content. Think: faint star field meets network graph. No focal point, just atmosphere.
```

---

## App Screenshots to Capture

These are real screenshots from the MLLC app. Run the app locally and capture:

| File | Page | What to capture |
|------|------|-----------------|
| `screenshot-dashboard.png` | DashboardPage | Full dashboard with stat cards, sidebar, charts |
| `screenshot-inventory.png` | InventoryPage | Stock table showing available/reserved/in-transit columns |
| `screenshot-transfers.png` | TransfersPage | Transfer list with status badges (pending, approved, delivered) |
| `screenshot-analytics.png` | AnalyticsPage | Charts section with export buttons visible |
| `screenshot-shifts.png` | ShiftLogsPage | Shift reconciliation with discrepancy indicators |

**Tips for screenshots:**
- Use the app's dark theme if available
- Populate with demo data (use the seeder)
- Crop to just the content area (no browser chrome)
- Aim for 1920×1080 or 2x resolution
- These will be displayed inside rounded cards with border, so slight padding is fine
