import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";

export const VideoEmbed = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Placeholder video thumbnail - in production, replace with actual thumbnail
  const thumbnailUrl = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop";
  
  // Demo video - you can replace with actual video URL or YouTube embed
  const videoId = "dQw4w9WgXcQ"; // Replace with actual demo video ID

  if (isPlaying) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative aspect-video w-full rounded-xl overflow-hidden bg-black"
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&modestbranding=1`}
          title="AI Video Creation Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-4 right-4 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors z-10"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative aspect-video w-full rounded-xl overflow-hidden cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt="AI Video Creation Demo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
      
      {/* Play button */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 -m-4 rounded-full bg-primary/30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 -m-2 rounded-full bg-primary/40"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          
          {/* Play button */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
          </div>
        </div>
      </motion.div>

      {/* Watch Demo label */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
        <span className="px-4 py-2 bg-black/60 rounded-full text-white text-sm font-medium">
          Watch 2-min Demo
        </span>
      </div>
    </motion.div>
  );
};
