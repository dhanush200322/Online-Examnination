import React, { useState, useEffect } from 'react';
import { SignalSlashIcon } from '@heroicons/react/24/outline';

const OfflineBanner = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-amber-600 text-white py-2 px-4 text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-md animate-slide-down">
      <SignalSlashIcon className="w-4 h-4" />
      <span>You are currently offline. Your exam progress is saved locally and will sync when reconnected.</span>
    </div>
  );
};
export default OfflineBanner;
