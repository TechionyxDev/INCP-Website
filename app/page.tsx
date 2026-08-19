import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PlatformOverview } from "@/components/PlatformOverview";
import { LiveFeatures } from "@/components/LiveFeatures";
import { SecuritySection } from "@/components/SecuritySection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <PlatformOverview />
        <LiveFeatures />
        <SecuritySection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
