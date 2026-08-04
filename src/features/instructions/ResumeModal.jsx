import React from 'react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { RotateCcw, PlayCircle } from 'lucide-react';

export const ResumeModal = ({ isOpen, onResume, onStartFresh, lastSavedTime }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <Card className="relative w-full max-w-md p-6 sm:p-8 animate-slide-up shadow-2xl border-accent/20">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
          <RotateCcw className="w-6 h-6 text-accent" />
        </div>
        
        <h2 className="text-2xl font-bold text-textHeading mb-2">Resume Previous Attempt?</h2>
        <p className="text-textBody mb-6">
          We found an incomplete attempt for this exam. You can resume from where you left off.
        </p>
        
        {lastSavedTime && (
          <div className="bg-surfaceElevated p-3 rounded-lg border border-border mb-8 inline-block">
            <span className="text-xs font-semibold text-textMuted">Last Saved:</span>
            <span className="ml-2 text-sm font-bold text-textHeading">{new Date(lastSavedTime).toLocaleString()}</span>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Button 
            variant="primary" 
            onClick={onResume}
            leftIcon={<RotateCcw className="w-4 h-4" />}
            className="w-full"
          >
            Resume Exam
          </Button>
          <Button 
            variant="outline" 
            onClick={onStartFresh}
            leftIcon={<PlayCircle className="w-4 h-4" />}
            className="w-full text-textMuted hover:text-danger hover:border-danger hover:bg-danger/5"
          >
            Start Fresh (Discard Progress)
          </Button>
        </div>
      </Card>
    </div>
  );
};
