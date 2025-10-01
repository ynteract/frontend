import { Link } from "wouter";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Solutions", path: "/solutions" },
      { label: "How It Works", path: "/how-it-works" },
      { label: "Contact Us", path: "/contact" },
    ],
    Company: [
      { label: "About Us", path: "/about" },
      { label: "Book a Meeting", path: "/contact" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              Ynteract
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI-powered coaching for live sales conversations. Real-time guidance that shapes behavior in the moment.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="hover-elevate" data-testid="button-social-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-elevate" data-testid="button-social-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-elevate" data-testid="button-social-github">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ynteract. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-cookies">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
