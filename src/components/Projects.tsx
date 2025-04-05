import React from 'react';
import { Terminal, Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Real-Time Motion Control for Robotic Endoscope",
      description: "Developed real-time motion control software in C++ for robotic endoscope articulation using computational state machines.",
      video: null,
      image: "assets/robotic_endoscope.png",
      technologies: ["C++", "Python", "Deep Learning", "Computer Vision"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Achieved jitter-free control for surgical applications",
        "Engineered multi-platform architecture with clean APIs"
      ]
    },
    {
      title: "Multi-Objective Motion Planning for Autonomous Vehicles",
      description: "Designed a hybrid planner using informed RRT* and ML to optimize paths in dynamic environments.",
      video: "https://player.vimeo.com/video/123456790",
      image: null,
      technologies: ["Python", "RRT*", "Machine Learning"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Improved trajectory accuracy by 20%",
        "Reduced planning time by 40%"
      ]
    },
    {
      title: "Autonomous Grasping Robot for Medical Waste",
      description: "Built an end-to-end software stack with perception, navigation, and manipulation to dispose of hazardous medical waste.",
      video: "https://www.youtube.com/embed/U7UHgr7ei_M",
      image: null,
      technologies: ["Python", "ROS", "OOP"],
      github: "https://github.com/bharadwaj-chukkala/MARIO-COM",
      demo: "https://github.com/bharadwaj-chukkala/MARIO-COM/blob/master/README.md",
      confidential: false,
      outcomes: [
        "140% improvement in efficiency",
        "85% reduction in hazardous exposure"
      ]
    },
    {
      title: "SLAM for Urban Search and Rescue",
      description: "Modeled a USR vehicle with Lidar and implemented SLAM using ROS for disaster area mapping.",
      video: "https://player.vimeo.com/video/123456792",
      image: null,
      technologies: ["C++", "ROS", "Lidar"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Enabled autonomous navigation in unstructured environments"
      ]
    },
    {
      title: "Deep Learning Motion Planner",
      description: "Trained a DNN for robot path prediction and compared performance with traditional planners.",
      video: null,
      image: "/images/dnn-motion.jpg",
      technologies: ["TensorFlow", "Scikit-Learn"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Achieved 96% accuracy on fresh test data"
      ]
    },
    {
      title: "3D Reconstruction using Stereo Vision",
      description: "Stitched panoramas and estimated depth using stereo vision and epipolar geometry.",
      video: "https://player.vimeo.com/video/123456794",
      image: null,
      technologies: ["OpenCV", "Python"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Accurate disparity map and depth estimation"
      ]
    },
    {
      title: "Human Detection and Tracking",
      description: "Developed perception software to detect and track humans using SVMs in OpenCV.",
      video: "https://player.vimeo.com/video/123456795",
      image: null,
      technologies: ["C++", "OpenCV", "SVM"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "92% accuracy in real-time tracking"
      ]
    },
    {
      title: "Lane Detection & Turn Prediction",
      description: "Built computer vision algorithms for autonomous driving lane tracking and turn prediction.",
      video: "https://www.youtube.com/embed/z0aSWJq3qpI",
      image: null,
      technologies: ["OpenCV", "Python"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "87% turn prediction accuracy"
      ]
    },
    {
      title: "Automated Material Handling with UR10",
      description: "Created a robotic system for material handling with over 100 ROS topics in Gazebo.",
      video: null,
      image: "/images/ur10-automation.jpg",
      technologies: ["C++", "ROS", "Gazebo"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Boosted production efficiency significantly"
      ]
    },
    {
      title: "LQG & LQR Control of Gantry Crane",
      description: "Designed optimal controllers for a crane system with Kalman filters for noise compensation.",
      video: "https://player.vimeo.com/video/123456798",
      image: null,
      technologies: ["MATLAB", "Control Theory"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Minimized oscillations and control effort"
      ]
    }
  ];
  

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-400 py-2 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg p-4">
              <Terminal size={32} className="text-cyan-400" />
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
                {project.video ? (
                  <iframe
                    src={project.video}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-white text-sm">
                    No media available
                  </div>
                )}
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

                <div className="flex gap-4 flex-wrap items-center">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  ) : project.confidential ? (
                    <span className="text-sm text-gray-400 italic">Code confidential</span>
                  ) : null}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  ) : project.confidential ? (
                    <span className="text-sm text-gray-400 italic">Demo confidential</span>
                  ) : null}
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
