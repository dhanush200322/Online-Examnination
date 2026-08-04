import React from 'react';
import { ShieldCheckIcon, AcademicCapIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const AuthIllustration = ({ title = "Accelerate your learning journey", description = "Access hundreds of certified exams, track real-time statistics, and climb the global leaderboard." }) => {
  return (
    <div className="hidden lg:flex flex-col justify-between h-full p-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden rounded-3xl">
      {/* Background Decorative Blurs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6">
          <SparklesIcon className="w-4 h-4 text-yellow-300" />
          Modern Examination Platform
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight leading-tight mb-4">
          {title}
        </h2>
        <p className="text-blue-100 text-lg max-w-md">
          {description}
        </p>
      </div>

      <div className="relative z-10 space-y-4 my-8">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="p-2.5 rounded-xl bg-white/20">
            <AcademicCapIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Verified Certificates</h4>
            <p className="text-xs text-blue-100">Earn industry recognized credentials instantly.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="p-2.5 rounded-xl bg-white/20">
            <ShieldCheckIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Proctored & Secure</h4>
            <p className="text-xs text-blue-100">Simulated real-time exam environments.</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-100">
        <span className="flex items-center gap-1.5"><CheckCircleIcon className="w-4 h-4 text-green-400" /> 10,000+ Active Students</span>
        <span className="flex items-center gap-1.5"><CheckCircleIcon className="w-4 h-4 text-green-400" /> 99.9% Platform Uptime</span>
      </div>
    </div>
  );
};
export default AuthIllustration;
