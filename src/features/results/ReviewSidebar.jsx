import React from 'react';
import { Card } from '@/components/common/Card';
import { cn } from '@/utils/cn';

export const ReviewSidebar = ({ questions, answers, currentIndex, onJump }) => {
  
  const getStatusClass = (question) => {
    const ans = answers[question.id];
    if (!ans) return "bg-surfaceElevated text-textMuted border-border";
    if (ans === question.correctAnswer) return "bg-success/15 text-success border-success/30";
    return "bg-danger/15 text-danger border-danger/30";
  };

  return (
    <div className="hidden md:block w-72 lg:w-80 shrink-0 h-[calc(100vh-80px)] sticky top-[80px] p-4 flex flex-col">
      <Card className="flex-1 flex flex-col overflow-hidden shadow-soft-xl border-accent/10 p-4">
        <h4 className="text-sm font-bold text-textHeading mb-4 uppercase tracking-wider">Review Palette</h4>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-1">
            {questions.map((q, index) => {
              const isCurrent = currentIndex === index;
              return (
                <button
                  key={q.id}
                  onClick={() => onJump(index)}
                  className={cn(
                    "w-full aspect-square rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-200 border",
                    getStatusClass(q),
                    isCurrent ? "ring-2 ring-info ring-offset-2 transform scale-110" : "hover:scale-105 hover:opacity-80"
                  )}
                  title={`Question ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-textMuted">
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-success/30 rounded border border-success/50" /> Correct</div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-danger/30 rounded border border-danger/50" /> Wrong</div>
          <div className="flex items-center gap-1.5"><span className="w-3 h-3 bg-surfaceElevated rounded border border-border" /> Skipped</div>
        </div>
      </Card>
    </div>
  );
};
