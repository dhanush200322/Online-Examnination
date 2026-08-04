import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, AcademicCapIcon, TrophyIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const suggestions = [
  { name: 'Back to Home', href: '/', icon: HomeIcon, desc: 'Return to main landing page' },
  { name: 'Browse Exams', href: '/exams', icon: AcademicCapIcon, desc: 'Explore all certified practice tests' },
  { name: 'Leaderboard', href: '/leaderboard', icon: TrophyIcon, desc: 'Check global top rankings' },
  { name: 'Help & FAQ', href: '/faq', icon: QuestionMarkCircleIcon, desc: 'Find answers to common queries' },
];

const SuggestedPages = () => {
  return (
    <div className="my-10 max-w-2xl mx-auto">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 text-center">Suggested Destinations</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {suggestions.map((s) => (
          <Link
            key={s.name}
            to={s.href}
            className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all flex items-center gap-3 text-left group"
          >
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <s.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 dark:text-white">{s.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SuggestedPages;
