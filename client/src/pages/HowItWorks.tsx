import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Activity, MessageCircle, Mic, Eye } from "lucide-react";
import layersImage from '@assets/generated_images/Multimodal_analysis_layers_visualization_27d1b3c8.png';

export default function HowItWorks() {
  const layers = [
    {
      icon: Mic,
      title: "Who Spoke",
      description: "Voice waveform analysis identifies speakers and captures vocal patterns in real-time.",
      color: "from-primary/20",
    },
    {
      icon: MessageCircle,
      title: "What Was Said",
      description: "Natural language processing extracts meaning, sentiment, and key topics from conversations.",
      color: "from-primary/30",
    },
    {
      icon: Activity,
      title: "How It Was Said",
      description: "Tone spectrum analysis reveals emotional undertones and communication style shifts.",
      color: "from-primary/40",
    },
    {
      icon: Eye,
      title: "Non-Verbal Cues",
      description: "Gaze tracking and body language analysis uncover engagement and trust signals.",
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
                The Science Behind <span className="text-primary">ynteract</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our multimodal AI analyzes communication across multiple dimensions simultaneously
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
                Explaining the <span className="text-primary">Why</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our AI doesn't just report what happened—it connects the dots to explain why. By analyzing all communication channels together, we reveal patterns like "Trust dropped here because eye contact decreased while discussing pricing" or "Engagement rose when empathy tone was detected during problem-solving."
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
