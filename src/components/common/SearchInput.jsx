import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './Input';
import { cn } from '@/utils/cn';

export const SearchInput = ({ className, ...props }) => {
  return (
    <Input 
      icon={<Search className="w-5 h-5" />}
      placeholder="Search..."
      className={cn("bg-surface border-border", className)}
      {...props}
    />
  );
};
