import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Clarity",
      description: "We make complex communication patterns simple and actionable.",
    },
    {
      icon: Eye,
      title: "Empathy",
      description: "Understanding human connection drives everything we build.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries of multimodal AI to reveal deeper insights.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Privacy-first approach with ethical AI at our core.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-primary">Mission</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                To create a world where technology strengthens empathy and trust in every human interaction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl font-bold">Our Story</h2>
                <p className="text-lg text-muted-foreground">
                  ynteract was born from a simple question: Why do some conversations build trust while others break it? Traditional analytics couldn't answer this—they only showed what happened, not why.
                </p>
                <p className="text-lg text-muted-foreground">
                  We pioneered multimodal AI analysis to decode the full spectrum of human communication: words, tone, gaze, and gestures working together. Today, we help organizations worldwide understand the 'why' behind every interaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl font-bold">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  We envision a future where every professional has access to the insights that once required years of experience to develop. Where AI doesn't replace human connection—it enhances it.
                </p>
                <p className="text-lg text-muted-foreground">
                  By making communication analysis accessible and actionable, we're building a world where empathy scales, trust deepens, and every interaction becomes an opportunity for growth.
                </p>
              </motion.div>
            </div>

            <div className="mb-24">
              <h2 className="font-heading text-4xl font-bold text-center mb-12">
                Our <span className="text-primary">Values</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="border border-border rounded-lg p-6 hover-elevate text-center group"
                    data-testid={`card-value-${value.title.toLowerCase()}`}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:scale-110 transition-transform animate-pulse-glow">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
