import React from 'react';
import { Card } from '@/components/common/Card';
import { exams } from '@/data/exams';
import { ExamCard } from '@/features/exams/ExamCard';

export const RecommendedExams = () => {
  // Recommend 3 random exams
  const recommended = exams.slice(0, 3);

  return (
    <Card className="p-8">
      <h2 className="text-xl font-bold text-textHeading mb-6">Recommended for You</h2>
      <p className="text-sm text-textMuted mb-6 -mt-4">Based on your performance, these exams will help you level up.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommended.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </Card>
  );
};
