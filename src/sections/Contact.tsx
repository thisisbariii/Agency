import React from 'react';
import { MapPin } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <section className="relative">
      {/* Background Map Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://via.placeholder.com/1200x600?text=Map+Preview" 
          alt="Map background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-neutral-100/80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-medium mb-4">Get In Touch</h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:ring-1 focus:ring-coral-500 focus:border-coral-500"
                    placeholder="Enter name"
                  />
                </div>
                
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:ring-1 focus:ring-coral-500 focus:border-coral-500"
                    placeholder="Enter email"
                  />
                </div>
                
                <div className="mb-4">
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:ring-1 focus:ring-coral-500 focus:border-coral-500"
                    placeholder="Message"
                  ></textarea>
                </div>
                
                <Button variant="primary" type="submit" className="w-full bg-coral-500 text-white px-3 py-2 rounded-md hover:bg-coral-600 text-sm font-medium">
                  SUBMIT FORM
                </Button>
              </form>
            </div>
          </div>
          
          {/* Map Pin Overlay and Controls */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            {/* Pulsing Pin */}
            <div className="absolute right-1/4 top-1/3 z-10">
              <div className="bg-coral-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <MapPin size={24} />
              </div>
            </div>

            {/* Fake map controls */}
            <div className="flex justify-center md:justify-end mb-4">
              <div className="bg-white shadow-md rounded-md p-2 flex space-x-2">
                <button className="p-1 hover:bg-neutral-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                <button className="p-1 hover:bg-neutral-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </button>
                <button className="p-1 hover:bg-neutral-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
