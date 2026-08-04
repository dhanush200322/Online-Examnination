import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No questions matching your search criteria.
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>{item.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180 text-blue-600' : 'text-gray-400'
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-50 dark:border-gray-800/50 pt-4 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FAQAccordion;
