import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Agency</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Projects</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-coral-500 uppercase mb-4">MENU</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Projects</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-coral-500 uppercase mb-4">SERVICE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Design</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Development</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">Marketing</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-coral-500 transition-colors">See More</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-coral-500 flex items-center justify-center text-white">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-coral-500 flex items-center justify-center text-white">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-coral-500 flex items-center justify-center text-white">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Agency | All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-coral-500 text-sm transition-colors">Terms of Use</a>
            <a href="#" className="text-neutral-500 hover:text-coral-500 text-sm transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;