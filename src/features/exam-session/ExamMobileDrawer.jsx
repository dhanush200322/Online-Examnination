import React, { useState } from 'react';
import { useExamSession } from '@/hooks/useExamSession';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { QuestionPalette } from './QuestionPalette';
import { QuestionLegend } from './QuestionLegend';
import { cn } from '@/utils/cn';

export const ExamMobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getStats } = useExamSession();
  const stats = getStats();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={cn(
        "md:hidden fixed left-0 right-0 bottom-[72px] bg-surfaceElevated border-t border-border z-40 rounded-t-3xl transition-transform duration-300 ease-in-out shadow-[0_-8px_30px_rgba(0,0,0,0.12)]",
        isOpen ? "translate-y-0" : "translate-y-full"
      )}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surfaceElevated border border-border px-6 py-2 rounded-t-2xl shadow-soft-sm flex items-center justify-center text-textMuted hover:text-textHeading"
        >
          {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
          <span className="ml-2 font-semibold text-sm">Questions Palette</span>
        </button>

        <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold mb-6">
            <div className="flex justify-between bg-success/10 text-success px-3 py-2 rounded-lg">
              <span>Answered:</span> <span>{stats.answered}</span>
            </div>
            <div className="flex justify-between bg-danger/10 text-danger px-3 py-2 rounded-lg">
              <span>Unanswered:</span> <span>{stats.notAnswered}</span>
            </div>
            <div className="flex justify-between bg-warning/10 text-warning px-3 py-2 rounded-lg">
              <span>Review:</span> <span>{stats.review}</span>
            </div>
            <div className="flex justify-between bg-surface text-textMuted px-3 py-2 rounded-lg border border-border">
              <span>Skipped:</span> <span>{stats.skipped}</span>
            </div>
          </div>

          <QuestionPalette />
          <QuestionLegend />
        </div>
      </div>
    </>
  );
};
