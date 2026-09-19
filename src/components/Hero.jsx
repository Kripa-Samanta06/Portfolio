import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Download, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Layers
} from 'lucide-react';
import HeroScene from './canvas/HeroScene';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio, Title & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              <span>B.Tech CSE (AIML) Student • GPA 9.05/10</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono font-medium tracking-wider text-slate-400 uppercase">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white">
                Hi, I'm <br />
                <span className="gradient-text">{portfolioData.personal.name}</span>
              </h1>
            </div>

            {/* Subtitle / Role */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed max-w-2xl">
              <span className="text-white font-semibold">{portfolioData.personal.title}</span> based in{' '}
              <span className="inline-flex items-center gap-1 text-cyber-cyan font-mono text-base">
                <MapPin size={16} className="inline" /> Kolkata, India
              </span>.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              {portfolioData.personal.objective || portfolioData.personal.bio}
            </p>

            {/* Tech Badges Pill Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'Django', 'React', 'FastAPI', 'Java', 'SQL', 'TypeScript'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={() => soundEffects.playClick()}
                onMouseEnter={() => soundEffects.playHover()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                onClick={() => soundEffects.playClick()}
                onMouseEnter={() => soundEffects.playHover()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm glass-pill text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                <span>Get In Touch</span>
              </a>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundEffects.playHover()}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all w-full sm:w-auto"
              >
                <Download size={16} />
                <span>View CV</span>
              </button>
            </div>

            {/* Highlight Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full border-t border-white/10">
              {portfolioData.stats.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all"
                  onMouseEnter={() => soundEffects.playHover()}
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white flex items-baseline">
                    <span className="text-cyan-400">{item.value}</span>
                    <span className="text-xs text-slate-400 font-normal ml-0.5">{item.suffix}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-300">{item.label}</div>
                  <div className="text-[10px] text-slate-500 truncate">{item.detail}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Interactive Canvas Scene */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroScene />
          </div>

        </div>
      </div>
    </section>
  );
}
