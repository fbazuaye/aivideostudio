import { motion } from "framer-motion";
import { FileText, Sparkles, Upload } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Write Your Script",
    description: "Use our AI-powered templates to craft engaging scripts that hook viewers in seconds.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Generate Your Video",
    description: "Our AI transforms your script into a polished video with visuals, voiceover, and music.",
  },
  {
    number: "03",
    icon: Upload,
    title: "Publish & Profit",
    description: "Upload to YouTube, TikTok, or Instagram and start building your audience and income.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create your first AI-powered video.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Step number */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-card border border-border flex items-center justify-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="relative z-10">
                    <span className="text-4xl font-bold text-primary/30 absolute -top-2 -left-2">
                      {step.number}
                    </span>
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
