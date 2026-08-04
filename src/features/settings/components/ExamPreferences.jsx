import React from 'react';
import { useSettings } from '../../../hooks/useSettings';

const ExamPreferences = () => {
  const { settings, updateSettings } = useSettings();

  const handleToggle = (key) => {
    updateSettings('examPreferences', {
      [key]: !settings.examPreferences[key]
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Exam Experience</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Auto Save Progress</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Automatically save your answers during exams.</p>
          </div>
          <button 
            onClick={() => handleToggle('autoSave')}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${settings.examPreferences.autoSave ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.examPreferences.autoSave ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Sound Effects</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Play sounds on success or error during practice.</p>
          </div>
          <button 
            onClick={() => handleToggle('soundEnabled')}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${settings.examPreferences.soundEnabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.examPreferences.soundEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExamPreferences;