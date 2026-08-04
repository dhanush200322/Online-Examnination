import React from 'react';
import { ExamCard } from '../exams/ExamCard';
import { exams } from '@/data/exams';

export const RelatedExams = ({ currentExamId, category }) => {
  // Find related exams in same category, exclude current exam
  const related = exams.filter(e => e.category === category && e.id !== currentExamId).slice(0, 5);

  if (related.length === 0) return null;

  return (
    <div id="related" className="scroll-mt-32 mb-12">
      <h2 className="text-2xl font-bold text-textHeading mb-6">Related Exams</h2>
      
      <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory custom-scrollbar">
        {related.map(exam => (
          <div key={exam.id} className="snap-start shrink-0 w-[300px] md:w-[350px]">
            <ExamCard exam={exam} />
          </div>
        ))}
      </div>
    </div>
  );
};
