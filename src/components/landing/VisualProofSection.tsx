import { motion } from "framer-motion";
import { Eye, ThumbsUp } from "lucide-react";
import video1 from "@/assets/Ai_video_1.mp4";
import video2 from "@/assets/Ai_video_2.mp4";
import video3 from "@/assets/Ai_video_3.mp4";

const videoExamples = [
  {
    title: "Faith & Inspirational",
    views: "245K views",
    likes: "12K",
    category: "Kingdom Content",
    src: video1,
  },
  {
    title: "History Mysteries",
    views: "189K views",
    likes: "9.4K",
    category: "Education",
    src: video2,
  },
  {
    title: "Money Tips",
    views: "312K views",
    likes: "18K",
    category: "Finance",
    src: video3,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videoExamples.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[9/16] sm:aspect-video rounded-xl border border-border overflow-hidden mb-4 bg-black">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
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
