import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton = ({
  phoneNumber = "1234567890",
  message = "Hi! I'm interested in the AI Video Pro training.",
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D366" }}
        animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
    </motion.a>
  );
};
