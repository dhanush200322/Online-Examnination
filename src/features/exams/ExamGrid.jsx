import React from 'react';
import { ExamCard } from './ExamCard';
import { ExamCardSkeleton } from './ExamCardSkeleton';

export const ExamGrid = ({ exams, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <ExamCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exams.map((exam, index) => (
        <div key={exam.id} className="animate-slide-up" style={{ animationDelay: `${(index % 8) * 0.05}s` }}>
          <ExamCard exam={exam} />
        </div>
      ))}
    </div>
  );
};
