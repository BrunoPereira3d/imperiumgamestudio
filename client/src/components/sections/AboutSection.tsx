// DESIGN: Cinematic Dark Forge — About section with animated stats counter
// Asymmetric layout, diagonal red accent lines, reveal on scroll

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/lib/constants";
import { Sparkles } from "lucide-react";

function StatItem({ stat, isVisible, index }: { stat: typeof STATS[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.value, isVisible);

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
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
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
                Sobre Nós
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[Orbitron]">
              Do Mundo Digital
              <br />
              <span className="text-[#c41e2a]">ao Real</span>
            </h2>

            <div className="mt-8 space-y-5 text-white/70 text-lg leading-relaxed font-[Rajdhani]">
              <p>
                A <strong className="text-white">Imperium Game Studio</strong> nasceu da paixão por criar mundos e experiências visuais extraordinárias. Começamos como um estúdio especializado em modelagem 3D, animação e impressão 3D, atendendo clientes de diversos segmentos com soluções criativas de alta qualidade.
              </p>
              <p>
                Hoje, expandimos nossa atuação para o <strong className="text-white">desenvolvimento de games</strong>, unindo nossa expertise técnica e artística para criar experiências interativas que cativam e surpreendem. Nossa equipe multidisciplinar combina talento criativo com domínio técnico para entregar resultados que superam expectativas.
              </p>
              <p>
                Além dos nossos projetos próprios, oferecemos serviços de <strong className="text-white">outsourcing</strong> para estúdios ao redor do mundo, fornecendo assets, animações e suporte de desenvolvimento com a qualidade que o mercado exige.
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
                    <div className="text-[#c41e2a] font-[Orbitron] text-sm font-bold">Fundação</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">Início das operações com foco em modelagem 3D e serviços visuais para empresas e agências.</p>
                  </div>
                </div>
                <div className="ml-1.5 w-[1px] h-6 bg-gradient-to-b from-[#c41e2a]/30 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-1.5 bg-[#c41e2a]/60 rounded-full shrink-0" />
                  <div>
                    <div className="text-white/80 font-[Orbitron] text-sm font-bold">Expansão</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">Ampliação da equipe e inclusão de serviços de animação e impressão 3D ao portfólio.</p>
                  </div>
                </div>
                <div className="ml-1.5 w-[1px] h-6 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-1.5 bg-[#c41e2a]/40 rounded-full shrink-0" />
                  <div>
                    <div className="text-white/80 font-[Orbitron] text-sm font-bold">Outsourcing</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">Início das parcerias com estúdios internacionais, fornecendo assets e suporte de produção.</p>
                  </div>
                </div>
                <div className="ml-1.5 w-[1px] h-6 bg-gradient-to-b from-white/10 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-1.5 bg-white rounded-full shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                  <div>
                    <div className="text-white font-[Orbitron] text-sm font-bold">Game Studio</div>
                    <p className="text-white/60 text-sm mt-1 font-[Rajdhani]">Nova era: desenvolvimento de games próprios e consolidação como estúdio completo.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-white/5">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} isVisible={statsVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
