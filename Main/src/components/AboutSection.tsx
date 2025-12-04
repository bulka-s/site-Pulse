import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl mb-8 text-[#2C3E50]">
            О компании Pulse Marketing
          </h2>

          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            <strong>Pulse Marketing</strong> — агентство, специализирующееся на
            создании комплексных маркетинговых решений для бизнеса любого
            масштаба.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Мы передаём «пульс» рынка и создаём живую связь между брендами и их
            аудиторией. Наше агентство объединяет дизайнеров, маркетологов и
            стратегов, создавая импульсы роста для вашего бизнеса.
          </p>

          <motion.div
            className="inline-block bg-[#1167B1] text-white px-8 py-4 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl">Мы — сердцебиение вашего бренда</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
