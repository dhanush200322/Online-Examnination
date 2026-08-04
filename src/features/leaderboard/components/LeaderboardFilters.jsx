import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const LeaderboardFilters = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
      <div className="relative w-full sm:max-w-xs">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-gray-50 dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
          placeholder="Search users..."
        />
      </div>
      <div className="flex gap-2 w-full sm:w-auto">
        <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm">
          <option>Global</option>
          <option>Friends</option>
          <option>Region</option>
        </select>
        <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm">
          <option>This Week</option>
          <option>This Month</option>
          <option>All Time</option>
        </select>
      </div>
    </div>
  );
};
export default LeaderboardFilters;