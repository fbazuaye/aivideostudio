import { motion } from "framer-motion";
import { Play, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignupDialog } from "./SignupDialog";
import { CountdownTimer } from "./CountdownTimer";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Your First{" "}
            <span className="text-gradient">AI Video?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of creators who've discovered the power of AI video creation. 
            Reserve your free seat now.
          </p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <CountdownTimer />
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>90-minute live training</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>Limited spots available</span>
            </div>
          </div>

          <SignupDialog>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-semibold text-lg px-10 py-7 rounded-xl glow-primary animate-pulse-glow"
              >
                <Play className="w-5 h-5 mr-2" />
                Reserve My Free Seat
              </Button>
            </motion.div>
          </SignupDialog>

          <p className="text-sm text-muted-foreground mt-4">
            100% free • No credit card required • Instant access
          </p>
        </motion.div>
      </div>
    </section>
  );
};
