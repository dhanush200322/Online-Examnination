import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

export const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setProgress(Math.min(Math.max(scroll, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (progress < 1) return null;

  return (
    <div className="fixed top-16 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-accent transition-all duration-150 ease-out flex items-center justify-end pr-2"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute top-2 text-[10px] font-bold text-accent drop-shadow-sm whitespace-nowrap bg-background px-1 rounded">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};
