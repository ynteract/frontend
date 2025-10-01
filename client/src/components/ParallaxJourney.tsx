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
      progressValue: 72,
      type: "neutral",
      phrase: "Let me tell you about all our features..."
    },
    {
      metric: "Engagement Peak",
      finding: "Customer leaned forward at financing mention",
      guidance: "Repeat that framing approach",
      improvement: "+40%",
      progressValue: 85,
      type: "positive",
      phrase: "We can structure payments around your budget"
    },
    {
      metric: "Trust Signal",
      finding: "Eye contact increased 40% when you slowed pace",
      guidance: "Maintain that rhythm",
      improvement: "+40%",
      progressValue: 92,
      type: "positive",
      phrase: "Take your time deciding what feels right"
    },
    {
      metric: "Warning Signal",
      finding: "Customer folded arms when you mentioned 'right now'",
      guidance: "Remove pressure language—focus on value",
      improvement: "-35%",
      progressValue: 35,
      type: "negative",
      phrase: "You really need to decide right now to get this deal"
    },
    {
      metric: "Discomfort Detected",
      finding: "Customer frowned at extended warranty pitch",
      guidance: "Ask permission before add-ons",
      improvement: "-28%",
      progressValue: 28,
      type: "negative",
      phrase: "Everyone gets the extended warranty, it's a must-have"
    }
  ];

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.65], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 1], [0, 1, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 0.35], [1, 0.98]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.65], [0.98, 1]);
  const scale3 = useTransform(scrollYProgress, [0.6, 1], [0.98, 1]);

  return (
    <div ref={containerRef} className="relative bg-background" style={{ height: "500vh", position: "relative" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-y-auto md:overflow-hidden relative">
        
        {/* Section 1: Signal Analysis Lab */}
        <motion.section
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute inset-0 flex items-center justify-center overflow-y-auto md:overflow-visible"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
            <motion.h2 
              className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 text-center px-2"
              data-testid="text-section-analysis"
            >
              We analyze<br />
              <span className="text-primary">human interactions.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto text-center px-2"
            >
              Five key signals that reveal what customers really think—helping sales reps close more deals.
            </motion.p>

            {/* Grid Signal Visualization */}
            <div className="max-w-5xl mx-auto">
              {/* Top Row - Facial */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0, type: "spring" }}
                  className="p-5 rounded-xl bg-card border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 w-64"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Eye className="w-5 h-5 text-primary" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/40"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">Facial</h3>
                      <p className="text-2xl font-bold text-primary">94%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Micro-expressions & emotional cues</p>
                </motion.div>
              </div>

              {/* Middle Row - Verbal, AI Fusion, Posture */}
              <div className="flex justify-center items-center gap-6 mb-6">
                {/* Verbal */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="p-5 rounded-xl bg-card border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 w-64"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                    >
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/40"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">Verbal</h3>
                      <p className="text-2xl font-bold text-primary">82%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Word choice & timing</p>
                </motion.div>

                {/* AI Fusion Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  animate={{ scale: [1, 1.05, 1] }}
                  className="w-40 h-40 rounded-full bg-primary/20 border-2 border-primary flex flex-col items-center justify-center"
                >
                  <Brain className="w-10 h-10 text-primary mb-1" />
                  <span className="text-xs font-bold text-primary">AI Fusion</span>
                  <span className="text-3xl font-bold text-primary">98%</span>
                </motion.div>

                {/* Posture */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring" }}
                  className="p-5 rounded-xl bg-card border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 w-64"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    >
                      <Activity className="w-5 h-5 text-primary" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/40"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">Posture</h3>
                      <p className="text-2xl font-bold text-primary">87%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Body language & gestures</p>
                </motion.div>
              </div>

              {/* Bottom Row - Vocal */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="p-5 rounded-xl bg-card border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 w-64"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                    >
                      <Mic className="w-5 h-5 text-primary" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/40"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">Vocal</h3>
                      <p className="text-2xl font-bold text-primary">91%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Tone, pitch & pacing</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Live Coaching Console */}
        <motion.section
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 flex items-center justify-center overflow-y-auto md:overflow-visible"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
            <motion.h2 
              className="font-heading text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-center px-2"
              data-testid="text-section-guidance"
            >
              We guide<br />
              <span className="text-primary">to close deals.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 text-center max-w-3xl mx-auto px-2"
            >
              Real-time alerts that turn customer signals into sales opportunities.
            </motion.p>

            {/* Console-Style Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
              {/* Live Call Feed */}
              <div className="rounded-xl md:rounded-2xl border-2 border-primary/30 bg-card/50 p-4 md:p-6 relative overflow-hidden">
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
          className="absolute inset-0 flex items-center justify-center overflow-y-auto md:overflow-visible"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-12">
            <motion.h2 
              className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-center px-2"
              data-testid="text-section-improvement"
            >
              We boost<br />
              <span className="text-primary">sales performance.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 text-center max-w-2xl mx-auto px-2"
            >
              Real-time coaching insights that transform your sales team.
            </motion.p>

            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto mb-6 md:mb-8">
              {improvementInsights.map((insight, index) => {
                const isPositive = insight.type === 'positive';
                const isNegative = insight.type === 'negative';
                const borderColor = isPositive ? 'border-green-500/50' : isNegative ? 'border-red-500/50' : 'border-primary/30';
                const accentColor = isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-primary';
                const barColor = isPositive ? 'from-green-500 to-green-400' : isNegative ? 'from-red-500 to-orange-500' : 'from-primary to-primary/60';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all cursor-pointer ${
                      activeInsight === index 
                        ? `bg-card ${borderColor} shadow-lg scale-105` 
                        : `bg-card/50 border-border hover:${borderColor} hover:bg-card/70`
                    }`}
                    onClick={() => setActiveInsight(index)}
                    data-testid={`card-metric-${index}`}
                  >
                    {/* Metric Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold ${accentColor}`}>
                        {insight.improvement}
                      </span>
                      {isNegative ? (
                        <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                      ) : (
                        <TrendingUp className={`w-4 h-4 ${isPositive ? 'text-green-500' : 'text-muted-foreground'}`} />
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-heading text-sm font-bold">{insight.metric}</h4>
                        <span className={`text-xl font-bold ${accentColor}`}>{insight.progressValue}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${barColor} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${insight.progressValue}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Insight Details */}
                    <p className="text-xs text-muted-foreground line-clamp-2">{insight.finding}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Detailed Insight Panel */}
            <motion.div
              key={activeInsight}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-3xl mx-auto bg-card rounded-lg md:rounded-xl border-2 p-4 md:p-6 ${
                improvementInsights[activeInsight].type === 'negative' 
                  ? 'border-red-500/30' 
                  : improvementInsights[activeInsight].type === 'positive'
                  ? 'border-green-500/30'
                  : 'border-primary/30'
              }`}
            >
              {/* What They Said */}
              <div className="mb-4 p-4 rounded-lg bg-background/50 border border-border">
                <div className="flex items-start gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase">What You Said</span>
                </div>
                <p className="text-sm italic">
                  "{improvementInsights[activeInsight].phrase}"
                </p>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  improvementInsights[activeInsight].type === 'negative' 
                    ? 'bg-red-500/20' 
                    : improvementInsights[activeInsight].type === 'positive'
                    ? 'bg-green-500/20'
                    : 'bg-primary/20'
                }`}>
                  <Target className={`w-5 h-5 ${
                    improvementInsights[activeInsight].type === 'negative' 
                      ? 'text-red-500' 
                      : improvementInsights[activeInsight].type === 'positive'
                      ? 'text-green-500'
                      : 'text-primary'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold mb-1">
                    {improvementInsights[activeInsight].type === 'negative' ? 'Correction Needed' : 'Coaching Recommendation'}
                  </h3>
                  <p className={`text-base font-semibold ${
                    improvementInsights[activeInsight].type === 'negative' 
                      ? 'text-red-500' 
                      : improvementInsights[activeInsight].type === 'positive'
                      ? 'text-green-500'
                      : 'text-primary'
                  }`}>
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
              
              <a href="mailto:hello@ynteract.io?subject=Meeting%20Request%20-%20Ynteract%20Demo&body=Hi%20Ynteract%20team%2C%0A%0AI'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%3A%0A%0ACompany%20Name%3A%20%0AIndustry%3A%20%0ANumber%20of%20Sales%20Reps%3A%20%0A%0AWhat%20I%27m%20interested%20in%3A%0A-%20%0A%0APreferred%20meeting%20time%3A%20%0A%0AThank%20you%21">
                <Button size="lg" className="group" data-testid="button-journey-cta">
                  Book a Meeting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
