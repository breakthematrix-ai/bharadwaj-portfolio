import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Rocket } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleMobileMenuClick: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleMobileMenuClick,
}) => {
  const sections = ['home', 'education', 'experience', 'projects', 'skills', 'contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <span className="text-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 text-transparent bg-clip-text">
              Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                spy={true}
                offset={-100}
                className={`cursor-pointer transition-colors capitalize text-lg ${
                  activeSection === section
                    ? 'text-cyan-400 relative after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {section}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4 border-t border-cyan-900">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                spy={true}
                offset={-100}
                className={`block px-4 py-2 capitalize font-semibold text-lg ${
                  activeSection === section
                    ? 'text-cyan-400 bg-cyan-950/30'
                    : 'text-white hover:text-cyan-400'
                }`}
                onClick={() => handleMobileMenuClick(section)}
              >
                {section}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};