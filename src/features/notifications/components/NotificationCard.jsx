import React from 'react';
import { InformationCircleIcon, CheckCircleIcon, ExclamationTriangleIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/outline';

const NotificationCard = ({ notification, onMarkRead, onDelete }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success': return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case 'warning': return <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500" />;
      default: return <InformationCircleIcon className="w-6 h-6 text-blue-500" />;
    }
  };

  const getBgColor = () => {
    switch (notification.type) {
      case 'success': return 'bg-green-100 dark:bg-green-900/30';
      case 'warning': return 'bg-yellow-100 dark:bg-yellow-900/30';
      default: return 'bg-blue-100 dark:bg-blue-900/30';
    }
  };

  return (
    <div className={`p-4 sm:p-6 transition-colors duration-200 ${notification.read ? 'bg-transparent' : 'bg-blue-50/50 dark:bg-blue-900/10'}`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-2 rounded-full ${getBgColor()}`}>
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className={`text-sm font-semibold truncate ${notification.read ? 'text-gray-900 dark:text-gray-100' : 'text-blue-900 dark:text-blue-100'}`}>
              {notification.title}
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {new Date(notification.date).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {notification.message}
          </p>
          <div className="mt-3 flex items-center gap-3">
            {!notification.read && (
              <button 
                onClick={onMarkRead}
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                <CheckIcon className="w-4 h-4" />
                Mark as read
              </button>
            )}
            <button 
              onClick={onDelete}
              className="text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center gap-1 transition-colors"
            >
              <TrashIcon className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationCard;