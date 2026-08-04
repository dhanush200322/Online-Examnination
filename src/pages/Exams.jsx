import React, { useState, useEffect } from 'react';
import { Container } from '@/components/common/Container';
import { FilterSidebar } from '@/features/exams/FilterSidebar';
import { SearchBar } from '@/features/exams/SearchBar';
import { SortDropdown } from '@/features/exams/SortDropdown';
import { ExamGrid } from '@/features/exams/ExamGrid';
import { NoExamsFound } from '@/features/exams/NoExamsFound';
import { Pagination } from '@/components/common/Pagination';
import { Drawer } from '@/components/common/Drawer';
import { Button } from '@/components/common/Button';
import { Filter } from 'lucide-react';
import { useExamFilters } from '@/hooks/useExamFilters';
import { exams as initialExams } from '@/data/exams';

const Exams = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const filterProps = useExamFilters(initialExams);

  useEffect(() => {
    // Simulate network delay for premium feel
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <FilterSidebar filters={filterProps} onClear={filterProps.clearFilters} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex-1 max-w-md">
                <SearchBar value={filterProps.searchQuery} onChange={filterProps.setSearchQuery} />
              </div>
              <div className="flex items-center gap-4">
                <SortDropdown value={filterProps.sort} onChange={filterProps.setSort} />
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="lg:hidden"
                  onClick={() => setIsMobileFiltersOpen(true)}
                  aria-label="Open Filters"
                >
                  <Filter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="mb-6 text-sm text-textMuted font-medium">
              Showing <span className="text-textHeading">{filterProps.totalResults}</span> exams
            </div>

            {filterProps.totalResults === 0 && !isLoading ? (
              <NoExamsFound onClearFilters={filterProps.clearFilters} />
            ) : (
              <>
                <ExamGrid exams={filterProps.currentExams} isLoading={isLoading} />
                {!isLoading && filterProps.totalPages > 1 && (
                  <Pagination 
                    currentPage={filterProps.page} 
                    totalPages={filterProps.totalPages} 
                    onPageChange={filterProps.setPage} 
                  />
                )}
              </>
            )}
          </main>
        </div>
      </Container>

      {/* Mobile Filters Drawer */}
      <Drawer 
        isOpen={isMobileFiltersOpen} 
        onClose={() => setIsMobileFiltersOpen(false)} 
        title="Filters"
        position="left"
      >
        <div className="mt-4">
          <Button variant="ghost" className="w-full justify-start mb-4 text-accent" onClick={filterProps.clearFilters}>
            Clear All Filters
          </Button>
          {/* We reuse the sidebar but without the card wrapping since Drawer provides the container */}
          <div className="flex flex-col gap-6">
            <FilterSidebar filters={filterProps} onClear={filterProps.clearFilters} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Exams;
