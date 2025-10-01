import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, Zap, Globe, Cpu, Video, MessageSquare, Cloud } from "lucide-react";
import engineImage from '@assets/generated_images/AI_engine_multimodal_sphere_fb311ee0.png';

export default function Technology() {
  const features = [
    {
      icon: Cpu,
      title: "Multimodal AI Engine",
      description: "Processes 40+ data streams simultaneously with 95% accuracy across voice, vision, and text modalities.",
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Sub-second processing delivers insights while conversations happen, not hours later.",
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      description: "End-to-end encryption, on-premise deployment options, and zero data retention policies.",
    },
    {
      icon: Globe,
      title: "Universal Integration",
      description: "Works seamlessly with Zoom, Teams, Salesforce, and any communication platform.",
    },
  ];

  const integrations = [
    { icon: Video, name: "Zoom", color: "text-primary" },
    { icon: MessageSquare, name: "Teams", color: "text-primary" },
    { icon: Cloud, name: "Salesforce", color: "text-primary" },
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
                Powered by Advanced <span className="text-primary">AI</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade technology built for accuracy, speed, and privacy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-24 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <img 
                  src={engineImage} 
                  alt="ynteract AI Engine" 
                  className="relative w-full max-w-md md:max-w-lg animate-float"
                />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-border rounded-lg p-8 hover-elevate"
                  data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-primary/30 rounded-2xl p-12 bg-primary/5"
            >
              <h2 className="font-heading text-3xl font-bold text-center mb-12">
                Seamless <span className="text-primary">Integrations</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-12 items-center">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-4 group"
                    data-testid={`integration-${integration.name.toLowerCase()}`}
                  >
                    <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-card border border-border group-hover:scale-110 transition-transform hover-elevate">
                      <integration.icon className={`h-12 w-12 ${integration.color}`} />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{integration.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
