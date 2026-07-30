import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import {
  ArrowRight,
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Wrench,
  Trophy,
  Zap,
  ChevronLeft
} from 'lucide-react';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center text-center px-4">
        <div className="p-4 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-600 mb-4">
          <AlertCircle className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          المشروع غير موجود
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          عذراً، لم نتمكن من العثور على تفاصيل المشروع المطلوب.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white gradient-bg shadow-glow"
        >
          <ArrowRight className="w-5 h-5" />
          <span>العودة للصفحة الرئيسية</span>
        </Link>
      </div>
    );
  }

  // Related projects recommendations
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.categoryKey === project.categoryKey)
    .slice(0, 2);

  return (
    <div className="min-h-screen pt-28 pb-20">
      
      {/* Top Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/#projects')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:text-brand-500 hover:border-brand-500/40 transition-all text-sm font-semibold mb-6 shadow-sm"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة إلى معرض المشاريع</span>
        </button>

        {/* Project Header Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Hero Large Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden glass-card border border-gray-200 dark:border-dark-border shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column (Details) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview & Full Description */}
            <div className="glass-card p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-3 flex items-center gap-2">
                <Layers className="w-6 h-6 text-brand-500" />
                <span>عن المشروع والوصف الكامل</span>
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Problem Card */}
              <div className="p-6 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/40 space-y-3">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>المشكلة المعالجة</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-6 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/40 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>الحل المطور</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Key Features */}
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-3 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-500" />
                <span>الخصائص المميزة والمزايا الرئيسية</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50 text-sm text-gray-800 dark:text-gray-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Challenges & Solutions */}
            {project.challenges && (
              <div className="glass-card p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-3 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-brand-500" />
                  <span>التحديات التقنية وكيفية التغلب عليها</span>
                </h2>
                
                <div className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="font-bold text-gray-900 dark:text-white block mb-1">
                        تحدي #{idx + 1}:
                      </span>
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes & Business Impact */}
            {project.outcomes && (
              <div className="glass-card p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-3 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-emerald-500" />
                  <span>النتائج والقيمة المحققة</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 text-sm text-gray-800 dark:text-gray-200 font-medium"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                        نتيجة ملموسة:
                      </span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  معرض الصور والواجهات
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl, gIdx) => (
                    <div
                      key={gIdx}
                      className="aspect-video rounded-2xl overflow-hidden glass-card border border-gray-200 dark:border-dark-border shadow-md"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot ${gIdx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Meta Info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Actions Card */}
            <div className="glass-card p-6 space-y-4 sticky top-28">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-3">
                بطاقة المشروع والروابط
              </h3>

              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white gradient-bg shadow-glow hover:opacity-95 transition-opacity"
                  >
                    <span>معاينة الرابط المباشر</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gray-100 dark:bg-dark-hover text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-dark-border hover:border-brand-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>مستودع الكود (GitHub)</span>
                  </a>
                )}
              </div>

              {/* Tech Stack List */}
              <div className="pt-4 border-t border-gray-100 dark:border-dark-border space-y-3">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                  التقنيات المستخدمة:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Details Narrative */}
              {project.techDetails && (
                <div className="pt-4 border-t border-gray-100 dark:border-dark-border">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">
                    التفاصيل المعمارية:
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.techDetails}
                  </p>
                </div>
              )}

              {/* Back to Projects */}
              <div className="pt-4 border-t border-gray-100 dark:border-dark-border">
                <button
                  onClick={() => navigate('/#projects')}
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>العودة لجميع المشاريع</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
