import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const painPoints = [
  "Camera-shy and uncomfortable on video",
  "No time to learn complex editing software",
  "Inconsistent content that doesn't grow",
  "Spending hours on videos with no results",
];

const solutions = [
  "Create professional videos without showing your face",
  "Simple AI tools that do the heavy lifting",
  "Proven frameworks for viral content",
  "Batch create weeks of content in hours",
];

export const PainSolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stuck Creating Content the{" "}
            <span className="text-gradient">Hard Way?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most creators struggle with outdated methods. There's a smarter path.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-card rounded-2xl border border-border p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-card rounded-2xl border border-primary/20 p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">The AI Way</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-lg text-muted-foreground inline-flex items-center gap-2">
            Ready to switch to the smarter approach?
            <ArrowRight className="w-5 h-5 text-primary" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};
