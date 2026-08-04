import React from 'react';
import { Modal } from '@/components/common/Modal'; // Using standard Modal component which I will make sure exists.
import { Loader2 } from 'lucide-react';

export const AutoSubmitModal = ({ isOpen }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <div className="relative bg-surface border border-border p-8 rounded-2xl max-w-md w-full text-center shadow-2xl scale-100">
        <div className="w-16 h-16 bg-info/10 text-info rounded-full flex items-center justify-center mx-auto mb-6">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-textHeading mb-2">Time is Up!</h2>
        <p className="text-textBody mb-6">Your examination time has concluded. We are automatically saving and submitting your answers.</p>
        <div className="w-full bg-surfaceElevated h-2 rounded-full overflow-hidden">
          <div className="bg-info h-full w-full animate-[slide-right_2s_ease-in-out_infinite]" style={{ transformOrigin: 'left' }} />
        </div>
      </div>
    </div>
  );
};
