import React from 'react';

const HowWeWork: React.FC = () => {
  return (
    <section className="bg-[#fff6f2] py-16">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <p className="text-xs text-[#d16d5b] font-medium uppercase tracking-wider mb-2">
              HOW WE WORK
            </p>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 leading-tight">
              Making Your Projects<br />Look Awesome
            </h2>
            <p className="text-[#555555] text-sm mb-5 max-w-md leading-relaxed">
              Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.
            </p>
            <span className="text-sm font-medium text-[#1a1a1a]">Read More</span>
          </div>

          {/* Right Column - Big Numbers */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="flex items-start gap-6">
              <span className="text-5xl font-bold text-[#1a1a1a]">1</span>
              <p className="text-base text-[#1a1a1a] font-medium pt-2">Full service range including</p>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-5xl font-bold text-[#1a1a1a]">2</span>
              <p className="text-base text-[#1a1a1a] font-medium pt-2">Technical skills, design, business</p>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-5xl font-bold text-[#1a1a1a]">3</span>
              <p className="text-base text-[#1a1a1a] font-medium pt-2">Themselves in the merchant's</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e5e5] mb-16"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Video */}
          <div className="relative w-full md:w-1/2 aspect-video">
            <img
              src="/images/thumbnail.png"
              alt="Video thumbnail"
              className="rounded-lg w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#d16d5b] border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
            {/* Video Duration */}
            <span className="absolute bottom-3 left-3 text-xs bg-black bg-opacity-40 text-white px-2 py-1 rounded">
              1:45
            </span>
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-xs text-[#d16d5b] font-medium uppercase tracking-wider mb-2">
              VIDEO REEL
            </p>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
              Unlock The Greatest<br />Value Possible
            </h3>
            <p className="text-[#555555] text-sm max-w-sm leading-relaxed">
              Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;