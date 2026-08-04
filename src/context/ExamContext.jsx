import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

const ExamContext = createContext();

export const ExamProvider = ({ children }) => {
  const [activeExam, setActiveExam] = useLocalStorage(LOCAL_STORAGE_KEYS.ACTIVE_EXAM, null);
  const [examHistory, setExamHistory] = useLocalStorage(LOCAL_STORAGE_KEYS.EXAM_HISTORY, []);

  const startExam = (exam) => {
    setActiveExam({
      ...exam,
      startTime: new Date().toISOString(),
      answers: {},
      timeRemaining: exam.duration * 60,
      questionStatuses: {}
    });
  };

  const endExam = () => {
    if (activeExam) {
      setExamHistory(prev => [...prev, { ...activeExam, endTime: new Date().toISOString() }]);
      setActiveExam(null);
    }
  };

  return (
    <ExamContext.Provider value={{ activeExam, setActiveExam, startExam, endExam, examHistory }}>
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = () => useContext(ExamContext);
