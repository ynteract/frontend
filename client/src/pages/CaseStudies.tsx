import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechCorp Sales",
      industry: "B2B SaaS",
      challenge: "Low conversion rates in enterprise sales despite high meeting volume",
      solution: "Implemented ynteract to analyze buyer engagement and trust signals during demos",
      results: [
        { metric: "Close Rate", improvement: "+32%" },
        { metric: "Deal Size", improvement: "+18%" },
        { metric: "Sales Cycle", improvement: "-20 days" },
      ],
      quote: "ynteract revealed exactly when prospects lost interest. We adapted in real-time and saw immediate results.",
      author: "Sarah Chen, VP of Sales",
    },
    {
      company: "MediCare Group",
      industry: "Healthcare",
      challenge: "Patient satisfaction scores plateauing despite training investments",
      solution: "Deployed ynteract for physician-patient interaction analysis and empathy coaching",
      results: [
        { metric: "Patient Satisfaction", improvement: "+28%" },
        { metric: "Treatment Adherence", improvement: "+40%" },
        { metric: "Communication Score", improvement: "4.8/5.0" },
      ],
      quote: "Understanding the 'why' behind communication breakdowns transformed our patient care approach.",
      author: "Dr. James Park, Chief Medical Officer",
    },
    {
      company: "ServiceFirst Inc",
      industry: "Customer Support",
      challenge: "High escalation rates and customer churn in contact center",
      solution: "Integrated ynteract for real-time emotion detection and agent guidance",
      results: [
        { metric: "Escalations", improvement: "-45%" },
        { metric: "CSAT Score", improvement: "+25%" },
        { metric: "First Call Resolution", improvement: "+35%" },
      ],
      quote: "Our agents now catch frustration before it becomes a problem. Game-changing technology.",
      author: "Maria Rodriguez, Director of CX",
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
                Success <span className="text-primary">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how leading organizations use ynteract to transform communication outcomes
              </p>
            </motion.div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testid={`card-case-study-${study.company.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Card className="overflow-hidden hover-elevate">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <h2 className="font-heading text-3xl font-bold mb-2">{study.company}</h2>
                          <p className="text-primary font-medium">{study.industry}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <TrendingUp className="h-5 w-5" />
                          <span className="text-sm">Growth Story</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="font-semibold mb-3">Challenge</h3>
                          <p className="text-muted-foreground mb-6">{study.challenge}</p>
                          <h3 className="font-semibold mb-3">Solution</h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-4">Results</h3>
                          <div className="space-y-4">
                            {study.results.map((result, i) => (
                              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <span className="text-muted-foreground">{result.metric}</span>
                                <span className="text-2xl font-heading font-bold text-primary" data-testid={`text-metric-${result.metric.toLowerCase().replace(/\s+/g, '-')}`}>
                                  {result.improvement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-border pt-6">
                        <blockquote className="italic text-lg text-muted-foreground mb-4">
                          "{study.quote}"
                        </blockquote>
                        <p className="font-medium">— {study.author}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Link href="/contact">
                <Button size="lg" className="group" data-testid="button-start-journey">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
