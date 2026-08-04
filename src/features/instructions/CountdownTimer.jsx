import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Card } from '@/components/common/Card';

export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card variant="glass" className="p-6 mb-8 border-accent/20 flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2 mb-4 text-accent">
        <Clock className="w-5 h-5" />
        <span className="font-semibold uppercase tracking-wider text-sm">Exam Starts In</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-textHeading">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="text-xs text-textMuted uppercase mt-1">Days</span>
        </div>
        <span className="text-3xl font-bold text-border -mt-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-textHeading">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-xs text-textMuted uppercase mt-1">Hours</span>
        </div>
        <span className="text-3xl font-bold text-border -mt-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-textHeading">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-xs text-textMuted uppercase mt-1">Minutes</span>
        </div>
        <span className="text-3xl font-bold text-border -mt-4">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-bold text-textHeading">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-xs text-textMuted uppercase mt-1">Seconds</span>
        </div>
      </div>
    </Card>
  );
};
