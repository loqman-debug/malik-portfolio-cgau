import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-dark-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>المؤهلات الأكاديمية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            التعليم والشهادات
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            الخلفية التعليمية الأكاديمية والشهادات التدريبية التخصصية.
          </p>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:border-brand-500/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3.5 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400">
                    {index === 0 ? <GraduationCap className="w-7 h-7" /> : <Award className="w-7 h-7" />}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-dark-hover text-gray-700 dark:text-gray-300">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    {edu.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-brand-600 dark:text-brand-400">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-dark-border flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1 font-medium">
                  <BookOpen className="w-3.5 h-3.5 text-brand-500" /> الحالة:
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {edu.status}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
