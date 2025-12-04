import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Zap, Trophy, Users, TrendingUp, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const advantages = [
  {
    icon: Target,
    title: "Стратегический подход",
    description:
      "Глубоко анализируем ваш бизнес и рынок для создания персонализированных стратегий",
    stat: "98%",
    statLabel: "Показатель успеха",
  },
  {
    icon: Zap,
    title: "Быстрое выполнение",
    description:
      "Гибкая команда и оптимизированные процессы для своевременных поставок без потери качества",
    stat: "24ч",
    statLabel: "Средний ответ",
  },
  {
    icon: Trophy,
    title: "Доказанные результаты",
    description:
      "Разнообразное портфолио с успешными кейсами в различных сегментах",
    stat: "200+",
    statLabel: "Реализованных проектов",
  },
  {
    icon: Users,
    title: "Специализированная команда",
    description:
      "Опытные профессионалы в дизайне, маркетинге и аудиовизуальном производстве",
    stat: "15+",
    statLabel: "Лет опыта",
  },
  {
    icon: TrendingUp,
    title: "Максимальная рентабельность",
    description: "Фокус на измеримых результатах и возврате инвестиций",
    stat: "3x",
    statLabel: "Средняя рентабельность",
  },
  {
    icon: Award,
    title: "Премиум обслуживание",
    description:
      "Выделенная поддержка и тщательное сопровождение на всех этапах",
    stat: "5.0",
    statLabel: "Средняя оценка",
  },
];

export default function AdvantagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1167B1] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1167B1] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-[#2C3E50] mb-4">
            ПОЧЕМУ ВЫБИРАЮТ PULSE?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы сочетаем креативность, стратегию и технологии для трансформации
            вашего бренда
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1167B1] to-[#0d5394] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-[#2C3E50] mb-2">
                        {advantage.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-3xl text-[#1167B1] mb-1">
                      {advantage.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {advantage.statLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#2C3E50] to-[#1167B1] rounded-2xl p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative z-10 text-center">
            <h3 className="text-3xl mb-4">
              Готовы вывести ваш бренд на новый уровень?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Присоединяйтесь к компаниям, которые уже трансформировали свои
              результаты с Pulse
            </p>
          </div>

          {/* Animated circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </motion.div>
      </div>
    </section>
  );
}
