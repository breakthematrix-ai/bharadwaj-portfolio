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
      title: "Multi-Algorithm Motion Planning for Autonomous Vehicles",
      description: "Designed a hybrid planner using informed RRT* and ML to optimize paths in dynamic environments.",
      video: null,
      image: "assets/rrt_ros.gif",
      technologies: ["Python", "RRT*", "Machine Learning"],
      github: "https://github.com/bharadwaj-chukkala/Path-Planning-for-a-Turtlebot-using-RRT-Astar-hybrid-Algorithm",
      demo: "https://github.com/bharadwaj-chukkala/Path-Planning-for-a-Turtlebot-using-RRT-Astar-hybrid-Algorithm",
      confidential: false,
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
      video: null,
      image: "assets/SLAM.png",
      technologies: ["C++", "ROS", "Lidar"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Multi-agent mobile robots that secure a hostage in an dynamic environment",
        "Enabled autonomous navigation in unstructured environments"
      ]
    },
    {
      title: "Data-Driven Deep Learning based Motion Planner",
      description: "Trained a DNN for robot path prediction and compared performance with traditional planners.",
      video: null,
      image: "assets/data_driven.png",
      technologies: ["TensorFlow", "Scikit-Learn"],
      github: "https://github.com/bharadwaj-chukkala/Data-driven-motion-planning-using-various-machine-learning-algorithms",
      demo: "https://github.com/bharadwaj-chukkala/Data-driven-motion-planning-using-various-machine-learning-algorithms",
      confidential: false,
      outcomes: [
        "Collected Environment Data using LIDAR sensor",
        "Trained a model to find the fastest path in the known environment",
        "Achieved 96% accuracy on fresh test data"
      ]
    },
    {
      title: "3D Reconstruction using Stereo Vision",
      description: "Stitched panoramas and estimated depth using stereo vision and epipolar geometry.",
      video: null,
      image: "assets/Multi_stereo_vision.jpg",
      technologies: ["OpenCV", "Python"],
      github: "https://github.com/bharadwaj-chukkala/Stereo-Vision-to-estimate-depth-in-an-image",
      demo: "https://github.com/bharadwaj-chukkala/Stereo-Vision-to-estimate-depth-in-an-image",
      confidential: false,
      outcomes: [
        "Utilized Epipolar Geometry to find similiarity in images",
        "Reconstruction of an environment using a series of images",
        "Accurate disparity map and depth estimation"
      ]
    },
    {
      title: "Human Detection and Tracking",
      description: "Developed perception software to detect and track humans using SVMs in OpenCV.",
      video: null,
      image: "assets/human_detector.jpg",
      technologies: ["C++", "OpenCV", "SVM", "Yolov5"],
      github: "https://github.com/bharadwaj-chukkala/Human-Detector-and-Tracker/",
      demo: "https://github.com/bharadwaj-chukkala/Human-Detector-and-Tracker/",
      confidential: false,
      outcomes: [
        "Trained Yolo model to detect Humans in low exposure images",
        "Implemented a SVM to track the detected humans in live feed",
        "92% accuracy in real-time tracking"
      ]
    },
    {
      title: "Lane Detection & Turn Prediction",
      description: "Built computer vision algorithms for autonomous driving lane tracking and turn prediction.",
      video: "https://www.youtube.com/embed/z0aSWJq3qpI",
      image: null,
      technologies: ["OpenCV", "Python", "Numpy"],
      github: "https://github.com/bharadwaj-chukkala/Road-Lanes-detection-and-Turn-Prediction-using-Sliding-Window-Algorithm",
      demo: "https://github.com/bharadwaj-chukkala/Road-Lanes-detection-and-Turn-Prediction-using-Sliding-Window-Algorithm",
      confidential: false,
      outcomes: [
        "Canny Edge Detection for detecting road lines and type",
        "Used Sliding window algorithm to predict the amount of turn and the direction",
        "97% turn prediction accuracy"
      ]
    },
    {
      title: "Automated Material Handling with UR10",
      description: "Created a robotic system for material handling with over 100 ROS topics in Gazebo.",
      video: null,
      image: "assets/ur10.gif",
      technologies: ["C++", "ROS", "Gazebo"],
      github: "https://github.com/bharadwaj-chukkala/ARIAC-Software-Development",
      demo: "https://github.com/bharadwaj-chukkala/ARIAC-Software-Development",
      confidential: false,
      outcomes: [
        "Designed a system that calculates inverse kinematics of the robots",
        "Utlized Object detection to identify distinct objects to categorize in bins",
        "Boosted production efficiency significantly using automation",
      ]
    },
    {
      title: "LQG & LQR Control of Gantry Crane",
      description: "Designed optimal controllers for a crane system with Kalman filters for noise compensation.",
      video: null,
      image: "assets/gantry_control.gif",
      technologies: ["MATLAB", "Control Theory"],
      github: "https://github.com/bharadwaj-chukkala/Control-system-for-two-pendulum-crane",
      demo: "https://github.com/bharadwaj-chukkala/Control-system-for-two-pendulum-crane",
      confidential: false,
      outcomes: [
        "Implemented a Luenberger Observer",
        "Minimized oscillations and control effort"
      ]
    },
    {
      title: "Exploratory Study: Linking Neural Activity Patterns to Behavioral Disorders",
      description: "Investigating how EEG and fMRI neural activity patterns may serve as potential predictors for behavioral disorders such as ADHD, OCD, depression, and schizophrenia, grounded in abnormal psychology research",
      video: null,
      image: "assets/neural_activity.png",
      technologies: ["Python", "Data Science", "fMRI", "EEG"],
      github: null,
      demo: null,
      confidential: true,
      outcomes: [
        "Training a Deep Learning model on Open Source Neuroimaging Data",
        "Bridging Psychology Theories with Neural Activity Data Interpretation"
      ]
    },
    {
      title: "Detection of Malignant Skin Cancer using Deep Learning",
      description: "A solution which can evaluate images and alert the dermatologists about the presence of melanoma has the potential to reduce a lot of manual effort needed in diagnosis.",
      video: null,
      image: "assets/cancer_cell.png",
      technologies: ["CNN", "Python", "Hyperparamter Tuning"],
      github: "https://github.com/bharadwaj-chukkala/Detection_of_Malignant_Skin_Cancer_using_a_CNN",
      demo: "https://github.com/bharadwaj-chukkala/Detection_of_Malignant_Skin_Cancer_using_a_CNN",
      confidential: false,
      outcomes: [
        "Built a Neural Network Architecture from Scratch",
        "Detects 9 different types of Malignant Cancers",
        "Achieved a model accuracy of 91%"
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
