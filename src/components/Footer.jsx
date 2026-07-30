import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white shadow-glow">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900 dark:text-white block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {personalInfo.title} • {personalInfo.secondaryTitle}
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll Top */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>
              جميع الحقوق محفوظة © {new Date().getFullYear()} للمهندس مالك الهتاري.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 hover:scale-110 transition-transform shadow-sm"
              title="العودة لأعلى الصفحة"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
