
import React from "react";
import ChatWindow from "@/components/chatbot/ChatWindow";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-awr-softGray overflow-hidden">
      {/* Demo Car Dealership Website */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-awr-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold">AWR</span>
            </div>
            <span className="ml-2 font-bold text-awr-dark">Arabian World Rides</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-awr-dark hover:text-awr-primary font-medium transition-colors">Vehicles</a>
            <a href="#" className="text-awr-dark hover:text-awr-primary font-medium transition-colors">Services</a>
            <a href="#" className="text-awr-dark hover:text-awr-primary font-medium transition-colors">About</a>
            <a href="#" className="text-awr-dark hover:text-awr-primary font-medium transition-colors">Contact</a>
          </nav>
          <div>
            <button className="bg-awr-primary text-white px-4 py-2 rounded-md hover:bg-awr-secondary transition-colors">
              Login
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-awr-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Discover Your Perfect Drive
                </h1>
                <p className="text-gray-300 mb-6 md:text-lg">
                  Experience luxury and performance with our exclusive collection of premium vehicles.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-awr-primary text-white px-6 py-3 rounded-md hover:bg-awr-secondary transition-colors font-medium">
                    Explore Vehicles
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-awr-dark transition-colors font-medium">
                    Book Test Drive
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&q=80" 
                  alt="Luxury SUV" 
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Vehicles */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-awr-dark">Featured Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Car Card 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop&q=80" 
                    alt="INFINITI QX80" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">INFINITI QX80</h3>
                  <p className="text-awr-primary font-semibold mb-2">From AED 145,800</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="bg-awr-softGray text-awr-secondary text-xs px-2 py-1 rounded-full">7 Seats</span>
                      <span className="bg-awr-softGray text-awr-secondary text-xs px-2 py-1 rounded-full">V8</span>
                    </div>
                    <button className="bg-awr-primary text-white px-3 py-1 rounded-md text-sm">Details</button>
                  </div>
                </div>
              </div>
              
              {/* Car Card 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=500&fit=crop&q=80" 
                    alt="INFINITI QX60" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">INFINITI QX60</h3>
                  <p className="text-awr-primary font-semibold mb-2">From AED 149,900</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="bg-awr-softGray text-awr-secondary text-xs px-2 py-1 rounded-full">7 Seats</span>
                      <span className="bg-awr-softGray text-awr-secondary text-xs px-2 py-1 rounded-full">V6</span>
                    </div>
                    <button className="bg-awr-primary text-white px-3 py-1 rounded-md text-sm">Details</button>
                  </div>
                </div>
              </div>
              
              {/* Car Card 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop&q=80" 
                    alt="Nissan Patrol" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">Nissan Patrol</h3>
                  <p className="text-awr-primary font-semibold mb-2">From AED 139,500</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="bg-awr-softGray text-awr-secondary text-xs px-2 py-1 rounded-full">8 Seats</span>
                      <span className="bg-awr-softGray text-awr-secondary text-xs px-2 py-1 rounded-full">V8</span>
                    </div>
                    <button className="bg-awr-primary text-white px-3 py-1 rounded-md text-sm">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-awr-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-awr-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AWR</span>
                </div>
                <span className="ml-2 font-bold">Arabian World Rides</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Premium automotive dealership offering luxury vehicles, exceptional service, and unmatched customer experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Vehicles</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">SUVs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Sedans</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Electric</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Used Cars</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Roadside Assistance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Parts & Accessories</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Sheikh Zayed Road, Dubai, UAE</li>
                  <li>+971 4 123 4567</li>
                  <li>info@awr.ae</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500">
              <div className="flex justify-between items-center">
                <p>© {new Date().getFullYear()} Arabian World Rides. All rights reserved.</p>
                <a href="/flow" className="text-awr-primary hover:text-white transition-colors">View Chatbot Architecture</a>
              </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot Widget */}
      <ChatWindow />
    </div>
  );
};

export default Index;
