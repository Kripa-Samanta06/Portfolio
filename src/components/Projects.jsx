import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  LineChart, 
  Code, 
  Sparkles, 
  X, 
  Users 
} from 'lucide-react';
import { Github } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (proj) => {
    soundEffects.playClick();
    setSelectedProject(proj);
  };

  const closeModal = () => {
    soundEffects.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <FolderGit2 size={14} />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Real-world collaborative projects demonstrating robust backend design, intuitive UIs, and clean system engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {portfolioData.projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-white/10 hover:border-cyan-400/40 transition-all duration-300 group shadow-2xl relative overflow-hidden"
            >
              {/* Decorative accent background */}
              <div 
                className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 ${
                  idx === 0 ? 'bg-cyan-500' : 'bg-purple-600'
                }`} 
              />

              <div>
                {/* Top badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-300">
                      {proj.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <Users size={12} className="text-purple-400" />
                      {proj.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {proj.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Key Achievements & Resume Bullets */}
                <div className="space-y-2.5 mb-6">
                  {proj.highlights.map((point, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-400/30 group-hover:text-cyan-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Links */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundEffects.playClick()}
                  onMouseEnter={() => soundEffects.playHover()}
                  className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white group/btn px-3.5 py-2 rounded-xl glass-pill hover:border-cyan-500/50 transition-all"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                  <ExternalLink size={13} className="text-slate-500 group-hover/btn:text-cyan-400 transition-colors" />
                </a>

                <button
                  onClick={() => openProjectModal(proj)}
                  onMouseEnter={() => soundEffects.playHover()}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all"
                >
                  <span>Project Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub profile banner */}
        <div className="mt-12 glass-pill p-6 rounded-2xl border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <FolderGit2 size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Looking for more code repositories?
              </h4>
              <p className="text-xs text-slate-400">
                Explore Kripa's personal GitHub organization and collaborative codebases.
              </p>
            </div>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => soundEffects.playClick()}
            onMouseEnter={() => soundEffects.playHover()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shrink-0"
          >
            <Github size={16} />
            <span>Visit GitHub (Kripa-Samanta06)</span>
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-8 text-left shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl glass-pill text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">Architecture & Purpose</h4>
                <p className="leading-relaxed bg-black/30 p-4 rounded-2xl border border-white/5">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Core Engineering Deliverables</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Applied Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-dark-900 hover:bg-cyan-400 transition-all"
              >
                <Github size={16} />
                <span>Open in GitHub</span>
              </a>
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
