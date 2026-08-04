import React from 'react';

const stats = [
  { label: 'Registered Students', value: '50,000+' },
  { label: 'Available Exams', value: '1,200+' },
  { label: 'Certificates Issued', value: '35,000+' },
  { label: 'Satisfaction Rate', value: '99.4%' },
];

const StatisticsSection = () => {
  return (
    <div className="my-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center space-y-1">
          <p className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">{s.value}</p>
          <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">{s.label}</p>
        </div>
      ))}
    </div>
  );
};
export default StatisticsSection;
