import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eye, Activity, Mic, MessageSquare, Brain, Zap, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ParallaxJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const analysisModalities = [
    {
      icon: Eye,
      title: "Facial Expressions",
      subtitle: "& Eye Contact",
      description: "Customer reactions in real-time",
      detail: "Smiles, frowns, eye contact patterns",
      delay: 0
    },
    {
      icon: Activity,
      title: "Body Posture",
      subtitle: "& Gestures",
      description: "Physical engagement signals",
      detail: "Leaning forward, shifting back",
      delay: 0.1
    },
    {
      icon: Mic,
      title: "Vocal Tone",
      subtitle: "& Pacing",
      description: "Confidence and emotion",
      detail: "Tone drops, warmth, speaking speed",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Word Choice",
      subtitle: "& Speaking Time",
      description: "Strategic questioning",
      detail: "Listen vs. talk ratios",
      delay: 0.3
    },
    {
      icon: Brain,
      title: "Multimodal Fusion",
      subtitle: "",
      description: "One coherent understanding",
      detail: "All signals combined seamlessly",
      delay: 0.4
    }
  ];

  const guidanceExamples = [
    {
      alert: "Customer leaned back",
      action: "Re-engage with open-ended question"
    },
    {
      alert: "Tone dropped in confidence",
      action: "Slow speech, pause for emphasis"
    },
    {
      alert: "Eye contact decreased",
      action: "Shift body posture toward customer"
    }
  ];

  const improvementInsights = [
    {
      metric: "Speaking Time",
      finding: "You spoke 72% of the time",
      guidance: "Pause after product explanations"
    },
    {
      metric: "Engagement Peak",
      finding: "Customer leaned forward at financing mention",
      guidance: "Repeat that framing approach"
    },
    {
      metric: "Trust Signal",
      finding: "Eye contact increased 40% when you slowed pace",
      guidance: "Maintain that rhythm"
    }
  ];

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.65], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.65], [0.9, 1]);
  const scale3 = useTransform(scrollYProgress, [0.6, 1], [0.9, 1]);

  return (
    <div ref={containerRef} className="relative bg-background" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Section 1: Analysis */}
        <motion.section
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-12"
              data-testid="text-section-analysis"
            >
              We read<br />
              <span className="text-primary">five signals.</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
              {analysisModalities.map((modality, index) => (
                <motion.div
                  key={modality.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: modality.delay }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <modality.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-bold mb-1" data-testid={`text-analysis-${modality.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {modality.title}
                  </h3>
                  {modality.subtitle && (
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">{modality.subtitle}</p>
                  )}
                  <p className="text-xs md:text-sm text-muted-foreground/80">{modality.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 2: Guidance */}
        <motion.section
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-16"
              data-testid="text-section-guidance"
            >
              We guide<br />
              <span className="text-primary">in the moment.</span>
            </motion.h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              {guidanceExamples.map((example, index) => (
                <motion.div
                  key={example.alert}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-card/30 border border-primary/20">
                    <div className="flex-1 text-left">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-3">
                        Alert
                      </div>
                      <p className="text-lg md:text-xl font-medium">{example.alert}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                    <div className="flex-1 text-left md:text-right">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-3">
                        Action
                      </div>
                      <p className="text-lg md:text-xl font-medium">{example.action}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mt-16 max-w-3xl mx-auto"
            >
              Subtle nudges that create <span className="text-primary font-semibold">immediate behavioral corrections</span> and strengthen trust.
            </motion.p>
          </div>
        </motion.section>

        {/* Section 3: Improvement */}
        <motion.section
          style={{ opacity: opacity3, scale: scale3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-16"
              data-testid="text-section-improvement"
            >
              We shape<br />
              <span className="text-primary">every conversation.</span>
            </motion.h2>

            <div className="space-y-6 max-w-3xl mx-auto mb-16">
              {improvementInsights.map((insight, index) => (
                <motion.div
                  key={insight.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15 }}
                  className="p-6 md:p-8 rounded-2xl bg-card/30 border border-primary/20 text-left"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-heading text-xl md:text-2xl font-bold" data-testid={`text-improvement-${insight.metric.toLowerCase().replace(/\s+/g, '-')}`}>
                      {insight.metric}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg mb-3 text-muted-foreground">
                    {insight.finding}
                  </p>
                  <p className="text-base md:text-lg text-primary font-semibold">
                    → {insight.guidance}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Turn instinctive skills into <span className="text-primary font-semibold">measurable, repeatable behaviors</span>.
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="group" data-testid="button-journey-cta">
                  Book a Meeting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
