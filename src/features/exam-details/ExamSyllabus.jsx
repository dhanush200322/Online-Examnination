import React, { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ExamSyllabus = ({ syllabus }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!syllabus || syllabus.length === 0) return null;

  return (
    <div id="syllabus" className="scroll-mt-32 mb-12">
      <h2 className="text-2xl font-bold text-textHeading mb-6">Course Syllabus</h2>
      
      <div className="space-y-4">
        {syllabus.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={cn(
                "border rounded-xl overflow-hidden bg-surface transition-all duration-300",
                isOpen ? "border-accent shadow-soft-md" : "border-border hover:border-accent/50"
              )}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center gap-3 text-left">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isOpen ? "bg-accent/10 text-accent" : "bg-surfaceElevated text-textMuted"
                  )}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-textHeading">{item}</span>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-textMuted transition-transform duration-300", isOpen && "rotate-180")} />
              </button>
              
              <div 
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="pt-2 border-t border-border mt-2">
                  <p className="text-textBody text-sm">
                    Detailed lessons for {item} will be covered in this module, including practical examples and quizzes.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
