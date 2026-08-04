import React from 'react';
import { ChevronUpIcon, ChevronDownIcon, MinusIcon } from '@heroicons/react/24/solid';

const LeaderboardTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-800/50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rank</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Score</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Exams</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Accuracy</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
          {data.map((user) => (
            <tr key={user.id} className={`hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150 ${user.isCurrentUser ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white w-8">{user.rank}</span>
                  {user.movement === 'up' && <ChevronUpIcon className="w-4 h-4 text-green-500 ml-2" />}
                  {user.movement === 'down' && <ChevronDownIcon className="w-4 h-4 text-red-500 ml-2" />}
                  {user.movement === 'same' && <MinusIcon className="w-4 h-4 text-gray-400 ml-2" />}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full object-cover" src={user.avatar} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      {user.name}
                      {user.isCurrentUser && <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-semibold">You</span>}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{user.score}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center hidden sm:table-cell">
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.examsTaken}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center hidden md:table-cell">
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.accuracy}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LeaderboardTable;