import React from 'react';
import { cn } from '@/utils/cn';
import { useExamSession } from '@/hooks/useExamSession';

export const QuestionOptions = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {options.map((option, index) => {
        const isSelected = selectedOption === option;
        const letter = String.fromCharCode(65 + index); // A, B, C, D

        return (
          <label 
            key={index}
            className={cn(
              "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2",
              isSelected 
                ? "border-accent bg-accent/5 shadow-soft-sm" 
                : "border-border bg-surface hover:border-accent/40 hover:bg-surfaceElevated"
            )}
          >
            <div className="relative flex items-center justify-center shrink-0">
              <input
                type="radio"
                name="question-option"
                value={option}
                checked={isSelected}
                onChange={() => onSelect(option)}
                className="sr-only"
                aria-label={`Option ${letter}: ${option}`}
              />
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors",
                isSelected 
                  ? "bg-accent text-white" 
                  : "bg-surfaceElevated text-textMuted group-hover:text-textHeading border border-border/50"
              )}>
                {letter}
              </div>
            </div>
            
            <div className="flex-1">
              <span className={cn(
                "text-base font-medium leading-relaxed transition-colors",
                isSelected ? "text-textHeading" : "text-textBody group-hover:text-textHeading"
              )}>
                {option}
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
};
