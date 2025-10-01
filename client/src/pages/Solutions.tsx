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
      title: "Automotive Dealerships (Current Pilot)",
      description: "High-stakes negotiations where reading subtle cues makes the difference. When a customer shifts uncomfortably during warranty packages or makes strong eye contact at monthly payments—ynteract catches what reps miss in the pressure of the moment.",
      features: [
        "Real-time alerts: \"customer leaned back, disengaged\"",
        "Post-meeting replays showing exact moments customer reactions shifted",
        "Behavioral coaching: when to pause, when to redirect, when to lean in",
        "Speaking time analysis: balance listening vs. presenting",
      ],
      results: "Current development focus",
    },
    {
      icon: Heart,
      title: "Healthcare (Future Application)",
      description: "Physicians adjust posture and tone to strengthen empathy during patient consultations. The system detects when patients disengage or show confusion, prompting real-time behavioral adjustments.",
      features: [
        "Empathy signal detection in patient interactions",
        "Posture and tone adjustments for rapport-building",
        "Patient engagement tracking during consultations",
        "Communication quality feedback after appointments",
      ],
      results: "Planned for expansion",
    },
    {
      icon: Users,
      title: "Consulting (Future Application)",
      description: "Client presentations fine-tuned by showing exactly when executive attention drops. Teams adjust pacing, emphasis, and engagement tactics mid-pitch based on real-time body language cues.",
      features: [
        "Executive attention tracking during presentations",
        "Mid-pitch adjustment recommendations",
        "Team coordination guidance for multi-presenter scenarios",
        "Post-presentation analysis showing engagement patterns",
      ],
      results: "Planned for expansion",
    },
    {
      icon: Phone,
      title: "Education (Future Application)",
      description: "Instructors adapt teaching style in real time when student engagement wanes. The system tracks classroom body language and attention patterns, guiding instructional adjustments on the fly.",
      features: [
        "Student engagement monitoring across classrooms",
        "Real-time teaching style adjustment prompts",
        "Attention pattern analysis for lecture optimization",
        "Post-class feedback on most effective teaching moments",
      ],
      results: "Planned for expansion",
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
                Building for <span className="text-primary">Automotive</span>, Scaling Beyond
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-time behavioral coaching designed for relationship-driven fields
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
