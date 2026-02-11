// DESIGN: Cinematic Dark Forge — Full-viewport hero with parallax background
// Logo with transparent bg, dramatic reveal animation, diagonal red slashes

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO_BG_URL, LOGO_ICON_URL } from "@/lib/constants";
import { useParallax } from "@/hooks/useScrollAnimation";

export default function HeroSection() {
  const scrollY = useParallax();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={HERO_BG_URL}
          alt=""
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/30 to-[#0a0a0a]" />
      </div>

      {/* Diagonal Red Lines */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="absolute top-[20%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c41e2a] to-transparent"
          style={{ transform: "rotate(-5deg) scaleX(1.5)" }}
        />
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 0.06 }}
          transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
          className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c41e2a] to-transparent"
          style={{ transform: "rotate(3deg) scaleX(1.5)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo icon only (controller part) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src={LOGO_ICON_URL}
            alt="Imperium Game Studio"
            className="w-40 sm:w-48 md:w-56 h-auto drop-shadow-[0_0_60px_rgba(196,30,42,0.4)]"
          />
        </motion.div>

        {/* Title text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[Orbitron] tracking-wider leading-none">
            IMPERIUM
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white/60 font-[Orbitron] tracking-[0.4em] font-light mt-1">
            GAME STUDIO
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-4 text-white/40">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c41e2a]/50" />
            <p className="text-sm sm:text-base md:text-lg font-[Rajdhani] font-light tracking-[0.3em] uppercase">
              Games &middot; 3D &middot; Animação &middot; Impressão 3D
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c41e2a]/50" />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-[#c41e2a] text-white font-semibold tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:bg-[#a01824] hover:shadow-[0_0_40px_rgba(196,30,42,0.4)] font-[Rajdhani]"
          >
            Nossos Serviços
          </button>
          <button
            onClick={() => document.getElementById("outsourcing")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-white/20 text-white/80 font-semibold tracking-wider uppercase text-sm rounded-sm transition-all duration-300 hover:border-[#c41e2a]/50 hover:text-white hover:bg-white/5 font-[Rajdhani]"
          >
            Outsourcing
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-[Rajdhani]">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[5]" />
    </section>
  );
}
