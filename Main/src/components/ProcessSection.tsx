import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Search, Lightbulb, Palette, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Исследование",
    description: "Изучаем ваш бизнес, целевую аудиторию и цели через глубокий анализ",
    color: "bg-blue-500",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Стратегия",
    description: "Разрабатываем персонализированный план на основе инсайтов и лучших практик",
    color: "bg-purple-500",
  },
  {
    number: "03",
    icon: Palette,
    title: "Создание",
    description: "Наша креативная команда превращает стратегию в эффектные визуальные решения",
    color: "bg-pink-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Запуск",
    description: "Внедряем и активируем ваши кампании с тщательным сопровождением",
    color: "bg-orange-500",
  },
  {
    number: "05",
    icon: BarChart,
    title: "Оптимизация",
    description: "Анализируем результаты и непрерывно совершенствуем для максимальной эффективности",
    color: "bg-green-500",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1167B1" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-[#2C3E50] mb-4">НАШ ПРОЦЕСС РАБОТЫ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Проверенная методология, гарантирующая исключительные результаты
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:border-[#1167B1]">
                      <h3 className="text-2xl text-[#2C3E50] mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center shadow-xl relative z-10`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className={`absolute inset-0 ${step.color} rounded-full blur-xl opacity-50`}></div>
                    
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#2C3E50] text-white rounded-full flex items-center justify-center text-sm z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Placeholder for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-24 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Готовы начать своё путешествие к трансформации?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#1167B1] to-[#0d5394] text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            ЗАПЛАНИРОВАТЬ ВСТРЕЧУ
          </button>
        </motion.div>
      </div>
    </section>
  );
}
