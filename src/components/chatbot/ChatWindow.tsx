
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, Mic, Minimize2, X, ChevronDown, ChevronUp } from "lucide-react";
import TypingIndicator from "./TypingIndicator";
import ChatMessage from "./ChatMessage";
import QuickReply from "./QuickReply";
import CarouselCards from "./CarouselCards";
import DatePicker from "./DatePicker";
import LanguageToggle from "./LanguageToggle";
import VoiceMessage from "./VoiceMessage";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  content: string;
  type: "user" | "bot";
  quickReplies?: string[];
  cards?: CarCard[];
  isTyping?: boolean;
  isVoice?: boolean;
  dateOptions?: boolean;
  serviceDetails?: ServiceDetails;
}

export interface CarCard {
  id: string;
  model: string;
  image: string;
  price: string;
  rating: number;
  features: string[];
}

export interface ServiceDetails {
  car: string;
  model: string;
  year: string;
  mileage: string;
  recommendation: string;
  price: string;
}

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [scenario, setScenario] = useState<"default" | "car" | "service" | "voice">("default");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateResponse({
        id: "greeting",
        type: "bot",
        content: language === "en" 
          ? "Hello! I'm AWR assistant. How can I help you today?" 
          : "مرحبًا! أنا مساعد AWR. كيف يمكنني مساعدتك اليوم؟",
        quickReplies: language === "en" 
          ? ["Find a new car", "Book a service", "Parts inquiry", "Test drive"] 
          : ["البحث عن سيارة جديدة", "حجز خدمة", "استفسار عن قطع الغيار", "اختبار القيادة"]
      });
    }
  }, [isOpen, language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsMinimized(true);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setMessages([]);
    setScenario("default");
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: message,
      type: "user",
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage("");
    setIsTyping(true);

    // Determine scenario based on message content
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("family") || lowerMessage.includes("suv") || lowerMessage.includes("car") || lowerMessage.includes("vehicle")) {
      setScenario("car");
      handleCarScenario();
    } else if (lowerMessage.includes("service") || lowerMessage.includes("maintenance")) {
      setScenario("service");
      handleServiceScenario();
    } else if (lowerMessage.includes("voice") || lowerMessage.includes("hey awr") || lowerMessage.includes("charge")) {
      setScenario("voice");
      handleVoiceScenario();
    } else {
      // Default response
      simulateResponse({
        id: Date.now().toString(),
        type: "bot",
        content: language === "en" 
          ? "I'm not sure I understand. Could you please rephrase or select an option below?" 
          : "لست متأكدًا من أنني أفهم. هل يمكنك إعادة الصياغة أو تحديد خيار أدناه؟",
        quickReplies: language === "en" 
          ? ["Find a car", "Book a service", "Contact sales"] 
          : ["البحث عن سيارة", "حجز خدمة", "الاتصال بالمبيعات"],
      });
    }
  };

  const simulateResponse = (responseMsg: Message, delay = 1000) => {
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, responseMsg]);
    }, delay);
  };

  const handleQuickReply = (reply: string) => {
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: reply,
      type: "user",
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);
    
    // Handle different quick reply options
    if (reply.toLowerCase().includes("find a") || reply.toLowerCase().includes("البحث عن")) {
      setScenario("car");
      handleCarScenario();
    } else if (reply.toLowerCase().includes("service") || reply.toLowerCase().includes("خدمة")) {
      setScenario("service");
      handleServiceScenario();
    } else if (reply === "efficiency" || reply === "power" || reply === "الكفاءة" || reply === "القوة") {
      handleCarPreference(reply);
    } else if (reply.includes("passengers") || reply.includes("الركاب")) {
      handlePassengerCount(reply);
    } else {
      // Default response for other quick replies
      simulateResponse({
        id: Date.now().toString(),
        type: "bot",
        content: language === "en" 
          ? "Thank you for your interest. A representative will assist you shortly." 
          : "شكرًا لاهتمامك. سيساعدك ممثل قريبًا.",
      });
    }
  };

  // Car recommendation scenario
  const handleCarScenario = () => {
    simulateResponse({
      id: Date.now().toString(),
      type: "bot",
      content: language === "en" 
        ? "I can help you find the perfect SUV for your family! Let me ask a couple of questions to better understand your needs." 
        : "يمكنني مساعدتك في العثور على السيارة الرياضية متعددة الاستخدامات المثالية لعائلتك! دعني أطرح عليك بعض الأسئلة لفهم احتياجاتك بشكل أفضل.",
    }, 1000);

    setTimeout(() => {
      simulateResponse({
        id: Date.now().toString() + "-1",
        type: "bot",
        content: language === "en" 
          ? "Do you prefer fuel efficiency or power?" 
          : "هل تفضل كفاءة الوقود أم القوة؟",
        quickReplies: language === "en" 
          ? ["Efficiency", "Power"] 
          : ["الكفاءة", "القوة"],
      }, 1000);
    }, 2000);
  };

  const handleCarPreference = (preference: string) => {
    simulateResponse({
      id: Date.now().toString(),
      type: "bot",
      content: language === "en" 
        ? "Great choice! How many passengers usually travel with you?" 
        : "اختيار رائع! كم عدد الركاب الذين يسافرون معك عادةً؟",
      quickReplies: language === "en" 
        ? ["2-4 passengers", "5-7 passengers", "8+ passengers"] 
        : ["2-4 ركاب", "5-7 ركاب", "8+ ركاب"],
    });
  };

  const handlePassengerCount = (count: string) => {
    const carRecommendations: CarCard[] = [
      {
        id: "1",
        model: "INFINITI QX60",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=500&fit=crop&q=80",
        price: "AED 149,900",
        rating: 4.8,
        features: ["7 Seats", "360° Camera", "Wireless charging"]
      },
      {
        id: "2",
        model: "Nissan Patrol",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&q=80",
        price: "AED 139,500",
        rating: 4.6,
        features: ["8 Seats", "Off-road capability", "Premium sound"]
      },
      {
        id: "3",
        model: "INFINITI QX80",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop&q=80",
        price: "AED 145,800",
        rating: 4.7,
        features: ["7 Seats", "Luxury interior", "Advanced safety"]
      },
    ];

    simulateResponse({
      id: Date.now().toString(),
      type: "bot",
      content: language === "en" 
        ? "Based on your preferences, here are some SUVs under AED 150,000 that would be perfect for your family:" 
        : "بناءً على تفضيلاتك، إليك بعض السيارات الرياضية متعددة الاستخدامات بسعر أقل من 150,000 درهم والتي ستكون مثالية لعائلتك:",
      cards: carRecommendations,
    });
  };

  // Service booking scenario
  const handleServiceScenario = () => {
    const serviceDetails: ServiceDetails = {
      car: "INFINITI",
      model: "QX60",
      year: "2022",
      mileage: "48,500 km",
      recommendation: "50,000 km service package",
      price: "AED 1,450",
    };

    simulateResponse({
      id: Date.now().toString(),
      type: "bot",
      content: language === "en" 
        ? `I see you have an ${serviceDetails.car} ${serviceDetails.model} (${serviceDetails.year}) with current mileage of ${serviceDetails.mileage}.` 
        : `أرى أن لديك ${serviceDetails.car} ${serviceDetails.model} (${serviceDetails.year}) بمسافة قطع حالية تبلغ ${serviceDetails.mileage}.`,
    }, 1000);

    setTimeout(() => {
      simulateResponse({
        id: Date.now().toString() + "-1",
        type: "bot",
        content: language === "en" 
          ? `Based on your vehicle's service history, I recommend the ${serviceDetails.recommendation} for AED ${serviceDetails.price}.` 
          : `بناءً على تاريخ خدمة سيارتك، أوصي بـ ${serviceDetails.recommendation} مقابل ${serviceDetails.price} درهم.`,
        serviceDetails: serviceDetails,
      }, 1000);
    }, 2000);

    setTimeout(() => {
      simulateResponse({
        id: Date.now().toString() + "-2",
        type: "bot",
        content: language === "en" 
          ? "When would you like to schedule your service?" 
          : "متى تريد جدولة الخدمة الخاصة بك؟",
        dateOptions: true,
      }, 1000);
    }, 3500);
  };

  // Voice assistant scenario
  const handleVoiceScenario = () => {
    simulateResponse({
      id: Date.now().toString(),
      type: "bot",
      content: language === "en" 
        ? "Voice assistant activated. You can speak your request." 
        : "تم تنشيط المساعد الصوتي. يمكنك نطق طلبك.",
      isVoice: true,
    }, 1000);

    setTimeout(() => {
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        return [
          ...prev.slice(0, -1),
          {
            ...lastMessage,
            content: language === "en" 
              ? "I've found 5 charging stations for your Zeekr within 10km. The closest is at Dubai Mall, 2.3km away, with 4 available chargers." 
              : "لقد وجدت 5 محطات شحن لسيارة Zeekr الخاصة بك في نطاق 10 كم. الأقرب في دبي مول، على بعد 2.3 كم، مع 4 شواحن متاحة."
          }
        ];
      });
    }, 3000);
  };

  const handleDateSelection = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat(language === "ar" ? "ar-AE" : "en-AE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }).format(date);

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: language === "en" 
        ? `I'd like to book on ${formattedDate}` 
        : `أود الحجز في ${formattedDate}`,
      type: "user",
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    simulateResponse({
      id: Date.now().toString(),
      type: "bot",
      content: language === "en" 
        ? `Perfect! Your service appointment is confirmed for ${formattedDate}. You'll receive a confirmation email shortly, and we've added this to your calendar.` 
        : `ممتاز! تم تأكيد موعد الخدمة الخاص بك في ${formattedDate}. ستتلقى رسالة بريد إلكتروني للتأكيد قريبًا، وقد أضفنا هذا إلى التقويم الخاص بك.`,
    });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "ar" : "en");
  };

  return (
    <>
      {/* Chat widget button */}
      {!isOpen && (
        <motion.button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 rounded-full bg-awr-primary text-white p-4 shadow-lg z-50 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bot size={24} />
        </motion.button>
      )}

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              height: isMinimized ? "72px" : "600px",
              width: isMinimized ? "300px" : "380px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-6 right-6 bg-white rounded-2xl shadow-xl overflow-hidden z-50 flex flex-col",
              language === "ar" ? "font-[Arial]" : ""
            )}
            style={{ direction: language === "ar" ? "rtl" : "ltr" }}
          >
            {/* Chat header */}
            <div className="bg-awr-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot size={24} />
                <h3 className="font-semibold">
                  {language === "en" ? "AWR Assistant" : "مساعد AWR"}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
                <button 
                  onClick={toggleChat}
                  className="rounded-full p-1 hover:bg-awr-secondary transition-colors"
                >
                  {isMinimized ? <ChevronUp size={18} /> : <Minimize2 size={18} />}
                </button>
                <button 
                  onClick={closeChat}
                  className="rounded-full p-1 hover:bg-awr-secondary transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat body - only shown when not minimized */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 bg-awr-softGray">
                  {messages.map((msg) => (
                    <ChatMessage 
                      key={msg.id} 
                      message={msg} 
                      language={language}
                      onQuickReplyClick={handleQuickReply}
                      onDateSelect={handleDateSelection}
                    />
                  ))}
                  {isTyping && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center">
                    <input
                      ref={inputRef}
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={language === "en" ? "Type a message..." : "اكتب رسالة..."}
                      className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-awr-primary"
                    />
                    <button 
                      onClick={handleSendMessage}
                      className="ml-2 bg-awr-primary text-white rounded-full p-2 hover:bg-awr-secondary transition-colors"
                    >
                      <Send size={18} />
                    </button>
                    <button className="ml-2 bg-awr-light text-awr-dark rounded-full p-2 hover:bg-awr-secondary hover:text-white transition-colors">
                      <Mic size={18} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWindow;
