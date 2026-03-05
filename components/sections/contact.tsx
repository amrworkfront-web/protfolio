"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build something <span className="text-primary">together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            We are currently available for freelance work and full-time opportunities.
            If you have a project that needs technical expertise, let&apos;s talk.
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-6">
            {/* Frontend Member */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-secondary/20 border border-border">
              <h3 className="text-lg font-semibold text-primary">Frontend Development</h3>
              <p className="text-muted-foreground font-medium">Amr Mousa</p>
              <Button size="lg" className="w-full text-white rounded-full" asChild>
                <a href="mailto:amrworkfront@gmail.com" className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Amr
                </a>
              </Button>
              <a href="tel:01000417601" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-2">
                <Phone className="h-4 w-4" />
                01000417601
              </a>
            </div>

            {/* Backend Member */}
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-secondary/20 border border-border">
              <h3 className="text-lg font-semibold text-primary">Backend Development</h3>
              <p className="text-muted-foreground font-medium">Ahmed Kh Zain</p>
              <Button size="lg" className="w-full text-white rounded-full" asChild>
                <a href="mailto:ahmed.kh.zain2156@gmail.com" className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Ahmed
                </a>
              </Button>
              <a href="tel:01018300132" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-2">
                <Phone className="h-4 w-4" />
                01018300132
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="#"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}