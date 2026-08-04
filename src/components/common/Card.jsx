import React from 'react';
import { cn } from '@/utils/cn';

export const Card = ({ 
  children, 
  className, 
  variant = 'solid', 
  padding = 'md',
  hover = false,
  ...props 
}) => {
  const variants = {
    solid: "bg-surface border border-border shadow-soft-sm",
    glass: "glass-card",
    outline: "bg-transparent border border-border"
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  return (
    <div 
      className={cn(
        "rounded-2xl transition-all duration-300",
        variants[variant],
        paddings[padding],
        hover && "hover:scale-[1.01] hover:shadow-soft-md cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
