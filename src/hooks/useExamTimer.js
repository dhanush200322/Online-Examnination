import { useEffect, useRef, useState } from 'react';
import { useExamSessionContext } from '@/context/ExamSessionContext';
import { useNotification } from '@/context/NotificationContext';

export const useExamTimer = (onTimeUp) => {
  const { timeRemaining, setTimeRemaining, isSubmitting } = useExamSessionContext();
  const { addToast } = useNotification();
  const [warnings, setWarnings] = useState({ ten: false, five: false, one: false });
  const timerRef = useRef(null);

  useEffect(() => {
    if (isSubmitting || timeRemaining <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          onTimeUp();
          return 0;
        }
        
        // Handle warnings
        if (prev === 600 && !warnings.ten) {
          addToast("10 minutes remaining", "warning");
          setWarnings(w => ({ ...w, ten: true }));
        } else if (prev === 300 && !warnings.five) {
          addToast("5 minutes remaining", "warning");
          setWarnings(w => ({ ...w, five: true }));
        } else if (prev === 60 && !warnings.one) {
          addToast("1 minute remaining! Finalize your answers.", "danger", 5000);
          setWarnings(w => ({ ...w, one: true }));
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isSubmitting, timeRemaining, warnings, onTimeUp, setTimeRemaining, addToast]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return { timeRemaining, formattedTime: formatTime(timeRemaining) };
};
