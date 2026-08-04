import { useState, useMemo } from 'react';
import { useDebounce } from './useDebounce';

export const useExamFilters = (initialExams = []) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [featured, setFeatured] = useState(false);
  const [sort, setSort] = useState('popular');
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredExams = useMemo(() => {
    let result = [...initialExams];

    // 1. Search
    if (debouncedSearch) {
      const lowerQuery = debouncedSearch.toLowerCase();
      result = result.filter(exam => 
        exam.title.toLowerCase().includes(lowerQuery) || 
        exam.subtitle.toLowerCase().includes(lowerQuery)
      );
    }

    // 2. Filters
    if (category) {
      result = result.filter(exam => exam.category === category);
    }
    
    if (difficulty) {
      result = result.filter(exam => exam.difficulty === difficulty);
    }

    if (duration) {
      // e.g., '0-60', '60-120', '120+'
      if (duration === '0-60') result = result.filter(exam => exam.duration <= 60);
      else if (duration === '60-120') result = result.filter(exam => exam.duration > 60 && exam.duration <= 120);
      else if (duration === '120+') result = result.filter(exam => exam.duration > 120);
    }

    if (price) {
      // e.g., 'free', 'paid'
      if (price === 'free') result = result.filter(exam => exam.discountPrice === 0 || exam.price === 0);
      else if (price === 'paid') result = result.filter(exam => exam.discountPrice > 0 || exam.price > 0);
    }

    if (featured) {
      result = result.filter(exam => exam.featured);
    }

    // 3. Sorting
    switch (sort) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'popular':
        result.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
        break;
      case 'highest-rated':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price-high':
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'alphabetical':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return result;
  }, [initialExams, debouncedSearch, category, difficulty, duration, price, featured, sort]);

  // Pagination logic
  const totalPages = Math.ceil(filteredExams.length / itemsPerPage);
  const currentExams = filteredExams.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Reset page when filters change
  useMemo(() => {
    setPage(1);
  }, [debouncedSearch, category, difficulty, duration, price, featured, sort]);

  const clearFilters = () => {
    setSearchQuery('');
    setCategory('');
    setDifficulty('');
    setDuration('');
    setPrice('');
    setFeatured(false);
    setSort('popular');
    setPage(1);
  };

  return {
    searchQuery, setSearchQuery,
    category, setCategory,
    difficulty, setDifficulty,
    duration, setDuration,
    price, setPrice,
    featured, setFeatured,
    sort, setSort,
    page, setPage,
    totalPages,
    currentExams,
    totalResults: filteredExams.length,
    clearFilters
  };
};
