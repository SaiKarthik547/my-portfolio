import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ExternalLink, Code, Info, CheckCircle2, Zap } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { portfolioData } from '../data/portfolioData';
import { projectDetails } from '../data/projectDetails';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'live' | 'featured' | 'completed' | 'coming-soon';
}

interface ProjectDetail {
  id: string;
  title: string;
  fullDescription: string;
  features: string[];
  challenges: string[];
  results: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

const Projects: React.FC = () => {
  const portfolio = portfolioData.portfolio as Project[];
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const slugify = (text: string) => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

  const handleProjectClick = (project: Project) => {
    const slug = slugify(project.title);
    const detail = projectDetails[slug];
    
    if (detail) {
      setSelectedProject(detail);
    } else {
      // Fallback if no detailed data exists yet
      setSelectedProject({
        id: slug,
        title: project.title,
        fullDescription: project.description,
        features: ["Coming soon: Detailed features list"],
        challenges: ["Coming soon: Detailed challenges list"],
        results: ["Coming soon: Detailed results"],
        technologies: project.technologies,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 relative">
      <AnimatedBackground 
        mode="grid"
        primaryColor="#38bdf8" 
        secondaryColor="#a855f7"
        accentColor="#22c55e"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Featured Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between artificial intelligence and human-centric software.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {portfolio.map((project: Project, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative glass-card rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:translate-y-[-8px]">
                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                            title="View Source Code"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                        <div className="p-2 glass rounded-xl text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Info className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-500/5 text-primary-300 border border-primary-500/10 rounded-lg text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Innovation Quote */}
          <motion.div variants={itemVariants} className="pt-20 pb-10">
            <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Pushing Boundaries
              </h2>
              <p className="text-gray-300 text-lg mb-0 italic">
                "Code is not just logic; it's the medium through which we build the future. I focus on creating systems that aren't just powerful, but purposeful."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 glass rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column - Core Info */}
                <div className="lg:col-span-2 space-y-10">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-primary-400 mb-2">
                        <Zap className="w-6 h-6" />
                        <h3 className="text-xl font-bold">Key Features</h3>
                      </div>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex gap-3 text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results/Achievements */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-secondary-400 mb-2">
                        <CheckCircle2 className="w-6 h-6" />
                        <h3 className="text-xl font-bold">Impact & Results</h3>
                      </div>
                      <ul className="space-y-3">
                        {selectedProject.results.map((result, i) => (
                          <li key={i} className="flex gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 shrink-0 mt-2.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className="p-8 glass rounded-3xl border border-white/5">
                    <div className="flex items-center gap-3 text-orange-400 mb-4">
                      <Code className="w-6 h-6" />
                      <h3 className="text-xl font-bold">Technical Challenges</h3>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="flex gap-3 text-gray-300 bg-white/5 p-4 rounded-2xl">
                          <span className="text-orange-500 font-bold">0{i + 1}</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-8">
                  {/* Actions */}
                  <div className="flex flex-col gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all group border border-white/10 hover:border-white/20"
                      >
                        <Github className="w-6 h-6" />
                        <span>View Repository</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold transition-all group shadow-lg shadow-primary-500/20"
                      >
                        <ExternalLink className="w-6 h-6" />
                        <span>Live Preview</span>
                      </a>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="p-8 glass rounded-3xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/5 text-gray-300 rounded-xl text-sm font-medium border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats if any */}
                  {selectedProject.stats && (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.stats.map((stat, i) => (
                        <div key={i} className="p-6 glass rounded-3xl text-center border border-white/5">
                          <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

