// DESIGN: Cinematic Dark Forge — Portfolio Section with lightbox gallery
// Showcase of completed works with full-screen image preview and hover description

import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { PORTFOLIO_WORKS } from "@/lib/constants";
import ImageLightbox from "@/components/ImageLightbox";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioSection() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const { language } = useLanguage();

  const getTitle = () => {
    if (language === "en") return "Portfolio";
    if (language === "es") return "Portafolio";
    return "Portfólio";
  };

  const getSubtitle = () => {
    if (language === "en") return "Completed Works";
    if (language === "es") return "Trabajos Realizados";
    return "Trabalhos Realizados";
  };

  return (
    <section id="portfolio" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C61331] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[Orbitron]">
            {getTitle()}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-16 h-1 bg-[#C61331]" />
            <p className="text-white/60 font-[Rajdhani] tracking-wider uppercase text-sm">
              {getSubtitle()}
            </p>
          </div>
        </motion.div>

        {/* Portfolio Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_WORKS.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[#C61331]/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedWork(work.id)}>
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark blur overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm" />

                  {/* Lightbox Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedWork(work.id);
                    }}
                    className="absolute top-2 right-2 p-2 bg-[#C61331] text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#A00D24] hover:scale-110"
                  >
                    <Maximize2 size={16} />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2 py-1 bg-[#C61331]/20 border border-[#C61331]/50 text-[#C61331] text-xs font-bold tracking-wider rounded-full font-[Rajdhani]">
                      {language === "en" ? work.categoryEn : language === "es" ? work.categoryEs : work.category}
                    </span>
                  </div>

                  {/* Description Hover Effect - Slides up from bottom */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
                  >
                    <p className="text-white/90 text-xs leading-relaxed font-[Rajdhani]">
                      {language === "en" ? work.descriptionEn : language === "es" ? work.descriptionEs : work.description}
                    </p>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white mb-1 font-[Orbitron] truncate">
                    {work.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-[Rajdhani] line-clamp-2" style={{display: 'none'}}>
                    {language === "en" ? work.descriptionEn : language === "es" ? work.descriptionEs : work.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={selectedWork !== null}
        imageUrl={PORTFOLIO_WORKS.find(w => w.id === selectedWork)?.image || ""}
        title={PORTFOLIO_WORKS.find(w => w.id === selectedWork)?.title || ""}
        onClose={() => setSelectedWork(null)}
      />
    </section>
  );
}
