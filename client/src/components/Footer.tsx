// DESIGN: Cinematic Dark Forge — Minimal footer with logo and links

import { LOGO_ICON_URL, NAV_ITEMS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getIPTitle = () => {
    if (language === "en") return "INTELLECTUAL PROPERTY";
    if (language === "es") return "PROPIEDAD INTELECTUAL";
    return "PROPRIEDADE INTELECTUAL";
  };

  const getIPText = () => {
    if (language === "en") {
      return "All images, characters, plots, designs and assets presented on this website are exclusive intellectual property of Imperium Game Studio. Unauthorized use, copying, reproduction, modification or distribution of any material contained herein, without prior written permission from Imperium Game Studio, is strictly prohibited and subject to legal action under international and local copyright laws. \"Ghouls Next Door\", \"Project Neblina\" and the Imperium logo are registered trademarks.";
    }
    if (language === "es") {
      return "Todas las imágenes, personajes, tramas, diseños y activos presentados en este sitio web son propiedad intelectual exclusiva de Imperium Game Studio. El uso no autorizado, copia, reproducción, modificación o distribución de cualquier material contenido aquí, sin permiso previo por escrito de Imperium Game Studio, está estrictamente prohibido y sujeto a acciones legales bajo las leyes de derechos de autor internacionales y locales. \"Ghouls Next Door\", \"Project Neblina\" y el logotipo de Imperium son marcas registradas.";
    }
    return "Todas as imagens, personagens, enredos, designs e assets apresentados neste site são propriedade intelectual exclusiva da Imperium Game Studio. O uso não autorizado, cópia, reprodução, modificação ou distribuição de qualquer material aqui contido, sem permissão prévia e expressa por escrito da Imperium Game Studio, é estritamente proibido e sujeitão a ações legais sob as leis de direitos autorais internacionais e locais. \"Ghouls Next Door\", \"Project Neblina\" e o logótipo Imperium são marcas registradas.";
  };

  const getCopyright = () => {
    if (language === "en") return "All rights reserved.";
    if (language === "es") return "Todos los derechos reservados.";
    return "Todos os direitos reservados.";
  };

  const getSlogan = () => {
    if (language === "en") return "Forging digital experiences";
    if (language === "es") return "Forjando experiencias digitales";
    return "Forjando experiências digitais";
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3"
          >
            <img src={LOGO_ICON_URL} alt="Imperium Game Studio" className="h-8 w-auto" />
            <div>
              <div className="text-white font-[Orbitron] text-sm font-bold tracking-wider">IMPERIUM</div>
              <div className="text-[#C61331] font-[Orbitron] text-xs font-bold tracking-wider">GAME STUDIO</div>
            </div>
          </button>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white/40 text-sm font-[Rajdhani] tracking-wider uppercase hover:text-[#C61331] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Intellectual Property Notice */}
        <div className="mt-8 p-4 bg-black/40 border border-[#C61331]/20 rounded-sm">
          <div className="flex items-start gap-3">
            <div className="text-[#C61331] font-bold text-lg mt-0.5">⊘</div>
            <div>
              <p className="text-[#C61331] text-xs font-[Orbitron] font-bold tracking-wider mb-2">
                {getIPTitle()}
              </p>
              <p className="text-white/60 text-xs font-[Rajdhani] leading-relaxed">
                {getIPText()}
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/imperiumgamestudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-80 text-white font-[Rajdhani] font-semibold rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,48,108,0.4)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-[Rajdhani] tracking-wider">
            &copy; {new Date().getFullYear()} Imperium Game Studio. {getCopyright()}
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#C61331] rounded-full animate-pulse" />
            <span className="text-white/30 text-xs font-[Rajdhani] tracking-wider">
              {getSlogan()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
