import React from 'react';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
