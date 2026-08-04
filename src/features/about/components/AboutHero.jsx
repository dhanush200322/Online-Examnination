import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white py-20 px-6 sm:px-12 rounded-3xl mb-12 shadow-xl">
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-blue-200">
          <SparklesIcon className="w-4 h-4 text-yellow-400" /> Empowering Modern Education
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Reinventing How the World Prepares for Certification.
        </h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          We combine cutting-edge technology, proctored practice sessions, and adaptive analytics to help learners master their skills with confidence.
        </p>
      </div>

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};
export default AboutHero;
