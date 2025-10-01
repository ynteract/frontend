import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Video, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const blogPosts = [
    {
      title: "The Science of Trust: How Multimodal AI Decodes Human Connection",
      category: "Research",
      date: "March 15, 2024",
      readTime: "8 min read",
    },
    {
      title: "5 Ways Sales Teams Use ynteract to Close More Deals",
      category: "Sales",
      date: "March 10, 2024",
      readTime: "6 min read",
    },
    {
      title: "Healthcare Communication: Beyond Words",
      category: "Healthcare",
      date: "March 5, 2024",
      readTime: "10 min read",
    },
  ];

  const whitepapers = [
    {
      title: "The Future of Communication Analysis",
      description: "A comprehensive guide to multimodal AI and its impact on business outcomes",
      pages: "24 pages",
    },
    {
      title: "Trust Signals in Virtual Meetings",
      description: "Research findings on detecting engagement in remote communication",
      pages: "16 pages",
    },
  ];

  const videos = [
    {
      title: "ynteract Platform Overview",
      duration: "5:30",
      description: "Complete walkthrough of our multimodal analysis platform",
    },
    {
      title: "Real-Time Analysis in Action",
      duration: "3:45",
      description: "See how ynteract processes communication signals live",
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
                Learning <span className="text-primary">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Insights, research, and guides to help you master communication analysis
              </p>
            </motion.div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-3xl font-bold">Latest Blog Posts</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    data-testid={`card-blog-${index}`}
                  >
                    <Card className="h-full hover-elevate group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
                          {post.category}
                        </div>
                        <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-3xl font-bold">Whitepapers</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {whitepapers.map((paper, index) => (
                  <motion.div
                    key={paper.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    data-testid={`card-whitepaper-${index}`}
                  >
                    <Card className="hover-elevate">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-heading text-2xl font-bold mb-2">{paper.title}</h3>
                            <p className="text-muted-foreground mb-4">{paper.description}</p>
                            <p className="text-sm text-muted-foreground">{paper.pages}</p>
                          </div>
                          <Download className="h-6 w-6 text-primary flex-shrink-0 ml-4" />
                        </div>
                        <Button variant="outline" className="w-full" data-testid={`button-download-${index}`}>
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Video className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-3xl font-bold">Video Resources</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    data-testid={`card-video-${index}`}
                  >
                    <Card className="hover-elevate group cursor-pointer">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                          <div className="relative z-10 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Video className="h-8 w-8 text-primary" />
                          </div>
                          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-muted-foreground">{video.description}</p>
                        </div>
                      </CardContent>
                    </Card>
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
