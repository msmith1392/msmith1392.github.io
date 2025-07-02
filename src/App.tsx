import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <motion.div key="about">
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="/work-experience" 
          element={
            <motion.div key="work-experience">
              <WorkExperience />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div key="contact">
              <Contact />
            </motion.div>
          } 
        />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
