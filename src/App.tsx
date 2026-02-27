import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import './App.css';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Skills = lazy(() => import('./pages/Skills'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#050505]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full"
    />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen text-white relative overflow-x-hidden">
        <Navigation />
        
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0, x: -100, rotateY: -15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 100, rotateY: 15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/about" element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: -100, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 100, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <About />
                </motion.div>
              } />
              <Route path="/experience" element={
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: -15 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Experience />
                </motion.div>
              } />
              <Route path="/skills" element={
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -100, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Skills />
                </motion.div>
              } />
              <Route path="/services" element={
                <motion.div
                  key="services"
                  initial={{ opacity: 0, x: -100, y: -50 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 100, y: 50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Services />
                </motion.div>
              } />
              <Route path="/projects" element={
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, scale: 0.7, rotateX: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotateX: 30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Projects />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -100, y: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Contact />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;