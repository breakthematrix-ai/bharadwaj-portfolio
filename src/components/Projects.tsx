import React from 'react';
import { Rocket, Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Autonomous Drone Navigation System",
      description: "Developed an AI-powered navigation system for autonomous drones using computer vision and deep learning.",
      video: "https://player.vimeo.com/video/225408543",
      technologies: ["Python", "TensorFlow", "ROS", "OpenCV"],
      github: "https://github.com",
      demo: "https://demo.com",
      outcomes: [
        "Achieved 95% accuracy in obstacle detection",
        "Reduced processing latency by 40%",
        "Implemented in 3 commercial drone models"
      ]
    },
    {
      title: "Robotic Arm for Precision Manufacturing",
      description: "Created a 6-DOF robotic arm with advanced control systems for high-precision manufacturing tasks.",
      video: "https://player.vimeo.com/video/152188988",
      technologies: ["C++", "ROS", "MATLAB", "CAD"],
      github: "https://github.com",
      demo: "https://demo.com",
      outcomes: [
        "Increased manufacturing precision by 30%",
        "Reduced setup time by 50%",
        "Implemented in 5 manufacturing plants"
      ]
    },
    {
      title: "Smart Prosthetic Hand",
      description: "Designed and developed a neural network-controlled prosthetic hand with tactile feedback.",
      video: "https://player.vimeo.com/video/196492857",
      technologies: ["Python", "TensorFlow", "Arduino", "3D Printing"],
      github: "https://github.com",
      demo: "https://demo.com",
      outcomes: [
        "Achieved 90% gesture recognition accuracy",
        "Reduced response time to 50ms",
        "Successfully tested with 10 patients"
      ]
    },
    {
      title: "Autonomous Drone Navigation System",
      description: "Developed an AI-powered navigation system for autonomous drones using computer vision and deep learning.",
      video: "https://player.vimeo.com/video/225408543",
      technologies: ["Python", "TensorFlow", "ROS", "OpenCV"],
      github: "https://github.com",
      demo: "https://demo.com",
      outcomes: [
        "Achieved 95% accuracy in obstacle detection",
        "Reduced processing latency by 40%",
        "Implemented in 3 commercial drone models"
      ]
    },
    {
      title: "Robotic Arm for Precision Manufacturing",
      description: "Created a 6-DOF robotic arm with advanced control systems for high-precision manufacturing tasks.",
      video: "https://player.vimeo.com/video/152188988",
      technologies: ["C++", "ROS", "MATLAB", "CAD"],
      github: "https://github.com",
      demo: "https://demo.com",
      outcomes: [
        "Increased manufacturing precision by 30%",
        "Reduced setup time by 50%",
        "Implemented in 5 manufacturing plants"
      ]
    },
    {
      title: "Smart Prosthetic Hand",
      description: "Designed and developed a neural network-controlled prosthetic hand with tactile feedback.",
      video: "https://player.vimeo.com/video/196492857",
      technologies: ["Python", "TensorFlow", "Arduino", "3D Printing"],
      github: "https://github.com",
      demo: "https://demo.com",
      outcomes: [
        "Achieved 90% gesture recognition accuracy",
        "Reduced response time to 50ms",
        "Successfully tested with 10 patients"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg p-4">
              <Rocket size={32} className="text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
            Projects
          </h2>
        </div>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-cyan-900 hover:border-cyan-400 transition-all"
            >
              <div className="relative pt-[56.25%]">
                <iframe
                  src={project.video}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  {project.outcomes.map((outcome, i) => (
                    <p key={i} className="text-gray-200 text-sm hover:text-cyan-400 transition-colors">• {outcome}</p>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;