import React from 'react';

const LatestWork: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'SOFA',
      category: 'Design',
      image: '/images/first.png',
      small: true,
    },
    {
      id: 2,
      title: 'KeyBoard',
      category: 'Branding',
      image: '/images/secondframe.png',
      small: false,
    },
    {
      id: 3,
      title: 'Work Media',
      category: 'Illustration',
      image: '/images/third.png',
      small: false,
    },
    {
      id: 4,
      title: 'DDDone',
      category: 'Motion',
      image: '/images/fourth.png',
      small: true,
    },
  ];

  return (
    <section className="py-24 bg-[#1E1F36] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-sm text-[#ff8860] uppercase mb-2 tracking-widest">Portfolio</p>
          <h2 className="text-4xl font-bold">Latest Work</h2>
        </div>

        {/* Grid with custom layout */}
        <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-16">
          {/* Top Left - Small */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img src={projects[0].image} alt={projects[0].title} className="w-full h-60 object-cover" />
            <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
              {projects[0].category}
            </span>
            <h3 className="absolute bottom-4 left-4 text-lg font-bold drop-shadow-lg">{projects[0].title}</h3>
          </div>

          {/* Top Right - Tall */}
          <div className="relative rounded-xl overflow-hidden shadow-lg row-span-2">
            <img src={projects[1].image} alt={projects[1].title} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
              {projects[1].category}
            </span>
            <h3 className="absolute bottom-4 left-4 text-lg font-bold drop-shadow-lg">{projects[1].title}</h3>
          </div>

          {/* Bottom Left - Tall */}
          <div className="relative rounded-xl overflow-hidden shadow-lg row-span-2">
            <img src={projects[2].image} alt={projects[2].title} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
              {projects[2].category}
            </span>
            <h3 className="absolute bottom-4 left-4 text-lg font-bold drop-shadow-lg">{projects[2].title}</h3>
          </div>

          {/* Bottom Right - Small */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img src={projects[3].image} alt={projects[3].title} className="w-full h-60 object-cover" />
            <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
              {projects[3].category}
            </span>
            <h3 className="absolute bottom-4 left-4 text-lg font-bold drop-shadow-lg">{projects[3].title}</h3>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
