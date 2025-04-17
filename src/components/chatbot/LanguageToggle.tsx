
import React from "react";
import { motion } from "framer-motion";

interface LanguageToggleProps {
  language: "en" | "ar";
  toggleLanguage: () => void;
}

const LanguageToggle = ({ language, toggleLanguage }: LanguageToggleProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="rounded-full p-1 hover:bg-awr-secondary transition-colors flex items-center justify-center"
    >
      <span className="text-xs font-bold">
        {language === "en" ? "AR" : "EN"}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
