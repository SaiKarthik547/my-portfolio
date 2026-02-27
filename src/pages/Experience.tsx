import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Code, Brain, Cpu, Zap, Heart } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { portfolioData } from '../data/portfolioData';

const Experience: React.FC = () => {
  const { experience, education } = portfolioData;

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

  const getExpertiseIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain className="w-8 h-8 text-primary-400" />;
      case 'heart': return <Heart className="w-8 h-8 text-rose-400" />;
      case 'code': return <Code className="w-8 h-8 text-emerald-400" />;
      case 'zap': return <Zap className="w-8 h-8 text-amber-400" />;
      default: return <Cpu className="w-8 h-8 text-secondary-400" />;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 relative">
      <AnimatedBackground 
        mode="stream"
        primaryColor="#38bdf8" 
        secondaryColor="#a855f7"
        accentColor="#22c55e"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Experience & Growth
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My trajectory as an AI Systems Engineer, defined by technical expertise and the impact of the systems I build.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column - Education & Certifications (5/12) */}
            <div className="lg:col-span-5 space-y-12">
              {/* Education Section */}
              <motion.section variants={itemVariants} className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 glass rounded-2xl">
                    <Award className="w-8 h-8 text-amber-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Education</h2>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-amber-400 before:to-transparent">
                      <div className="glass-card p-6 rounded-2xl hover:translate-x-2 transition-transform duration-300">
                        <span className="text-amber-400 text-sm font-bold uppercase tracking-widest block mb-2">{edu.year}</span>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-gray-400">{edu.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Certification Section */}
              <motion.section variants={itemVariants} className="space-y-8 pt-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 glass rounded-2xl">
                    <Cpu className="w-8 h-8 text-secondary-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Specialization</h2>
                </div>
                
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-24 h-24 text-secondary-400" />
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{experience.certification.title}</h3>
                      <span className="px-3 py-1 bg-secondary-400/10 text-secondary-400 border border-secondary-400/20 rounded-full text-xs font-bold uppercase tracking-tighter">
                        {experience.certification.status}
                      </span>
                    </div>
                    <p className="text-primary-400 font-semibold mb-4">{experience.certification.organization}</p>
                    <p className="text-gray-400 mb-6 leading-relaxed">{experience.certification.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.certification.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-lg text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Right Column - Technical Expertise (7/12) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 glass rounded-2xl">
                  <Sparkles className="w-8 h-8 text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Technical Expertise</h2>
              </div>

              <div className="grid gap-6">
                {experience.expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-card p-8 rounded-3xl group hover:shadow-neon transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute -right-4 -bottom-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                      {getExpertiseIcon(item.icon)}
                    </div>
                    
                    <div className="items-start space-x-6 relative hidden md:flex">
                      <div className="p-4 glass rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-500">
                        {getExpertiseIcon(item.icon)}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 md:hidden">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 glass rounded-xl">
                          {getExpertiseIcon(item.icon)}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

                {/* Call to Projects */}
                <motion.div variants={itemVariants} className="pt-8">
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center space-x-3 text-primary-400 font-bold hover:text-white transition-colors group"
                  >
                    <span className="text-xl">View detailed project implementations</span>
                    <Code className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Add Sparkles to icons import
const Sparkles = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

export default Experience;
