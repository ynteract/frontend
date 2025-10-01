import { Briefcase, Heart, Phone, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    icon: Briefcase,
    title: "Automotive Sales",
    description: "Our pilot focus. In high-stakes dealership negotiations, catch subtle cues—a customer shifting uncomfortably during warranty talk or making strong eye contact at monthly payment mentions.",
    stat: "Current Focus",
    gradient: "from-primary/10 to-transparent",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Future application: Physicians adjust posture and tone to strengthen empathy, reducing patient dissatisfaction through real-time behavioral guidance.",
    stat: "Coming Soon",
    gradient: "from-primary/15 to-transparent",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Future application: Fine-tune client presentations by showing exactly when teams lost executive attention, enabling mid-pitch adjustments.",
    stat: "Coming Soon",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Phone,
    title: "Education",
    description: "Future application: Instructors adapt teaching style in real time when student engagement drops, creating more responsive learning environments.",
    stat: "Coming Soon",
    gradient: "from-primary/25 to-transparent",
  },
];

export default function IndustryCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Starting with <span className="text-primary">Automotive</span>, Expanding Beyond
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building in dealerships first, then scaling to any relationship-driven field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              data-testid={`card-industry-${industry.title.toLowerCase()}`}
            >
              <Card className="group hover-elevate overflow-hidden h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Results</div>
                      <div className="text-2xl font-heading font-bold text-primary" data-testid={`text-stat-${industry.title.toLowerCase()}`}>
                        {industry.stat}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
