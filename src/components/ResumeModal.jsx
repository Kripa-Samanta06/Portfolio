import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundEffects.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0d1224] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 text-left space-y-8 max-h-[92vh] overflow-y-auto print:border-none print:shadow-none print:bg-white print:text-black print:p-0">
        
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>KRIPA SAMANTA — CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass-pill text-xs font-medium text-slate-200 hover:text-white hover:border-cyan-400/50 transition-all"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close CV"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Header */}
        <div className="text-center space-y-2 border-b border-white/10 pb-6 print:border-black/20">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white print:text-black tracking-tight uppercase">
            {portfolioData.personal.name}
          </h1>
          <p className="text-sm font-medium text-cyan-400 print:text-slate-800">
            Computer Science Student — Aspiring Software Developer
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-400 print:text-slate-700 pt-1">
            <span>Kolkata, West Bengal</span>
            <span>•</span>
            <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-cyan-300">
              {portfolioData.personal.phone}
            </a>
            <span>•</span>
            <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-cyan-300">
              {portfolioData.personal.email}
            </a>
            <span>•</span>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
              linkedin.com/in/kripa-samantaofficial
            </a>
            <span>•</span>
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
              github.com/Kripa-Samanta06
            </a>
          </div>
        </div>

        {/* Objective */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 pb-1 print:border-black/20">
            OBJECTIVE
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
            Third-year Computer Science student seeking a Software Developer or Cloud based internship/entry-level role. 
            Coursework and independent projects in Python, Java and Django; strong fundamentals in data structures, algorithms, 
            and object-oriented design. Eager to contribute to real-world software and grow as a developer.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 pb-1 print:border-black/20">
            EDUCATION
          </h2>
          <div>
            <div className="flex flex-wrap items-center justify-between font-bold text-sm text-white print:text-black">
              <span>B.Tech in Computer Science Engineering (AIML), Brainware University</span>
              <span className="font-mono text-xs text-cyan-400 print:text-slate-800">Expected June 2028</span>
            </div>
            <div className="text-xs text-slate-400 print:text-slate-600 italic">Barasat, West Bengal</div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-slate-300 print:text-slate-800">
              <li>
                <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Databases, Operating Systems, Web Development
              </li>
              <li>
                <strong>GPA:</strong> 9.05 / 10
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 pb-1 print:border-black/20">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
            <p>• <strong>Languages:</strong> Python, Java, C, SQL, TypeScript, JavaScript</p>
            <p>• <strong>Databases:</strong> MySQL, MongoDB</p>
            <p>• <strong>Frameworks & Libraries:</strong> React, Flask, Django, FastAPI</p>
            <p>• <strong>Tools & Platforms:</strong> Git/GitHub, VS Code, Linux, Oracle VirtualBox</p>
            <p>• <strong>Concepts:</strong> Data Structures & Algorithms, Object-Oriented Programming, Operating Systems</p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 pb-1 print:border-black/20">
            PROJECTS
          </h2>
          
          <div className="space-y-1">
            <div className="font-bold text-sm text-white print:text-black flex items-center justify-between">
              <span>eVidyahub</span>
              <a href="https://github.com/apexcode01/eVidyaHub" target="_blank" rel="noreferrer" className="text-xs font-mono text-cyan-400 print:text-slate-800 hover:underline">
                github.com/apexcode01/eVidyaHub
              </a>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
              <li>Built a Q&A platform using Python and Django; collaborated with a team of developers.</li>
              <li>Implemented a conflict-free, role-based dashboard.</li>
            </ul>
          </div>

          <div className="space-y-1">
            <div className="font-bold text-sm text-white print:text-black flex items-center justify-between">
              <span>Fincy</span>
              <a href="https://github.com/apexcode01/Fincy" target="_blank" rel="noreferrer" className="text-xs font-mono text-cyan-400 print:text-slate-800 hover:underline">
                github.com/apexcode01/Fincy
              </a>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
              <li>Built an expense tracker using TypeScript; collaborated with a team of developers.</li>
              <li>Applied CSS and JavaScript to build a smooth, user-friendly UI.</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-white/10 pb-1 print:border-black/20">
            CERTIFICATIONS
          </h2>
          <div className="text-xs text-slate-300 print:text-slate-800">
            • <strong>Python for Data Science</strong> — Udemy
          </div>
        </div>

      </div>
    </div>
  );
}
