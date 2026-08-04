import React, { createContext, useState, useEffect } from 'react';

export const DashboardContext = createContext();

const defaultData = {
  completedExams: 15,
  passedExams: 12,
  failedExams: 3,
  certificatesEarned: 5,
  averageScore: 82,
  averageAccuracy: 88,
  studyHours: 45,
  dailyStreak: 7,
  weeklyProgress: 65,
  monthlyProgress: 80,
  leaderboardRank: 42,
  recentResults: [
    { id: 1, title: 'React Basics', score: 90, date: '2023-10-12', status: 'Passed' },
    { id: 2, title: 'Advanced CSS', score: 75, date: '2023-10-10', status: 'Passed' }
  ],
  performanceTrend: [
    { name: 'Mon', score: 60 }, { name: 'Tue', score: 70 }, { name: 'Wed', score: 85 },
    { name: 'Thu', score: 80 }, { name: 'Fri', score: 90 }, { name: 'Sat', score: 95 }, { name: 'Sun', score: 92 }
  ],
  recommendedExams: [
    { id: 101, title: 'Node.js Fundamentals', duration: '60 mins', level: 'Intermediate' },
    { id: 102, title: 'Frontend System Design', duration: '90 mins', level: 'Advanced' }
  ],
  upcomingExams: [
    { id: 201, title: 'Weekly Assessment', date: '2023-10-20T10:00:00' }
  ],
  recentCertificates: [
    { id: 301, title: 'React Expert', date: '2023-09-15' }
  ]
};

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(() => {
    const saved = localStorage.getItem('oes_dashboard');
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem('oes_dashboard', JSON.stringify(dashboardData));
  }, [dashboardData]);

  const updateDashboard = (updates) => {
    setDashboardData(prev => ({ ...prev, ...updates }));
  };

  return (
    <DashboardContext.Provider value={{ dashboardData, updateDashboard }}>
      {children}
    </DashboardContext.Provider>
  );
};