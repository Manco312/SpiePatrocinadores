import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { EventSection } from "@/components/home/event-section";
import { StatsSection } from "@/components/home/stats-section";
import { SponsorsSection } from "@/components/home/sponsors-section";
import { CTASection } from "@/components/home/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventSection />
      <StatsSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
