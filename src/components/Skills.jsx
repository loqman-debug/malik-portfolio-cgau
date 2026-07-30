import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Code,
  Globe,
  Smartphone,
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  Check
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Code2,
  Server,
  Database,
  Wrench
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'متقدمة':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
      case 'عملية':
        return 'bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border-brand-200 dark:border-brand-800/60';
      case 'أساسية':
      default:
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>القدرات التقنية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            المهارات والتقنيات
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            مجموعة المهارات البرمجية والأدوات التي أعتمد عليها لبناء تطبيقات متكاملة وقابلة للتوسع.
          </p>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'gradient-bg text-white shadow-glow'
                : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-hover'
            }`}
          >
            جميع المهارات
          </button>
          {skillCategories.map((cat) => {
            const IconComp = iconMap[cat.icon] || Code;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'gradient-bg text-white shadow-glow'
                    : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-hover'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComp = iconMap[category.icon] || Code;
            return (
              <div
                key={category.id}
                className="glass-card p-6 flex flex-col justify-between group hover:border-brand-500/40 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-gray-100 dark:border-dark-border">
                    <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Items List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50/70 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50 hover:border-brand-500/20 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
                          <Check className="w-4 h-4 text-brand-500 shrink-0" />
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend Notice */}
        <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> خبرة متقدمة
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-500" /> خبرة عملية واحترافية
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> أساسيات قوية
          </span>
        </div>

      </div>
    </section>
  );
}
