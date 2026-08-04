import React, { createContext, useState, useEffect, useCallback } from 'react';

export const AppNotificationContext = createContext();

const defaultNotifications = [
  { id: 1, type: 'info', title: 'System Update', message: 'New features are available.', date: new Date().toISOString(), read: false },
  { id: 2, type: 'success', title: 'Exam Passed', message: 'You successfully passed React Advanced.', date: new Date(Date.now() - 86400000).toISOString(), read: true },
  { id: 3, type: 'warning', title: 'Upcoming Exam', message: 'Weekly Assessment starts in 2 hours.', date: new Date().toISOString(), read: false }
];

export const AppNotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('oes_app_notifications');
    return saved ? JSON.parse(saved) : defaultNotifications;
  });

  useEffect(() => {
    localStorage.setItem('oes_app_notifications', JSON.stringify(notifications));
  }, [notifications]);

  const markRead = useCallback((id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, []);

  const deleteNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppNotificationContext.Provider value={{ 
      notifications, 
      markRead, 
      markAllRead, 
      deleteNotification, 
      clearAll, 
      unreadCount 
    }}>
      {children}
    </AppNotificationContext.Provider>
  );
};