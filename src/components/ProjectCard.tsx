import React from 'react';

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, className = '' }) => {
  return (
    <div className={`overflow-hidden rounded-xl group relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-white inline-block py-1 px-3 rounded text-sm font-medium text-neutral-800 mb-2">
          {category}
        </div>
        <h3 className="text-white text-xl md:text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;