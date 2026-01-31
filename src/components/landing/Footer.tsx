import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">AI Video Pro</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 AI Video Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
