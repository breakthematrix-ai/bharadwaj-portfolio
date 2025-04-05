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
      degree: "M.S. in Engineering",
      institution: "University of Maryland at College Park",
      period: "2021 - 2023",
      description: "Focus on Robotics and Artificial Intelligence",
      achievements: [
        "GPA: 3.83/4.0",
        "Research Assistant in Autonomous Systems Lab",
        "Merit Scholarship Recipient"
      ]
    },
    {
      degree: "Graduate Studies",
      institution: "Wesleyan University",
      period: "2017 - 2019",
      description: "Focus on Abnormal and Behavioural Psychology",
      achievements: [
        "Magna Cum Laude",
        "Early Exploration of AI in Psychology"
      ]
    },
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "BML Munjal University, Gurgaon",
      period: "2016 - 2020",
      description: "Minor in Robotics",
      achievements: [
        "Magna Cum Laude",
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