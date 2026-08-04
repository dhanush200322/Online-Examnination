import React from 'react';
import { useProfile } from '../../hooks/useProfile';

const DashboardTopbar = () => {
  const { profile } = useProfile();
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <div className="flex items-center gap-3">
            <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-200">
              {profile.fullName}
            </span>
            <img
              className="h-9 w-9 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
              src={profile.avatar}
              alt={profile.fullName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardTopbar;