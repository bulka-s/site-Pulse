import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection({
  onCTAClick,
}: {
  onCTAClick: () => void;
}) {
  return (
    <section
      id="inicio"
      className="relative h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MjQ5MzczOXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional business"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl md:text-6xl mb-6 text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Фокусируемся на профессионализме и компетентности!
          </motion.h1>

          <motion.p
            className="text-lg mb-8 text-gray-200 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <strong>Pulse Marketing</strong> предлагает клиентам индивидуальный
            подход для каждого сегмента бизнеса, основанный на трех ключевых
            принципах: доверие, надежность и этика.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={onCTAClick}
              className="bg-[#2C3E50] hover:bg-[#1167B1] text-white px-8 py-6"
            >
              УЗНАТЬ БОЛЬШЕ
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
