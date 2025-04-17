
import React from "react";

const FlowDiagram = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-awr-dark">AWR Chatbot Architecture & Flow</h2>
      
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Flow diagram using tailwind */}
          <div className="relative">
            {/* User Section */}
            <div className="absolute top-0 left-0 w-40 p-4 border border-awr-primary rounded-lg bg-white shadow-md">
              <h3 className="font-semibold text-awr-primary mb-2">User</h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Web Interface</li>
                <li>Mobile App</li>
                <li>Voice Assistant</li>
              </ul>
            </div>
            
            {/* Arrow */}
            <div className="absolute top-10 left-40 w-24 h-10 flex items-center justify-center">
              <div className="w-full h-0.5 bg-gray-300 relative">
                <div className="absolute right-0 -mt-1 border-t-4 border-r-4 border-b-4 border-t-transparent border-r-gray-300 border-b-transparent"></div>
              </div>
            </div>
            
            {/* Chat Interface */}
            <div className="absolute top-0 left-64 w-40 p-4 border border-awr-secondary rounded-lg bg-white shadow-md">
              <h3 className="font-semibold text-awr-secondary mb-2">Chat Interface</h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Text Input</li>
                <li>Voice Input</li>
                <li>Rich Responses</li>
              </ul>
            </div>
            
            {/* Down Arrow */}
            <div className="absolute top-28 left-84 h-24 w-10 flex items-center justify-center">
              <div className="h-full w-0.5 bg-gray-300 relative">
                <div className="absolute bottom-0 -ml-1.5 border-l-4 border-t-4 border-r-4 border-l-transparent border-t-gray-300 border-r-transparent"></div>
              </div>
            </div>
            
            {/* NLP Processing */}
            <div className="absolute top-52 left-64 w-40 p-4 border border-awr-primary rounded-lg bg-white shadow-md">
              <h3 className="font-semibold text-awr-primary mb-2">NLP Processing</h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Intent Detection</li>
                <li>Entity Extraction</li>
                <li>Language Detection</li>
              </ul>
            </div>
            
            {/* Left Arrow */}
            <div className="absolute top-62 left-40 w-24 h-10 flex items-center justify-center">
              <div className="w-full h-0.5 bg-gray-300 relative">
                <div className="absolute left-0 -mt-1 border-t-4 border-l-4 border-b-4 border-t-transparent border-l-gray-300 border-b-transparent"></div>
              </div>
            </div>
            
            {/* Backend Services */}
            <div className="absolute top-52 left-0 w-40 p-4 border border-awr-tertiary rounded-lg bg-white shadow-md">
              <h3 className="font-semibold text-awr-tertiary mb-2">Backend Services</h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>CRM Integration</li>
                <li>Vehicle Database</li>
                <li>Service Records</li>
              </ul>
            </div>
            
            {/* Down Arrow */}
            <div className="absolute top-100 left-20 h-24 w-10 flex items-center justify-center">
              <div className="h-full w-0.5 bg-gray-300 relative">
                <div className="absolute bottom-0 -ml-1.5 border-l-4 border-t-4 border-r-4 border-l-transparent border-t-gray-300 border-r-transparent"></div>
              </div>
            </div>
            
            {/* Response Generation */}
            <div className="absolute top-124 left-0 w-40 p-4 border border-awr-dark rounded-lg bg-white shadow-md">
              <h3 className="font-semibold text-awr-dark mb-2">Response Engine</h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Personalization</li>
                <li>Translation Layer</li>
                <li>Template Selection</li>
              </ul>
            </div>
            
            {/* Right Arrow */}
            <div className="absolute top-134 left-40 w-24 h-10 flex items-center justify-center">
              <div className="w-full h-0.5 bg-gray-300 relative">
                <div className="absolute right-0 -mt-1 border-t-4 border-r-4 border-b-4 border-t-transparent border-r-gray-300 border-b-transparent"></div>
              </div>
            </div>
            
            {/* UI Rendering */}
            <div className="absolute top-124 left-64 w-40 p-4 border border-awr-primary rounded-lg bg-white shadow-md">
              <h3 className="font-semibold text-awr-primary mb-2">UI Rendering</h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Chat Bubbles</li>
                <li>Rich Cards</li>
                <li>Interactive Elements</li>
                <li>Bilingual Display</li>
              </ul>
            </div>
            
            {/* Up Arrow */}
            <div className="absolute top-100 left-84 h-24 w-10 flex items-center justify-center">
              <div className="h-full w-0.5 bg-gray-300 relative">
                <div className="absolute top-0 -ml-1.5 border-l-4 border-b-4 border-r-4 border-l-transparent border-b-gray-300 border-r-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flow explanation */}
      <div className="mt-72 border-t pt-6 border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Process Flow:</h3>
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          <li>
            <span className="font-medium">User Input:</span> User interacts with the chatbot via text or voice
          </li>
          <li>
            <span className="font-medium">Natural Language Processing:</span> The system analyzes the input to determine intent and extract key information
          </li>
          <li>
            <span className="font-medium">Backend Integration:</span> Relevant data is fetched from vehicle database, CRM system, or service history
          </li>
          <li>
            <span className="font-medium">Multilingual Support:</span> Content is processed through the translation layer if needed
          </li>
          <li>
            <span className="font-medium">Personalized Response:</span> The system generates personalized content based on user profile and context
          </li>
          <li>
            <span className="font-medium">UI Rendering:</span> Response is displayed with appropriate UI components (text, cards, booking widgets, etc.)
          </li>
        </ol>
      </div>
      
      <div className="mt-6 border-t pt-6 border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Key Integration Points:</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <span className="font-medium">CRM System:</span> Customer profiles, purchase history, preferences
          </li>
          <li>
            <span className="font-medium">Vehicle Inventory:</span> Real-time stock levels, specifications, pricing
          </li>
          <li>
            <span className="font-medium">Service Management:</span> Service history, scheduling system, maintenance recommendations
          </li>
          <li>
            <span className="font-medium">Maps & Location:</span> Charging stations, dealership locations
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlowDiagram;
