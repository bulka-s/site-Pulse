import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Анна Силина",
    role: "Креативный директор",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "15+ лет в брендинге и стратегическом дизайне",
    linkedin: "#",
    email: "anna@pulsemarketing.ru",
  },
  {
    name: "Карл Менделеев",
    role: "Руководитель Digital-маркетинга",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Специалист по цифровым кампаниям и performance",
    linkedin: "#",
    email: "karl@pulsemarketing.ru",
  },
  {
    name: "Марина Костина",
    role: "Менеджер социальных медиа",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Эксперт по вовлечению и построению сообществ",
    linkedin: "#",
    email: "marina@pulsemarketing.ru",
  },
  {
    name: "Пётр Сантос",
    role: "Директор по продакшну",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Аудиовизуальное производство и режиссура фотографии",
    linkedin: "#",
    email: "petr@pulsemarketing.ru",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-[#F5F5F5] relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-[#2C3E50] mb-4">НАША КОМАНДА</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Профессионалы, увлечённые созданием невероятного опыта для вашего бренда
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1167B1] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex gap-4">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-[#1167B1]" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-[#1167B1]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl text-[#2C3E50] mb-1">{member.name}</h3>
                  <p className="text-[#1167B1] mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Photo Section */}
        <motion.div
          className="mt-16 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745847768382-816bfc32e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjQ5NDE2MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Pulse Marketing Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-12 text-white">
                <h3 className="text-3xl mb-2">Trabalhamos juntos para o seu sucesso</h3>
                <p className="text-lg opacity-90">
                  Uma equipe multidisciplinar dedicada a entregar excelência em cada projeto
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
