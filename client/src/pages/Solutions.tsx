import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Heart, Phone, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Solutions() {
  const solutions = [
    {
      icon: Briefcase,
      title: "Sales Excellence",
      description: "Close more deals by understanding buyer engagement patterns and trust signals in real-time.",
      features: [
        "Buying signal detection",
        "Objection anticipation",
        "Trust score tracking",
        "Negotiation coaching",
      ],
      results: "+32% close rate, -20% sales cycle",
    },
    {
      icon: Heart,
      title: "Healthcare Communication",
      description: "Improve patient outcomes through enhanced empathy detection and communication quality metrics.",
      features: [
        "Empathy score analysis",
        "Patient engagement tracking",
        "Communication quality metrics",
        "Bedside manner insights",
      ],
      results: "95% patient satisfaction, +40% adherence",
    },
    {
      icon: Phone,
      title: "Customer Service",
      description: "Deliver exceptional support by identifying frustration early and personalizing interactions.",
      features: [
        "Emotion detection",
        "Escalation prediction",
        "Agent performance insights",
        "Real-time guidance",
      ],
      results: "-45% escalations, +25% CSAT",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Build executive presence through data-driven feedback on tone, body language, and engagement.",
      features: [
        "Presence meter analysis",
        "Tone coaching",
        "Engagement heatmaps",
        "Impact scoring",
      ],
      results: "2x team engagement, +35% influence",
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
                Solutions for Every <span className="text-primary">Industry</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored multimodal analysis for sales, healthcare, customer service, and leadership
              </p>
            </motion.div>

            <div className="grid gap-12">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`card-solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Card className="overflow-hidden hover-elevate">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 mb-6">
                            <solution.icon className="h-8 w-8 text-primary" />
                          </div>
                          <h2 className="font-heading text-3xl font-bold mb-4">{solution.title}</h2>
                          <p className="text-lg text-muted-foreground mb-6">{solution.description}</p>
                          <div className="mb-6">
                            <h3 className="font-semibold mb-3">Key Features:</h3>
                            <ul className="space-y-2">
                              {solution.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link href="/contact">
                            <Button data-testid={`button-learn-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                              Learn More
                            </Button>
                          </Link>
                        </div>
                        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex flex-col justify-center">
                          <div className="text-sm text-muted-foreground mb-2">Proven Results</div>
                          <div className="text-2xl font-heading font-bold text-primary mb-4" data-testid={`text-results-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            {solution.results}
                          </div>
                          <p className="text-muted-foreground">
                            Join leading organizations using ynteract to transform their {solution.title.toLowerCase()} approach.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
