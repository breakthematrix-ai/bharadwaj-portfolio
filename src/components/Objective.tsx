import React from 'react';
import { Cpu, Target, Star, Trophy } from 'lucide-react';

export const Objective: React.FC = () => {
  return (
    <section id="objective" className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg p-4">
              <Cpu size={32} className="text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
            My Objective
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-6 md:p-8 rounded-lg border border-cyan-900 hover:border-cyan-400 transition-all backdrop-blur-sm">
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Vision</h3>
            <p className="text-gray-200">
              To become the world's leading expert in robotics and AI, pushing the boundaries
              of what's possible in human-robot interaction and autonomous systems.
            </p>
          </div>
          <div className="bg-black/50 p-6 md:p-8 rounded-lg border border-violet-900 hover:border-violet-400 transition-all backdrop-blur-sm">
            <Star className="w-12 h-12 text-violet-400 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Mission</h3>
            <p className="text-gray-200">
              Dedicated to continuous learning, innovation, and excellence in every project.
              Committed to making robotics more accessible and beneficial to humanity.
            </p>
          </div>
          <div className="bg-black/50 p-6 md:p-8 rounded-lg border border-cyan-900 hover:border-cyan-400 transition-all backdrop-blur-sm">
            <Trophy className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-4 text-white">Goals</h3>
            <p className="text-gray-200">
              To revolutionize the field of robotics through groundbreaking research,
              innovative solutions, and inspiring the next generation of engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};