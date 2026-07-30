import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>المسيرة المهنية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            الخبرة المهنية
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            السجل المهني والمناصب البرمجية التي تقلدتها والمهام الفنية التي قمت بإنجازها.
          </p>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pr-8 border-r-2 border-brand-500/30 dark:border-brand-500/20 pb-12 last:pb-0">
              
              {/* Timeline Marker Icon */}
              <div className="absolute top-0 -right-3.5 w-7 h-7 rounded-full gradient-bg flex items-center justify-center text-white shadow-glow">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 space-y-4 hover:border-brand-500/40 transition-all duration-300">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 dark:border-dark-border pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-base mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 font-semibold border border-brand-200 dark:border-brand-800">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Narrative */}
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  {exp.description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                    المسؤوليات والإنجازات الرئيسية:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50 text-xs text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span className="leading-normal">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
