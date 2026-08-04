import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import WelcomeBanner from '../features/dashboard/components/WelcomeBanner';
import StatisticsCards from '../features/dashboard/components/StatisticsCards';
import RecentExams from '../features/dashboard/components/RecentExams';
import ActivityTimeline from '../features/dashboard/components/ActivityTimeline';
import PerformanceOverview from '../features/dashboard/components/PerformanceOverview';

const Dashboard = () => {
  useDocumentTitle('Dashboard');
  return (
    <div className="space-y-6">
      <WelcomeBanner />
      <StatisticsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PerformanceOverview />
          <RecentExams />
        </div>
        <div className="space-y-6">
          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;