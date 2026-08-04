import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import NotificationList from '../features/notifications/components/NotificationList';
import NotificationFilters from '../features/notifications/components/NotificationFilters';

const Notifications = () => {
  useDocumentTitle('Notifications');
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Stay updated with your latest alerts and activities.</p>
        </div>
        <NotificationFilters />
      </div>
      <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden">
        <NotificationList />
      </div>
    </div>
  );
};
export default Notifications;