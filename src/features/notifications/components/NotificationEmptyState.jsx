import React from 'react';
import { BellSlashIcon } from '@heroicons/react/24/outline';

const NotificationEmptyState = () => {
  return (
    <div className="p-12 text-center flex flex-col items-center justify-center">
      <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
        <BellSlashIcon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No notifications yet</h3>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
        When you get updates, alerts, or reminders, they will show up here.
      </p>
    </div>
  );
};
export default NotificationEmptyState;