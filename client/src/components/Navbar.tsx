// DESIGN: Cinematic Dark Forge — Fixed navbar with glass morphism on scroll
// Transparent at top, darkens with blur on scroll. Red accent on active/hover.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { LOGO_ICON_URL, getNavItems } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { language, setLanguage } = useLanguage();
  const NAV_ITEMS = getNavItems(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [language]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  const getContactText = () => {
    if (language === "pt") return "Fale Conosco";
    if (language === "en") return "Contact Us";
    return "Contáctenos";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 group"
          >
            <img
              src={LOGO_ICON_URL}
              alt="Imperium Game Studio"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-white font-[Orbitron] text-sm font-bold tracking-wider">IMPERIUM</div>
              <div className="text-[#C61331] font-[Orbitron] text-xs font-bold tracking-wider">GAME STUDIO</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-300 font-[Rajdhani] ${
                  activeSection === item.href.replace("#", "")
                    ? "text-[#C61331]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#C61331]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Language Selector & CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 px-3 py-2 text-white/60 hover:text-white transition-colors duration-300 font-[Rajdhani] text-sm"
              >
                <Globe size={18} />
                {language.toUpperCase()}
              </button>
              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-sm overflow-hidden z-50"
                  >
                    {(["pt", "en", "es"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setShowLanguageMenu(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm font-[Rajdhani] transition-colors duration-300 ${
                          language === lang
                            ? "bg-[#C61331] text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {lang === "pt" ? "Português" : lang === "en" ? "English" : "Español"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2.5 bg-[#C61331] text-white text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-[#A00D24] hover:shadow-[0_0_30px_rgba(198,19,49,0.3)] font-[Rajdhani]"
            >
              {getContactText()}
            </button>
          </div>

          {/* Language Selector Mobile & Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-1 px-2 py-2 text-white/60 hover:text-white transition-colors duration-300"
              >
                <Globe size={18} />
              </button>
              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-sm overflow-hidden z-50"
                  >
                    {(["pt", "en", "es"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setShowLanguageMenu(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm font-[Rajdhani] transition-colors duration-300 ${
                          language === lang
                            ? "bg-[#C61331] text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {lang === "pt" ? "Português" : lang === "en" ? "English" : "Español"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-white/80 hover:text-white p-2"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium tracking-wider uppercase transition-colors duration-300 font-[Rajdhani] ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#C61331] border-l-2 border-[#C61331]"
                      : "text-white/60 hover:text-white border-l-2 border-transparent"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-4 px-4 space-y-3">
                <div className="flex gap-2">
                  {(["pt", "en", "es"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLanguageMenu(false);
                      }}
                      className={`flex-1 px-3 py-2 text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-300 font-[Rajdhani] ${
                        language === lang
                          ? "bg-[#C61331] text-white"
                          : "bg-white/5 text-white/60 hover:text-white"
                      }`}
                    >
                      {lang === "pt" ? "PT" : lang === "en" ? "EN" : "ES"}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full px-6 py-3 bg-[#C61331] text-white text-sm font-semibold tracking-wider uppercase rounded-sm font-[Rajdhani]"
                >
                  {getContactText()}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
