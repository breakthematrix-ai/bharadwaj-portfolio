import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Ph.D. in Robotics Engineering",
      institution: "Massachusetts Institute of Technology",
      period: "2018 - 2022",
      description: "Specialized in Human-Robot Interaction and Machine Learning",
      achievements: [
        "Thesis: 'Advanced Control Systems for Collaborative Robots'",
        "Published 5 papers in top-tier robotics journals",
        "Received Outstanding Research Award"
      ]
    },
    {
      degree: "M.S. in Mechanical Engineering",
      institution: "Stanford University",
      period: "2016 - 2018",
      description: "Focus on Control Systems and Automation",
      achievements: [
        "GPA: 3.95/4.0",
        "Research Assistant in Autonomous Systems Lab",
        "Merit Scholarship Recipient"
      ]
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      period: "2012 - 2016",
      description: "Minor in Robotics",
      achievements: [
        "Summa Cum Laude",
        "Dean's List all semesters",
        "Robotics Club President"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 justify-center mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg p-4">
              <GraduationCap size={32} className="text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
            Education
          </h2>
        </div>
        
        <div 
          ref={ref}
          className={`space-y-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-cyan-900 hover:border-cyan-400 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-cyan-400 text-lg mb-2">{edu.institution}</p>
              <p className="text-violet-400 mb-4">{edu.period}</p>
              <p className="text-gray-200 mb-4">{edu.description}</p>
              <ul className="list-disc list-inside text-gray-200">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="mb-1 hover:text-cyan-400 transition-colors">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;