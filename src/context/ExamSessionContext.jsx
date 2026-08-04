import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

const ExamSessionContext = createContext();

export const ExamSessionProvider = ({ children }) => {
  const [exam, setExam] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState([]);
  const [visited, setVisited] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0); // in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const initSession = (selectedExam, examQuestions, savedSession = null) => {
    setExam(selectedExam);
    setQuestions(examQuestions);
    
    if (savedSession) {
      setAnswers(savedSession.answers || {});
      setMarkedForReview(savedSession.markedForReview || []);
      setVisited(savedSession.visited || [0]);
      setCurrentQuestionIndex(savedSession.currentQuestionIndex || 0);
      setTimeRemaining(savedSession.timeRemaining || selectedExam.duration * 60);
      setLastSaved(savedSession.lastSaved || null);
    } else {
      setAnswers({});
      setMarkedForReview([]);
      setVisited([0]);
      setCurrentQuestionIndex(0);
      setTimeRemaining(selectedExam.duration * 60);
      setLastSaved(new Date().toISOString());
    }
  };

  const clearSession = useCallback(() => {
    setExam(null);
    setQuestions([]);
    setAnswers({});
    setMarkedForReview([]);
    setVisited([]);
    setCurrentQuestionIndex(0);
    setTimeRemaining(0);
    setLastSaved(null);
    if (exam?.id) {
      localStorage.removeItem(`${LOCAL_STORAGE_KEYS.ACTIVE_EXAM}_${exam.id}`);
    }
  }, [exam]);

  return (
    <ExamSessionContext.Provider value={{
      exam, setExam,
      questions, setQuestions,
      answers, setAnswers,
      markedForReview, setMarkedForReview,
      visited, setVisited,
      currentQuestionIndex, setCurrentQuestionIndex,
      timeRemaining, setTimeRemaining,
      isSubmitting, setIsSubmitting,
      lastSaved, setLastSaved,
      initSession,
      clearSession
    }}>
      {children}
    </ExamSessionContext.Provider>
  );
};

export const useExamSessionContext = () => useContext(ExamSessionContext);
