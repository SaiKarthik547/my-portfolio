import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Award, Brain, Code, Cpu, Sparkles } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { portfolioData } from '../data/portfolioData';

const About: React.FC = () => {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 relative">
      <AnimatedBackground 
        mode="geometric"
        primaryColor="#a855f7" 
        secondaryColor="#38bdf8"
        accentColor="#22c55e"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Engineering the future through AI, full-stack architecture, and purposeful design.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column - The Journey (7/12) */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={itemVariants} className="glass-card p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Brain className="w-32 h-32 text-primary-400" />
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Sparkles className="w-8 h-8 text-primary-400 mr-4" />
                  Technical Vision
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I am an <span className="text-primary-400 font-semibold">AI Systems Engineer</span> and Full-Stack Developer graduated from VIT Chennai. My work focuses on the intersection of intelligent systems and scalable software architecture.
                  </p>
                  <p>
                    From developing <span className="text-secondary-400 font-semibold">Medical AI platforms</span> for brain disease analysis to building <span className="text-emerald-400 font-semibold">Multi-Agent workflows</span>, I thrive on solving complex problems that have real-world impact.
                  </p>
                  <p>
                    I believe that great software is a blend of <span className="text-amber-400 font-semibold">robust architecture</span> and <span className="text-rose-400 font-semibold">seamless user experience</span>. My goal is to build tools that don't just work, but empower people through intelligence and efficiency.
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl text-center hover:bg-white/5 transition-colors">
                  <div className="p-4 glass rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Cpu className="w-8 h-8 text-secondary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Systems First</h3>
                  <p className="text-gray-400">Building scalable, production-grade architectures.</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl text-center hover:bg-white/5 transition-colors">
                  <div className="p-4 glass rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Code className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Modern Stack</h3>
                  <p className="text-gray-400">Mastering Next.js, Python, and AI integration.</p>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Education & Milestones (5/12) */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div variants={itemVariants} className="glass-card p-10 rounded-3xl shadow-neon-purple">
                <h2 className="text-2xl font-bold text-white mb-10 flex items-center">
                  <Award className="w-7 h-7 text-amber-400 mr-4" />
                  Academic Foundation
                </h2>
                
                <div className="space-y-10 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-10">
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 ${
                        index === 0 ? 'bg-primary-500 border-primary-400' : 'bg-dark-300 border-gray-600'
                      } z-10`} />
                      
                      <div className="space-y-2">
                        <span className={`text-xs font-bold uppercase tracking-widest ${
                          index === 0 ? 'text-primary-400' : 'text-gray-500'
                        }`}>
                          {edu.year}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-2 shrink-0" />
                          <span>{edu.institution}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8 rounded-3xl text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <h3 className="text-2xl font-bold gradient-text mb-4">Let's Build Together</h3>
                  <p className="text-gray-400 mb-8 px-4">
                    I'm always open to discussing AI research, full-stack opportunities, or innovative collaborations.
                  </p>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-30 pointer-events-auto"
                    >
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-8 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-primary-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary-500/25 cursor-pointer relative z-30"
                      >
                        Get In Touch
                      </Link>
                    </motion.div>
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
