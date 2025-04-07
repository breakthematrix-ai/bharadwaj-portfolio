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
      title: "Founding Engineer - Robotics Software and AI",
      company: "Surgical Automations Inc.",
      location: "Dallas, TX",
      period: "Aug 2023 - Present",
      responsibilities: [
        "Designed full-stack robotics software for surgical devices using Python for backend, ReactJS for frontend and ROS for simulation with real-time UI overlays and surgeon-facing controls.",
        "Ported software from Python to C++ for enhanced performance, using OOP, multithreading, and multiprocessing.",
        "Built and deployed deep learning pipelines with Faster R-CNN, YOLO, UNet, and DepthAnything for anomaly detection and autonomous navigation.",
        "Developed custom computer vision algorithms for surgical scene understanding and visual servoing.",
        "Integrated multi-modal navigation with Kalman filtering using shape sensors, vision depth, and ToF-based collision avoidance.",
        "Engineered embedded communication using USB sensors and ESP32 for motors, cameras, and ToF sensors.",
        "Invented a flexible shape sensor and contributed to patents on the distal tip design for better navigation accuracy.",
        "Curated the world’s largest annotated lower GI tract navigation dataset and authored FDA-aligned technical docs."
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of Maryland",
      location: "College Park, MD",
      period: "Aug 2021 – May 2023",
      responsibilities: [
        {
          main: "Assisted in Teaching courses:",
          sub: [
                "1. Assistive Robotics",
                "2. Vibrations in Engineering",
                "3. Robotic Control and Optimization",
                "4. Integrated Product and Process Development"
          ]
        },
        "Created and graded weekly assignments, held office hours, and mentored students to bridge academic gaps.",
        "Encouraged and motivated over 80+ yound minds to excel in coursework and hands-on robotics."
      ]
    },
    {
      title: "Co-Founder and Robotics Engineer",
      company: "Solbots Technologies",
      location: "Hyderabad, India",
      period: "Jan 2020 - June 2021",
      responsibilities: [
        "Led development of a robotic arm prosthetic using Python and C++, reducing production time by 30%.",
        "Developed ROS simulations and manufactured a tactile control-based bionic arm for amputees.",
        "Conducted research with amputees to improve prosthetic usability and comfort.",
        "Built and deployed a food serving robot system, improving customer satisfaction by 25%.",
        "Managed business outreach during the pandemic, securing deployments of food serving robots for safety applications."
      ]
    },
    {
      title: "Product Design and Production Engineer",
      company: "Pennar Aerospace",
      location: "Hyderabad, India",
      period: "May 2019 – July 2019",
      responsibilities: [
        "Designed and developed aircraft parts using SolidWorks and AutoCAD.",
        "Handled production using CNC machines and 3D printers.",
        "Supervised quality control and maintenance of manufacturing equipment."
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
            <div key={index} className="bg-black/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-violet-900 hover:border-violet-400 transition-all">
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
                  typeof resp === 'string' ? (
                    <li key={i} className="hover:text-violet-400 transition-colors">{resp}</li>
                  ) : (
                    <li key={i} className="hover:text-violet-400 transition-colors">
                      {resp.main}
                      <ul className="list-circle list-inside ml-5">
                        {resp.sub.map((subItem, j) => (
                          <li key={j} className="hover:text-violet-400 transition-colors">{subItem}</li>
                        ))}
                      </ul>
                    </li>
                  )
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
