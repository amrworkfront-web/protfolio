import { Container } from "@/components/ui/container";

const COMPANY_NAME = "StackForge";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-16 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <Container className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
        
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>

          <a
            href="http://www.linkedin.com/in/ahmed-k-zain2156"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Twitter
          </a>
        </div>
      </Container>
    </footer>
  );
}