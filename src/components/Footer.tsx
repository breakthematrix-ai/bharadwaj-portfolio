import React from 'react';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm py-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">© 2025 Bharadwaj Chukkala. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:bchukkal@terpmail.umd.edu" className="text-gray-400 hover:text-cyan-400">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/bharadwaj-chukkala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/bharadwaj-chukkala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://calendly.com/bharadwaj-chukkala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};