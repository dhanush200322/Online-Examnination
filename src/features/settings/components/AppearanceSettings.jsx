import React from 'react';
import { useSettings } from '../../../hooks/useSettings';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const AppearanceSettings = () => {
  const { settings, updateTheme } = useSettings();

  const themes = [
    { id: 'light', name: 'Light', icon: SunIcon, desc: 'Light appearance' },
    { id: 'dark', name: 'Dark', icon: MoonIcon, desc: 'Dark appearance' },
    { id: 'system', name: 'System', icon: ComputerDesktopIcon, desc: 'Sync with system' }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Theme Preferences</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {themes.map((theme) => {
          const isActive = settings.theme === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => updateTheme(theme.id)}
              className={`relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-200 ${
                isActive 
                  ? 'border-blue-600 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-900/10' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              <theme.icon className={`w-8 h-8 mb-3 ${isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-500 dark:text-gray-400'}`} />
              <span className={`font-semibold ${isActive ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-white'}`}>{theme.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{theme.desc}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default AppearanceSettings;