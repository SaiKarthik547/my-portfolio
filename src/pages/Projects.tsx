import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ExternalLink, Code2, AlertCircle, CheckCircle2, ArrowRight, Layers, Award, Sparkles, Cpu, Lightbulb } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { portfolioData } from '../data/portfolioData';
import { projectDetails, type ProjectDetail } from '../data/projectDetails';
import MermaidDiagram from '../components/MermaidDiagram';

interface ProjectCard {
  id?: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'live' | 'featured' | 'completed' | 'coming-soon';
}

const Projects: React.FC = () => {
  const portfolio = portfolioData.portfolio as ProjectCard[];
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const slugify = (text: string) => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

  const handleProjectClick = (project: ProjectCard) => {
    const key = project.id || slugify(project.title);
    const detail = projectDetails[key];
    
    if (detail) {
      setSelectedProject(detail);
    } else {
      // Fallback
      setSelectedProject({
        id: key,
        title: project.title,
        tier: 'completed',
        tagline: project.description,
        problem: project.description,
        whyIBuiltIt: "Exploration of modern software architectures and engineering solutions.",
        solution: project.description,
        engineeringDecisions: [
          {
            challenge: "Core architecture implementation",
            approach: "Applied modular patterns and modern best practices."
          }
        ],
        results: [
          { label: "Status", value: "Completed", context: "Verified implementation" }
        ],
        impact: "Demonstrates practical software engineering principles.",
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
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
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
          <div className="text-center space-y-4">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-primary-400 text-sm font-medium border border-primary-500/20">
              <Sparkles className="w-4 h-4" />
              <span>Engineering Case Studies</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-3xl mx-auto">
              In-depth breakdowns of real-world systems, architectural decisions, ML pipelines, and measurable outcomes. Click any case study to inspect the technical implementation.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.id || index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => handleProjectClick(project)}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer group hover:border-primary-500/40 transition-all shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 relative overflow-hidden"
              >
                {/* Background Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/15 transition-all" />

                <div>
                  {/* Top Row: Status Badge + Repo Link */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
                      project.status === 'featured'
                        ? 'bg-primary-500/15 text-primary-300 border border-primary-500/30'
                        : 'bg-white/10 text-gray-400 border border-white/10'
                    }`}>
                      {project.status === 'featured' ? 'Flagship System' : 'Completed'}
                    </span>
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-gray-400 hover:text-white glass rounded-xl hover:bg-white/10 transition-all"
                        title="View Source Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Badges + Case Study Prompt */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-white/5 text-gray-300 border border-white/5 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Read Engineering Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            
            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass-card rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl border border-white/10 custom-scrollbar text-left z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 p-3 glass rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all z-20 border border-white/10"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Case Study Container */}
              <div className="space-y-10">
                
                {/* 1. Header Section */}
                <div className="space-y-4 pr-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      selectedProject.tier === 'flagship'
                        ? 'bg-primary-500/15 text-primary-300 border border-primary-500/30'
                        : 'bg-white/10 text-gray-300 border border-white/10'
                    }`}>
                      {selectedProject.tier === 'flagship' ? 'Flagship System' : 'Completed Project'}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    {selectedProject.title}
                  </h2>

                  <p className="text-lg text-primary-300/90 font-medium">
                    {selectedProject.tagline}
                  </p>

                  {/* Actions & Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold text-sm transition-all border border-white/10 group shadow-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary-500/20 group"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview / Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Disclaimer Callout (e.g. for MediConsult prototype or PharmaTrack simulation) */}
                {selectedProject.prototypeDisclaimer && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm flex gap-3 items-start leading-relaxed">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-amber-300">Project Scope Note: </span>
                      {selectedProject.prototypeDisclaimer}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-xs font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 2. The Problem & Why I Built It */}
                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  {/* Problem */}
                  <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/15 space-y-3">
                    <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4" />
                      <span>The Problem</span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Why I Built It */}
                  <div className="p-6 rounded-2xl bg-sky-500/5 border border-sky-500/15 space-y-3">
                    <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4" />
                      <span>Why I Built It</span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {selectedProject.whyIBuiltIt}
                    </p>
                  </div>
                </div>

                {/* 3. The Solution */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 text-primary-400 font-bold text-sm uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>The Solution</span>
                  </div>
                  <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 leading-relaxed text-gray-200 text-sm sm:text-base">
                    {selectedProject.solution}
                  </div>
                </div>

                {/* 4. Architecture & Pipeline Diagrams */}
                {selectedProject.architecture && (
                  <div className="space-y-6 pt-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                      <Layers className="w-4 h-4" />
                      <span>System Architecture & Pipeline</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedProject.architecture.summary}
                    </p>

                    {/* Mermaid Diagrams */}
                    {selectedProject.architecture.diagrams && selectedProject.architecture.diagrams.length > 0 && (
                      <div className="space-y-4">
                        {selectedProject.architecture.diagrams.map((diag, i) => (
                          <MermaidDiagram
                            key={i}
                            title={diag.title}
                            chart={diag.chart}
                          />
                        ))}
                      </div>
                    )}

                    {/* Fallback Stages (if diagrams not present) */}
                    {(!selectedProject.architecture.diagrams || selectedProject.architecture.diagrams.length === 0) &&
                      selectedProject.architecture.stages && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {selectedProject.architecture.stages.map((stage, i) => (
                            <div
                              key={i}
                              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-3 group"
                            >
                              <div>
                                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                                    {stage.step}
                                  </span>
                                </div>
                                <h4 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors mb-2">
                                  {stage.title}
                                </h4>
                                <p className="text-gray-300 text-xs leading-relaxed">
                                  {stage.description}
                                </p>
                              </div>

                              {stage.technologies && stage.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                                  {stage.technologies.map((t, ti) => (
                                    <span key={ti} className="text-[10px] px-2 py-0.5 bg-black/40 text-gray-400 rounded">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                )}

                {/* 5. Engineering Decisions */}
                {selectedProject.engineeringDecisions && selectedProject.engineeringDecisions.length > 0 && (
                  <div className="space-y-5 pt-2">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wider">
                      <Code2 className="w-4 h-4" />
                      <span>Engineering Decisions</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.engineeringDecisions.map((decision, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3"
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 shrink-0 mt-0.5">
                              Challenge
                            </span>
                            <span className="text-sm font-semibold text-white">
                              {decision.challenge}
                            </span>
                          </div>

                          <div className="flex items-start gap-2 pl-1 border-l-2 border-primary-500/40 mt-2">
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-2">
                              <strong className="text-primary-300 font-semibold">Approach: </strong>
                              {decision.approach}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. Results & Evidence */}
                <div className="space-y-5 pt-2">
                  <div className="flex items-center gap-2 text-secondary-400 font-bold text-sm uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Results & Evidence</span>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedProject.results.map((metric, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 hover:border-secondary-500/30 transition-all"
                      >
                        <div className="text-2xl sm:text-3xl font-extrabold gradient-text tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-xs font-semibold text-gray-200">
                          {metric.label}
                        </div>
                        {metric.context && (
                          <div className="text-[11px] text-gray-400 italic pt-1">
                            {metric.context}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Results Summary */}
                  {selectedProject.resultsSummary && (
                    <p className="text-gray-300 text-sm leading-relaxed p-4 rounded-xl bg-white/5 border border-white/5">
                      {selectedProject.resultsSummary}
                    </p>
                  )}

                  {/* Screenshots (if verified in repo) */}
                  {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Repository Screenshots
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {selectedProject.screenshots.map((s, i) => (
                          <div key={i} className="space-y-2 group">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-lg aspect-video flex items-center justify-center">
                              <img
                                src={s.url}
                                alt={s.caption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <p className="text-xs text-gray-400 text-center italic">
                              {s.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 7. Impact */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-green-400 font-bold text-sm uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Impact & Takeaways</span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed p-5 rounded-2xl bg-green-500/5 border border-green-500/15">
                    {selectedProject.impact}
                  </p>
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
