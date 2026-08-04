import React from 'react';

const MapPlaceholder = () => {
  return (
    <div className="w-full h-64 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden shadow-inner flex items-center justify-center my-8 text-white text-center p-6">
      <div className="relative z-10 space-y-2">
        <span className="text-3xl">???</span>
        <h4 className="font-bold text-lg">Interactive Map View</h4>
        <p className="text-xs text-blue-200">500 Howard Street, Suite 400, San Francisco, CA</p>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
    </div>
  );
};
export default MapPlaceholder;
