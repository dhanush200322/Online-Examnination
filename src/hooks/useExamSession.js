import { useCallback } from 'react';
import { useExamSessionContext } from '@/context/ExamSessionContext';

export const useExamSession = () => {
  const {
    exam, questions, answers, setAnswers,
    markedForReview, setMarkedForReview,
    visited, setVisited,
    currentQuestionIndex, setCurrentQuestionIndex
  } = useExamSessionContext();

  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const getQuestionStatus = useCallback((index) => {
    const qId = questions[index]?.id;
    if (index === currentQuestionIndex) return 'current';
    if (answers[qId]) return 'answered';
    if (markedForReview.includes(qId)) return 'review';
    if (visited.includes(index)) return 'not-answered';
    return 'not-visited';
  }, [answers, markedForReview, visited, currentQuestionIndex, questions]);

  const markVisited = (index) => {
    setVisited(prev => prev.includes(index) ? prev : [...prev, index]);
  };

  const jumpToQuestion = (index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
      markVisited(index);
    }
  };

  const nextQuestion = () => {
    if (!isLastQuestion) jumpToQuestion(currentQuestionIndex + 1);
  };

  const prevQuestion = () => {
    if (!isFirstQuestion) jumpToQuestion(currentQuestionIndex - 1);
  };

  const setAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const clearAnswer = (questionId) => {
    setAnswers(prev => {
      const newAnswers = { ...prev };
      delete newAnswers[questionId];
      return newAnswers;
    });
  };

  const toggleMarkForReview = (questionId) => {
    setMarkedForReview(prev => 
      prev.includes(questionId) ? prev.filter(id => id !== questionId) : [...prev, questionId]
    );
  };

  const saveAndNext = (questionId, answer) => {
    if (answer) {
      setAnswer(questionId, answer);
      // If it was marked for review, unmark it when saving final answer
      if (markedForReview.includes(questionId)) {
        toggleMarkForReview(questionId);
      }
    }
    nextQuestion();
  };

  const getStats = () => {
    const answered = Object.keys(answers).length;
    const review = markedForReview.length;
    const notAnswered = visited.length - answered; // Rough approx, some visited might be answered
    // Actually exact not answered out of visited:
    const exactNotAnswered = visited.filter(idx => !answers[questions[idx]?.id] && !markedForReview.includes(questions[idx]?.id)).length;
    const skipped = questions.length - answered;
    const percentage = questions.length > 0 ? Math.round((answered / questions.length) * 100) : 0;

    return { answered, review, notAnswered: exactNotAnswered, skipped, percentage, total: questions.length };
  };

  return {
    exam, questions, currentQuestion, currentQuestionIndex,
    isFirstQuestion, isLastQuestion,
    answers, setAnswer, clearAnswer,
    markedForReview, toggleMarkForReview,
    getQuestionStatus, jumpToQuestion, nextQuestion, prevQuestion, saveAndNext,
    getStats
  };
};
