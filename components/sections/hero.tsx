"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";

const COMPANY_NAME = "StackForge";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 px-4 md:px-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              We craft{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                scalable
              </span>{" "}
              digital solutions
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
          >
            {COMPANY_NAME} is a full-stack development team specializing in
            modern, high-performance web applications using React, Next.js,
            and ASP.NET. From idea to deployment — we build, scale, and ship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-muted hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-lg mx-auto bg-card border border-border rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
            
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm space-y-4 text-muted-foreground">
              <div className="flex items-center gap-2 text-primary">
                <Terminal size={16} />
                <span>{COMPANY_NAME.toLowerCase()} ~ production</span>
              </div>

              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-200">team</span> = [
              </div>

              <div className="pl-4">
                {"{"} member:{" "}
                <span className="text-green-400">"Amr Mousa"</span>, role:{" "}
                <span className="text-green-400">"Frontend Engineer"</span>{" "}
                {"}"},
              </div>

              <div className="pl-4">
                {"{"} member:{" "}
                <span className="text-green-400">"Ahmed Kh Zain"</span>, role:{" "}
                <span className="text-green-400">
                  "ASP.NET Backend Engineer"
                </span>{" "}
                {"}"}
              </div>

              <div>];</div>

              <div className="pt-2">
                <span className="text-blue-400">deploy</span>(
                <span className="text-green-400">"scalable_solution"</span>);
              </div>

              <div className="animate-pulse">
                <span className="text-green-400">➜</span>{" "}
                <span className="text-blue-400">~</span>{" "}
                <span className="inline-block w-2.5 h-4 bg-primary align-middle" />
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full mix-blend-screen" />
        </motion.div>
      </Container>
    </section>
  );
}