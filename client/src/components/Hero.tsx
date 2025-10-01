import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, scale }}
      className="relative h-screen flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
        >
          AI Coaching.
          <br />
          <span className="text-primary">In Real Time.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
        >
          Analyzing human interactions to <span className="text-primary font-semibold">boost sales</span> with real-time behavioral guidance.
        </motion.p>
      </div>
    </motion.section>
  );
}
