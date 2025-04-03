import React from 'react';
import { Link } from 'react-scroll';

interface SectionIndicatorProps {
  activeSection: string;
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({ activeSection }) => {
  const sections = ['home', 'objective', 'education', 'experience', 'projects', 'skills', 'contact'];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          spy={true}
          offset={-100}
          className="group relative flex items-center"
        >
          <span
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? 'bg-gradient-to-r from-cyan-400 to-violet-400 scale-125'
                : 'bg-gray-600 group-hover:bg-cyan-400'
            }`}
          />
          <span
            className={`absolute left-6 px-2 py-1 rounded bg-black/80 backdrop-blur-sm text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              activeSection === section ? 'text-cyan-400' : 'text-white'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        </Link>
      ))}
    </div>
  );
};