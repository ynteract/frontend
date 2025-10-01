import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";

export default function Careers() {
  const values = ["Innovation", "Empathy", "Trust", "Excellence", "Collaboration"];

  const openings = [
    {
      title: "Senior ML Engineer",
      department: "Engineering",
      location: "San Francisco / Remote",
      type: "Full-time",
      description: "Build the next generation of multimodal AI models for communication analysis.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco / Remote",
      type: "Full-time",
      description: "Design intuitive interfaces that make complex AI insights accessible to everyone.",
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "New York / Remote",
      type: "Full-time",
      description: "Help customers understand and implement ynteract's powerful analysis capabilities.",
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
                Join the <span className="text-primary">ynteract</span> Team
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Help us build the future of human communication understanding
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-24 border border-primary/30 rounded-2xl p-12 bg-primary/5 text-center"
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Our Culture</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 font-medium hover-elevate cursor-pointer"
                    data-testid={`badge-value-${value.toLowerCase()}`}
                  >
                    {value}
                  </motion.div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're a team of passionate innovators working to decode the mysteries of human communication. Join us in making AI that truly understands people.
              </p>
            </motion.div>

            <div className="mb-16">
              <h2 className="font-heading text-3xl font-bold mb-8 text-center">Open Positions</h2>
              <div className="space-y-6">
                {openings.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    data-testid={`card-job-${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Card className="hover-elevate">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex-1">
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
                              {job.department}
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-2">{job.title}</h3>
                            <p className="text-muted-foreground mb-4">{job.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4" />
                                {job.department}
                              </div>
                            </div>
                          </div>
                          <Button data-testid={`button-apply-${job.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border border-border rounded-2xl p-12 bg-card/30"
            >
              <h2 className="font-heading text-2xl font-bold mb-4">Don't see the right role?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented people who share our passion. Send us your resume and let's talk about how you can contribute.
              </p>
              <Button variant="outline" data-testid="button-general-inquiry">
                Send General Inquiry
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
