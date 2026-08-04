import React, { useState } from 'react';
import { faq } from '@/data/faq';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ExamFAQ = () => {
  const [openId, setOpenId] = useState(faq[0]?.id);

  return (
    <div id="faq" className="scroll-mt-32 mb-12">
      <h2 className="text-2xl font-bold text-textHeading mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faq.slice(0, 5).map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id} 
              className={cn(
                "border border-border rounded-xl overflow-hidden bg-surface transition-all duration-300",
                isOpen && "border-accent/50 shadow-soft-sm"
              )}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between font-semibold text-textHeading focus:outline-none"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="text-left pr-4">{item.question}</span>
                <ChevronDown className={cn("w-5 h-5 text-textMuted transition-transform duration-300 shrink-0", isOpen && "rotate-180")} />
              </button>
              
              <div 
                className={cn(
                  "px-6 text-textBody overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
