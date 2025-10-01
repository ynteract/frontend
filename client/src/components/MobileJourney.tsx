import { motion } from "framer-motion";
import { Eye, MessageSquare, Brain, Activity, Mic, Zap, Target, TrendingUp, MessageSquare as MessageIcon, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function MobileJourney() {
  const [activeInsight, setActiveInsight] = useState(0);

  const signals = [
    {
      icon: Eye,
      title: "Facial",
      percentage: "94%",
      description: "Micro-expressions & emotional cues"
    },
    {
      icon: MessageSquare,
      title: "Verbal",
      percentage: "82%",
      description: "Word choice & timing"
    },
    {
      icon: Brain,
      title: "AI Fusion",
      percentage: "98%",
      description: "Real-time analysis"
    },
    {
      icon: Activity,
      title: "Posture",
      percentage: "87%",
      description: "Body language & gestures"
    },
    {
      icon: Mic,
      title: "Vocal",
      percentage: "91%",
      description: "Tone, pitch & pacing"
    }
  ];

  const alerts = [
    {
      time: "00:42",
      signal: "Customer leaned back",
      guidance: "Re-engage with open-ended question",
      type: "warning"
    },
    {
      time: "02:18",
      signal: "Tone dropped in confidence",
      guidance: "Slow speech, pause for emphasis",
      type: "caution"
    },
    {
      time: "04:55",
      signal: "Eye contact decreased",
      guidance: "Shift body posture toward customer",
      type: "alert"
    }
  ];

  const insights = [
    {
      metric: "Speaking Time",
      value: "23%",
      finding: "You spoke 65% of the time—aim for 40%",
      guidance: "Ask more questions, listen actively",
      type: "neutral",
      phrase: "Let me walk you through all the features"
    },
    {
      metric: "Engagement Peak",
      value: "40%",
      finding: "Customer leaned forward when discussing budget flexibility",
      guidance: "Lead with payment options early",
      type: "positive",
      phrase: "We can structure payments around your budget"
    },
    {
      metric: "Trust Signal",
      value: "40%",
      finding: "Eye contact increased after active listening",
      guidance: "Continue validating their concerns",
      type: "positive",
      phrase: "Take your time deciding what feels right"
    },
    {
      metric: "Warning Signal",
      value: "35%",
      finding: "Customer folded arms when you mentioned 'right now'",
      guidance: "Remove pressure language—focus on value",
      type: "negative",
      phrase: "You really need to decide right now to get this deal"
    },
    {
      metric: "Discomfort Detected",
      value: "28%",
      finding: "Customer frowned at extended warranty pitch",
      guidance: "Ask permission before add-ons",
      type: "negative",
      phrase: "Everyone gets the extended warranty, it's a must-have"
    }
  ];

  return (
    <div className="bg-background">
      {/* Section 1: Signal Analysis */}
      <section className="min-h-screen flex flex-col justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-4 text-center">
            We analyze<br />
            <span className="text-primary">human interactions.</span>
          </h2>
          
          <p className="text-sm text-muted-foreground mb-8 text-center max-w-md mx-auto">
            Five key signals that reveal what customers really think—helping sales reps close more deals.
          </p>

          <div className="space-y-3 max-w-md mx-auto">
            {signals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 border-2 border-primary/20 rounded-lg p-4"
                data-testid={`card-signal-${index}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <signal.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-bold text-base">{signal.title}</h3>
                      <span className="text-2xl font-bold text-primary">{signal.percentage}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{signal.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 2: Live Coaching */}
      <section className="min-h-screen flex flex-col justify-center px-4 py-16 bg-gradient-to-b from-background to-card/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-4 text-center">
            We guide<br />
            <span className="text-primary">to close deals.</span>
          </h2>
          
          <p className="text-sm text-muted-foreground mb-8 text-center max-w-md mx-auto">
            Real-time alerts that turn customer signals into sales opportunities.
          </p>

          {/* Live Call Status */}
          <div className="bg-card/50 border-2 border-primary/30 rounded-lg p-4 mb-4 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold">LIVE CALL</span>
              </div>
              <span className="text-sm text-muted-foreground">06:42</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold">SR</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Sales Rep</p>
                  <p className="text-xs text-muted-foreground">Speaking: 68%</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border">
                  <span className="text-xs font-bold">C</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Customer</p>
                  <p className="text-xs text-muted-foreground">Listening</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Engagement</p>
                  <p className="text-sm font-semibold text-primary">87%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Eye Contact</p>
                  <p className="text-sm font-semibold text-primary">92%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tone Match</p>
                  <p className="text-sm font-semibold text-primary">75%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Trust</p>
                  <p className="text-sm font-semibold text-primary">89%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coaching Alerts */}
          <div className="bg-card/50 border-2 border-primary/30 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-sm">COACHING ALERTS</h3>
            </div>

            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-primary/40 pl-3"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-primary font-mono">{alert.time}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold mb-1">{alert.signal}</p>
                      <p className="text-xs text-muted-foreground">→ {alert.guidance}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Subtle nudges that create <span className="text-primary font-semibold">immediate behavioral corrections</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Performance Insights */}
      <section className="min-h-screen flex flex-col justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-4 text-center">
            We boost<br />
            <span className="text-primary">sales performance.</span>
          </h2>
          
          <p className="text-sm text-muted-foreground mb-8 text-center max-w-md mx-auto">
            Real-time coaching insights that transform your sales team.
          </p>

          {/* Metric Cards */}
          <div className="space-y-3 max-w-md mx-auto mb-6">
            {insights.map((insight, index) => {
              const isPositive = insight.type === 'positive';
              const isNegative = insight.type === 'negative';
              const borderColor = isPositive ? 'border-green-500/50' : isNegative ? 'border-red-500/50' : 'border-primary/30';
              const accentColor = isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-primary';
              const bgColor = activeInsight === index ? 'bg-card' : 'bg-card/50';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveInsight(index)}
                  className={`${bgColor} border-2 ${borderColor} rounded-lg p-4 cursor-pointer transition-all`}
                  data-testid={`card-metric-${index}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm">{insight.metric}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${accentColor}`}>{insight.value}</span>
                      {isNegative ? (
                        <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                      ) : (
                        <TrendingUp className={`w-4 h-4 ${isPositive ? 'text-green-500' : 'text-muted-foreground'}`} />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{insight.finding}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Panel */}
          <motion.div
            key={activeInsight}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-md mx-auto bg-card rounded-lg border-2 p-4 ${
              insights[activeInsight].type === 'negative' 
                ? 'border-red-500/30' 
                : insights[activeInsight].type === 'positive'
                ? 'border-green-500/30'
                : 'border-primary/30'
            }`}
          >
            {/* What You Said */}
            <div className="mb-4 p-3 rounded-lg bg-background/50 border border-border">
              <div className="flex items-start gap-2 mb-2">
                <MessageIcon className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">What You Said</span>
              </div>
              <p className="text-sm italic">
                "{insights[activeInsight].phrase}"
              </p>
            </div>

            {/* Guidance */}
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                insights[activeInsight].type === 'negative' 
                  ? 'bg-red-500/20' 
                  : insights[activeInsight].type === 'positive'
                  ? 'bg-green-500/20'
                  : 'bg-primary/20'
              }`}>
                <Target className={`w-5 h-5 ${
                  insights[activeInsight].type === 'negative' 
                    ? 'text-red-500' 
                    : insights[activeInsight].type === 'positive'
                    ? 'text-green-500'
                    : 'text-primary'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-base font-bold mb-1">
                  {insights[activeInsight].type === 'negative' ? 'Correction Needed' : 'Coaching Recommendation'}
                </h3>
                <p className={`text-sm font-semibold ${
                  insights[activeInsight].type === 'negative' 
                    ? 'text-red-500' 
                    : insights[activeInsight].type === 'positive'
                    ? 'text-green-500'
                    : 'text-primary'
                }`}>
                  {insights[activeInsight].guidance}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span className="text-xs">Real-time coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span className="text-xs">Team analytics</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
