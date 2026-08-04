import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.RECENTLY_VIEWED);
      if (stored) {
        setRecentlyViewed(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse recently viewed', e);
    }
  }, []);

  const addRecentlyViewed = (examId) => {
    try {
      setRecentlyViewed(prev => {
        const filtered = prev.filter(id => id !== examId);
        const updated = [examId, ...filtered].slice(0, 5); // Keep last 5
        localStorage.setItem(LOCAL_STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(updated));
        return updated;
      });
    } catch (e) {
      console.error('Failed to save recently viewed', e);
    }
  };

  return { recentlyViewed, addRecentlyViewed };
};
