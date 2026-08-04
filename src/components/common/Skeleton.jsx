import React from 'react';
import { cn } from '@/utils/cn';

export const Skeleton = ({ className, variant = 'rounded' }) => {
  const variants = {
    circular: "rounded-full",
    rounded: "rounded-xl",
    text: "rounded-md"
  };

  return (
    <div 
      className={cn(
        "animate-pulse bg-surfaceElevated",
        variants[variant],
        className
      )} 
    />
  );
};
