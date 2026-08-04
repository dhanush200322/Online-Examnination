import React, { useEffect, useState } from 'react';
import { Card } from '@/components/common/Card';
import { cn } from '@/utils/cn';

export const CircularScoreChart = ({ percentage, isPass }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = percentage / 30; // 30 frames
    const interval = setInterval(() => {
      current += step;
      if (current >= percentage) {
        setAnimatedPercentage(percentage);
        clearInterval(interval);
      } else {
        setAnimatedPercentage(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [percentage]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="relative w-48 h-48 flex items-center justify-center mx-auto">
      <svg className="w-full h-full transform -rotate-90">
        <circle 
          cx="96" cy="96" r={radius} 
          className="stroke-surfaceElevated" 
          strokeWidth="12" fill="none" 
        />
        <circle 
          cx="96" cy="96" r={radius} 
          className={cn("transition-all duration-100 ease-out", isPass ? "stroke-success" : "stroke-danger")} 
          strokeWidth="12" fill="none" 
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-textHeading">{animatedPercentage}%</span>
        <span className="text-sm font-semibold text-textMuted uppercase tracking-wider">Score</span>
      </div>
    </div>
  );
};

export const ScoreCard = ({ result }) => {
  return (
    <Card className="p-8 text-center h-full flex flex-col justify-center">
      <h2 className="text-lg font-bold text-textHeading mb-6">Overall Score</h2>
      <CircularScoreChart percentage={result.percentage} isPass={result.isPass} />
      <div className="mt-8 flex justify-center gap-6">
        <div>
          <p className="text-sm text-textMuted font-semibold">Earned</p>
          <p className="text-2xl font-bold text-textHeading">{result.score}</p>
        </div>
        <div className="w-px bg-border" />
        <div>
          <p className="text-sm text-textMuted font-semibold">Total</p>
          <p className="text-2xl font-bold text-textHeading">{result.totalMarks}</p>
        </div>
      </div>
    </Card>
  );
};
