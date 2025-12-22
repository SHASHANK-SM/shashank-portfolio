
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignalPills from './components/SignalPills';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ValueSection from './components/ValueSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Check system preference for dark mode (though we stay neutral/light by default as requested)
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
      // Optional: Add a dark theme toggle if needed, but the brief says "System default -> fallback dark"
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-neutral-200 selection:text-neutral-900">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <SignalPills />

        <section id="skills" className="py-20 bg-white">
          <Skills />
        </section>

        <section id="work" className="py-20 border-t border-neutral-100">
          <FeaturedProject />
          <Projects />
        </section>

        <section id="experience" className="py-20 bg-neutral-50">
          <Experience />
        </section>

        <section className="py-20 border-y border-neutral-100 overflow-hidden">
          <Achievements />
        </section>

        <section id="value" className="py-20">
          <ValueSection />
        </section>

        <section id="contact" className="py-20 bg-neutral-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
