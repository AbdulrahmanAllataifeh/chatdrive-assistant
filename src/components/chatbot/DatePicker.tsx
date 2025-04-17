
import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface DatePickerProps {
  onSelect: (date: Date) => void;
  language: "en" | "ar";
}

const DatePicker = ({ onSelect, language }: DatePickerProps) => {
  const [view, setView] = useState<"date" | "time">("date");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Generate dates for the next 7 days
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });
  
  // Available time slots
  const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];
  
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setView("time");
  };
  
  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    
    if (selectedDate) {
      const [hours, minutes] = time.split(":").map(Number);
      const dateTime = new Date(selectedDate);
      dateTime.setHours(hours, minutes);
      onSelect(dateTime);
    }
  };
  
  const formatDay = (date: Date, locale: string) => {
    return date.toLocaleDateString(locale, { weekday: 'short' }).slice(0, 3);
  };
  
  const formatMonth = (date: Date, locale: string) => {
    return date.toLocaleDateString(locale, { month: 'short' });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-3 border-b border-gray-100 flex justify-between items-center">
        {view === "time" && selectedDate ? (
          <div className="flex items-center">
            <button 
              onClick={() => setView("date")} 
              className="mr-2 p-1 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={16} />
            </button>
            <span>
              {selectedDate.toLocaleDateString(
                language === "ar" ? "ar-AE" : "en-US", 
                { month: 'long', day: 'numeric' }
              )}
            </span>
          </div>
        ) : (
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{language === "en" ? "Select a date" : "اختر تاريخًا"}</span>
          </div>
        )}
      </div>
      
      {/* Date selection */}
      {view === "date" && (
        <div className="p-3">
          <div className="grid grid-cols-7 gap-1">
            {dates.map((date, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDateClick(date)}
                className="flex flex-col items-center py-2 rounded-lg hover:bg-awr-softGray"
              >
                <span className="text-xs text-awr-secondary">
                  {formatDay(date, language === "ar" ? "ar-AE" : "en-US")}
                </span>
                <span className="text-lg font-semibold">{date.getDate()}</span>
                <span className="text-xs text-awr-secondary">
                  {formatMonth(date, language === "ar" ? "ar-AE" : "en-US")}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      )}
      
      {/* Time selection */}
      {view === "time" && (
        <div className="p-3">
          <div className="flex items-center mb-2">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">
              {language === "en" ? "Select a time" : "اختر وقتًا"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <motion.button
                key={time}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTimeClick(time)}
                className="py-2 px-3 rounded-md border border-gray-200 hover:border-awr-primary hover:bg-awr-softGray"
              >
                {time}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
