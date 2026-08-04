import React from 'react';

const milestones = [
  { year: '2023', title: 'OES Conceptualization', desc: 'Initial architecture design and mock exam system rollout.' },
  { year: '2024', title: 'Global Leaderboards & Badges', desc: 'Introduced gamified streaks, achievement cards, and rank tracking.' },
  { year: '2025', title: 'Proctored Exam Environments', desc: 'Added full screen distraction-free test sessions and automated certificate generation.' },
  { year: '2026', title: 'AI-Powered Skill Analytics', desc: 'Launched personal growth trends and real-time performance insights.' },
];

const CompanyTimeline = () => {
  return (
    <div className="my-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Our Journey</span>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">Growth & Innovation Timeline</h2>
      </div>

      <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-32 space-y-12">
        {milestones.map((m, idx) => (
          <div key={m.year} className="relative pl-8 md:pl-12 group">
            {/* Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-950 group-hover:scale-125 transition-transform duration-200"></div>

            {/* Content */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold text-xs mb-2">
                {m.year}
              </span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">{m.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CompanyTimeline;
