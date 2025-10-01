import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/solutions", label: "Solutions" },
    { path: "/how-it-works", label: "How It Works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ynteract
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === item.path ? "bg-accent" : ""}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <a href="mailto:hello@ynteract.io?subject=Meeting%20Request%20-%20Ynteract%20Demo&body=Hi%20Ynteract%20team%2C%0A%0AI'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%3A%0A%0ACompany%20Name%3A%20%0AIndustry%3A%20%0ANumber%20of%20Sales%20Reps%3A%20%0A%0AWhat%20I%27m%20interested%20in%3A%0A-%20%0A%0APreferred%20meeting%20time%3A%20%0A%0AThank%20you%21">
              <Button size="sm" className="ml-4" data-testid="button-demo">
                Book a Meeting
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === item.path ? "bg-accent" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <a href="mailto:hello@ynteract.io?subject=Meeting%20Request%20-%20Ynteract%20Demo&body=Hi%20Ynteract%20team%2C%0A%0AI'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%3A%0A%0ACompany%20Name%3A%20%0AIndustry%3A%20%0ANumber%20of%20Sales%20Reps%3A%20%0A%0AWhat%20I%27m%20interested%20in%3A%0A-%20%0A%0APreferred%20meeting%20time%3A%20%0A%0AThank%20you%21" className="w-full">
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-demo">
                Book a Meeting
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
