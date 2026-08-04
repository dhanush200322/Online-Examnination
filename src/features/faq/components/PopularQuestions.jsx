import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const PopularQuestions = ({ onSelect }) => {
  const popular = [
    'How do I earn verified certificates?',
    'Can I retake an exam after failing?',
    'Is the exam environment proctored?'
  ];

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-3">
        <SparklesIcon className="w-4 h-4 text-blue-600" /> Popular Questions
      </div>
      <div className="flex flex-wrap gap-2">
        {popular.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="text-xs bg-white dark:bg-gray-800 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};
export default PopularQuestions;
