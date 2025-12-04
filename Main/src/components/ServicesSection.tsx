import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Palette, Share2, Image as ImageIcon, Video, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Дизайн и брендинг",
    description: "Создание уникального визуального стиля и корпоративной идентичности для вашего бренда",
    link: "подробнее ⓘ",
  },
  {
    icon: Share2,
    title: "SMM и Digital-кампании",
    description: "Продвижение в социальных сетях и комплексные стратегии цифрового маркетинга",
    link: "подробнее ⓘ",
  },
  {
    icon: ImageIcon,
    title: "Наружная реклама",
    description: "Офлайн активации и размещение наружной рекламы для максимального охвата",
    link: "подробнее ⓘ",
  },
  {
    icon: Video,
    title: "Фото и видеопродакшн",
    description: "Профессиональная фотосъёмка и производство видеоконтента для вашего бренда",
    link: "подробнее ⓘ",
  },
  {
    icon: Users,
    title: "Управление персоналом",
    description: "Человеческий капитал имеет первостепенное значение в компаниях, где стремятся к развитию сотрудников",
    link: "подробнее ⓘ",
  },
  {
    icon: TrendingUp,
    title: "Налоговое планирование",
    description: "Налоговое планирование представляет собой законный способ снижения налоговой нагрузки компании",
    link: "подробнее ⓘ",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-[#2C3E50] mb-2">УСЛУГИ</h2>
          <p className="text-gray-600">Ознакомьтесь с нашим портфолио услуг</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-200 rounded-lg group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1167B1] transition-colors">
                      <Icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-[#2C3E50] text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <p className="text-sm text-[#1167B1] hover:underline">{service.link}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
