import React, { useState } from 'react';
import { cn } from '@/utils/cn';

export const StickySectionNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Account for sticky nav and header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex items-center gap-6 overflow-x-auto custom-scrollbar no-scrollbar pb-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={cn(
              "text-sm font-semibold whitespace-nowrap transition-colors border-b-2 pb-1",
              activeSection === section.id 
                ? "text-accent border-accent" 
                : "text-textMuted border-transparent hover:text-textHeading"
            )}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
};
