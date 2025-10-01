import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-3xl" />
          <div className="relative border border-primary/30 rounded-2xl p-12 bg-card/50 backdrop-blur-sm">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Transform Sales Conversations <span className="text-primary">In Real Time</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're building the future of behavioral coaching—one conversation at a time. Let's talk about piloting ynteract in your dealership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@ynteract.io?subject=Meeting%20Request%20-%20Ynteract%20Demo&body=Hi%20Ynteract%20team%2C%0A%0AI'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%3A%0A%0ACompany%20Name%3A%20%0AIndustry%3A%20%0ANumber%20of%20Sales%20Reps%3A%20%0A%0AWhat%20I%27m%20interested%20in%3A%0A-%20%0A%0APreferred%20meeting%20time%3A%20%0A%0AThank%20you%21">
                <Button size="lg" className="group animate-pulse-glow" data-testid="button-cta-demo">
                  Book a Meeting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" data-testid="button-cta-learn">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
