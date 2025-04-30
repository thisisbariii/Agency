import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-[#fff6f2] py-20">
      <div className="container mx-auto px-6">
        {/* Logo row */}
        <div className="flex justify-between items-center flex-wrap mb-20 text-sm text-gray-500 font-semibold opacity-80">
          <span>Digitalside</span>
          <span>vortex</span>
          <span>Studio Doodle</span>
          <span>FUZION</span>
          <span>MediaFury</span>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Section (Image with overlay) */}
          <div className="relative w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/laptop.png"
                alt="Office desk"
                className="object-cover w-full h-[360px]"
              />
            </div>
            {/* Profile image */}
            <div className="absolute -bottom-10 left-6">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-24 h-24 rounded-full border-[6px] border-white shadow-xl"
              />
            </div>
          </div>

          {/* Right Section (Text and CTA) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-xs text-pink-400 font-semibold uppercase mb-2 tracking-widest">About</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
              An Experience<br />Design Agency
            </h2>
            <p className="text-gray-600 text-base mb-6 max-w-md">
              Excell by putting themselves in the merchant’s shoes. It’s meant to partner on the long run, and work as an extension of the merchant’s team.
            </p>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition w-fit">
              About us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 bg-white p-8 rounded-xl shadow-sm text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900">42%</p>
            <p className="text-gray-500 mt-1 text-sm">Years of experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">73+</p>
            <p className="text-gray-500 mt-1 text-sm">Agency members</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">5.000</p>
            <p className="text-gray-500 mt-1 text-sm">Projects complete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
