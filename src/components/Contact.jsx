import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [copiedField, setCopiedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'الرجاء تعبئة جميع الحقول المطلوبة قبل الإرسال.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'الرجاء إدخال بريد إلكتروني صحيح.'
      });
      return;
    }

    setLoading(true);

    // Simulate server response
    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'شكرًا لتواصلك! تم إرسال رسالتك بنجاح وسأقوم بالرد عليك في أقرب وقت ممكن.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-dark-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>تواصل معي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            دعنا نعمل معاً
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            سواء كان لديك مشروع جديد، استفسار تقني، أو فرصة عمل، يسعدني تواصلك المباشر في أي وقت.
          </p>
          <div className="w-20 h-1.5 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-dark-border pb-4">
                معلومات التواصل المباشر
              </h3>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                    البريد الإلكتروني
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-gray-900 dark:text-white hover:text-brand-500 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 text-gray-400 hover:text-brand-500 transition-colors"
                  title="نسخ البريد"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                    رقم الهاتف / الواتساب
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-gray-900 dark:text-white hover:text-brand-500 transition-colors block dir-ltr text-right"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 text-gray-400 hover:text-brand-500 transition-colors"
                  title="نسخ رقم الهاتف"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                    الموقع الجغرافي
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Live Site Link Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-bg/60 border border-gray-100 dark:border-dark-border/50">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                    الموقع المرجعي الحقيقي
                  </span>
                  <a
                    href={`https://${personalInfo.liveSite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline truncate block"
                  >
                    {personalInfo.liveSite}
                  </a>
                </div>
              </div>

              {/* Direct Job Application Quick Actions */}
              <div className="pt-2 space-y-3">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>تواصل فوري عبر الواتساب</span>
                </a>

                <a
                  href={personalInfo.cvPdf}
                  download="Malik_AlHitari_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/80 border border-brand-200 dark:border-brand-800 hover:bg-brand-100 dark:hover:bg-brand-900/60 transition-colors text-sm"
                >
                  <span>تحميل ملف السيرة الذاتية CV</span>
                </a>
              </div>

            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                أرسل لي رسالة مباشرة
              </h3>

              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-rose-50 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكريم"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:border-brand-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:border-brand-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                    عنوان الرسالة *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="مثال: مشروع تطوير تطبيق موبايل جديد"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:border-brand-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">
                    تفاصيل الرسالة *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب تفاصيل الفكرة أو المتطلبات الخاصة بك هنا..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:border-brand-500 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-white gradient-bg rounded-xl shadow-glow hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري إرسال الرسالة...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>إرسال الرسالة الآن</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
