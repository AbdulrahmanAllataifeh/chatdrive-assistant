
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, CarFront } from "lucide-react";
import { CarCard } from "./ChatWindow";

interface CarouselCardsProps {
  cards: CarCard[];
  language: "en" | "ar";
}

const CarouselCards = ({ cards, language }: CarouselCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image */}
      <div className="h-36 w-full bg-gray-200 relative overflow-hidden">
        <img 
          src={currentCard.image} 
          alt={currentCard.model} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevCard} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1"
        >
          <ChevronLeft size={18} className="text-awr-dark" />
        </button>
        <button 
          onClick={nextCard} 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1"
        >
          <ChevronRight size={18} className="text-awr-dark" />
        </button>
        
        {/* Pagination dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
          {cards.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 w-1.5 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Details */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-awr-dark">{currentCard.model}</h3>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs ml-1">{currentCard.rating}</span>
          </div>
        </div>
        
        <div className="text-awr-secondary font-bold mb-2">{currentCard.price}</div>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {currentCard.features.map((feature, idx) => (
            <span 
              key={idx} 
              className="bg-awr-softGray text-awr-secondary text-xs px-2 py-0.5 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between gap-2">
          <button className="flex-1 py-1.5 rounded-md text-sm font-medium border border-awr-primary text-awr-primary">
            {language === "en" ? "Compare" : "مقارنة"}
          </button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 py-1.5 rounded-md bg-awr-primary text-white text-sm font-medium"
          >
            {language === "en" ? "Book Test Drive" : "حجز تجربة قيادة"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCards;
