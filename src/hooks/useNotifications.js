import { useContext } from 'react';
import { AppNotificationContext } from '../context/AppNotificationContext';

export const useNotifications = () => {
  const context = useContext(AppNotificationContext);
  if (!context) throw new Error('useNotifications must be used within AppNotificationProvider');
  return context;
};