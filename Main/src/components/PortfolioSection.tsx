import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

const portfolioItems = [
  {
    title: "Ребрендинг IT-компании",
    category: "Брендинг",
    description: "Новая полная визуальная идентичность",
    result: "+150% узнаваемость бренда",
    image: "https://images.unsplash.com/photo-1762325393954-5300a6e35f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjI0MTQ4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Digital-кампания ресторана",
    category: "Социальные сети",
    description: "Полная SMM стратегия",
    result: "+200% вовлечённость",
    image: "https://images.unsplash.com/photo-1571079973850-61d8ce8476fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzYyNDkzMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Аудиовизуальное производство",
    category: "Видео",
    description: "Корпоративное имиджевое видео",
    result: "2M+ просмотров",
    image: "https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NjI0MTg0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Визуальная идентичность кафе",
    category: "Дизайн",
    description: "Логотип, упаковка и материалы",
    result: "+85% продажи",
    image: "https://images.unsplash.com/photo-1753037366208-be3fba467e48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwYnJhbmRpbmclMjBsb2dvfGVufDF8fHx8MTc2MjQ1NTgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Digital-маркетинг Fashion",
    category: "E-commerce",
    description: "Полная омниканальная стратегия",
    result: "+300% конверсии",
    image: "https://images.unsplash.com/photo-1614762586156-8b9a22069f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzYyNDEzNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Фотосъёмка продуктов",
    category: "Фотография",
    description: "Профессиональная съёмка продукции",
    result: "Премиум портфолио",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNDE4ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-[#2C3E50] mb-4">НАШЕ ПОРТФОЛИО</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Проекты, которые трансформировали бренды и дали реальные результаты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Default Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge className="mb-3 bg-[#1167B1] hover:bg-[#1167B1] text-white border-0">
                    {item.category}
                  </Badge>
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay with Result */}
              <div className="absolute inset-0 bg-[#1167B1] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="mb-4 text-gray-100">{item.description}</p>
                  <div className="inline-block bg-white text-[#1167B1] px-6 py-3 rounded-lg">
                    <div className="text-sm mb-1">Результат</div>
                    <div className="text-2xl">{item.result}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="px-8 py-4 bg-[#2C3E50] text-white hover:bg-[#1167B1] transition-colors rounded-lg">
            ПОСМОТРЕТЬ ВСЕ ПРОЕКТЫ
          </button>
        </motion.div>
      </div>
    </section>
  );
}
