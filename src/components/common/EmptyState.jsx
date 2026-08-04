import React from 'react';
import { cn } from '@/utils/cn';
import { Button } from './Button';

export const EmptyState = ({ 
  icon, 
  title, 
  description, 
  actionLabel, 
  onAction,
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-12 text-center", className)}>
      {icon && (
        <div className="w-16 h-16 mb-6 rounded-full bg-surfaceElevated flex items-center justify-center text-textMuted">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-textHeading mb-2">{title}</h3>
      {description && <p className="text-textMuted max-w-md mb-6">{description}</p>}
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="secondary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
