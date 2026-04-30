import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import HowIWork from './components/HowIWork';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <Hero />
      <About />
      {/* <HowIWork /> */}
      <WorkExperience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
