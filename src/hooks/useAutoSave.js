import { useEffect, useRef } from 'react';
import { useExamSessionContext } from '@/context/ExamSessionContext';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

export const useAutoSave = (examId) => {
  const {
    answers, markedForReview, visited, currentQuestionIndex, timeRemaining, setLastSaved, isSubmitting
  } = useExamSessionContext();
  
  const lastSavedState = useRef('');

  useEffect(() => {
    if (!examId || isSubmitting) return;

    const currentStateStr = JSON.stringify({
      answers, markedForReview, visited, currentQuestionIndex, timeRemaining
    });

    // Only save if something changed and 15s interval is managed by the effect
    const interval = setInterval(() => {
      if (lastSavedState.current !== currentStateStr) {
        const sessionData = {
          examId,
          answers,
          markedForReview,
          visited,
          currentQuestionIndex,
          timeRemaining,
          lastSaved: new Date().toISOString()
        };
        
        try {
          localStorage.setItem(`${LOCAL_STORAGE_KEYS.ACTIVE_EXAM}_${examId}`, JSON.stringify(sessionData));
          lastSavedState.current = currentStateStr;
          
          const now = new Date();
          const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          setLastSaved(timeStr);
        } catch (e) {
          console.error("Auto-save failed", e);
        }
      }
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, [examId, answers, markedForReview, visited, currentQuestionIndex, timeRemaining, isSubmitting, setLastSaved]);

  // Expose manual save for immediate saves (e.g. on answering)
  const manualSave = () => {
    if (!examId || isSubmitting) return;
    try {
      const sessionData = {
        examId, answers, markedForReview, visited, currentQuestionIndex, timeRemaining, lastSaved: new Date().toISOString()
      };
      localStorage.setItem(`${LOCAL_STORAGE_KEYS.ACTIVE_EXAM}_${examId}`, JSON.stringify(sessionData));
      
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSaved(timeStr);
    } catch (e) {
      console.error("Manual save failed", e);
    }
  };

  return { manualSave };
};
