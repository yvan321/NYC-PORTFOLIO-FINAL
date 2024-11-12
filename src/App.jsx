import { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Education from './sections/Education/Education';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading screen after 5 seconds
    }, 5000);

    window.addEventListener('load', () => {
      setLoading(false); 
    });

    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => setLoading(false));
    };
  }, []);

  return (
    <>
      {loading ? (
        <div id="loading-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <div id="content">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="#projects">
            <Projects />
          </section>
          <section id="#skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="#contact">
            <Contact />
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
