import React from 'react';
import { useNotifications } from '../../../hooks/useNotifications';
import NotificationCard from './NotificationCard';
import NotificationEmptyState from './NotificationEmptyState';

const NotificationList = () => {
  const { notifications, markRead, deleteNotification } = useNotifications();

  if (!notifications || notifications.length === 0) {
    return <NotificationEmptyState />;
  }

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-800">
      {notifications.map((notification) => (
        <NotificationCard 
          key={notification.id} 
          notification={notification} 
          onMarkRead={() => markRead(notification.id)}
          onDelete={() => deleteNotification(notification.id)}
        />
      ))}
    </div>
  );
};
export default NotificationList;