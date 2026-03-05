"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with ASP.NET Core backend, secure payment integration, admin dashboard, and real-time analytics.",
    tags: ["Next.js", "ASP.NET Core", "SQL Server", "TypeScript"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "SaaS Management System",
    description:
      "Scalable SaaS application with authentication, subscription billing, role-based access control, and API integrations.",
    tags: ["React", ".NET", "Stripe", "REST APIs"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Team Collaboration Platform",
    description:
      "Real-time collaboration tool with Kanban boards, WebSocket updates, and structured backend architecture.",
    tags: ["Next.js", "Node.js", "Socket.io", "PostgreSQL"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "AI-Powered Content Platform",
    description:
      "Web platform integrating AI services with secure backend processing and optimized frontend performance.",
    tags: ["Next.js", "OpenAI API", "ASP.NET", "Tailwind"],
    links: { demo: "#", code: "#" },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of full-stack projects showcasing our ability to design,
            build, and deploy scalable digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/60 transition-all duration-300 hover:shadow-xl group">
                
                {/* Preview Placeholder */}
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 font-mono text-sm">
                    project-preview.jpg
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      asChild
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-full gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      asChild
                    >
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-full gap-2"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}