import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDownLeft,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
  Download,
  MessageCircle
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-400/10 dark:bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Right Column (RTL text & info) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/60 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>متاح للعمل الحر والفرص الوظيفية المتميزة</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-2xl font-bold gradient-text">
                  {personalInfo.title}
                </span>
                <span className="hidden sm:inline text-gray-400 dark:text-gray-600">•</span>
                <span className="text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-400">
                  {personalInfo.secondaryTitle}
                </span>
              </div>
            </div>

            {/* Tagline / Pitch */}
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-2xl">
              {personalInfo.heroSubtitle}
            </p>

            {/* Specialization Tags */}
            <div className="pt-1 sm:pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 sm:mb-3">
                التخصصات الرئيسية:
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href={personalInfo.cvPdf}
                download="Malik_AlHitari_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white gradient-bg rounded-xl shadow-glow hover:shadow-glow-lg hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>تحميل السيرة الذاتية (CV)</span>
              </a>

              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>واتساب مباشر</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-xl hover:border-brand-500 hover:text-brand-500 transition-all duration-300 shadow-sm"
              >
                <span>المشاريع</span>
                <ArrowDownLeft className="w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200 dark:border-dark-border/60">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                روابط التواصل:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:text-brand-500 hover:bg-gray-200 dark:hover:bg-dark-hover transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:text-brand-500 hover:bg-gray-200 dark:hover:bg-dark-hover transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:text-brand-500 hover:bg-gray-200 dark:hover:bg-dark-hover transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  aria-label="Call Phone"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:text-brand-500 hover:bg-gray-200 dark:hover:bg-dark-hover transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Left Column (Avatar & Card Frame) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl gradient-bg opacity-30 group-hover:opacity-70 blur-xl transition duration-500" />
              
              <div className="relative rounded-3xl bg-white dark:bg-dark-card p-4 border border-gray-200 dark:border-dark-border shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-dark-bg">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback placeholder if image load fails
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Tech Pill on Photo */}
                  <div className="absolute bottom-4 right-4 left-4 p-3 rounded-xl glass-effect text-right space-y-1">
                    <p className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>خبرة برمجية متكاملة</span>
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                      React • Laravel • Flutter • Oracle
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
