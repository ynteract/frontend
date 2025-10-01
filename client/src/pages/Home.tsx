import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ParallaxJourney from "@/components/ParallaxJourney";
import MobileJourney from "@/components/MobileJourney";
import IndustryCards from "@/components/IndustryCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        {isMobile ? <MobileJourney /> : <ParallaxJourney />}
        <IndustryCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
