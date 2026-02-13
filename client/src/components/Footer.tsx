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
