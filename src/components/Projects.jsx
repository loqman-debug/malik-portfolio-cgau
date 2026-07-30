import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { FolderGit2, ExternalLink, ArrowLeft, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'جميع المشاريع' },
    { key: 'mobile', label: 'تطبيقات الجوال' },
    { key: 'web', label: 'تطبيقات الويب' },
    { key: 'ecommerce', label: 'المتاجر الإلكترونية' },
    { key: 'systems', label: 'الأنظمة والبرمجيات' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.categoryKey === activeFilter || (activeFilter === 'systems' && (p.categoryKey === 'systems' || p.categoryKey === 'financial')));

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-dark-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" />
            <span>معرض الأعمال</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            المشاريع المميزة
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            تطبيقات ومواقع وأنظمة برمجية متكاملة قمت بتطويرها لحل مشكلات وتسهيل العمليات للشركات والعملاء.
          </p>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === filter.key
                  ? 'gradient-bg text-white shadow-glow'
                  : 'bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:bg-gray-100 dark:hover:bg-dark-hover'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Project Image & Category Pill */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-dark-bg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60" />
                
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-dark-card/90 text-brand-600 dark:text-brand-400 backdrop-blur-md shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Problem Statement Snippet */}
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50 text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-brand-600 dark:text-brand-400 block mb-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 inline" /> المشكلة المعالجة:
                    </span>
                    <span className="line-clamp-2">{project.problem}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-dark-hover text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gray-100 dark:border-dark-border flex items-center justify-between">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group/link"
                  >
                    <span>عرض التفاصيل الكاملة</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover/link:-translate-x-1 transition-transform" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 hover:text-brand-500 hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
                      title="معاينة بالموقع"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
