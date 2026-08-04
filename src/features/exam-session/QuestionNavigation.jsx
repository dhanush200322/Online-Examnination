import React from 'react';
import { useExamSession } from '@/hooks/useExamSession';
import { Button } from '@/components/common/Button';
import { ChevronLeft, ChevronRight, Bookmark, Trash2, Send } from 'lucide-react';

export const QuestionNavigation = ({ onSubmit }) => {
  const { 
    currentQuestion, 
    answers,
    clearAnswer,
    markedForReview, 
    toggleMarkForReview, 
    isFirstQuestion, 
    isLastQuestion, 
    prevQuestion, 
    saveAndNext 
  } = useExamSession();

  if (!currentQuestion) return null;

  const isMarked = markedForReview.includes(currentQuestion.id);
  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
      <div className="flex w-full sm:w-auto items-center gap-3">
        <Button 
          variant="secondary" 
          onClick={prevQuestion} 
          disabled={isFirstQuestion}
          leftIcon={<ChevronLeft className="w-4 h-4" />}
          className="flex-1 sm:flex-none"
        >
          Previous
        </Button>
        <Button 
          variant="outline"
          onClick={() => clearAnswer(currentQuestion.id)}
          disabled={!currentAnswer}
          className="flex-1 sm:flex-none text-textMuted hover:text-danger hover:border-danger hover:bg-danger/5"
          leftIcon={<Trash2 className="w-4 h-4" />}
        >
          Clear
        </Button>
      </div>

      <div className="flex w-full sm:w-auto items-center gap-3">
        <Button 
          variant={isMarked ? "warning" : "outline"}
          onClick={() => toggleMarkForReview(currentQuestion.id)}
          leftIcon={<Bookmark className={isMarked ? "fill-warning-foreground" : ""} />}
          className="flex-1 sm:flex-none"
        >
          {isMarked ? "Unmark Review" : "Mark Review"}
        </Button>
        
        {isLastQuestion ? (
          <Button 
            variant="primary" 
            onClick={onSubmit}
            rightIcon={<Send className="w-4 h-4" />}
            className="flex-1 sm:flex-none bg-success hover:bg-success/90"
          >
            Submit Exam
          </Button>
        ) : (
          <Button 
            variant="primary" 
            onClick={() => saveAndNext(currentQuestion.id, currentAnswer)}
            rightIcon={<ChevronRight className="w-4 h-4" />}
            className="flex-1 sm:flex-none"
          >
            Save & Next
          </Button>
        )}
      </div>
    </div>
  );
};
