import React from 'react';
import { useDashboard } from '../../../hooks/useDashboard';

const RecentExams = () => {
  const { dashboardData } = useDashboard();
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Exams</h3>
        <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View All</button>
      </div>
      <div className="space-y-4">
        {dashboardData.recentResults.map((exam) => (
          <div key={exam.id} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{exam.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exam.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900 dark:text-white">{exam.score}%</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                exam.status === 'Passed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {exam.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentExams;