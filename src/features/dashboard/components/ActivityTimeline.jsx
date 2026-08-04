import React from 'react';

const ActivityTimeline = () => {
  const activities = [
    { id: 1, title: 'Completed React Basics Exam', time: '2 hours ago', type: 'exam' },
    { id: 2, title: 'Earned Frontend Developer Badge', time: '1 day ago', type: 'badge' },
    { id: 3, title: 'Joined JavaScript Masterclass', time: '3 days ago', type: 'course' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Activity Timeline</h3>
      <div className="space-y-6">
        {activities.map((activity, idx) => (
          <div key={activity.id} className="flex relative">
            {idx !== activities.length - 1 && (
              <div className="absolute top-8 left-4 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            )}
            <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ActivityTimeline;