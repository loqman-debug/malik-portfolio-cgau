import React from 'react';
import { personalInfo, aboutStats } from '../data/portfolioData';
import { UserCheck, Target, ShieldCheck, Zap, Code2, Cpu } from 'lucide-react';

export default function About() {
  const highlights = [
    { title: 'جودة الكود والنظافة', desc: 'التزام كامل بمبادئ Clean Code وSOLID لبناء أنظمة سهلة الصيانات والتطوير.', icon: Code2 },
    { title: 'الأمان والوثوقية', desc: 'توفير آليات حماية متقدمة للبيانات وواجهات برمجة التطبيقات ضد الثغرات.', icon: ShieldCheck },
    { title: 'الأداء والسرعة', desc: 'تحسين استعلامات SQL ومعالجة الصور لضمان الاستجابة الفائقة.', icon: Zap },
    { title: 'تجربة المستخدم UX/UI', desc: 'بناء واجهات عربية ومريحة بصرياً تراعي تجربة الزائر والمستخدم النهائي.', icon: Target },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-dark-card/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>من أنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            نبذة عني
          </h2>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Narrative (Text) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="glass-card p-6 sm:p-8 space-y-5">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                {personalInfo.bio}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                أجمع بين المهارات التقنية والتحليل المنطقي وحل المشكلات، وأستطيع التعاون بمرونة فائقة ضمن فرق التطوير وتحويل المتطلبات المعقدة إلى أنظمة وتطبيقات عملية وجاهزة للإنتاج.
              </p>
            </div>

            {/* Core Values / Focus Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-brand-500/40 transition-colors shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutStats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 border-r-4 border-r-brand-500 flex items-center justify-between group hover:scale-[1.02] transition-transform duration-300"
              >
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">
                    {stat.value}
                  </span>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.desc}
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-gray-100 dark:bg-dark-bg text-brand-500 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
