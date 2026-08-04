import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ExplanationCard = ({ explanation }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!explanation) return null;

  return (
    <div className="mt-8 border border-accent/20 rounded-xl overflow-hidden bg-accent/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between font-semibold text-accent focus:outline-none focus:bg-accent/10 transition-colors"
      >
        <span className="flex items-center gap-2">
          {isOpen ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {isOpen ? 'Hide Explanation' : 'View Explanation'}
        </span>
        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      
      <div 
        className={cn(
          "px-6 text-textBody overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pt-4 border-t border-accent/10">
          {explanation}
        </div>
      </div>
    </div>
  );
};
