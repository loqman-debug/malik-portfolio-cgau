import React from 'react';
import { softSkillsData, languagesData } from '../data/portfolioData';
import {
  Brain,
  MessageSquare,
  Sparkles,
  Users,
  Clock,
  Lightbulb,
  Languages,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Brain,
  MessageSquare,
  Sparkles,
  Users,
  Clock,
  Lightbulb
};

export default function SoftSkills() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>الصفات الشخصية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            المهارات الشخصية واللغات
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            المهارات الناعمة واللغات التي تدعم التواصل والتعاون البناء في بيئة العمل.
          </p>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Soft Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {softSkillsData.map((skill, index) => {
            const IconComp = iconMap[skill.icon] || Sparkles;
            return (
              <div
                key={index}
                className="glass-card p-6 flex items-start gap-4 hover:border-brand-500/40 transition-all duration-300"
              >
                <div className="p-3 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Section Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-dark-border pb-4">
              <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  اللغات المعرفية
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  لغات التواصل المكتوبة والشفهية في البيئة البرمجية والمهنية.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {languagesData.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white block text-sm">
                        {lang.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {lang.proficiency}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
