import React from 'react';
import { Code, Cpu, PenTool as Tool, Monitor } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-cyan-400" size={24} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 90 },
        { name: "MATLAB", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "ROS", level: 90 }
      ]
    },
    {
      title: "Robotics Frameworks",
      icon: <Cpu className="text-violet-400" size={24} />,
      skills: [
        { name: "ROS/ROS2", level: 95 },
        { name: "Gazebo", level: 85 },
        { name: "MoveIt", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "TensorFlow", level: 80 }
      ]
    },
    {
      title: "Hardware Platforms",
      icon: <Tool className="text-cyan-400" size={24} />,
      skills: [
        { name: "Arduino", level: 90 },
        { name: "Raspberry Pi", level: 85 },
        { name: "NVIDIA Jetson", level: 80 },
        { name: "Industrial Robots", level: 85 },
        { name: "Sensors & Actuators", level: 90 }
      ]
    },
    {
      title: "Design Tools",
      icon: <Monitor className="text-violet-400" size={24} />,
      skills: [
        { name: "SolidWorks", level: 85 },
        { name: "AutoCAD", level: 80 },
        { name: "Fusion 360", level: 75 },
        { name: "KiCad", level: 70 },
        { name: "3D Printing", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg p-4">
              <Code size={32} className="text-violet-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
            Skills
          </h2>
        </div>
        
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-violet-900 hover:border-violet-400 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-900/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-violet-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: inView ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;