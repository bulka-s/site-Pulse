import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Roberto Lima",
    company: "TechStart Innovations",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "A Pulse Marketing transformou completamente nossa presença digital. O trabalho de branding foi excepcional e os resultados superaram nossas expectativas. Recomendo fortemente!",
  },
  {
    name: "Juliana Ferreira",
    company: "Café Aroma",
    role: "Proprietária",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    text: "Trabalhar com a equipe da Pulse foi incrível. Eles entenderam perfeitamente nossa visão e criaram uma identidade visual que representa exatamente o que somos. As vendas aumentaram 40%!",
  },
  {
    name: "André Oliveira",
    company: "FitGym Academia",
    role: "Diretor de Marketing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "A campanha de social media desenvolvida pela Pulse dobrou nosso engajamento em apenas 3 meses. Profissionais extremamente dedicados e criativos!",
  },
  {
    name: "Patricia Costa",
    company: "Glamour Boutique",
    role: "Fundadora",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    text: "O trabalho de fotografia e produção de conteúdo é simplesmente impecável. A Pulse elevou o padrão visual da nossa marca para outro nível. Estamos muito satisfeitos!",
  },
  {
    name: "Marcelo Santos",
    company: "Construtora Horizonte",
    role: "Diretor Comercial",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Parceria excepcional! A Pulse nos ajudou a modernizar nossa comunicação e alcançar um público mais amplo. O ROI foi surpreendente.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <Quote className="w-full h-full text-[#1167B1]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-[#2C3E50] mb-4">O QUE DIZEM NOSSOS CLIENTES</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#2C3E50] to-[#1167B1] rounded-2xl p-12 md:p-16 text-white shadow-2xl relative">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-16 h-16 text-white opacity-20" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={currentIndex}
                className="text-2xl md:text-3xl text-center mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                "{currentTestimonial.text}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                key={`author-${currentIndex}`}
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="text-xl mb-1">{currentTestimonial.name}</div>
                  <div className="text-sm opacity-90">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-4xl text-[#1167B1] mb-2">200+</div>
            <div className="text-gray-600">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#1167B1] mb-2">5.0</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#1167B1] mb-2">98%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#1167B1] mb-2">15+</div>
            <div className="text-gray-600">Anos de Mercado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
