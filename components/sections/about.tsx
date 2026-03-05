"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { TeamMemberCard } from "@/components/ui/team-member-card";

const teamMembers = [
  {
    name: "Amr Mousa",
    title: "Frontend Developer",
    role: "Frontend Engineer",
    description: "A passionate Frontend Engineer with a keen eye for design and a strong focus on performance and detailed user experience. Specializes in building modern web interfaces using React and Next.js.",
    email: "amr.mousa@example.com",
    phone: "01000417601"
  },
  {
    name: "Ahmed Kh Zain",
    title: "ASP.NET Developer",
    role: "Backend Software Engineer",
    description: "An experienced Backend Software Engineer dealing with scalable architectures and robust APIs. Specializes in building secure, high-performance server-side solutions using ASP.NET Core.",
    email: "ahmed.kh.zain2156@gmail.com",
    phone: "01018300132"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/5">
      <Container>
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Meet the <span className="text-primary">Team</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We complement each other&apos;s skills to deliver robust, pixel-perfect, and high-performance applications from architecture to the frontend interface.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} delay={idx * 0.2} />
          ))}
        </div>
      </Container>
    </section>
  );
}
