import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button 
        variant="ghost" 
        size="icon" 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <span className="text-sm font-medium text-textMuted px-4">
        Page {currentPage} of {totalPages}
      </span>
      <Button 
        variant="ghost" 
        size="icon" 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};
