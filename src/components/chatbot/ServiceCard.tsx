
import React from "react";
import { Car, Wrench, Clock } from "lucide-react";
import { ServiceDetails } from "./ChatWindow";

interface ServiceCardProps {
  details: ServiceDetails;
  language: "en" | "ar";
}

const ServiceCard = ({ details, language }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-3 border-b border-gray-100 bg-awr-primary/10 flex items-center">
        <Car size={18} className="text-awr-primary mr-2" />
        <h3 className="font-semibold text-awr-dark">
          {language === "en" ? "Service Recommendation" : "توصية الخدمة"}
        </h3>
      </div>
      
      <div className="p-3">
        <div className="flex justify-between mb-1">
          <div className="text-sm font-medium text-awr-secondary">
            {language === "en" ? "Vehicle" : "المركبة"}
          </div>
          <div className="text-sm">
            {`${details.car} ${details.model} (${details.year})`}
          </div>
        </div>
        
        <div className="flex justify-between mb-1">
          <div className="text-sm font-medium text-awr-secondary">
            {language === "en" ? "Current Mileage" : "المسافة الحالية"}
          </div>
          <div className="text-sm">{details.mileage}</div>
        </div>
        
        <div className="flex justify-between mb-1">
          <div className="text-sm font-medium text-awr-secondary">
            {language === "en" ? "Recommended Service" : "الخدمة الموصى بها"}
          </div>
          <div className="text-sm font-semibold text-awr-primary">
            {details.recommendation}
          </div>
        </div>
        
        <div className="flex justify-between mb-3">
          <div className="text-sm font-medium text-awr-secondary">
            {language === "en" ? "Estimated Cost" : "التكلفة المقدرة"}
          </div>
          <div className="text-sm font-bold">{details.price}</div>
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1 p-2 rounded-md bg-awr-softGray text-center">
            <Wrench size={16} className="inline mr-1" />
            <span className="text-xs">
              {language === "en" ? "Parts included" : "القطع مشمولة"}
            </span>
          </div>
          <div className="flex-1 p-2 rounded-md bg-awr-softGray text-center">
            <Clock size={16} className="inline mr-1" />
            <span className="text-xs">
              {language === "en" ? "4-5 hours" : "4-5 ساعات"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
