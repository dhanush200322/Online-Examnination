import React from 'react';
import { cn } from '@/utils/cn';

export const SectionHeader = ({ title, subtitle, action, className }) => {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8", className)}>
      <div>
        <h2 className="text-3xl font-bold text-textHeading tracking-tight mb-2">{title}</h2>
        {subtitle && <p className="text-lg text-textMuted">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
