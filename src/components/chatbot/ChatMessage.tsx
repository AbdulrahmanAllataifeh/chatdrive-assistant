
import React from "react";
import { Bot, User } from "lucide-react";
import { Message } from "./ChatWindow";
import QuickReply from "./QuickReply";
import CarouselCards from "./CarouselCards";
import DatePicker from "./DatePicker";
import VoiceMessage from "./VoiceMessage";
import ServiceCard from "./ServiceCard";

interface ChatMessageProps {
  message: Message;
  language: "en" | "ar";
  onQuickReplyClick: (reply: string) => void;
  onDateSelect: (date: Date) => void;
}

const ChatMessage = ({ message, language, onQuickReplyClick, onDateSelect }: ChatMessageProps) => {
  const isBot = message.type === "bot";
  const alignment = isBot ? "items-start" : "items-end";
  
  return (
    <div className={`flex ${alignment} space-x-2 mb-4`}>
      {isBot && (
        <div className="flex-shrink-0 rounded-full bg-awr-primary p-2">
          <Bot size={16} className="text-white" />
        </div>
      )}
      <div className="flex flex-col max-w-[75%]">
        <div 
          className={`p-3 rounded-2xl ${
            isBot 
              ? "bg-white shadow-sm" 
              : "bg-awr-primary text-white ml-auto"
          }`}
        >
          {message.content}
        </div>
        
        {/* Quick Reply Buttons */}
        {isBot && message.quickReplies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.quickReplies.map((reply, index) => (
              <QuickReply 
                key={index} 
                text={reply} 
                onClick={() => onQuickReplyClick(reply)} 
              />
            ))}
          </div>
        )}
        
        {/* Car Carousel */}
        {isBot && message.cards && (
          <div className="mt-3 w-[300px]">
            <CarouselCards cards={message.cards} language={language} />
          </div>
        )}

        {/* Service Details */}
        {isBot && message.serviceDetails && (
          <div className="mt-3">
            <ServiceCard details={message.serviceDetails} language={language} />
          </div>
        )}
        
        {/* Date Picker */}
        {isBot && message.dateOptions && (
          <div className="mt-3">
            <DatePicker onSelect={onDateSelect} language={language} />
          </div>
        )}
        
        {/* Voice Message */}
        {isBot && message.isVoice && (
          <div className="mt-3">
            <VoiceMessage language={language} />
          </div>
        )}
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 rounded-full bg-awr-tertiary p-2">
          <User size={16} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
