import React from 'react';
import { useNotifications } from '../../../hooks/useNotifications';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';

const NotificationFilters = () => {
  const { markAllRead, clearAll, unreadCount } = useNotifications();
  
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={markAllRead}
        disabled={unreadCount === 0}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${unreadCount > 0 ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50' : 'bg-gray-50 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500'}`}
      >
        <CheckCircleIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Mark all read</span>
      </button>
      <button 
        onClick={clearAll}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
      >
        <TrashIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Clear all</span>
      </button>
    </div>
  );
};
export default NotificationFilters;