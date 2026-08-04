import { useMemo } from 'react';
import { questions as allQuestions } from '@/data/questions';

export const usePerformance = (attemptId, examId, userAnswers) => {
  return useMemo(() => {
    if (!examId || !userAnswers) return null;

    const examQuestions = allQuestions.filter(q => q.examId === examId);
    
    const topicStats = {};
    const difficultyStats = {
      Easy: { total: 0, correct: 0 },
      Medium: { total: 0, correct: 0 },
      Advanced: { total: 0, correct: 0 },
    };

    examQuestions.forEach(q => {
      // Topic Stats
      const topic = q.topic || 'General';
      if (!topicStats[topic]) {
        topicStats[topic] = { total: 0, correct: 0 };
      }
      topicStats[topic].total += 1;

      // Difficulty Stats
      const diff = q.difficulty || 'Medium';
      if (difficultyStats[diff]) {
        difficultyStats[diff].total += 1;
      }

      // Check correct
      const isCorrect = userAnswers[q.id] === q.correctAnswer;
      if (isCorrect) {
        topicStats[topic].correct += 1;
        if (difficultyStats[diff]) {
          difficultyStats[diff].correct += 1;
        }
      }
    });

    const topicsArray = Object.keys(topicStats).map(topic => ({
      name: topic,
      percentage: Math.round((topicStats[topic].correct / topicStats[topic].total) * 100) || 0
    })).sort((a, b) => b.percentage - a.percentage);

    const strongTopics = topicsArray.filter(t => t.percentage >= 70);
    const weakTopics = topicsArray.filter(t => t.percentage < 70);

    return {
      topicStats: topicsArray,
      difficultyStats,
      strongTopics,
      weakTopics
    };
  }, [attemptId, examId, userAnswers]);
};
