import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          } 
        />
        <Route 
          path="/work-experience" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WorkExperience />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          } 
        />
        <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Optional: 404 page */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
