import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  BrainCircuit, 
  Terminal, 
  CheckCircle, 
  Sparkles,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frameworks', label: 'Frameworks', icon: Layers },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools & OS', icon: Wrench },
    { id: 'concepts', label: 'Core CS', icon: BrainCircuit },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-purple-500/20 text-xs font-mono text-purple-400">
            <Cpu size={14} />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Curated skill set developed through academic coursework, engineering projects, and hands-on system building.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundEffects.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundEffects.playHover()}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'glass-pill text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Languages Section */}
        {(activeCategory === 'all' || activeCategory === 'languages') && (
          <div className="mb-12">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Programming Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolioData.skills.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border-white/5 hover:border-cyan-400/40 group"
                  onMouseEnter={() => soundEffects.playHover()}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm"
                        style={{ backgroundColor: `${lang.color}15`, color: lang.color }}
                      >
                        {lang.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {lang.name}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400">{lang.tag}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-cyan-400 font-semibold">{lang.level}%</span>
                  </div>

                  {/* Level progress bar */}
                  <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-purple-500"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frameworks & Libraries */}
        {(activeCategory === 'all' || activeCategory === 'frameworks') && (
          <div className="mb-12">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {portfolioData.skills.frameworks.map((fw, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border-white/5 hover:border-purple-400/40 group"
                  onMouseEnter={() => soundEffects.playHover()}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {fw.category}
                    </span>
                    <span className="font-mono text-xs text-purple-400 font-semibold">{fw.level}%</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                    {fw.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {fw.desc}
                  </p>
                  <div className="w-full bg-dark-800 rounded-full h-1 mt-4">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${fw.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Databases & Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Databases */}
          {(activeCategory === 'all' || activeCategory === 'databases') && (
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Databases
              </h3>
              <div className="space-y-4">
                {portfolioData.skills.databases.map((db, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-2xl border-white/5 hover:border-emerald-400/40 flex items-center justify-between group"
                    onMouseEnter={() => soundEffects.playHover()}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Database size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {db.name}
                        </h4>
                        <p className="text-xs text-slate-400">{db.desc}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300">
                      {db.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Platforms */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioData.skills.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 rounded-2xl border-white/5 hover:border-blue-400/40 group"
                    onMouseEnter={() => soundEffects.playHover()}
                  >
                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1">
                      {tool.category}
                    </div>
                    <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors text-sm">
                      {tool.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Core Computer Science Concepts */}
        {(activeCategory === 'all' || activeCategory === 'concepts') && (
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Core Computer Science Fundamentals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {portfolioData.skills.concepts.map((concept, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border-white/10 hover:border-amber-400/40 transition-all group"
                  onMouseEnter={() => soundEffects.playHover()}
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                    <BrainCircuit size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {concept.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {concept.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
