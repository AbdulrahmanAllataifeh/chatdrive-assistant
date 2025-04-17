
import React from "react";
import { motion } from "framer-motion";

interface QuickReplyProps {
  text: string;
  onClick: () => void;
}

const QuickReply = ({ text, onClick }: QuickReplyProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-3 py-1 rounded-full bg-awr-softGray border border-awr-primary text-awr-primary text-sm font-medium hover:bg-awr-primary hover:text-white transition-colors"
    >
      {text}
    </motion.button>
  );
};

export default QuickReply;
