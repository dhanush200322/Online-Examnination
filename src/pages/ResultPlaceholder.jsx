import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { useExamSessionContext } from '@/context/ExamSessionContext';
import { questions as allQuestions } from '@/data/questions';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

const ResultPlaceholder = () => {
  const navigate = useNavigate();
  const { exam, answers, timeRemaining } = useExamSessionContext();

  useEffect(() => {
    if (!exam) {
      navigate('/exams');
      return;
    }

    const processResult = () => {
      const examQuestions = allQuestions.filter(q => q.examId === exam.id);
      let correct = 0;
      let wrong = 0;
      let skipped = 0;
      let totalMarks = 0;
      let earnedMarks = 0;

      examQuestions.forEach(q => {
        totalMarks += (q.marks || 1);
        const userAnswer = answers[q.id];
        
        if (!userAnswer) {
          skipped++;
        } else if (userAnswer === q.correctAnswer) {
          correct++;
          earnedMarks += (q.marks || 1);
        } else {
          wrong++;
          earnedMarks -= (q.negativeMarks || 0);
        }
      });

      earnedMarks = Math.max(0, earnedMarks);
      const percentage = Math.round((earnedMarks / totalMarks) * 100);
      const isPass = earnedMarks >= (exam.passingMarks || 0);
      
      const attemptId = `ATT-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      const certificateId = isPass ? `CERT-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}` : null;
      
      const timeTaken = (exam.duration * 60) - timeRemaining;

      const resultData = {
        attemptId,
        examId: exam.id,
        examTitle: exam.title,
        score: earnedMarks,
        totalMarks,
        percentage,
        isPass,
        answers, // user answers
        correct,
        wrong,
        skipped,
        timeTaken,
        certificateId,
        timestamp: new Date().toISOString()
      };

      // Save to localStorage
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.RESULTS) || '[]';
        const results = JSON.parse(stored);
        results.unshift(resultData);
        localStorage.setItem(LOCAL_STORAGE_KEYS.RESULTS, JSON.stringify(results));
        
        // Clean active session
        localStorage.removeItem(`${LOCAL_STORAGE_KEYS.ACTIVE_EXAM}_${exam.id}`);
      } catch (e) {
        console.error("Failed to save result", e);
      }

      // Redirect
      navigate(`/result/${attemptId}`, { replace: true });
    };

    const timer = setTimeout(() => {
      processResult();
    }, 2500);

    return () => clearTimeout(timer);
  }, [exam, answers, timeRemaining, navigate]);

  return (
    <div className="bg-background min-h-[calc(100vh-64px)] flex items-center justify-center py-12">
      <Container className="max-w-lg text-center animate-fade-in">
        <div className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <Loader2 className="w-12 h-12 animate-spin absolute" />
          <div className="w-8 h-8 rounded-full bg-accent animate-pulse" />
        </div>
        
        <h1 className="text-3xl font-bold text-textHeading mb-4">Submitting Answers...</h1>
        <p className="text-lg text-textBody mb-8">
          Please wait while we calculate your score and prepare your analytics.
        </p>
        
        <div className="space-y-4 max-w-sm mx-auto text-left bg-surfaceElevated p-6 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            </div>
            <span className="text-sm font-medium text-textHeading">Saving final answers</span>
          </div>
          <div className="flex items-center gap-3 opacity-50">
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <span className="text-sm font-medium text-textHeading">Evaluating responses</span>
          </div>
          <div className="flex items-center gap-3 opacity-30">
            <div className="w-5 h-5 rounded-full bg-info/20 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-info" />
            </div>
            <span className="text-sm font-medium text-textHeading">Generating certificate</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResultPlaceholder;
