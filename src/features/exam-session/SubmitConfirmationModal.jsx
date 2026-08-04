import React from 'react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';

export const SubmitConfirmationModal = ({ isOpen, onClose, onConfirm, stats }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      
      <Card className="relative w-full max-w-lg p-6 sm:p-8 animate-slide-up shadow-2xl border-accent/20 m-4">
        <h2 className="text-2xl font-bold text-textHeading mb-2">Submit Examination?</h2>
        <p className="text-textBody mb-6">Are you sure you want to submit your exam? You will not be able to change your answers after submission.</p>

        <div className="bg-surfaceElevated rounded-xl p-4 mb-8">
          <h3 className="text-sm font-bold text-textHeading uppercase tracking-wider mb-3">Exam Summary</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-textMuted">Answered</span>
              <span className="font-bold text-success bg-success/10 px-2 py-0.5 rounded">{stats.answered}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-textMuted">Marked for Review</span>
              <span className="font-bold text-warning bg-warning/10 px-2 py-0.5 rounded">{stats.review}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-textMuted">Not Answered</span>
              <span className="font-bold text-danger bg-danger/10 px-2 py-0.5 rounded">{stats.notAnswered}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-textMuted">Not Visited</span>
              <span className="font-bold text-textHeading bg-surface px-2 py-0.5 rounded border border-border">{stats.total - stats.answered - stats.notAnswered}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Button variant="outline" onClick={onClose}>Return to Exam</Button>
          <Button variant="primary" className="bg-success hover:bg-success/90" onClick={onConfirm}>Confirm Submission</Button>
        </div>
      </Card>
    </div>
  );
};
