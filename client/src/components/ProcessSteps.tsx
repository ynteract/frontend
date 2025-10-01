import { Camera, Brain, MessageSquare, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    description: "During live conversations, the system reads facial expressions, eye movements, body posture, vocal tone, and word choice.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "AI interprets human interaction signals in real-time, detecting disengagement, confidence shifts, and customer reactions.",
    color: "from-primary/30 to-primary/10",
  },
  {
    icon: MessageSquare,
    title: "Guide",
    description: "Subtle alerts coach reps in the moment: \"customer leaned back\" or \"tone dropped in confidence\"—prompting immediate adjustments.",
    color: "from-primary/40 to-primary/15",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "After meetings, performance replays show exactly when customer body language shifted, turning abstract coaching into clear, repeatable behaviors.",
    color: "from-primary/50 to-primary/20",
  },
];

export default function ProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-primary">ynteract</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From real-time alerts during meetings to post-conversation performance replays
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
              data-testid={`card-step-${step.title.toLowerCase()}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-8 border border-border rounded-lg hover-elevate h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-heading font-bold text-primary/40">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
