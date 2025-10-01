import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eye, Activity, Mic, MessageSquare, Brain, Zap, TrendingUp, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ParallaxJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const analysisModalities = [
    {
      icon: Eye,
      title: "Facial Expressions & Eye Contact",
      description: "Track customer reactions in real-time: smiles, frowns, eye contact patterns. Detect engagement or concern instantly.",
      color: "from-primary/20 to-primary/5",
      delay: 0
    },
    {
      icon: Activity,
      title: "Body Posture",
      description: "Monitor leaning forward (engaged) or backward (disengaged). Catch subtle shifts that reveal customer comfort levels.",
      color: "from-primary/25 to-primary/8",
      delay: 0.1
    },
    {
      icon: Mic,
      title: "Vocal Tone",
      description: "Analyze confidence, warmth, and pacing. Detect when tone drops or rises, signaling emotional shifts.",
      color: "from-primary/30 to-primary/10",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Word Choice",
      description: "Measure speaking time ratios and strategic questioning. Ensure reps listen more than they talk.",
      color: "from-primary/35 to-primary/12",
      delay: 0.3
    },
    {
      icon: Brain,
      title: "Multimodal Fusion",
      description: "Combine all signals into one coherent understanding of the conversation's true dynamics.",
      color: "from-primary/40 to-primary/15",
      delay: 0.4
    }
  ];

  const guidanceFeatures = [
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "\"Customer leaned back, disengaged\" - prompts rep to re-engage with an open-ended question.",
      example: "During the meeting"
    },
    {
      icon: Target,
      title: "Behavioral Prompts",
      description: "\"Tone dropped in confidence\" - encourages adjustment in delivery, slowing speech, or pausing.",
      example: "In the moment"
    },
    {
      icon: Activity,
      title: "Posture Guidance",
      description: "\"Shift body posture toward customer\" - strengthen physical connection when disengagement is detected.",
      example: "Instant coaching"
    }
  ];

  const improvementMetrics = [
    {
      label: "Speaking Time Balance",
      description: "You spoke 72% of the time—consider pausing after product explanations to let customers process.",
      icon: MessageSquare
    },
    {
      label: "Engagement Moments",
      description: "Customer smiled and leaned forward when you emphasized financing options—repeat that framing.",
      icon: TrendingUp
    },
    {
      label: "Trust Building",
      description: "Eye contact increased 40% when you slowed your pace—maintain that rhythm in future conversations.",
      icon: Eye
    }
  ];

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);

  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 1], [100, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section 1: Analysis */}
        <motion.section
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                  We Analyze <span className="text-primary">Five Key Signals</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  While your reps focus on the conversation, our AI monitors every human signal that matters
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisModalities.map((modality, index) => (
                <motion.div
                  key={modality.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: modality.delay, duration: 0.5 }}
                >
                  <Card className="h-full hover-elevate border-primary/20">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${modality.color} flex items-center justify-center mb-4`}>
                        <modality.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-3" data-testid={`text-analysis-${modality.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        {modality.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {modality.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 2: Guidance */}
        <motion.section
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                We Guide <span className="text-primary">In Real Time</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Subtle alerts that coach behavior in the moment—turning insights into immediate action
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {guidanceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="border border-primary/30 rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-transparent hover-elevate">
                    <div className="absolute -top-4 left-8">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        {feature.example}
                      </span>
                    </div>
                    <feature.icon className="w-12 h-12 text-primary mb-6 mt-4" />
                    <h3 className="font-heading text-2xl font-bold mb-4" data-testid={`text-guidance-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{feature.description}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block border border-primary/30 rounded-2xl p-8 bg-card/50 backdrop-blur-sm">
                <p className="text-lg text-muted-foreground max-w-2xl">
                  <span className="text-primary font-semibold">These nudges create immediate behavioral corrections</span>—slowing speech, increasing eye contact, shifting body posture toward the customer—that strengthen trust.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Improvement */}
        <motion.section
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                We Drive <span className="text-primary">Continuous Improvement</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                After meetings, performance replays turn abstract coaching into specific, repeatable behaviors
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {improvementMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="hover-elevate border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                          <metric.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-xl font-bold mb-2" data-testid={`text-improvement-${metric.label.toLowerCase().replace(/\s+/g, '-')}`}>
                            {metric.label}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="border border-primary/30 rounded-2xl p-12 bg-gradient-to-br from-primary/5 to-transparent">
                <h3 className="font-heading text-3xl font-bold mb-4">
                  Transform "Instinctive" Skills Into Measurable Behaviors
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Sales reps who listen more than they talk, adapt posture when disengagement is detected, modulate tone to maintain confidence and warmth, and use open-ended questions strategically.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
