// DESIGN: Cinematic Dark Forge — Outsourcing section targeting external studios
// Split layout with image and feature grid, professional B2B tone

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { OUTSOURCING_URL, OUTSOURCING_FEATURES } from "@/lib/constants";
import { Users, Workflow, TrendingUp, ShieldCheck, Lock, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureIcons = [Users, Workflow, TrendingUp, ShieldCheck, Lock, MessageSquare];

export default function OutsourcingSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });
  const { language } = useLanguage();

  const getContent = () => {
    if (language === "en") {
      return {
        label: "For Studios",
        title: "Quality",
        titleHighlight: "Outsourcing",
        description: "Need to scale your production without compromising quality? Our team is ready to integrate into your pipeline and deliver assets, animations, and development support with the highest market standards.",
        buttonText: "Request Proposal",
        responseTime: "Response within 24 hours",
      };
    }
    if (language === "es") {
      return {
        label: "Para Estudios",
        title: "Outsourcing",
        titleHighlight: "de Calidad",
        description: "¿Necesitas escalar tu producción sin comprometer la calidad? Nuestro equipo está listo para integrarse en tu pipeline y entregar assets, animaciones y soporte de desarrollo con los más altos estándares del mercado.",
        buttonText: "Solicitar Propuesta",
        responseTime: "Respuesta en hasta 24 horas",
      };
    }
    return {
      label: "Para Estúdios",
      title: "Outsourcing",
      titleHighlight: "de Qualidade",
      description: "Precisa escalar sua produção sem comprometer a qualidade? Nossa equipe está pronta para integrar-se ao seu pipeline e entregar assets, animações e suporte de desenvolvimento com os mais altos padrões do mercado.",
      buttonText: "Solicitar Proposta",
      responseTime: "Resposta em até 24 horas",
    };
  };

  const content = getContent();

  return (
    <section id="outsourcing" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={OUTSOURCING_URL}
          alt="Outsourcing de qualidade para estúdios de games e empresas"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c41e2a]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={headerVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#c41e2a] text-sm tracking-[0.3em] uppercase font-semibold font-[Rajdhani]">
              {content.label}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[Orbitron]">
              {content.title} <span className="text-[#c41e2a]">{content.titleHighlight}</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg font-[Rajdhani] leading-relaxed">
              {content.description}
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTSOURCING_FEATURES.map((feature, i) => {
            const Icon = featureIcons[i];
            const featureTitle = language === "en" ? feature.titleEn : language === "es" ? feature.titleEs : feature.title;
            const featureDesc = language === "en" ? feature.descriptionEn : language === "es" ? feature.descriptionEs : feature.description;
            return (
              <motion.div
                key={feature.title}
                initial={{ y: 40, opacity: 0 }}
                animate={gridVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-[#111111]/80 border border-white/5 rounded-sm p-6 transition-all duration-500 hover:border-[#c41e2a]/20 hover:bg-[#141414]"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#c41e2a]/10 rounded-sm mb-4 transition-colors duration-300 group-hover:bg-[#c41e2a]/20">
                  <Icon size={22} className="text-[#c41e2a]" />
                </div>

                <h3 className="text-lg font-bold text-white font-[Orbitron] tracking-wide">
                  {featureTitle}
                </h3>
                <p className="mt-2 text-white/50 text-sm leading-relaxed font-[Rajdhani]">
                  {featureDesc}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[1px] h-4 bg-[#c41e2a]/0 transition-all duration-300 group-hover:bg-[#c41e2a]/40" />
                  <div className="absolute top-0 right-0 w-4 h-[1px] bg-[#c41e2a]/0 transition-all duration-300 group-hover:bg-[#c41e2a]/40" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={gridVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 bg-[#c41e2a] text-white font-semibold tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-[#a01824] hover:shadow-[0_0_40px_rgba(196,30,42,0.4)] font-[Rajdhani]"
            >
              {content.buttonText}
            </button>
            <span className="text-white/30 text-sm font-[Rajdhani]">
              {content.responseTime}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
