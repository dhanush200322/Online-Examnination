import React from 'react';
import { Card } from '@/components/common/Card';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export const InstructionCard = () => {
  return (
    <Card variant="solid" className="p-6 md:p-8 mb-8 shadow-soft-md">
      <h2 className="text-2xl font-bold text-textHeading mb-6 border-b border-border pb-4">Exam Rules & Guidelines</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-textHeading flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-success" />
            Do's
          </h3>
          <ul className="space-y-3 pl-7 list-disc text-textBody">
            <li>Ensure you have a stable internet connection before starting.</li>
            <li>Keep a government-issued ID ready if proctoring is enabled.</li>
            <li>Read every question carefully before answering.</li>
            <li>Use the "Mark for Review" feature if you are unsure about an answer.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-textHeading flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-danger" />
            Don'ts
          </h3>
          <ul className="space-y-3 pl-7 list-disc text-textBody">
            <li>Do not refresh the page or click the browser's back button during the exam.</li>
            <li>Do not switch tabs or open other applications. Doing so may auto-submit your exam.</li>
            <li>Do not use external calculators unless explicitly allowed.</li>
          </ul>
        </div>

        <div className="bg-warning/10 border border-warning/20 p-4 rounded-xl flex gap-4">
          <AlertCircle className="w-6 h-6 text-warning shrink-0" />
          <div>
            <h4 className="font-semibold text-warning mb-1">Important: Negative Marking</h4>
            <p className="text-sm text-warning/90">
              For every incorrect answer, 0.25 marks will be deducted. Unanswered questions do not carry negative marks.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
