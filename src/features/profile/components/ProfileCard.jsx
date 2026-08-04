import React from 'react';
import { useProfile } from '../../../hooks/useProfile';
import { CameraIcon } from '@heroicons/react/24/outline';

const ProfileCard = () => {
  const { profile } = useProfile();
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center">
      <div className="relative inline-block mb-4">
        <img src={profile.avatar} alt={profile.fullName} className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md mx-auto" />
        <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm">
          <CameraIcon className="w-5 h-5" />
        </button>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{profile.fullName}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{profile.location}</p>
      
      <div className="flex justify-center gap-2 mb-6">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-xs font-semibold">Pro Member</span>
        <span className="px-3 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-semibold">Rank #{profile.rank}</span>
      </div>
      
      <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Joined</p>
        <p className="font-medium text-gray-900 dark:text-white">{profile.joinedDate}</p>
      </div>
    </div>
  );
};
export default ProfileCard;