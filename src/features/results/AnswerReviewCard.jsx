import React from 'react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Check, X, Minus } from 'lucide-react';
import { ExplanationCard } from './ExplanationCard';
import { cn } from '@/utils/cn';

export const AnswerReviewCard = ({ question, index, userAnswer }) => {
  const isCorrect = userAnswer === question.correctAnswer;
  const isSkipped = !userAnswer;

  const getStatusBadge = () => {
    if (isSkipped) return <Badge variant="default" className="bg-surfaceElevated border-border text-textMuted"><Minus className="w-3 h-3 mr-1"/> Skipped</Badge>;
    if (isCorrect) return <Badge variant="success" className="bg-success/15 text-success"><Check className="w-3 h-3 mr-1"/> Correct</Badge>;
    return <Badge variant="danger" className="bg-danger/15 text-danger"><X className="w-3 h-3 mr-1"/> Wrong</Badge>;
  };

  return (
    <Card variant="solid" className="p-8 shadow-soft-xl animate-fade-in relative">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <h2 className="text-xl font-bold text-textHeading">
          Question {index + 1}
        </h2>
        {getStatusBadge()}
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-medium text-textHeading leading-relaxed mb-8">
          {question.question}
        </h3>

        <div className="flex flex-col gap-3">
          {question.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = userAnswer === option;
            const isActualCorrect = question.correctAnswer === option;
            
            let optionClass = "border-border bg-surface text-textBody";
            let indicator = null;

            if (isActualCorrect) {
              optionClass = "border-success bg-success/5 shadow-soft-sm text-textHeading";
              indicator = <Check className="w-5 h-5 text-success" />;
            } else if (isSelected && !isActualCorrect) {
              optionClass = "border-danger bg-danger/5 shadow-soft-sm text-textHeading";
              indicator = <X className="w-5 h-5 text-danger" />;
            }

            return (
              <div 
                key={idx}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200",
                  optionClass
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm",
                  isActualCorrect ? "bg-success text-white" : isSelected ? "bg-danger text-white" : "bg-surfaceElevated border border-border/50 text-textMuted"
                )}>
                  {letter}
                </div>
                
                <span className="flex-1 text-base font-medium leading-relaxed">
                  {option}
                </span>

                {indicator}
              </div>
            );
          })}
        </div>

        <ExplanationCard explanation={question.explanation} />
      </div>
    </Card>
  );
};
