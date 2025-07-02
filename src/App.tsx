import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import "./styles/styles.css";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><About /></PageTransition>} />
        <Route path="/work-experience" element={<PageTransition><WorkExperience /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><h2>404 Not Found</h2></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => (
  <Router>
    <Header />
    <div className="main-content">
      <AnimatedRoutes />
    </div>
    <Footer />
  </Router>
);

export default App;
