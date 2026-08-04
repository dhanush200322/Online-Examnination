import React from 'react';
import { LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
      <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
          <RocketLaunchIcon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          To provide accessible, high-performance examination environments that accurately measure and nurture human potential worldwide.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
          <LightBulbIcon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          To become the global gold standard for online certification, recognized by educators, institutions, and employers everywhere.
        </p>
      </div>
    </div>
  );
};
export default MissionVision;
