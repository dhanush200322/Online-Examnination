import React from 'react';
import { useSettings } from '../../../hooks/useSettings';

const AccountSettings = () => {
  const { settings, updateSettings } = useSettings();

  const handlePrivacyToggle = (key) => {
    updateSettings('privacy', {
      [key]: !settings.privacy[key]
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Privacy Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Public Profile</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Allow others to view your profile and achievements.</p>
            </div>
            <button 
              onClick={() => handlePrivacyToggle('showProfile')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${settings.privacy.showProfile ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.privacy.showProfile ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Leaderboard Visibility</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Show my rank on the global leaderboard.</p>
            </div>
            <button 
              onClick={() => handlePrivacyToggle('showRank')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${settings.privacy.showRank ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.privacy.showRank ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-red-600 dark:text-red-500 mb-4">Danger Zone</h3>
        <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Delete Account</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Permanently delete your account and all associated data.</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};
export default AccountSettings;