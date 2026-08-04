import React from 'react';
import { useSettings } from '../../../hooks/useSettings';

const NotificationSettings = () => {
  const { settings, updateSettings } = useSettings();

  const handleToggle = (key) => {
    updateSettings('notifications', {
      [key]: !settings.notifications[key]
    });
  };

  const options = [
    { id: 'email', title: 'Email Notifications', desc: 'Receive important updates and exam results via email.' },
    { id: 'push', title: 'Push Notifications', desc: 'Get alerts directly in your browser.' },
    { id: 'examReminders', title: 'Exam Reminders', desc: 'Notify me before an upcoming scheduled exam.' },
    { id: 'promotions', title: 'Promotional Emails', desc: 'Receive offers and course recommendations.' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
      
      <div className="space-y-4">
        {options.map(option => (
          <div key={option.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{option.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{option.desc}</p>
            </div>
            <button 
              onClick={() => handleToggle(option.id)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${settings.notifications[option.id] ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.notifications[option.id] ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NotificationSettings;