import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Code, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navLinks = [
    { name: 'الرئيسية', href: '/#hero' },
    { name: 'نبذة عني', href: '/#about' },
    { name: 'المهارات', href: '/#skills' },
    { name: 'المشاريع', href: '/#projects' },
    { name: 'الخبرة', href: '/#experience' },
    { name: 'التعليم', href: '/#education' },
    { name: 'التواصل', href: '/#contact' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md py-3 border-b border-gray-200/50 dark:border-dark-border/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
              <Code className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight group-hover:text-brand-500 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                {personalInfo.title}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="تبديل الوضع الداكن/الفاتح"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 border border-gray-200 dark:border-dark-border transition-colors shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#contact');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white gradient-bg rounded-xl shadow-glow hover:opacity-95 transition-all"
            >
              <span>تواصل معي</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="قائمة التنقل للجوال"
              className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:text-brand-500 border border-gray-200 dark:border-dark-border transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-b border-gray-200 dark:border-dark-border px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-4 py-3 text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-xl hover:text-brand-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#contact');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-white gradient-bg rounded-xl shadow-glow"
            >
              <span>تواصل معي الان</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
