
import React, { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { scenarios } from "./chatScenarios";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const TYPING_SPEED = 50; // ms per character
const INITIAL_DELAY = 500; // ms before starting to type

export function SidePanelChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleScenarioSelect = (scenarioId: string) => {
    setCurrentScenario(scenarioId);
    setMessages([]);
    setCurrentStep(0);
    const scenario = scenarios[scenarioId];
    if (scenario) {
      setMessages([{ role: "user", content: scenario.steps[0].user }]);
      simulateTyping(scenario.steps[0].assistant);
    }
  };

  const handleNextStep = () => {
    const scenario = scenarios[currentScenario!];
    if (scenario && currentStep + 1 < scenario.steps.length) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setMessages(prev => [...prev, { role: "user", content: scenario.steps[nextStep].user }]);
      simulateTyping(scenario.steps[nextStep].assistant);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed left-4 bottom-4 h-12 w-12 rounded-full bg-white shadow-lg hover:bg-awr-accent hover:text-white"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px] p-0">
        <div className="flex h-full flex-col">
          <SheetHeader className="border-b p-4 bg-awr-primary text-white">
            <SheetTitle className="text-white">AWR Assistant</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!currentScenario ? (
              <div className="space-y-2">
                <h3 className="font-medium text-lg">How can I help you today?</h3>
                {Object.entries(scenarios).map(([id, scenario]) => (
                  <Button
                    key={id}
                    variant="outline"
                    className="w-full justify-start text-left"
                    onClick={() => handleScenarioSelect(id)}
                  >
                    {scenario.title}
                  </Button>
                ))}
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
                      "flex",
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
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-2 text-gray-500"
                  >
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce delay-100">●</span>
                    <span className="animate-bounce delay-200">●</span>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
            <div ref={messagesEndRef} />
          </div>

          {currentScenario && !isTyping && currentStep + 1 < scenarios[currentScenario].steps.length && (
            <div className="border-t p-4">
              <Button 
                onClick={handleNextStep}
                className="w-full bg-awr-accent hover:bg-awr-accent-bright text-white"
              >
                Continue Conversation
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
