import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this training really free?",
    answer: "Yes, the live training is completely free. We believe in providing value upfront so you can experience the power of AI video creation before deciding if our advanced program is right for you.",
  },
  {
    question: "Do I need any technical experience?",
    answer: "Not at all. Our training is designed for complete beginners. We walk you through every step, from writing your first script to publishing your finished video.",
  },
  {
    question: "What equipment do I need?",
    answer: "Just a computer with internet access. All the AI tools we use are web-based, so there's nothing to download or install. You don't need a camera, microphone, or any special software.",
  },
  {
    question: "How long until I can start making money?",
    answer: "Results vary, but many students start seeing their first income within 3-6 months of consistent posting. The key is following the system and staying consistent with your content.",
  },
  {
    question: "What if I can't attend the live training?",
    answer: "A replay will be available for a limited time after the live session. However, we highly recommend attending live to ask questions and get real-time feedback.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
