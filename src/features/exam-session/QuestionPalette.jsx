import React from 'react';
import { useExamSession } from '@/hooks/useExamSession';
import { cn } from '@/utils/cn';

export const QuestionPalette = () => {
  const { questions, getQuestionStatus, jumpToQuestion } = useExamSession();

  const getStatusColor = (status) => {
    switch (status) {
      case 'current': return 'bg-info text-white ring-2 ring-info/50 shadow-md'; // 🔵
      case 'answered': return 'bg-success text-white border-success/20 shadow-sm'; // 🟢
      case 'not-answered': return 'bg-danger text-white border-danger/20 shadow-sm'; // 🔴
      case 'review': return 'bg-warning text-white border-warning/20 shadow-sm'; // 🟡
      case 'not-visited': return 'bg-surfaceElevated text-textMuted border border-border hover:bg-surface/80'; // ⚪
      default: return 'bg-surfaceElevated text-textMuted border border-border';
    }
  };

  return (
    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 p-1">
      {questions.map((q, index) => {
        const status = getQuestionStatus(index);
        return (
          <button
            key={q.id}
            onClick={() => jumpToQuestion(index)}
            className={cn(
              "w-full aspect-square rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent",
              getStatusColor(status)
            )}
            title={`Question ${index + 1}`}
            aria-label={`Jump to question ${index + 1}, status: ${status}`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
