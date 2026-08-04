import React from 'react';
import PerformanceChart from './PerformanceChart';

const PerformanceOverview = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Performance Overview</h3>
        <select className="text-sm bg-gray-50 dark:bg-gray-800 border-none rounded-lg focus:ring-0 text-gray-600 dark:text-gray-300">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">Your average score trend over time.</p>
      <PerformanceChart />
    </div>
  );
};
export default PerformanceOverview;