"use client";
import { useState } from "react";

const teamMembers = [
  { name: "Azah Anyeni", role: "Designer", image: "/images/blacklad.png" },
  { name: "Roelof Bekkenkens", role: "React Developer", image: "/images/hatguy.png" },
  { name: "Leonardo Oliveira", role: "Illustrator", image: "/images/redlady.png" },
  { name: "Izabella Tabakova", role: "Product Designer", image: "/images/whitelady.png" },
];

const Team = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="bg-[#1C1C34] text-white py-24 px-4 relative overflow-hidden">
      {/* CTA Block */}
      <div className="relative max-w-6xl mx-auto bg-white rounded-2xl flex flex-col md:flex-row items-center px-6 md:px-16 py-12 overflow-visible shadow-xl">
        
        {/* Decorative Star Icon */}
        <div className="absolute -top-8 -left-8 z-30">
          <div className="w-20 h-20 flex items-center justify-center">
            <img src="/images/icon.png" alt="Icon" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Left Content */}
        <div className="md:w-2/5 mb-8 md:mb-0 z-20">
          <p className="text-xs font-bold text-[#EF6D58] uppercase mb-2">Get Started</p>
          <h3 className="text-black text-3xl md:text-4xl font-bold leading-tight mb-4">
            We Help Companies <br /> Move Faster
          </h3>
          <button className="bg-[#EF6D58] text-white font-medium px-6 py-3 rounded hover:opacity-90 transition">
            Contact Us
          </button>
        </div>

        {/* Middle Graph Element */}
        <div className="md:w-1/5 flex justify-center items-center -mt-10 z-20">
          <div className="bg-[#FFF1E9] p-4 rounded-xl shadow-md w-[160px]">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-yellow-300 rounded-full w-4 h-4"></div>
              <div className="bg-purple-400 rounded w-12 h-1.5"></div>
            </div>
            <div className="w-full">
              <svg width="100%" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 30C10 25 15 15 25 10C35 5 40 15 50 10C60 5 65 0 75 5C85 10 90 0 100 0" stroke="#EF6D58" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Woman Image */}
        <div className="md:w-2/5 flex justify-end relative z-10 -mt-28">
          <img
            src="/images/image.png"
            alt="Professional Woman"
            className="h-[300px] object-contain"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-20">
        {/* Heading + Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-400 uppercase mb-1">Our Team</p>
            <h2 className="text-3xl font-bold text-white leading-tight">
              Team of Designers <br /> and Developers
            </h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-[#EF6D58] hover:border-[#EF6D58] transition"
            >
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-[#EF6D58] hover:border-[#EF6D58] transition"
            >
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => {
            const index = (startIndex + i) % teamMembers.length;
            const member = teamMembers[index];
            return (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-35 h-35 rounded-lg mx-auto mb-4 object-cover border border-gray-600 shadow-md"
                />
                <h4 className="font-semibold text-white text-base mb-1">{member.name}</h4>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {teamMembers.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === startIndex ? "bg-[#EF6D58]" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
