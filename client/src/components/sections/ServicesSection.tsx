// DESIGN: Cinematic Dark Forge — Services section with interactive cards
// Cards with hover glow effect, diagonal clip-paths, red accent borders

import { motion } from "framer-motion";
import { Gamepad2, Box, Film, Printer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICES_3D_URL, GAME_DEV_URL } from "@/lib/constants";

const services = [
  {
    title: "Desenvolvimento de Games",
    description: "Criamos experiências interativas memoráveis, desde a concepção até o lançamento. Nosso time domina engines como Unreal e Unity para entregar jogos de alta qualidade em diversas plataformas.",
    icon: Gamepad2,
    image: GAME_DEV_URL,
    tags: ["Unreal Engine", "Unity", "PC", "Mobile", "Console"],
  },
  {
    title: "Modelagem 3D",
    description: "Modelagem de personagens, cenários, props e assets com qualidade AAA. Trabalhamos com hard-surface, orgânico e estilizado para atender qualquer demanda criativa.",
    icon: Box,
    image: SERVICES_3D_URL,
    tags: ["Characters", "Environments", "Props", "Hard Surface", "Organic"],
  },
  {
    title: "Animação",
    description: "Damos vida aos seus projetos com animações fluidas e expressivas. De cutscenes cinematográficas a animações de gameplay, cobrimos todo o espectro da animação digital.",
    icon: Film,
    image: null,
    tags: ["Motion Capture", "Keyframe", "Rigging", "VFX", "Cutscenes"],
  },
  {
    title: "Impressão 3D",
    description: "Transformamos modelos digitais em objetos físicos de alta fidelidade. Ideal para protótipos, maquetes, colecionáveis e peças personalizadas com acabamento profissional.",
    icon: Printer,
    image: null,
    tags: ["Protótipos", "Colecionáveis", "Maquetes", "FDM", "Resina"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative bg-[#111111] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#c41e2a]/30 hover:shadow-[0_0_40px_rgba(196,30,42,0.08)]">
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
              <service.icon size={48} className="text-[#c41e2a]/20" />
            </div>
          )}

          {/* Icon badge */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#c41e2a] flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(196,30,42,0.3)]">
            <service.icon size={20} className="text-white" />
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

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs text-white/40 border border-white/10 rounded-sm font-[Rajdhani] tracking-wider uppercase transition-colors duration-300 group-hover:border-[#c41e2a]/20 group-hover:text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-[2px] w-0 bg-gradient-to-r from-[#c41e2a] to-[#c41e2a]/0 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c41e2a]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="max-w-2xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#c41e2a] text-sm tracking-[0.3em] uppercase font-semibold font-[Rajdhani]">
              O Que Fazemos
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[Orbitron]">
              Nossos <span className="text-[#c41e2a]">Serviços</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg font-[Rajdhani]">
              Combinamos expertise técnica e visão artística para entregar soluções completas em criação digital e desenvolvimento de games.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
