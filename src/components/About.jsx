import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  GraduationCap, 
  Compass,
  Copy,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

const iconMap = {
  Server,
  Layout,
  Cpu,
  Code2,
};

export default function About() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    soundEffects.playChime();
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Compass size={14} />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            About <span className="gradient-text">Kripa Samanta</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Bridging algorithmic precision with real-world software engineering to create scalable, impactful digital solutions.
          </p>
        </div>

        {/* Bio Card with Academic Credentials */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between border-white/10 hover:border-cyan-500/30 transition-all mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Brainware University
                </h3>
                <p className="text-sm font-mono text-slate-400">
                  B.Tech in Computer Science Engineering (AIML) • Expected June 2028
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a driven third-year Computer Science student based in <strong>Kolkata, West Bengal</strong>, seeking a{' '}
                <span className="text-cyber-cyan font-medium">Software Developer or Cloud-based internship/entry-level role</span>.
              </p>
              <p>
                My journey is anchored in strong fundamentals in <strong>Data Structures, Algorithms, and Object-Oriented Design</strong>.{' '}
                Through hands-on projects like <em>eVidyaHub</em> and <em>Fincy</em>, I have tackled real engineering problems ranging from{' '}
                conflict-free role-based authentication to real-time financial tracking and modern responsive user interfaces.
              </p>
              <p className="text-slate-400 text-sm italic border-l-2 border-cyan-500/40 pl-4 py-1">
                "Eager to contribute to real-world software, collaborate with passionate engineering teams, and continuously grow as a developer."
              </p>
            </div>

            {/* Highlights badge list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">9.05 / 10 Current CGPA</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 size={18} className="text-purple-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">AIML Engineering Track</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 size={18} className="text-blue-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Full Stack Python & Django</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Collaborative Team Player</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              Primary Contact: <span className="text-cyan-300">{portfolioData.personal.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-pill text-xs font-mono text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* 4 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.focusPillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group"
                onMouseEnter={() => soundEffects.playHover()}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${pillar.gradient} border ${pillar.border} text-white group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-cyan-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Pillar 0{idx + 1}</span>
                  <span>Active Focus</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
