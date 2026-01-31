import { motion } from "framer-motion";
import { Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Advanced AI video automation techniques",
  "Monetization and revenue optimization",
  "Niche selection and content strategy",
  "Private community access",
  "1-on-1 coaching calls",
];

export const ProgramTeaserSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-card rounded-3xl border border-primary/20 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Advanced Training
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Go <span className="text-gradient">Further?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              After the free training, take your AI video business to the next level with our 
              comprehensive advanced program. Get personalized guidance and proven strategies 
              to scale your channel.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-6 rounded-xl group"
            >
              Join the Advanced Program
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
