import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

const defaultSettings = {
  theme: 'system', // light, dark, system
  language: 'en',
  notifications: {
    email: true,
    push: true,
    examReminders: true,
    promotions: false
  },
  examPreferences: {
    autoSave: true,
    timerStyle: 'countdown',
    soundEnabled: false
  },
  privacy: {
    showProfile: true,
    showActivity: true,
    showRank: true
  }
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('oes_settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('oes_settings', JSON.stringify(settings));
    if (settings.theme === 'dark' || (settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  const updateSettings = (category, updates) => {
    setSettings(prev => ({
      ...prev,
      [category]: typeof updates === 'object' && !Array.isArray(updates) ? { ...prev[category], ...updates } : updates
    }));
  };

  const updateTheme = (theme) => updateSettings('theme', theme);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, updateTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};