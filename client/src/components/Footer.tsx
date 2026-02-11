// DESIGN: Cinematic Dark Forge — Minimal footer with logo and links

import { LOGO_ICON_URL, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-[Rajdhani] tracking-wider">
            &copy; {new Date().getFullYear()} Imperium Game Studio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#C61331] rounded-full animate-pulse" />
            <span className="text-white/30 text-xs font-[Rajdhani] tracking-wider">
              Forjando experiências digitais
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
