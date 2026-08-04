import React from 'react';
import { Card } from '@/components/common/Card';
import { QuestionPalette } from './QuestionPalette';
import { QuestionLegend } from './QuestionLegend';
import { useExamSession } from '@/hooks/useExamSession';

export const ExamSidebar = () => {
  const { getStats } = useExamSession();
  const stats = getStats();

  return (
    <div className="hidden md:block w-72 lg:w-80 shrink-0 h-[calc(100vh-80px)] sticky top-[80px] p-4 flex flex-col">
      <Card className="flex-1 flex flex-col overflow-hidden shadow-soft-xl border-accent/10">
        <div className="p-4 border-b border-border bg-surface/50">
          <h3 className="font-bold text-textHeading mb-3">Exam Summary</h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <div className="flex justify-between bg-success/10 text-success px-2 py-1.5 rounded-lg">
              <span>Answered:</span> <span>{stats.answered}</span>
            </div>
            <div className="flex justify-between bg-danger/10 text-danger px-2 py-1.5 rounded-lg">
              <span>Unanswered:</span> <span>{stats.notAnswered}</span>
            </div>
            <div className="flex justify-between bg-warning/10 text-warning px-2 py-1.5 rounded-lg">
              <span>Review:</span> <span>{stats.review}</span>
            </div>
            <div className="flex justify-between bg-surfaceElevated text-textMuted px-2 py-1.5 rounded-lg border border-border/50">
              <span>Skipped:</span> <span>{stats.skipped}</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          <h4 className="text-sm font-bold text-textHeading mb-4 uppercase tracking-wider">Question Palette</h4>
          <QuestionPalette />
        </div>
        
        <div className="p-2 border-t border-border bg-surface/30">
          <QuestionLegend />
        </div>
      </Card>
    </div>
  );
};
