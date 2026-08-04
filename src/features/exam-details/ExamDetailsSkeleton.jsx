import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';
import { Container } from '@/components/common/Container';

export const ExamDetailsSkeleton = () => {
  return (
    <div className="w-full bg-background animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-[400px] bg-surfaceElevated w-full relative">
        <Container className="h-full flex flex-col justify-center">
          <Skeleton variant="text" className="h-4 w-32 mb-4 bg-surface" />
          <Skeleton variant="text" className="h-12 w-3/4 max-w-2xl mb-4 bg-surface" />
          <Skeleton variant="text" className="h-6 w-full max-w-3xl mb-8 bg-surface" />
          <div className="flex gap-4">
            <Skeleton variant="rounded" className="h-12 w-32 bg-surface" />
            <Skeleton variant="rounded" className="h-12 w-32 bg-surface" />
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Skeleton */}
          <div className="flex-1 space-y-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} variant="rounded" className="h-24 w-full" />
              ))}
            </div>
            
            <div className="space-y-4">
              <Skeleton variant="text" className="h-8 w-48" />
              <Skeleton variant="text" className="h-4 w-full" />
              <Skeleton variant="text" className="h-4 w-full" />
              <Skeleton variant="text" className="h-4 w-3/4" />
            </div>

            <div className="space-y-4">
              <Skeleton variant="text" className="h-8 w-48" />
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} variant="rounded" className="h-16 w-full" />
              ))}
            </div>
          </div>

          {/* Sticky Sidebar Skeleton */}
          <div className="w-full lg:w-80 shrink-0">
            <Skeleton variant="rounded" className="h-[500px] w-full sticky top-24" />
          </div>
        </div>
      </Container>
    </div>
  );
};
