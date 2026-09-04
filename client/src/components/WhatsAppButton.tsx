// DESIGN: Cinematic Dark Forge — Floating WhatsApp contact button

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildWhatsAppLink } from "@/lib/constants";

export default function WhatsAppButton() {
  const { language } = useLanguage();

  const message =
    language === "en"
      ? "Hi! I'd like to talk to Imperium Game Studio."
      : language === "es"
        ? "¡Hola! Me gustaría hablar con Imperium Game Studio."
        : "Olá! Gostaria de falar com a Imperium Game Studio.";

  return (
    <motion.a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 bg-[#25D366] text-[#0a0a0a] rounded-full shadow-lg hover:bg-[#1ebe5a] transition-all duration-300 hover:scale-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22h-.005c-1.836 0-3.633-.462-5.216-1.336l-.373-.211-3.877 1.017 1.036-3.782-.242-.388a10.001 10.001 0 0 1-1.53-5.35c.003-5.514 4.505-9.99 10.05-9.99 2.686 0 5.206 1.043 7.102 2.939a9.94 9.94 0 0 1 2.94 7.055c-.003 5.514-4.503 9.99-9.885 9.99zm8.413-18.36A11.816 11.816 0 0 0 12.05 0C5.495 0 .157 5.29.155 11.792c0 2.079.545 4.106 1.581 5.899L0 24l6.457-1.688a11.86 11.86 0 0 0 5.588 1.404h.005c6.554 0 11.892-5.29 11.895-11.793a11.647 11.647 0 0 0-3.482-8.283z"/>
      </svg>
    </motion.a>
  );
}
