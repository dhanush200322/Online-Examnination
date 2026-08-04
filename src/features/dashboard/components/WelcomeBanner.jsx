import React from 'react';
import { useProfile } from '../../../hooks/useProfile';

const WelcomeBanner = () => {
  const { profile } = useProfile();
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-lg">
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Welcome back, {profile.fullName}! ??</h2>
          <p className="text-blue-100 max-w-xl">
            You're doing great. Keep up the momentum! You have completed {profile.examsTaken} exams so far with an average score of {profile.averageScore}%.
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl">??</span>
          </div>
        </div>
      </div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
    </div>
  );
};
export default WelcomeBanner;