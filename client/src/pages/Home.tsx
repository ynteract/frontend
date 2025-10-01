import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ParallaxJourney from "@/components/ParallaxJourney";
import IndustryCards from "@/components/IndustryCards";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ParallaxJourney />
        <IndustryCards />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
