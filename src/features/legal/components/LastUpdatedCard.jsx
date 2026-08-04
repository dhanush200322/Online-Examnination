import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const LastUpdatedCard = ({ date = "August 1, 2026", title }) => {
  return (
    <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-between mb-8 shadow-md">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xs text-blue-200 mt-1">Last updated: {date}</p>
      </div>
      <ShieldCheckIcon className="w-10 h-10 text-blue-400 opacity-80" />
    </div>
  );
};
export default LastUpdatedCard;
