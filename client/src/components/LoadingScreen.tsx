import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOGO_ICON_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const MIN_DISPLAY_MS = 900;
const MAX_WAIT_MS = 4000;

export default function LoadingScreen() {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const getLabel = () => {
    if (language === "en") return "Loading";
    if (language === "es") return "Cargando";
    return "Carregando";
  };

  useEffect(() => {
    const start = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    const fallback = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          <motion.img
            src={LOGO_ICON_URL}
            alt="Imperium Game Studio"
            className="w-20 sm:w-24 h-auto drop-shadow-[0_0_50px_rgba(196,30,42,0.5)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 flex items-center gap-2 text-white/50 text-xs tracking-[0.3em] uppercase font-[Rajdhani]"
          >
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#C61331]"
            />
            <span>{getLabel()}</span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="w-1.5 h-1.5 rounded-full bg-[#C61331]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
