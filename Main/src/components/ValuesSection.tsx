import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Award, Scale } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "ДОВЕРИЕ",
    description:
      "На нём мы строим все наши действия, стремясь укреплять его каждый день через честную и качественную работу.",
  },
  {
    icon: Award,
    title: "НАДЕЖНОСТЬ",
    description:
      "Качество, которое завоёвывается превосходной работой и равным вниманием ко всем нашим клиентам.",
  },
  {
    icon: Scale,
    title: "ЭТИКА",
    description:
      "Фундаментальный принцип, основанный на наших ценностях, который определяет действия нашей команды и критерии работы с информацией клиентов.",
  },
];

export default function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-[#F5F5F5] relative -mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#2C3E50] to-[#1e2d3d] text-white p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1167B1] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center group-hover:border-[#1167B1] group-hover:bg-[#1167B1] transition-all duration-300">
                    <Icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-center text-xl mb-4 relative z-10">{value.title}</h3>
                <p className="text-center text-gray-300 leading-relaxed relative z-10">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
