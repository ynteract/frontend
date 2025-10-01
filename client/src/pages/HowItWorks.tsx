import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Activity, MessageCircle, Mic, Eye } from "lucide-react";
import layersImage from '@assets/generated_images/Multimodal_analysis_layers_visualization_27d1b3c8.png';

export default function HowItWorks() {
  const layers = [
    {
      icon: Eye,
      title: "Facial Expressions & Eye Movements",
      description: "Track customer reactions: smiles, frowns, eye contact patterns. When a customer's eyes shift away during pricing discussion, the rep gets a subtle alert.",
      color: "from-primary/20",
    },
    {
      icon: Activity,
      title: "Body Posture & Gestures",
      description: "Detect leaning forward (engagement) or leaning back (disengagement). A customer shifting uncomfortably when warranties are introduced triggers coaching to redirect.",
      color: "from-primary/30",
    },
    {
      icon: Mic,
      title: "Vocal Tone & Pacing",
      description: "Analyze confidence levels, speaking pace, and tone shifts. If a rep's voice drops in confidence, the system prompts adjustments in delivery.",
      color: "from-primary/40",
    },
    {
      icon: MessageCircle,
      title: "Word Choice & Speaking Time",
      description: "Measure listening ratios and strategic questioning. Alert when reps speak 72% of the time, suggesting pauses after product explanations.",
      color: "from-primary/50",
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
                How <span className="text-primary">ynteract</span> Guides Sales Reps
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From real-time alerts during conversations to post-meeting behavioral coaching
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-24 rounded-lg overflow-hidden border border-border"
            >
              <img src={layersImage} alt="Multimodal analysis layers" className="w-full" />
            </motion.div>

            <div className="space-y-16 mb-24">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                  data-testid={`section-layer-${layer.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-lg bg-gradient-to-br ${layer.color} to-transparent border border-primary/20 mb-6`}>
                      <layer.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-4">{layer.title}</h3>
                    <p className="text-lg text-muted-foreground">{layer.description}</p>
                  </div>
                  <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                    <div className={`h-64 rounded-lg bg-gradient-to-br ${layer.color} to-transparent border border-primary/20 flex items-center justify-center`}>
                      <layer.icon className="h-32 w-32 text-primary/30" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-primary/30 rounded-2xl p-12 bg-primary/5 text-center"
            >
              <h2 className="font-heading text-3xl font-bold mb-4">
                The Complete <span className="text-primary">Coaching Loop</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                <strong>During the meeting:</strong> Real-time alerts guide immediate behavior changes—slowing speech, increasing eye contact, shifting body posture toward the customer.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                <strong>After the meeting:</strong> Performance replays show specific moments: "Customer smiled and leaned forward when you emphasized financing options—repeat that framing" or "You spoke 72% of the time—consider pausing after product explanations."
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
