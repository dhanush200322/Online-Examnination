import React from 'react';
import { SearchX } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';
import { Card } from '@/components/common/Card';

export const NoExamsFound = ({ onClearFilters }) => {
  return (
    <Card className="flex flex-col items-center justify-center py-16">
      <EmptyState
        icon={<SearchX className="w-8 h-8" />}
        title="No exams found"
        description="We couldn't find any exams matching your current filters. Try adjusting your search or clearing the filters."
        actionLabel="Clear All Filters"
        onAction={onClearFilters}
      />
    </Card>
  );
};
