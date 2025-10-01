import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import comparisonImage from '@assets/generated_images/Competitor_comparison_split_screen_d1523d20.png';
import { X, Check } from "lucide-react";

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const competitors = [
    { label: "Transcription or sentiment scoring only", hasIt: false },
    { label: "Post-meeting analysis, no real-time guidance", hasIt: false },
    { label: "No behavioral coaching loop", hasIt: false },
    { label: "Misses physical interaction signals", hasIt: false },
  ];

  const ynteract = [
    { label: "Real-time alerts during conversations", hasIt: true },
    { label: "Fusion of voice, facial, postural, and verbal signals", hasIt: true },
    { label: "Specific, actionable behavioral guidance", hasIt: true },
    { label: "Shows how actions influenced reactions", hasIt: true },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What Makes <span className="text-primary">ynteract</span> New
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fusion of modalities into one seamless coaching loop—most platforms stop at transcription
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="border border-border rounded-lg p-8 bg-card/30"
            data-testid="section-competitors"
          >
            <h3 className="font-heading text-2xl font-bold mb-6 text-muted-foreground">Competitors</h3>
            <ul className="space-y-4">
              {competitors.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="border border-primary/30 rounded-lg p-8 bg-primary/5 relative overflow-hidden"
            data-testid="section-ynteract"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <h3 className="font-heading text-2xl font-bold mb-6 text-primary">ynteract</h3>
            <ul className="space-y-4">
              {ynteract.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-lg overflow-hidden border border-border"
        >
          <img 
            src={comparisonImage} 
            alt="Comparison visualization" 
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
