import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

export const Drawer = ({ isOpen, onClose, title, children, position = 'right' }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const positions = {
    left: "left-0",
    right: "right-0"
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className={cn(
        "absolute top-0 bottom-0 w-full max-w-sm bg-surface shadow-soft-lg flex flex-col z-10 animate-slide-up",
        positions[position]
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-semibold text-textHeading">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-surfaceElevated">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
