import React from 'react';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { QuestionOptions } from './QuestionOptions';
import { useExamSession } from '@/hooks/useExamSession';
import { Bookmark } from 'lucide-react';

export const QuestionCard = () => {
  const { currentQuestion, currentQuestionIndex, answers, setAnswer, markedForReview } = useExamSession();

  if (!currentQuestion) return null;

  const selectedAnswer = answers[currentQuestion.id];
  const isMarked = markedForReview.includes(currentQuestion.id);

  return (
    <Card variant="solid" className="p-6 md:p-10 shadow-soft-xl animate-fade-in relative min-h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-textHeading">
            Question {currentQuestionIndex + 1}
          </h2>
          <Badge variant="default" className="text-xs">{currentQuestion.topic || 'General'}</Badge>
        </div>
        
        <div className="flex items-center gap-3">
          {isMarked && (
            <Badge variant="warning" className="flex items-center gap-1 bg-warning/15">
              <Bookmark className="w-3.5 h-3.5 fill-warning" />
              Marked for Review
            </Badge>
          )}
          <span className="text-sm font-semibold text-textMuted bg-surfaceElevated px-3 py-1.5 rounded-lg border border-border">
            {currentQuestion.marks} Marks
          </span>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-medium text-textHeading leading-relaxed mb-8">
          {currentQuestion.question}
        </h3>

        <QuestionOptions 
          options={currentQuestion.options} 
          selectedOption={selectedAnswer}
          onSelect={(ans) => setAnswer(currentQuestion.id, ans)}
        />
      </div>
    </Card>
  );
};
