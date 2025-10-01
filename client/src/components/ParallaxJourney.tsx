import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Activity, Mic, MessageSquare, Brain, Zap, TrendingUp, Target, ArrowRight, Play, Circle, ChevronLeft, ChevronRight, CheckCircle2, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ParallaxJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeInsight, setActiveInsight] = useState(0);

  const analysisModalities = [
    {
      icon: Eye,
      title: "Facial",
      description: "Micro-expressions & emotional cues",
      value: "94%",
      delay: 0
    },
    {
      icon: Activity,
      title: "Posture",
      description: "Body language & gestures",
      value: "87%",
      delay: 0.1
    },
    {
      icon: Mic,
      title: "Vocal",
      description: "Tone, pitch & pacing",
      value: "91%",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Verbal",
      description: "Word choice & timing",
      value: "82%",
      delay: 0.3
    },
    {
      icon: Brain,
      title: "Fusion",
      description: "AI synthesis of all signals",
      value: "98%",
      delay: 0.4
    }
  ];

  const guidanceExamples = [
    {
      time: "00:42",
      alert: "Customer leaned back",
      action: "Re-engage with open-ended question",
      impact: "high"
    },
    {
      time: "02:18",
      alert: "Tone dropped in confidence",
      action: "Slow speech, pause for emphasis",
      impact: "medium"
    },
    {
      time: "04:55",
      alert: "Eye contact decreased",
      action: "Shift body posture toward customer",
      impact: "high"
    }
  ];

  const improvementInsights = [
    {
      metric: "Speaking Time",
      finding: "You spoke 72% of the time",
      guidance: "Pause after product explanations",
      improvement: "+23%",
      progressValue: 72
    },
    {
      metric: "Engagement Peak",
      finding: "Customer leaned forward at financing mention",
      guidance: "Repeat that framing approach",
      improvement: "+40%",
      progressValue: 85
    },
    {
      metric: "Trust Signal",
      finding: "Eye contact increased 40% when you slowed pace",
      guidance: "Maintain that rhythm",
      improvement: "+40%",
      progressValue: 92
    }
  ];

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.65], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.65], [0.9, 1]);
  const scale3 = useTransform(scrollYProgress, [0.6, 1], [0.9, 1]);

  return (
    <div ref={containerRef} className="relative bg-background" style={{ height: "500vh", position: "relative" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden relative">
        
        {/* Section 1: Signal Analysis Lab */}
        <motion.section
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center px-4"
              data-testid="text-section-analysis"
            >
              We analyze<br />
              <span className="text-primary">human interactions.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center px-4"
            >
              Five key signals that reveal what customers really think—helping sales reps close more deals.
            </motion.p>

            {/* Circular Signal Visualization */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center Hub */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div 
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-primary/20 border-2 border-primary flex flex-col items-center justify-center relative"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary mb-1" />
                  <span className="text-xs font-bold text-primary">AI Fusion</span>
                  <span className="text-2xl md:text-3xl font-bold text-primary">98%</span>
                </motion.div>
              </div>

              {/* Signal Nodes in Circular Pattern */}
              <div className="relative h-[500px] md:h-[600px] w-full">
                {analysisModalities.slice(0, 4).map((modality, index) => {
                  const angle = (index * 90) - 90; // Start from top
                  const radius = 220;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={modality.title}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: modality.delay, type: "spring" }}
                      className="absolute cursor-pointer group"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {/* Connecting Line */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 h-0.5 bg-primary/30 origin-left"
                        style={{
                          width: `${radius}px`,
                          transform: `rotate(${angle + 180}deg)`,
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: modality.delay + 0.3, duration: 0.6 }}
                      />

                      {/* Signal Node */}
                      <motion.div
                        className="relative z-10 p-6 rounded-2xl bg-card border-2 border-primary/30 hover:border-primary transition-colors min-w-[180px]"
                        whileHover={{ scale: 1.05, y: -4 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.4,
                            }}
                          >
                            <modality.icon className="w-5 h-5 text-primary" />
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-primary/40"
                              animate={{
                                scale: [1, 1.8],
                                opacity: [0.6, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.4,
                              }}
                            />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-bold text-sm">{modality.title}</h3>
                            <p className="text-2xl font-bold text-primary">{modality.value}</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{modality.description}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Live Coaching Console */}
        <motion.section
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.h2 
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-center"
              data-testid="text-section-guidance"
            >
              We guide<br />
              <span className="text-primary">to close deals.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto"
            >
              Real-time alerts that turn customer signals into sales opportunities.
            </motion.p>

            {/* Console-Style Layout */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Live Call Feed */}
              <div className="rounded-2xl border-2 border-primary/30 bg-card/50 p-6 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-500"
                      animate={{
                        opacity: [1, 0.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-sm font-semibold">LIVE CALL</span>
                  </div>
                  <span className="text-sm text-muted-foreground ml-auto">06:42</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-sm font-bold">SR</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Sales Rep</p>
                      <p className="text-xs text-muted-foreground">Speaking: 68%</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-bold">C</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Customer</p>
                      <p className="text-xs text-muted-foreground">Listening</p>
                    </div>
                  </div>

                  {/* Live Metrics */}
                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Engagement", value: 87 },
                        { label: "Eye Contact", value: 92 },
                        { label: "Tone Match", value: 75 },
                        { label: "Trust", value: 89 },
                      ].map((metric) => (
                        <div key={metric.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">{metric.label}</span>
                            <span className="font-semibold">{metric.value}%</span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${metric.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Alert Stream */}
              <div className="rounded-2xl border-2 border-primary/30 bg-card/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">COACHING ALERTS</span>
                </div>

                <div className="space-y-3">
                  {guidanceExamples.map((example, index) => (
                    <motion.div
                      key={example.time}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="p-4 rounded-xl bg-background/50 border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                          animate={{
                            scale: example.impact === "high" ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          <span className="text-xs font-bold text-primary">{example.time}</span>
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">
                            {example.alert}
                          </p>
                          <div className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                              {example.action}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-xs text-muted-foreground mt-4 text-center"
                >
                  Subtle nudges that create <span className="text-primary font-semibold">immediate behavioral corrections</span>
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Performance Dashboard */}
        <motion.section
          style={{ opacity: opacity3, scale: scale3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-center px-4"
              data-testid="text-section-improvement"
            >
              We boost<br />
              <span className="text-primary">sales performance.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground mb-8 text-center max-w-2xl mx-auto px-4"
            >
              Real-time coaching insights that transform your sales team.
            </motion.p>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              {improvementInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    activeInsight === index 
                      ? 'bg-card border-primary shadow-lg scale-105' 
                      : 'bg-card/50 border-border hover:border-primary/50 hover:bg-card/70'
                  }`}
                  onClick={() => setActiveInsight(index)}
                  data-testid={`card-metric-${index}`}
                >
                  {/* Metric Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary">
                      {insight.improvement}
                    </span>
                    <Activity className="w-4 h-4 text-muted-foreground" />
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-heading text-sm font-bold">{insight.metric}</h4>
                      <span className="text-xl font-bold text-primary">{insight.progressValue}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${insight.progressValue}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Insight Details */}
                  <p className="text-xs text-muted-foreground line-clamp-2">{insight.finding}</p>
                </motion.div>
              ))}
            </div>

            {/* Detailed Insight Panel */}
            <motion.div
              key={activeInsight}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto bg-card rounded-xl border-2 border-primary/30 p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold mb-1">
                    Coaching Recommendation
                  </h3>
                  <p className="text-base text-primary font-semibold">
                    {improvementInsights[activeInsight].guidance}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-xs">Real-time coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xs">Team analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-xs">Measurable results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mic className="w-4 h-4 text-primary" />
                  <span className="text-xs">Voice intelligence</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-8"
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Analyzing human interactions to <span className="text-primary font-semibold">boost sales</span>—one conversation at a time.
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
