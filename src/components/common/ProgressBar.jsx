import React from 'react';
import { cn } from '@/utils/cn';

export const ProgressBar = ({ progress, className, colorClass = "bg-accent" }) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className={cn("w-full h-2 bg-surfaceElevated rounded-full overflow-hidden", className)}>
      <div 
        className={cn("h-full transition-all duration-500 ease-out", colorClass)}
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};
