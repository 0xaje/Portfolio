import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollControls from './components/ScrollControls';
import WelcomeOverlay from './components/WelcomeOverlay';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <>
      <WelcomeOverlay />
      <BackgroundAnimation />
      <div className="cursor-glow"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Community />
        <Contact />
        <ScrollControls />
      </main>

      <Footer />
    </>
  );
}

export default App;
