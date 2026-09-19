import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    soundEffects.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                KS
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {portfolioData.personal.name}
              </div>
              <div className="text-xs text-slate-400">
                AIML & Full Stack Developer • Brainware University
              </div>
            </div>
          </div>

          {/* Copyright & Made with */}
          <div className="text-xs text-slate-500 text-center flex items-center gap-1.5">
            <span>Designed & Engineered for High Performance with React, Three.js & Tailwind</span>
          </div>

          {/* Actions & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-white hover:border-white/30 transition-all"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              title="Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              title="Scroll to Top"
              className="p-2 rounded-xl glass-pill text-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
