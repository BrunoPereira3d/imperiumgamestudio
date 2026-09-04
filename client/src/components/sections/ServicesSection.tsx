// DESIGN: Cinematic Dark Forge — Services section with interactive cards
// 6 cards with parallax and fade-in animations on images, hover glow effect, and red accent borders

import { motion } from "framer-motion";
import { Gamepad2, Box, Film, Printer, Smartphone, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { language } = useLanguage();

  const getServiceData = () => {
    if (language === "en") {
      return {
        title: service.titleEn || service.title,
        description: service.descriptionEn || service.description,
      };
    }
    if (language === "es") {
      return {
        title: service.titleEs || service.title,
        description: service.descriptionEs || service.description,
      };
    }
    return {
      title: service.title,
      description: service.description,
    };
  };

  const serviceData = getServiceData();
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageY, setImageY] = useState(0);

  // Map icon names to Lucide components
  const iconMap: { [key: string]: any } = {
    gamepad: Gamepad2,
    cube: Box,
    film: Film,
    printer: Printer,
    smartphone: Smartphone,
    headphones: Headphones,
  };

  const IconComponent = iconMap[service.icon] || Gamepad2;

  // Handle parallax effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const y = (e.clientY - rect.top) / rect.height;
    setImageY((y - 0.5) * 20); // 20px max parallax
  };

  const handleMouseLeave = () => {
    setImageY(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative bg-[#111111] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#c61331]/30 hover:shadow-[0_0_40px_rgba(198,19,49,0.08)]">
        {/* Image or gradient header with parallax */}
        <div className="relative h-48 overflow-hidden" ref={imageRef}>
          {service.image ? (
            <>
              <motion.div
                className="w-full h-full"
                animate={{ y: imageY }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
              />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <IconComponent size={48} className="text-[#c61331]/20" />
              </motion.div>
            </div>
          )}

          {/* Icon badge with fade-in */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 bg-[#c61331] flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(198,19,49,0.3)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
          >
            <IconComponent size={20} className="text-white" />
          </motion.div>
        </div>

        {/* Content with fade-in */}
        <motion.div
          className="p-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        >
          <h3 className="text-xl font-bold text-white font-[Orbitron] tracking-wide">
            {serviceData.title}
          </h3>
          <p className="mt-3 text-white/60 leading-relaxed font-[Rajdhani] text-base">
            {serviceData.description}
          </p>
        </motion.div>

        {/* Bottom accent line */}
        <div className="h-[2px] w-0 bg-gradient-to-r from-[#c61331] to-[#c61331]/0 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const { language } = useLanguage();

  const getContent = () => {
    if (language === "en") {
      return {
        label: "What We Do",
        title: "Our",
        titleHighlight: "Services",
        description: "We combine technical expertise and artistic vision to deliver comprehensive solutions in digital creation, game development and corporate training.",
      };
    }
    if (language === "es") {
      return {
        label: "Qué Hacemos",
        title: "Nuestros",
        titleHighlight: "Servicios",
        description: "Combinamos experiencia técnica y visión artística para entregar soluciones integrales en creación digital, desarrollo de juegos y capacitación corporativa.",
      };
    }
    return {
      label: "O Que Fazemos",
      title: "Nossos",
      titleHighlight: "Serviços",
      description: "Combinamos expertise técnica e visão artística para entregar soluções completas em criação digital, desenvolvimento de games e treinamento corporativo.",
    };
  };

  const content = getContent();

  return (
    <section id="services" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c61331]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="max-w-2xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#c61331] text-sm tracking-[0.3em] uppercase font-semibold font-[Rajdhani]">
              {content.label}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[Orbitron]">
              {content.title} <span className="text-[#c61331]">{content.titleHighlight}</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg font-[Rajdhani]">
              {content.description}
            </p>
            <p className="text-white/50 mt-4 text-sm">
              <a href="#portfolio" className="text-[#C61331] hover:text-[#ff4444] transition-colors">Ver portfolio →</a> | 
              <a href="#careers" className="text-[#C61331] hover:text-[#ff4444] transition-colors ml-4">Junte-se ao time →</a>
            </p>
          </motion.div>
        </div>

        {/* Services Grid - 6 cards in 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
