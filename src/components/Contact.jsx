import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  Sparkles,
  MessageSquare,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { soundEffects } from '../utils/audio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setCurrentTime(timeString);
      } catch {
        setCurrentTime('IST (Kolkata)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (type) => {
    soundEffects.playChime();
    if (type === 'email') {
      navigator.clipboard.writeText(portfolioData.personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText(portfolioData.personal.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleQuickFill = () => {
    soundEffects.playClick();
    setFormData({
      name: 'Engineering Recruiter / Tech Lead',
      email: 'recruiter@company.com',
      subject: 'Internship / Software Developer Opportunity for Kripa',
      message: `Hi Kripa,\n\nI reviewed your portfolio and was impressed by your 9.05 CGPA in B.Tech CSE (AIML) at Brainware University, as well as your work on eVidyaHub and Fincy. We would love to connect with you regarding an engineering opportunity.\n\nBest regards,\nEngineering Team`
    });
  };

  // 1-Click Direct Compose with Gmail Web
  const handleSendViaGmail = (e) => {
    if (e) e.preventDefault();
    soundEffects.playChime();

    const senderName = formData.name.trim() || 'Portfolio Visitor';
    const senderEmail = formData.email.trim() || 'visitor@portfolio.com';
    const subj = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${senderName} via Portfolio`
    );
    const bodyContent = `Sender: ${senderName} (${senderEmail})\n\nMessage:\n${
      formData.message.trim() || 'Hello Kripa,\n\nI would like to connect regarding an opportunity.'
    }\n\n--\nSent from Kripa Samanta Portfolio`;

    const body = encodeURIComponent(bodyContent);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.personal.email}&su=${subj}&body=${body}`;

    // Open Gmail directly in a new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    // Trigger celebration
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  // 1-Click Send with Default Mail App (Outlook, Apple Mail, etc.)
  const handleSendViaMailApp = () => {
    soundEffects.playChime();

    const senderName = formData.name.trim() || 'Portfolio Visitor';
    const senderEmail = formData.email.trim() || 'visitor@portfolio.com';
    const subj = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${senderName} via Portfolio`
    );
    const bodyContent = `Sender: ${senderName} (${senderEmail})\n\nMessage:\n${
      formData.message.trim() || 'Hello Kripa,\n\nI would like to connect regarding an opportunity.'
    }\n\n--\nSent from Kripa Samanta Portfolio`;

    const body = encodeURIComponent(bodyContent);
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subj}&body=${body}`;

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <MessageSquare size={14} />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Interested in collaboration, internship opportunities, or discussing technical projects? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="glass-panel p-6 rounded-3xl border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400">CURRENT STATUS</span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Active
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Ready for Engineering Roles
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open for Software Developer and Cloud Internships/Entry-level positions. Available for remote, hybrid, or on-site roles.
              </p>

              {/* Kolkata Local Time */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2 text-slate-400">
                  <Clock size={15} className="text-cyan-400" />
                  Kolkata, India Time
                </span>
                <span className="text-white font-bold">{currentTime || 'IST'}</span>
              </div>
            </div>

            {/* Email Card */}
            <div 
              className="glass-panel p-5 rounded-2xl border-white/10 hover:border-cyan-400/40 transition-all group flex items-center justify-between"
              onMouseEnter={() => soundEffects.playHover()}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">DIRECT EMAIL</div>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300 transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('email')}
                title="Copy Email"
                className="p-2.5 rounded-xl glass-pill text-slate-400 hover:text-white hover:border-cyan-400/40 transition-all shrink-0 ml-2"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div 
              className="glass-panel p-5 rounded-2xl border-white/10 hover:border-purple-400/40 transition-all group flex items-center justify-between"
              onMouseEnter={() => soundEffects.playHover()}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">DIRECT PHONE / WHATSAPP</div>
                  <a 
                    href={`tel:${portfolioData.personal.phone}`}
                    className="text-xs sm:text-sm font-medium text-white group-hover:text-purple-300 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('phone')}
                title="Copy Phone"
                className="p-2.5 rounded-xl glass-pill text-slate-400 hover:text-white hover:border-purple-400/40 transition-all shrink-0 ml-2"
              >
                {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundEffects.playHover()}
                onClick={() => soundEffects.playClick()}
                className="glass-pill p-4 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all flex items-center gap-3 text-slate-300 hover:text-white"
              >
                <Linkedin size={20} className="text-blue-400" />
                <div className="text-left">
                  <div className="text-xs font-bold">LinkedIn</div>
                  <div className="text-[10px] text-slate-400 truncate">kripa-samanta...</div>
                </div>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundEffects.playHover()}
                onClick={() => soundEffects.playClick()}
                className="glass-pill p-4 rounded-2xl border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all flex items-center gap-3 text-slate-300 hover:text-white"
              >
                <Github size={20} className="text-slate-200" />
                <div className="text-left">
                  <div className="text-xs font-bold">GitHub</div>
                  <div className="text-[10px] text-slate-400 truncate">Kripa-Samanta06</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border-white/10 relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Send a Direct Message
              </h3>
              {/* Quick Fill Button */}
              <button
                type="button"
                onClick={handleQuickFill}
                title="Fill in sample inquiry details"
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all"
              >
                <RefreshCw size={12} />
                <span>Auto-Fill Sample</span>
              </button>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Messages will be addressed directly to <strong className="text-cyan-400">{portfolioData.personal.email}</strong>.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Check size={28} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Email Composer Opened!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been pre-filled and addressed to <strong>{portfolioData.personal.email}</strong>. Simply click <strong>Send</strong> in your mail window to dispatch it straight to Kripa's inbox!
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaGmail}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-cyan-500 text-dark-900 hover:bg-cyan-400 transition-all"
                  >
                    Re-open in Gmail
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono glass-pill text-slate-300 hover:text-white"
                  >
                    Compose new message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendViaGmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Software Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share role requirements, project details, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit & Mail App Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    onMouseEnter={() => soundEffects.playHover()}
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-xl shadow-cyan-500/20 hover:scale-[1.01] active:scale-95 transition-all"
                  >
                    <Send size={16} />
                    <span>Send via Gmail Web</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaMailApp}
                    title="Open in default desktop mail app (Outlook, Windows Mail, Apple Mail)"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-xs glass-pill text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all"
                  >
                    <ExternalLink size={15} />
                    <span>Send via Mail App</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
