import React from 'react';
import { cn } from '@/utils/cn';

export const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className 
}) => {
  const variants = {
    default: "bg-surfaceElevated text-textBody border border-border",
    primary: "bg-primary/10 text-primary border border-primary/20",
    success: "bg-success/10 text-success border border-success/20",
    warning: "bg-warning/10 text-warning border border-warning/20",
    danger: "bg-danger/10 text-danger border border-danger/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm",
  };

  return (
    <span className={cn(
      "inline-flex items-center font-medium rounded-full uppercase tracking-wider whitespace-nowrap",
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </span>
  );
};
