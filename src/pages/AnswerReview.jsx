import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { EmptyState } from '@/components/common/EmptyState';
import { ChevronLeft, ChevronRight, FileWarning } from 'lucide-react';
import { useResults } from '@/hooks/useResults';
import { questions as allQuestions } from '@/data/questions';
import { AnswerReviewCard } from '@/features/results/AnswerReviewCard';
import { ReviewSidebar } from '@/features/results/ReviewSidebar';

const AnswerReview = () => {
  const { attemptId } = useParams();
  const { getResultById } = useResults();
  
  const result = getResultById(attemptId);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!result) {
    return (
      <Container className="py-24">
        <EmptyState icon={<FileWarning className="w-12 h-12" />} title="Result Not Found" />
      </Container>
    );
  }

  const examQuestions = allQuestions.filter(q => q.examId === result.examId);
  const currentQuestion = examQuestions[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === examQuestions.length - 1;

  const handleNext = () => !isLast && setCurrentIndex(prev => prev + 1);
  const handlePrev = () => !isFirst && setCurrentIndex(prev => prev - 1);

  return (
    <div className="bg-background min-h-screen pt-24 pb-12 flex flex-col">
      <div className="fixed top-0 left-0 right-0 h-16 bg-surface/90 backdrop-blur-md border-b border-border z-40 flex items-center px-4 md:px-8">
        <Link to={`/result/${attemptId}`}>
          <Button variant="ghost" leftIcon={<ChevronLeft className="w-4 h-4" />}>
            Back to Results
          </Button>
        </Link>
        <div className="flex-1 flex justify-center font-bold text-textHeading">
          Review Answers
        </div>
        <div className="w-[120px]" /> {/* Spacer for balance */}
      </div>

      <Container className="flex-1 flex gap-6 mt-4">
        <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col">
          {currentQuestion && (
            <AnswerReviewCard 
              question={currentQuestion} 
              index={currentIndex} 
              userAnswer={result.answers[currentQuestion.id]} 
            />
          )}

          <div className="flex items-center justify-between mt-6">
            <Button 
              variant="secondary" 
              onClick={handlePrev} 
              disabled={isFirst}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
            >
              Previous
            </Button>
            <Button 
              variant="primary" 
              onClick={handleNext} 
              disabled={isLast}
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              Next
            </Button>
          </div>
        </main>

        <ReviewSidebar 
          questions={examQuestions} 
          answers={result.answers} 
          currentIndex={currentIndex}
          onJump={setCurrentIndex}
        />
      </Container>
    </div>
  );
};

export default AnswerReview;
