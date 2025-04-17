
import React from "react";
import { Link } from "react-router-dom";
import FlowDiagram from "@/components/chatbot/FlowDiagram";

const FlowExplanation = () => {
  return (
    <div className="min-h-screen bg-awr-softGray">
      <header className="bg-awr-dark text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 bg-awr-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">AWR</span>
            </div>
            <span className="ml-2 font-bold">AWR Chatbot</span>
          </Link>
          <nav>
            <Link to="/" className="text-white hover:text-awr-primary transition-colors">
              Back to Demo
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-awr-dark mb-2">Architecture & Flow Explanation</h1>
          <p className="text-awr-secondary">
            Technical overview of the AWR chatbot system architecture, integration points, and user journey.
          </p>
        </div>
        
        <div className="mb-8">
          <FlowDiagram />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-awr-dark">Multilingual Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-awr-primary mb-2">Language Detection</h3>
              <p className="text-sm mb-4">
                The system automatically detects the user's preferred language based on:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>User account settings</li>
                <li>Browser language preferences</li>
                <li>Real-time language analysis of input</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-awr-primary mb-2">Translation Layer</h3>
              <p className="text-sm mb-4">
                All content passes through a specialized translation system that ensures:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Culturally appropriate phrasing</li>
                <li>Automotive terminology accuracy</li>
                <li>Consistent tone and brand voice</li>
                <li>Support for Arabic, English and 5 other regional languages</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-awr-primary mb-2">RTL/LTR Support</h3>
            <p className="text-sm mb-4">
              The UI automatically adapts to language reading direction:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">LTR (English, European)</h4>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="bg-gray-100 rounded-lg p-2 text-sm">
                    Hello! How can I help you today?
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4" dir="rtl">
                <h4 className="font-medium mb-2">RTL (Arabic)</h4>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="bg-gray-100 rounded-lg p-2 text-sm">
                    مرحبًا! كيف يمكنني مساعدتك اليوم؟
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-awr-dark">Simulated Intelligence</h2>
          
          <div className="mb-6">
            <p className="text-sm">
              The chatbot uses the following techniques to simulate intelligence and deliver personalized experiences:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-awr-primary mb-2">Intent Classification</h3>
              <p className="text-xs text-gray-500 mb-2">NLP/AI Component</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Vehicle inquiry detection</li>
                <li>Service request identification</li>
                <li>Location-based questions</li>
                <li>Appointment scheduling</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-awr-primary mb-2">Entity Extraction</h3>
              <p className="text-xs text-gray-500 mb-2">NLP/AI Component</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Vehicle models & categories</li>
                <li>Price ranges & budgets</li>
                <li>Passenger requirements</li>
                <li>Feature preferences</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-awr-primary mb-2">Contextual Memory</h3>
              <p className="text-xs text-gray-500 mb-2">AI Component</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Short-term dialog context</li>
                <li>Session-based preferences</li>
                <li>Multi-turn conversation handling</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-awr-primary mb-2">User Profiling</h3>
              <p className="text-xs text-gray-500 mb-2">Data Integration</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>CRM data integration</li>
                <li>Purchase & service history</li>
                <li>Preference modeling</li>
                <li>Personalized recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlowExplanation;
