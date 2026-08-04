import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';
import { faq } from '@/data/faq';

export const FAQPreview = () => {
  const [openId, setOpenId] = useState(faq[0]?.id);

  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Everything you need to know about the platform."
            className="text-center sm:items-center sm:flex-col"
          />
          
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <div 
                key={item.id} 
                className="border border-border rounded-xl overflow-hidden bg-surface transition-all duration-200"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between font-semibold text-textHeading focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                >
                  <span className="text-left">{item.question}</span>
                  <ChevronDown className={cn("w-5 h-5 text-textMuted transition-transform duration-300", openId === item.id && "rotate-180")} />
                </button>
                
                <div 
                  className={cn(
                    "px-6 text-textBody overflow-hidden transition-all duration-300 ease-in-out",
                    openId === item.id ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
