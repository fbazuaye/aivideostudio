import { motion } from "framer-motion";
import { Play, Sparkles, FileText, Video, Captions } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 pb-20 px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Free Live Training</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Create AI Videos That Get{" "}
            <span className="text-gradient">Views & Income</span>
            <br />
            <span className="text-muted-foreground">— No Camera Needed</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our free live training and create your first AI video in 90 minutes. 
            Learn the exact process top creators use to build faceless channels.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pt-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl glow-primary hover:scale-105 transition-transform"
            >
              <Play className="w-5 h-5 mr-2" />
              Reserve My Free Seat
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              No credit card required • Limited spots available
            </p>
          </motion.div>
        </motion.div>

        {/* Visual Process Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-card rounded-2xl border border-border p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Step 1 */}
              <motion.div 
                className="flex items-center gap-3 bg-secondary/50 rounded-xl px-5 py-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                <FileText className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Step 1</p>
                  <p className="font-semibold">Write Script</p>
                </div>
              </motion.div>

              <motion.div 
                className="hidden md:block text-primary text-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="flex items-center gap-3 bg-secondary/50 rounded-xl px-5 py-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Step 2</p>
                  <p className="font-semibold">AI Generates</p>
                </div>
              </motion.div>

              <motion.div 
                className="hidden md:block text-primary text-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                →
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="flex items-center gap-3 bg-secondary/50 rounded-xl px-5 py-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <Video className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Step 3</p>
                  <p className="font-semibold">Video Ready</p>
                </div>
              </motion.div>

              <motion.div 
                className="hidden md:block text-primary text-2xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              >
                →
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="flex items-center gap-3 bg-primary/20 border border-primary/30 rounded-xl px-5 py-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
              >
                <Captions className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Step 4</p>
                  <p className="font-semibold">Add Captions</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
