
import React from "react";
import { motion } from "framer-motion";
import { Volume2, MapPin } from "lucide-react";

interface VoiceMessageProps {
  language: "en" | "ar";
}

const VoiceMessage = ({ language }: VoiceMessageProps) => {
  const voiceWaveVariants = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  const waveVariant = {
    animate: {
      scaleY: [0.4, 1, 0.4],
      transition: {
        repeat: Infinity,
        duration: 0.8
      }
    }
  };
  
  return (
    <div className="bg-white rounded-xl p-3 shadow-md">
      {/* Voice visualization */}
      <div className="flex items-center mb-3">
        <div className="p-2 bg-awr-softGray rounded-full mr-2">
          <Volume2 size={18} className="text-awr-primary" />
        </div>
        <motion.div 
          className="flex items-end space-x-0.5 h-8" 
          variants={voiceWaveVariants}
          animate="animate"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-awr-primary rounded-full"
              style={{ height: `${Math.max(15, Math.min(100, Math.random() * 100))}%` }}
              variants={waveVariant}
            />
          ))}
        </motion.div>
        <div className="ml-auto text-xs text-gray-500">
          {language === "en" ? "Voice message" : "رسالة صوتية"}
        </div>
      </div>
      
      {/* Map preview */}
      <div className="rounded-lg overflow-hidden relative aspect-video bg-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=800&h=400&fit=crop&q=80" 
          alt="Map showing charging stations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        
        {/* Markers for charging stations */}
        <div className="absolute left-[30%] top-[40%] flex flex-col items-center">
          <div className="bg-green-500 p-1 rounded-full">
            <div className="bg-white p-0.5 rounded-full">
              <MapPin size={14} className="text-green-500" />
            </div>
          </div>
          <div className="mt-1 text-xs font-bold text-white bg-black/70 px-2 py-0.5 rounded">
            Dubai Mall
          </div>
        </div>
        
        <div className="absolute right-[20%] bottom-[30%] flex flex-col items-center">
          <div className="bg-green-500 p-1 rounded-full">
            <div className="bg-white p-0.5 rounded-full">
              <MapPin size={14} className="text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceMessage;
