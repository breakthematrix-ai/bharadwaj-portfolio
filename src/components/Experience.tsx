import React from 'react';
import { Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Robotics Engineer",
      company: "Boston Dynamics",
      location: "Waltham, MA",
      period: "2022 - Present",
      responsibilities: [
        "Lead a team of 5 engineers in developing next-generation quadruped robots",
        "Implemented advanced AI algorithms improving robot navigation by 40%",
        "Designed and deployed custom ROS packages for robot control systems",
        "Collaborated with research teams to integrate computer vision capabilities"
      ]
    },
    {
      title: "Robotics Research Scientist",
      company: "NASA Jet Propulsion Laboratory",
      location: "Pasadena, CA",
      period: "2020 - 2022",
      responsibilities: [
        "Developed autonomous navigation systems for Mars rovers",
        "Reduced path planning computation time by 60% through optimization",
        "Published 3 papers on robust control systems for space robotics",
        "Mentored 4 junior engineers in robotics software development"
      ]
    },
    {
      title: "Robotics Software Engineer",
      company: "Intuitive Surgical",
      location: "Sunnyvale, CA",
      period: "2018 - 2020",
      responsibilities: [
        "Developed control algorithms for surgical robots",
        "Improved system response time by 25% through code optimization",
        "Implemented safety protocols for human-robot interaction",
        "Created simulation environments for testing robot behaviors"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg p-4">
              <Briefcase size={32} className="text-violet-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
            Experience
          </h2>
        </div>
        
        <div 
          ref={ref}
          className={`space-y-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-violet-900 hover:border-violet-400 transition-all"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-violet-400 text-lg">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400">{exp.location}</p>
                  <p className="text-gray-200">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="hover:text-violet-400 transition-colors">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;