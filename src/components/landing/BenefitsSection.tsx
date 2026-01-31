import { motion } from "framer-motion";
import { Zap, Clock, DollarSign, Users, Wand2, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "No Camera Required",
    description: "Build a successful channel without ever showing your face on camera.",
  },
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "Automate the tedious parts and focus on what actually grows your channel.",
  },
  {
    icon: DollarSign,
    title: "Monetization Ready",
    description: "Create videos that meet YouTube's requirements for the Partner Program.",
  },
  {
    icon: Users,
    title: "Grow Your Audience",
    description: "Learn the content strategies that consistently attract new subscribers.",
  },
  {
    icon: Wand2,
    title: "AI-Powered Quality",
    description: "Professional-looking videos powered by the latest AI technology.",
  },
  {
    icon: TrendingUp,
    title: "Proven Framework",
    description: "Follow a tested system that has helped hundreds of creators succeed.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll <span className="text-gradient">Unlock</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start creating AI videos that get views and generate income.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
