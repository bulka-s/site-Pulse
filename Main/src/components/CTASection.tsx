import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";

export default function CTASection({ onCTAClick }: { onCTAClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1167B1] to-[#0d5394]">
      {/* Animated pulse lines background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-white"
            style={{
              top: `${15 + i * 15}%`,
            }}
            animate={{
              scaleX: [0.6, 1.3, 0.6],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl mb-4">Pronto para impulsionar o crescimento da sua marca?</h2>
          <p className="text-xl mb-8 opacity-90">Vamos discutir seu projeto</p>
          <Button
            size="lg"
            onClick={onCTAClick}
            className="bg-white text-[#1167B1] hover:bg-gray-100 px-8 py-6"
          >
            ENTRE EM CONTATO
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
