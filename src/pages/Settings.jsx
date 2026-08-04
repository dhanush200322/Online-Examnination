import useDocumentTitle from '@/hooks/useDocumentTitle';
import React, { useState } from 'react';
import AppearanceSettings from '../features/settings/components/AppearanceSettings';
import ExamPreferences from '../features/settings/components/ExamPreferences';
import NotificationSettings from '../features/settings/components/NotificationSettings';
import AccountSettings from '../features/settings/components/AccountSettings';

const tabs = [
  { id: 'appearance', name: 'Appearance' },
  { id: 'preferences', name: 'Exam Preferences' },
  { id: 'notifications', name: 'Notifications' },
  { id: 'account', name: 'Account' }
];

const Settings = () => {
  useDocumentTitle('Settings');
  const [activeTab, setActiveTab] = useState('appearance');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Settings</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Manage your account settings and preferences.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-800 overflow-x-auto hide-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-6 font-medium text-sm transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        <div className="p-6 sm:p-8">
          {activeTab === 'appearance' && <AppearanceSettings />}
          {activeTab === 'preferences' && <ExamPreferences />}
          {activeTab === 'notifications' && <NotificationSettings />}
          {activeTab === 'account' && <AccountSettings />}
        </div>
      </div>
    </div>
  );
};
export default Settings;