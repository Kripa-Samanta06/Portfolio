import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  Terminal, 
  GraduationCap, 
  Award, 
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

        {/* Bio & Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Bio card with academic credentials */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between border-white/10 hover:border-cyan-500/30 transition-all">
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
                  I am a driven third-year Computer Science student based in <strong>Kolkata, West Bengal</strong>, seeking a 
                  <span className="text-cyber-cyan font-medium"> Software Developer or Cloud-based internship/entry-level role</span>.
                </p>
                <p>
                  My journey is anchored in strong fundamentals in <strong>Data Structures, Algorithms, and Object-Oriented Design</strong>. 
                  Through hands-on projects like <em>eVidyaHub</em> and <em>Fincy</em>, I have tackled real engineering problems ranging from 
                  conflict-free role-based authentication to real-time financial tracking and modern responsive user interfaces.
                </p>
                <p className="text-slate-400 text-sm italic border-l-2 border-cyan-500/40 pl-4 py-1">
                  "Eager to contribute to real-world software, collaborate with passionate engineering teams, and continuously grow as a developer."
                </p>
              </div>

              {/* Highlights badge list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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

          {/* Right: Interactive Futuristic Terminal Mockup */}
          <div className="lg:col-span-5 rounded-3xl bg-[#090d1a] border border-white/10 p-5 font-mono text-xs flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Terminal Window Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-2">bash - kripa@workstation: ~</span>
                </div>
                <Terminal size={14} className="text-slate-500" />
              </div>

              {/* Terminal code execution */}
              <div className="space-y-3 leading-relaxed text-slate-300">
                <p className="text-cyan-400">$ cat developer_profile.json</p>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-[11px] space-y-1 text-slate-300 overflow-x-auto">
                  <p><span className="text-purple-400">"candidate"</span>: <span className="text-emerald-300">"Kripa Samanta"</span>,</p>
                  <p><span className="text-purple-400">"university"</span>: <span className="text-emerald-300">"Brainware University"</span>,</p>
                  <p><span className="text-purple-400">"department"</span>: <span className="text-emerald-300">"CSE (AIML)"</span>,</p>
                  <p><span className="text-purple-400">"gpa"</span>: <span className="text-cyan-300">9.05</span>,</p>
                  <p><span className="text-purple-400">"location"</span>: <span className="text-emerald-300">"Kolkata, WB"</span>,</p>
                  <p><span className="text-purple-400">"availability"</span>: <span className="text-emerald-300">"Internships / Entry-level"</span>,</p>
                  <p><span className="text-purple-400">"core_languages"</span>: [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"C"</span>, <span className="text-amber-300">"SQL"</span>],</p>
                  <p><span className="text-purple-400">"frameworks"</span>: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Django"</span>, <span className="text-amber-300">"FastAPI"</span>]</p>
                </div>

                <p className="text-cyan-400">$ python -c "print(candidate.target_roles)"</p>
                <p className="text-slate-400">['Software Developer', 'Cloud Engineer', 'Backend Specialist']</p>

                <p className="text-cyan-400">$ echo $READY_TO_DEPLOY</p>
                <p className="text-emerald-400 font-bold">true - Eager to build impactful software!</p>
              </div>
            </div>

            {/* Terminal prompt footer */}
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-slate-500">
              <span className="text-cyan-400">➜</span>
              <span className="text-purple-400">~</span>
              <span className="text-slate-400 animate-pulse">▋</span>
            </div>
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
