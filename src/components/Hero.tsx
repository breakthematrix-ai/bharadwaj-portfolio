import React, { useCallback } from 'react';
import { Download, Github, Linkedin } from 'lucide-react';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-slim";
import { loadSlim } from "tsparticles-slim";

export const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center content-section">
      <div className="container mx-auto px-4 pt-20 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              Bharadwaj Chukkala
            </h1>
            <h2 className="text-xl md:text-3xl mb-6 text-cyan-400">
              Robotics and Artificial Intelligence Engineer
            </h2>
            <p className="text-base md:text-lg mb-8 text-gray-200">
              Pioneering the future of robotics with innovative solutions in robotics, 
              artificial intelligence, neuroscience, computer vision and mechanical design.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">

              
              <button className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg hover:from-cyan-600 hover:to-violet-600 transition-all">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
              
              
              <a 
                href="https://github.com/bharadwaj-chukkala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>

              <a 
                href="https://linkedin.com/in/bharadwaj-chukkala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            {/* <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0 opacity-50 md:opacity-100">
              <ParticleSphere />
            </div> */}
            <Particles
              className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-10 opacity-50 md:opacity-100"
              id="imageSphere"
              init={particlesInit}
              options={{
                background: {
                  color: {
                    value: "transparent",
                  },
                },
                fpsLimit: 120,
                particles: {
                  color: {
                    value: "#60a5fa",
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                      default: "bounce",
                    },
                    attract: {
                      enable: true,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 3 },
                  },
                  links: {
                    enable: true,
                    distance: 150,
                    color: "#60a5fa",
                    opacity: 0.3,
                    width: 1,
                  },
                },
                detectRetina: true,
              }}
            />
            <img 
              src="https://github.com/breakthematrix-ai/bharadwaj-portfolio/blob/main/assets/headshot.jpg" 
              alt="Bharadwaj Chukkala"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-cyan-400 relative z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};