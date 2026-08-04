import React from 'react';
import { cn } from '@/utils/cn';

export const Container = ({ children, className, as: Component = 'div', ...props }) => {
  return (
    <Component 
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
