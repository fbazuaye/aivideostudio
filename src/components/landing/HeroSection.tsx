import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CountdownTimer } from "./CountdownTimer";
import { VideoEmbed } from "./VideoEmbed";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 pb-20 px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Live Whatsapp Training</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Create AI Videos That Get{" "}
              <span className="text-gradient">Views & Income</span>
              <br />
              <span className="text-muted-foreground">— No Camera Needed</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Join our introductory live whatsapp training and create your first AI video in 90 minutes. 
              Learn the exact process top creators use to build faceless channels.
            </p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <CountdownTimer />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="pt-2"
            >
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl glow-primary hover:scale-105 transition-transform animate-pulse-glow"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Click to Register
                </Button>
              </Link>
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/5 backdrop-blur-sm">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">💳 Note:</span>
                <span className="text-sm font-semibold text-foreground">Registration fee is <span className="text-primary">₦2,000.00</span> per Person</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <VideoEmbed />
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 shadow-lg"
            >
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">2,847 creators joined</span>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
