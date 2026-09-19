import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle, 
  ExternalLink,
  Star
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <GraduationCap size={14} />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Rigorous engineering curriculum coupled with targeted industry certifications in data science and algorithmic problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Degree (Brainware University) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {portfolioData.education[0].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {portfolioData.education[0].degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {portfolioData.education[0].institution}
                  </p>
                </div>
              </div>

              {/* GPA Badge */}
              <div className="shrink-0 p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-right">
                <div className="text-xs font-mono text-slate-400">GPA Score</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300 flex items-center gap-1">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span>{portfolioData.education[0].gpa}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-6 pb-6 border-b border-white/10">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-cyan-400" />
                {portfolioData.education[0].timeline}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-purple-400" />
                {portfolioData.education[0].location}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {portfolioData.education[0].description}
            </p>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-cyan-400" />
                Relevant Academic Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.education[0].coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-medium hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            {portfolioData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 hover:border-purple-500/30 transition-all relative overflow-hidden group"
                onMouseEnter={() => soundEffects.playHover()}
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Award size={26} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                      Verified Certification
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Issued by <span className="text-white font-medium">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {cert.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle size={15} className="text-purple-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    {cert.date}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <span>Udemy Verified</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}

            {/* Academic Achievement Highlights Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent border border-white/10 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Star size={16} className="text-cyan-400 fill-cyan-400" />
                Academic Standing Summary
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Maintaining an exceptional <strong>9.05 / 10 CGPA</strong> in B.Tech CSE (AIML), placing Kripa among top-tier students with sustained excellence across theory, mathematics, and lab implementations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
