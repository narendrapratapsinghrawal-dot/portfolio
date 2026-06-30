import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Journey from './components/Journey';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="circuit-bg"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Journey />
        <About />
        <Expertise />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
