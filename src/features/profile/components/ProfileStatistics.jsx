import React from 'react';
import { useProfile } from '../../../hooks/useProfile';
import { ChartBarIcon, CheckBadgeIcon, FireIcon } from '@heroicons/react/24/outline';

const ProfileStatistics = () => {
  const { profile } = useProfile();
  
  const stats = [
    { label: 'Exams Taken', value: profile.examsTaken, icon: FireIcon, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { label: 'Average Score', value: `${profile.averageScore}%`, icon: ChartBarIcon, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { label: 'Certificates', value: profile.certificates.length, icon: CheckBadgeIcon, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center text-center">
          <div className={`p-3 rounded-full ${stat.bg} mb-3`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
export default ProfileStatistics;