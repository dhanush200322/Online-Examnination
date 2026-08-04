import React from 'react';
import { cn } from '@/utils/cn';

export const Input = React.forwardRef(({ 
  className, 
  error, 
  icon, 
  label,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-textHeading mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-textMuted">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full h-11 bg-surfaceElevated border border-transparent text-textBody rounded-xl outline-none transition-all duration-200",
            "focus:bg-surface focus:border-accent/50 focus:ring-2 focus:ring-accent/20",
            icon ? "pl-10 pr-4" : "px-4",
            error && "border-danger focus:border-danger focus:ring-danger/20 bg-danger/5",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1.5 text-sm text-danger">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
