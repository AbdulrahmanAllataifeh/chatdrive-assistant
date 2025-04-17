import React, { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { scenarios } from "./chatScenarios";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const TYPING_SPEED = 40; // ms per character
const INITIAL_DELAY = 400;

export function SidePanelChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [initialInput, setInitialInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    let currentText = "";
    
    await new Promise(resolve => setTimeout(resolve, INITIAL_DELAY));
    
    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: "assistant", content: currentText }
      ]);
      await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
    }
    
    setIsTyping(false);
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;

    const scenario = scenarios[currentScenario!];
    const newUserMessage = userInput.trim();
    setMessages(prev => [...prev, { role: "user", content: newUserMessage }]);
    setUserInput("");

    if (currentStep < scenario.steps.length) {
      const assistantResponse = scenario.steps[currentStep].assistant;
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);
      await simulateTyping(assistantResponse);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!initialInput.trim()) return;

    const input = initialInput.toLowerCase();
    let selectedScenario = null;

    if (input.match(/test\s*drive/i)) {
      selectedScenario = "testDrive";
    } else if (input.match(/rent/i)) {
      selectedScenario = "rental";
    } else if (input.match(/financ/i)) {
      selectedScenario = "financing";
    }

    if (selectedScenario) {
      setCurrentScenario(selectedScenario);
      setMessages([
        { role: "user", content: initialInput },
        { role: "assistant", content: "" }
      ]);
      setInitialInput("");
      const scenario = scenarios[selectedScenario];
      await simulateTyping(scenario.steps[0].assistant);
      setCurrentStep(1);
    } else {
      setMessages([
        { role: "user", content: initialInput },
        { role: "assistant", content: "I'm sorry, I couldn't understand your request. Please try mentioning test drive, rent, or finance." }
      ]);
      setInitialInput("");
    }
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentScenario(null);
    setCurrentStep(0);
    setUserInput("");
    setInitialInput("");
    setIsTyping(false);
  };

  const chatTexts = [
    "Need help?",
    "Let's chat!",
    "Ask me anything!",
    "How can I assist?",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % chatTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 right-6">
      <div className="relative w-48 h-48">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              style={{ position: 'absolute', bottom: '100px', right: '150px', zIndex: 50 }}
            >
              <div className="bg-white rounded-xl px-4 py-2 shadow-lg relative">
                <motion.p
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-gray-800 whitespace-nowrap text-lg"
                >
                  {chatTexts[currentTextIndex]}
                </motion.p>
                <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <motion.button
              className="absolute bottom-0 right-0 cursor-pointer outline-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="relative">
                <img 
                  src="/Saif.png" 
                  alt="Saif" 
                  className="w-48 h-48 object-contain"
                />
                <div className="absolute top-[45px] right-[30px]">
                  <motion.div
                    className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </div>
              </div>
            </motion.button>
          </SheetTrigger>
          
          <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
            <div className="flex h-full flex-col">
              <SheetHeader className="border-b p-4 bg-awr-primary text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/Saif.png" 
                      alt="Saif" 
                      className="w-12 h-12 object-contain"
                    />
                    <SheetTitle className="text-white">AWR Assistant</SheetTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleReset}
                    className="text-white hover:bg-awr-primary/20"
                    title="Reset Chat"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </Button>
                </div>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {!currentScenario ? (
                  <div className="space-y-4">
                    <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 max-w-[80%]">
                      How can I help you today?
                    </div>
                  </div>
                ) : (
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={cn(
                          "flex justify-end",
                          message.role === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[80%] rounded-lg px-4 py-2",
                            message.role === "user"
                              ? "bg-awr-accent text-white"
                              : "bg-gray-100 text-gray-800"
                          )}
                        >
                          {message.content}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={!currentScenario ? handleInitialSubmit : handleUserSubmit} className="border-t p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={!currentScenario ? initialInput : userInput}
                    onChange={(e) => !currentScenario ? setInitialInput(e.target.value) : setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-awr-accent"
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    disabled={isTyping}
                    className="bg-[#F15A22] hover:bg-[#d94e1c] text-white px-6 py-2 rounded-md"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
