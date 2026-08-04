import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const ExamOverview = ({ exam }) => {
  return (
    <div id="overview" className="scroll-mt-32 mb-12">
      <h2 className="text-2xl font-bold text-textHeading mb-4">Exam Overview</h2>
      <p className="text-textBody text-lg leading-relaxed mb-8">
        {exam.overview || exam.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-textHeading mb-4">Requirements</h3>
          <ul className="space-y-3">
            {exam.requirements?.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-textBody">{req}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-textHeading mb-4">Learning Outcomes</h3>
          <ul className="space-y-3">
            {exam.learningOutcomes?.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                <span className="text-textBody">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
