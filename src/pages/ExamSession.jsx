import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExamSessionContext } from '@/context/ExamSessionContext';
import { useExamSession } from '@/hooks/useExamSession';
import { useAutoSave } from '@/hooks/useAutoSave';
import { Container } from '@/components/common/Container';
import { ExamHeader } from '@/features/exam-session/ExamHeader';
import { ExamSidebar } from '@/features/exam-session/ExamSidebar';
import { QuestionCard } from '@/features/exam-session/QuestionCard';
import { QuestionNavigation } from '@/features/exam-session/QuestionNavigation';
import { ExamMobileDrawer } from '@/features/exam-session/ExamMobileDrawer';
import { ExamSessionSkeleton } from '@/features/exam-session/ExamSessionSkeleton';
import { AutoSubmitModal } from '@/features/exam-session/AutoSubmitModal';
import { SubmitConfirmationModal } from '@/features/exam-session/SubmitConfirmationModal';
import { exams } from '@/data/exams';
import { questions as allQuestions } from '@/data/questions';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

const ExamSession = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { initSession, clearSession, setIsSubmitting } = useExamSessionContext();
  const { 
    exam, currentQuestion, nextQuestion, prevQuestion, setAnswer, 
    saveAndNext, answers, getStats 
  } = useExamSession();
  
  const [isLoading, setIsLoading] = useState(true);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showAutoSubmit, setShowAutoSubmit] = useState(false);

  useAutoSave(exam?.id);

  // Initialize Session
  useEffect(() => {
    setIsLoading(true);
    const foundExam = exams.find(e => e.slug === slug);
    
    if (!foundExam) {
      navigate('/exams');
      return;
    }

    const examQuestions = allQuestions.filter(q => q.examId === foundExam.id);
    
    // Check local storage for existing session
    const savedSessionStr = localStorage.getItem(`${LOCAL_STORAGE_KEYS.ACTIVE_EXAM}_${foundExam.id}`);
    const savedSession = savedSessionStr ? JSON.parse(savedSessionStr) : null;
    
    initSession(foundExam, examQuestions, savedSession);
    setIsLoading(false);

    // Enter Fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => console.log("Fullscreen failed:", err));
    }

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, [slug]);

  // Anti-Accidental Refresh
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Leaving will lose your progress. Continue?";
      return e.returnValue;
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Keyboard Shortcuts
  const handleKeyDown = useCallback((e) => {
    if (!currentQuestion || showSubmitConfirm || showAutoSubmit) return;

    switch(e.key) {
      case 'ArrowRight':
        nextQuestion();
        break;
      case 'ArrowLeft':
        prevQuestion();
        break;
      case 'Enter':
        const ans = answers[currentQuestion.id];
        saveAndNext(currentQuestion.id, ans);
        break;
      case '1':
      case '2':
      case '3':
      case '4':
        const index = parseInt(e.key) - 1;
        if (currentQuestion.options[index]) {
          setAnswer(currentQuestion.id, currentQuestion.options[index]);
        }
        break;
      default:
        break;
    }
  }, [currentQuestion, answers, saveAndNext, prevQuestion, nextQuestion, setAnswer, showSubmitConfirm, showAutoSubmit]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTimeUp = useCallback(() => {
    setShowAutoSubmit(true);
    setIsSubmitting(true);
    setTimeout(() => {
      clearSession();
      navigate('/result-placeholder');
    }, 3000);
  }, [clearSession, navigate, setIsSubmitting]);

  const handleManualSubmit = () => {
    setShowSubmitConfirm(false);
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      clearSession();
      navigate('/result-placeholder');
    }, 1500);
  };

  if (isLoading || !exam) return <ExamSessionSkeleton />;

  return (
    <div className="bg-background min-h-screen pt-20 flex flex-col">
      <ExamHeader 
        onTimeUp={handleTimeUp} 
        onSubmitRequest={() => setShowSubmitConfirm(true)} 
      />

      <Container className="flex-1 py-8 flex gap-6 pb-[120px] md:pb-8">
        <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col">
          <QuestionCard />
          <QuestionNavigation onSubmit={() => setShowSubmitConfirm(true)} />
        </main>

        <ExamSidebar />
      </Container>

      <ExamMobileDrawer />

      <SubmitConfirmationModal 
        isOpen={showSubmitConfirm}
        onClose={() => setShowSubmitConfirm(false)}
        onConfirm={handleManualSubmit}
        stats={getStats()}
      />
      <AutoSubmitModal isOpen={showAutoSubmit} />
    </div>
  );
};

export default ExamSession;
