import React from 'react';
import { useExamSession } from '@/hooks/useExamSession';
import { useExamTimer } from '@/hooks/useExamTimer';
import { useExamSessionContext } from '@/context/ExamSessionContext';
import { Clock, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { cn } from '@/utils/cn';

export const ExamHeader = ({ onTimeUp, onSubmitRequest }) => {
  const { exam, getStats } = useExamSession();
  const { formattedTime, timeRemaining } = useExamTimer(onTimeUp);
  const { lastSaved } = useExamSessionContext();
  const stats = getStats();

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (stats.percentage / 100) * circumference;

  const isLowTime = timeRemaining <= 300; // 5 mins

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-surface/90 backdrop-blur-md border-b border-border z-40">
      <Container className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-textHeading leading-tight hidden sm:block">
              {exam?.title}
            </h1>
            <div className="flex items-center gap-2 text-xs font-semibold text-textMuted mt-0.5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                {lastSaved ? `Saved ${lastSaved}` : 'Saving...'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Circular Progress Ring */}
          <div className="hidden md:flex items-center gap-3 bg-surfaceElevated px-3 py-1.5 rounded-full border border-border">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-10 h-10 transform -rotate-90">
                <circle cx="20" cy="20" r="18" className="stroke-border" strokeWidth="4" fill="none" />
                <circle 
                  cx="20" cy="20" r="18" 
                  className="stroke-success transition-all duration-500 ease-out" 
                  strokeWidth="4" fill="none" 
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-textHeading">{stats.percentage}%</span>
            </div>
            <span className="text-sm font-semibold text-textMuted pr-2">Completed</span>
          </div>

          {/* Timer */}
          <div className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-lg font-bold transition-colors shadow-sm",
            isLowTime ? "bg-danger/10 border-danger text-danger animate-pulse" : "bg-surfaceElevated border-border text-textHeading"
          )}>
            <Clock className={cn("w-5 h-5", isLowTime ? "text-danger" : "text-accent")} />
            {formattedTime}
          </div>

          <Button 
            variant="primary" 
            className="hidden sm:flex bg-success hover:bg-success/90"
            onClick={onSubmitRequest}
          >
            Submit
          </Button>
        </div>
      </Container>
    </header>
  );
};
