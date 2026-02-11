// DESIGN: Cinematic Dark Forge — Services section with interactive cards
// 6 cards with hover glow effect, images, and red accent borders

import { motion } from "framer-motion";
import { Gamepad2, Box, Film, Printer, Smartphone, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES } from "@/lib/constants";

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative bg-[#111111] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#c61331]/30 hover:shadow-[0_0_40px_rgba(198,19,49,0.08)]">
        {/* Image or gradient header */}
        <div className="relative h-48 overflow-hidden">
          {service.image ? (
            <>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
              <IconComponent size={48} className="text-[#c61331]/20" />
            </div>
          )}

          {/* Icon badge */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#c61331] flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(198,19,49,0.3)]">
            <IconComponent size={20} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white font-[Orbitron] tracking-wide">
            {service.title}
          </h3>
          <p className="mt-3 text-white/60 leading-relaxed font-[Rajdhani] text-base">
            {service.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="h-[2px] w-0 bg-gradient-to-r from-[#c61331] to-[#c61331]/0 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
              O Que Fazemos
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[Orbitron]">
              Nossos <span className="text-[#c61331]">Serviços</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg font-[Rajdhani]">
              Combinamos expertise técnica e visão artística para entregar soluções completas em criação digital, desenvolvimento de games e treinamento corporativo.
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
