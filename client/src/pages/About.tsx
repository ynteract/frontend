import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Behavioral Focus",
      description: "Transform abstract coaching into specific, teachable actions: when to pause, when to lean in, when to adjust tone.",
    },
    {
      icon: Eye,
      title: "Real-Time Impact",
      description: "Guide behavior in the moment, not hours later. Small adjustments create immediate trust-building opportunities.",
    },
    {
      icon: Lightbulb,
      title: "Multimodal Fusion",
      description: "We don't just make data—we shape human behavior by combining voice, facial, postural, and verbal signals.",
    },
    {
      icon: Shield,
      title: "Measurable Growth",
      description: "Turn 'instinctive' sales skills into repeatable, measurable behaviors that improve with every conversation.",
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
                Our <span className="text-primary">Vision</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                A future where AI helps humans not just close deals, but connect more meaningfully with the people across the table.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl font-bold">What We're Building</h2>
                <p className="text-lg text-muted-foreground">
                  We're creating an AI-powered coaching platform that works during live, face-to-face sales conversations. It reads human interaction signals—facial expressions, eye movements, body posture, vocal tone, word choice—and translates them into specific, actionable feedback.
                </p>
                <p className="text-lg text-muted-foreground">
                  During meetings, the system delivers subtle real-time alerts that guide behavior: "customer leaned back, disengaged" or "tone dropped in confidence." After meetings, reps get performance replays showing exactly when customer reactions shifted.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-3xl font-bold">Why This Matters</h2>
                <p className="text-lg text-muted-foreground">
                  Most platforms stop at transcription or sentiment scoring. Ours integrates how something was said, how it was received, and how the physical interaction unfolded. Sales reps see how their actions influenced customer reactions in real time.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're starting with automotive dealerships, where high-stakes negotiations depend on reading subtle cues. A customer shifting uncomfortably during warranty discussion, or making strong eye contact at monthly payment mentions—these are movements reps often miss in the pressure of the moment.
                </p>
              </motion.div>
            </div>

            <div className="mb-24">
              <h2 className="font-heading text-4xl font-bold text-center mb-12">
                What Drives <span className="text-primary">Our Approach</span>
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
