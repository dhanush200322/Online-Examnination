import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';
import { Card } from '@/components/common/Card';

export const ExamCardSkeleton = () => {
  return (
    <Card padding="none" className="overflow-hidden flex flex-col h-[400px]">
      <Skeleton variant="rounded" className="h-48 w-full rounded-none" />
      <div className="p-5 flex flex-col flex-1 gap-4">
        <Skeleton variant="text" className="h-6 w-3/4" />
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-5/6" />
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
          <Skeleton variant="text" className="h-10 w-20" />
          <Skeleton variant="text" className="h-8 w-24 ml-auto" />
        </div>
      </div>
    </Card>
  );
};
