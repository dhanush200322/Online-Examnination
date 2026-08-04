import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import { useLeaderboard } from '../hooks/useLeaderboard';
import TopThreePodium from '../features/leaderboard/components/TopThreePodium';
import LeaderboardFilters from '../features/leaderboard/components/LeaderboardFilters';
import LeaderboardTable from '../features/leaderboard/components/LeaderboardTable';

const Leaderboard = () => {
  useDocumentTitle('Global Leaderboard');
  const { leaderboard } = useLeaderboard();
  
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Global Leaderboard</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">See how you stack up against the best.</p>
      </div>
      
      <TopThreePodium data={leaderboard.slice(0, 3)} />
      
      <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <LeaderboardFilters />
        </div>
        <LeaderboardTable data={leaderboard} />
      </div>
    </div>
  );
};
export default Leaderboard;