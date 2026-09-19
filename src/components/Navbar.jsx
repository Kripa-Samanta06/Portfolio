import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  FileText, 
  Send, 
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = soundEffects.toggle();
    setSoundEnabled(state);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glass-panel shadow-2xl border-white/10 py-3 px-5 sm:px-6' 
            : 'bg-transparent py-2 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center gap-3 group"
            onMouseEnter={() => soundEffects.playHover()}
            onClick={() => soundEffects.playClick()}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm bg-gradient-to-r from-cyber-cyan to-purple-400 bg-clip-text text-transparent">
                  KS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-wide text-white group-hover:text-cyber-cyan transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                onMouseEnter={() => soundEffects.playHover()}
                onClick={() => soundEffects.playClick()}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
              className="p-2 rounded-xl glass-pill text-slate-300 hover:text-cyber-cyan hover:border-cyan-500/40 transition-all"
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} className="text-slate-500" />}
            </button>

            {/* Social quick links */}
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-pill text-slate-300 hover:text-white hover:border-white/30 transition-all"
              title="GitHub Profile"
              onMouseEnter={() => soundEffects.playHover()}
            >
              <Github size={18} />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-pill text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              title="LinkedIn Profile"
              onMouseEnter={() => soundEffects.playHover()}
            >
              <Linkedin size={18} />
            </a>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg glass-pill text-slate-300"
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-pill text-white hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-4 rounded-2xl glass-panel border border-white/10 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg glass-pill text-slate-300"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg glass-pill text-slate-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <button
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase bg-cyan-500 text-dark-900"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
