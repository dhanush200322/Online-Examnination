import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';
import { Container } from '@/components/common/Container';

export const ExamSessionSkeleton = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Header Skeleton */}
      <header className="h-20 border-b border-border bg-surface">
        <Container className="h-full flex items-center justify-between">
          <Skeleton variant="text" className="w-48 h-6" />
          <div className="flex gap-4">
            <Skeleton variant="rounded" className="w-32 h-10" />
            <Skeleton variant="rounded" className="w-24 h-10" />
          </div>
        </Container>
      </header>

      <Container className="pt-24 pb-24 md:pb-8 flex gap-6">
        <div className="flex-1 w-full max-w-4xl mx-auto space-y-6">
          <div className="bg-surface border border-border p-8 rounded-2xl">
            <div className="flex justify-between mb-8">
              <Skeleton variant="text" className="w-32 h-6" />
              <Skeleton variant="text" className="w-16 h-6" />
            </div>
            <Skeleton variant="text" className="w-full h-8 mb-8" />
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} variant="rounded" className="w-full h-16" />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="hidden md:block w-80 shrink-0">
          <div className="bg-surface border border-border rounded-2xl h-[calc(100vh-120px)] p-4">
            <Skeleton variant="rounded" className="w-full h-24 mb-6" />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(20)].map((_, i) => (
                <Skeleton key={i} variant="rounded" className="w-full aspect-square" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
