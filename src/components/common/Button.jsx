import React from 'react';
import { cn } from '@/utils/cn';

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  disabled, 
  leftIcon, 
  rightIcon, 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-background hover:scale-[1.02] shadow-soft-sm",
    secondary: "bg-transparent border border-border text-textHeading hover:bg-surfaceElevated",
    ghost: "bg-transparent text-textBody hover:bg-surfaceElevated hover:text-textHeading",
    danger: "bg-danger text-white hover:bg-danger/90 hover:scale-[1.02] shadow-soft-sm",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-11 px-6 text-base rounded-xl",
    lg: "h-14 px-8 text-lg rounded-2xl",
    icon: "h-11 w-11 rounded-xl",
  };

  return (
    <button
      ref={ref}
      disabled={isLoading || disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';
