import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const FAQSearch = ({ query, setQuery }) => {
  return (
    <div className="relative max-w-xl mx-auto mb-10">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search frequently asked questions..."
        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
      />
    </div>
  );
};
export default FAQSearch;
