import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend & Backend Development Team Portfolio",
  description:
    "Modern portfolio showcasing full-stack web development expertise by our team.",
  keywords: [
    "Frontend Developer",
    "ASP.NET Developer",
    "Full Stack Web Development",
    "Next.js",
    ".NET",
  ],
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary flex flex-col"
        )}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}