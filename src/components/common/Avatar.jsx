import React from 'react';
import { cn } from '@/utils/cn';

export const Avatar = ({ src, name, size = 'md', className }) => {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
    xl: "w-20 h-20 text-xl"
  };

  const initials = name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : '?';

  return (
    <div className={cn(
      "relative rounded-full overflow-hidden bg-surfaceElevated border border-border flex items-center justify-center shrink-0",
      sizes[size],
      className
    )}>
      {src ? (
        <img 
          src={src} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ) : (
        <span className="font-semibold text-textMuted">{initials}</span>
      )}
    </div>
  );
};
