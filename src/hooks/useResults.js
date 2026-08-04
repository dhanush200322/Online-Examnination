import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

export const useResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.RESULTS) || '[]';
      setResults(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse results', e);
    }
  }, []);

  const saveResult = (resultData) => {
    try {
      const current = [...results];
      current.unshift(resultData);
      localStorage.setItem(LOCAL_STORAGE_KEYS.RESULTS, JSON.stringify(current));
      setResults(current);
    } catch (e) {
      console.error('Failed to save result', e);
    }
  };

  const getResultById = (attemptId) => {
    return results.find(r => r.attemptId === attemptId);
  };

  return { results, saveResult, getResultById };
};
