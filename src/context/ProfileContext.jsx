import React, { createContext, useState, useEffect } from 'react';

export const ProfileContext = createContext();

const defaultProfile = {
  avatar: 'https://i.pravatar.cc/150?img=11',
  fullName: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  joinedDate: '2023-01-15',
  certificates: [
    { id: 1, title: 'React Advanced', date: '2023-11-20' },
    { id: 2, title: 'JavaScript Basics', date: '2023-05-10' }
  ],
  examsTaken: 12,
  averageScore: 88,
  rank: 14,
  accuracy: 92
};

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('oes_profile');
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem('oes_profile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updates) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
