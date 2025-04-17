
import React from "react";
import { motion } from "framer-motion";

const TypingIndicator = () => {
  return (
    <div className="flex items-start space-x-2 mb-4">
      <div className="flex-shrink-0 rounded-full bg-awr-primary p-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V11.08z"></path>
          <path d="M13 2v6h6"></path>
        </svg>
      </div>
      <div className="p-3 rounded-2xl bg-white shadow-sm max-w-[75%] relative flex items-center">
        <motion.div
          className="h-2 w-2 bg-awr-primary rounded-full mr-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
        <motion.div
          className="h-2 w-2 bg-awr-primary rounded-full mr-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="h-2 w-2 bg-awr-primary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export default TypingIndicator;
