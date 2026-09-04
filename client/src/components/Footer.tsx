// DESIGN: Cinematic Dark Forge — Minimal footer with logo and links

import { LOGO_ICON_URL, NAV_ITEMS, buildWhatsAppLink } from "@/lib/constants";
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
      return "All images, characters, plots, designs and assets presented on this website are exclusive intellectual property of Imperium Game Studio. Unauthorized use, copying, reproduction, modification or distribution of any material contained herein, without prior written permission from Imperium Game Studio, is strictly prohibited and subject to legal action under international and local copyright laws. \"Ghouls Next Door\", \"Glitch Rail\" and the Imperium logo are registered trademarks.";
    }
    if (language === "es") {
      return "Todas las imágenes, personajes, tramas, diseños y activos presentados en este sitio web son propiedad intelectual exclusiva de Imperium Game Studio. El uso no autorizado, copia, reproducción, modificación o distribución de cualquier material contenido aquí, sin permiso previo por escrito de Imperium Game Studio, está estrictamente prohibido y sujeto a acciones legales bajo las leyes de derechos de autor internacionales y locales. \"Ghouls Next Door\", \"Glitch Rail\" y el logotipo de Imperium son marcas registradas.";
    }
    return "Todas as imagens, personagens, enredos, designs e assets apresentados neste site são propriedade intelectual exclusiva da Imperium Game Studio. O uso não autorizado, cópia, reprodução, modificação ou distribuição de qualquer material aqui contido, sem permissão prévia e expressa por escrito da Imperium Game Studio, é estritamente proibido e sujeitão a ações legais sob as leis de direitos autorais internacionais e locais. \"Ghouls Next Door\", \"Glitch Rail\" e o logótipo Imperium são marcas registradas.";
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
    <footer className="relative z-20 border-t border-white/5 bg-[#080808]">
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

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={buildWhatsAppLink(
              language === "en"
                ? "Hi! I'd like to talk to Imperium Game Studio."
                : language === "es"
                  ? "¡Hola! Me gustaría hablar con Imperium Game Studio."
                  : "Olá! Gostaria de falar com a Imperium Game Studio."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5a] text-[#0a0a0a] font-[Rajdhani] font-semibold rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22h-.005c-1.836 0-3.633-.462-5.216-1.336l-.373-.211-3.877 1.017 1.036-3.782-.242-.388a10.001 10.001 0 0 1-1.53-5.35c.003-5.514 4.505-9.99 10.05-9.99 2.686 0 5.206 1.043 7.102 2.939a9.94 9.94 0 0 1 2.94 7.055c-.003 5.514-4.503 9.99-9.885 9.99zm8.413-18.36A11.816 11.816 0 0 0 12.05 0C5.495 0 .157 5.29.155 11.792c0 2.079.545 4.106 1.581 5.899L0 24l6.457-1.688a11.86 11.86 0 0 0 5.588 1.404h.005c6.554 0 11.892-5.29 11.895-11.793a11.647 11.647 0 0 0-3.482-8.283z"/>
            </svg>
            WhatsApp
          </a>
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
          <a
            href="https://discord.gg/QkueErzY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-[Rajdhani] font-semibold rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord
          </a>
          <a
            href="https://www.linkedin.com/company/imperium-game-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-[Rajdhani] font-semibold rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
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
