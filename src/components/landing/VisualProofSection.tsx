import { motion } from "framer-motion";
import { Play, Eye, ThumbsUp } from "lucide-react";

const videoExamples = [
  {
    title: "Tech Explained",
    views: "245K views",
    likes: "12K",
    category: "Technology",
  },
  {
    title: "History Mysteries",
    views: "189K views",
    likes: "9.4K",
    category: "Education",
  },
  {
    title: "Money Tips",
    views: "312K views",
    likes: "18K",
    category: "Finance",
  },
];

export const VisualProofSection = () => {
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
            What You'll <span className="text-gradient">Create</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real examples of AI-generated videos created by our students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videoExamples.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-xl bg-gradient-card border border-border overflow-hidden mb-4">
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer glow-soft"
                  >
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </motion.div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {video.category}
                  </span>
                </div>
              </div>
              
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {video.views}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {video.likes}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
