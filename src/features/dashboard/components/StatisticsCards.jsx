import React from 'react';
import { useDashboard } from '../../../hooks/useDashboard';
import { CheckCircleIcon, TrophyIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

const StatisticsCards = () => {
  const { dashboardData } = useDashboard();
  
  const stats = [
    { name: 'Completed Exams', value: dashboardData.completedExams, icon: CheckCircleIcon, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Average Score', value: `${dashboardData.averageScore}%`, icon: ChartBarIcon, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Certificates', value: dashboardData.certificatesEarned, icon: TrophyIcon, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { name: 'Study Hours', value: `${dashboardData.studyHours}h`, icon: ClockIcon, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-2xl ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StatisticsCards;