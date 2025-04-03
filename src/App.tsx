import React, { useState, useEffect } from 'react';
import { VideoBackground } from './components/VideoBackground';
import { Navigation } from './components/Navigation';
import { SectionIndicator } from './components/SectionIndicator';
import { Hero } from './components/Hero';
import { Objective } from './components/Objective';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'objective', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = (section: string) => {
    setMobileMenuOpen(false);
    setActiveSection(section);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <VideoBackground />
      
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleMobileMenuClick={handleMobileMenuClick}
      />
      
      <SectionIndicator activeSection={activeSection} />
      
      <Hero />
      <Objective />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;