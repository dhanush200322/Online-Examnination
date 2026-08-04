import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

export const Breadcrumb = ({ items, className }) => {
  return (
    <nav className={cn("flex items-center space-x-2 text-sm text-textMuted", className)} aria-label="Breadcrumb">
      <Link to="/" className="hover:text-textHeading transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link to={item.href} className="hover:text-textHeading transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-textHeading font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
