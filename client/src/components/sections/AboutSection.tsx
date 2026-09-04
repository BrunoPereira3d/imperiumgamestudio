// DESIGN: Cinematic Dark Forge — About section with animated stats counter
// Asymmetric layout, diagonal red accent lines, reveal on scroll

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/lib/constants";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function StatItem({ stat, isVisible, index, language }: { stat: typeof STATS[0]; isVisible: boolean; index: number; language: string }) {
  const count = useCountUp(stat.value, isVisible);
  const statLabel = language === "en" ? stat.labelEn : language === "es" ? stat.labelEs : stat.label;

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold text-[#c41e2a] font-[Orbitron]">
        {count}{stat.suffix}
      </div>
      <div className="mt-2 text-sm text-white/50 tracking-wider uppercase font-[Rajdhani]">
        {statLabel}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { language } = useLanguage();

  const getContent = () => {
    if (language === "en") {
      return {
        label: "About Us",
        title1: "From Digital World",
        title2: "to Reality",
        p1: "Imperium Game Studio was born from a passion for creating extraordinary worlds and visual experiences. We started as a studio specialized in 3D modeling, animation, and 3D printing, serving clients across various segments with high-quality creative solutions.",
        p2: "Today, we have expanded our work into game development, combining our technical and artistic expertise to create interactive experiences that captivate and surprise. Our multidisciplinary team combines creative talent with technical mastery to deliver results that exceed expectations.",
        p3: "Beyond our own projects, we offer outsourcing services to studios around the world, providing assets, animations, and development support with the quality the market demands.",
        foundation: "Foundation",
        foundationDesc: "Beginning of operations with focus on 3D modeling and visual services for companies and agencies.",
        expansion: "Expansion",
        expansionDesc: "Team expansion and inclusion of animation and 3D printing services in the portfolio.",
        outsourcing: "Outsourcing",
        outsourcingDesc: "Beginning of partnerships with international studios, providing assets and production support.",
        gameStudio: "Game Studio",
        gameStudioDesc: "New era: development of our own games and consolidation as a complete studio.",
      };
    }
    if (language === "es") {
      return {
        label: "Quiénes Somos",
        title1: "Del Mundo Digital",
        title2: "a la Realidad",
        p1: "Imperium Game Studio nació de la pasión por crear mundos y experiencias visuales extraordinarias. Comenzamos como un estudio especializado en modelado 3D, animación e impresión 3D, atendiendo clientes de diversos segmentos con soluciones creativas de alta calidad.",
        p2: "Hoy hemos expandido nuestro trabajo al desarrollo de juegos, combinando nuestra experiencia técnica y artística para crear experiencias interactivas que cautivan y sorprenden. Nuestro equipo multidisciplinario combina talento creativo con dominio técnico para entregar resultados que superan expectativas.",
        p3: "Más allá de nuestros propios proyectos, ofrecemos servicios de outsourcing a estudios de todo el mundo, proporcionando assets, animaciones y soporte de desarrollo con la calidad que exige el mercado.",
        foundation: "Fundación",
        foundationDesc: "Inicio de operaciones con enfoque en modelado 3D y servicios visuales para empresas y agencias.",
        expansion: "Expansión",
        expansionDesc: "Expansión del equipo e inclusión de servicios de animación e impresión 3D en el portafolio.",
        outsourcing: "Outsourcing",
        outsourcingDesc: "Inicio de asociaciones con estudios internacionales, proporcionando assets y soporte de producción.",
        gameStudio: "Game Studio",
        gameStudioDesc: "Nueva era: desarrollo de juegos propios y consolidación como estudio completo.",
      };
    }
    return {
      label: "Sobre Nós",
      title1: "Do Mundo Digital",
      title2: "ao Real",
      p1: "A Imperium Game Studio nasceu da paixão por criar mundos e experiências visuais extraordinárias. Começamos como um estúdio especializado em modelagem 3D, animação e impressão 3D, atendendo clientes de diversos segmentos com soluções criativas de alta qualidade.",
      p2: "Hoje, expandimos nossa atuação para o desenvolvimento de games, unindo nossa expertise técnica e artística para criar experiências interativas que cativam e surpreendem. Nossa equipe multidisciplinar combina talento criativo com domínio técnico para entregar resultados que superam expectativas.",
      p3: "Além dos nossos projetos próprios, oferecemos serviços de outsourcing para estúdios ao redor do mundo, fornecendo assets, animações e suporte de desenvolvimento com a qualidade que o mercado exige.",
      foundation: "Fundação",
      foundationDesc: "Início das operações com foco em modelagem 3D e serviços visuais para empresas e agências.",
      expansion: "Expansão",
      expansionDesc: "Ampliação da equipe e inclusão de serviços de animação e impressão 3D ao portfólio.",
      outsourcing: "Outsourcing",
      outsourcingDesc: "Início das parcerias com estúdios internacionais, fornecendo assets e suporte de produção.",
      gameStudio: "Game Studio",
      gameStudioDesc: "Nova era: desenvolvimento de games próprios e consolidação como estúdio completo.",
    };
  };

  const content = getContent();

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c41e2a]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-[#c41e2a]" size={20} />
              <span className="text-[#c41e2a] text-sm tracking-[0.3em] uppercase font-semibold font-[Rajdhani]">
                {content.label}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[Orbitron]">
              {content.title1}
              <br />
              <span className="text-[#c41e2a]">{content.title2}</span>
            </h2>

            <div className="mt-8 space-y-5 text-white/70 text-lg leading-relaxed font-[Rajdhani]">
              <p>
                A <strong className="text-white">Imperium Game Studio</strong> {content.p1}
              </p>
              <p>
                {content.p2}
              </p>
              <p>
                {content.p3}
              </p>
            </div>
          </motion.div>

          {/* Right — Visual Element */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-white/5 rounded-sm" />
              <div className="absolute -inset-8 border border-white/[0.02] rounded-sm" />

              {/* Timeline visual */}
              <div className="bg-[#111111] border border-white/5 rounded-sm p-8 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-1.5 bg-[#c41e2a] rounded-full shrink-0 shadow-[0_0_10px_rgba(196,30,42,0.5)]" />
                  <div>
                    <div className="text-[#c41e2a] font-[Orbitron] text-sm font-bold">{content.foundation}</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">{content.foundationDesc}</p>
                  </div>
                </div>
                <div className="ml-1.5 w-[1px] h-6 bg-gradient-to-b from-[#c41e2a]/30 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-1.5 bg-[#c41e2a]/60 rounded-full shrink-0" />
                  <div>
                    <div className="text-white/80 font-[Orbitron] text-sm font-bold">{content.expansion}</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">{content.expansionDesc}</p>
                  </div>
                </div>
                <div className="ml-1.5 w-[1px] h-6 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-1.5 bg-[#c41e2a]/40 rounded-full shrink-0" />
                  <div>
                    <div className="text-white/80 font-[Orbitron] text-sm font-bold">{content.outsourcing}</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">{content.outsourcingDesc}</p>
                  </div>
                </div>
                <div className="ml-1.5 w-[1px] h-6 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-1.5 bg-white rounded-full shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                  <div>
                    <div className="text-white font-[Orbitron] text-sm font-bold">{content.gameStudio}</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">{content.gameStudioDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-t border-b border-white/5">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} isVisible={statsVisible} index={i} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
