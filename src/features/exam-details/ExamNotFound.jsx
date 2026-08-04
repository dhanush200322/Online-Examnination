import React from 'react';
import { FileQuestion } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';
import { Card } from '@/components/common/Card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';

export const ExamNotFound = () => {
  return (
    <div className="py-24 min-h-[70vh] flex items-center justify-center bg-background">
      <Card className="max-w-lg w-full text-center py-16 px-8 mx-4">
        <EmptyState
          icon={<FileQuestion className="w-16 h-16" />}
          title="Exam Not Found"
          description="We couldn't find the exam you're looking for. It may have been removed or the URL might be incorrect."
        />
        <Link to="/exams">
          <Button size="lg" className="mt-4">Browse All Exams</Button>
        </Link>
      </Card>
    </div>
  );
};
