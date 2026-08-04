import React from 'react';
import { useDashboard } from '../../../hooks/useDashboard';

const PerformanceChart = () => {
  const { dashboardData } = useDashboard();
  const data = dashboardData.performanceTrend || [];
  
  const maxScore = 100;
  
  return (
    <div className="h-64 flex items-end gap-2 sm:gap-4 justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
      {data.map((item, idx) => {
        const height = `${(item.score / maxScore) * 100}%`;
        return (
          <div key={idx} className="flex flex-col items-center flex-1 group">
            <div className="w-full flex justify-center h-48 items-end relative">
              <div 
                className="w-full max-w-[2.5rem] bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-lg transition-all duration-300 group-hover:opacity-80 relative"
                style={{ height }}
              >
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity duration-200">
                  {item.score}%
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default PerformanceChart;