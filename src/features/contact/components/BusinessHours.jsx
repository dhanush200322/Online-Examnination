import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

const BusinessHours = () => {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
      <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold">
        <ClockIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h4>Support Hours</h4>
      </div>
      <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1">
          <span>Monday - Friday</span>
          <span className="font-semibold text-gray-900 dark:text-white">9:00 AM - 6:00 PM EST</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1">
          <span>Saturday</span>
          <span className="font-semibold text-gray-900 dark:text-white">10:00 AM - 4:00 PM EST</span>
        </div>
        <div className="flex justify-between">
          <span>Sunday</span>
          <span className="text-red-500 font-semibold">Closed</span>
        </div>
      </div>
    </div>
  );
};
export default BusinessHours;
