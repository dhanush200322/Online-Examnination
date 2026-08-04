import React, { useState } from 'react';
import { Heart, Search } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Input } from '@/components/common/Input';
import { ExamGrid } from '@/features/exams/ExamGrid';
import { EmptyState } from '@/components/common/EmptyState';
import { Card } from '@/components/common/Card';
import { useWishlist } from '@/context/WishlistContext';
import { exams as allExams } from '@/data/exams';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { SortDropdown } from '@/features/exams/SortDropdown';

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState('newest'); // default wishlist sort

  // Filter exams that are in the wishlist
  const savedExams = allExams.filter(exam => wishlist.includes(exam.id));

  // Apply local search and sort
  let displayedExams = [...savedExams];

  if (searchQuery) {
    const lowerQ = searchQuery.toLowerCase();
    displayedExams = displayedExams.filter(e => 
      e.title.toLowerCase().includes(lowerQ) || 
      e.subtitle.toLowerCase().includes(lowerQ)
    );
  }

  switch (sort) {
    case 'popular':
      displayedExams.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
      break;
    case 'highest-rated':
      displayedExams.sort((a, b) => b.rating - a.rating);
      break;
    case 'price-low':
      displayedExams.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
      break;
    case 'price-high':
      displayedExams.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
      break;
    case 'alphabetical':
      displayedExams.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'newest':
    default:
      // Assuming latest added to wishlist, but we don't store timestamps. 
      // We can just keep the array order or sort by exam creation date as fallback.
      displayedExams.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
  }

  return (
    <div className="py-12 bg-background min-h-screen">
      <Container>
        <SectionHeader 
          title="Your Wishlist" 
          subtitle="Keep track of the certifications you want to pursue."
        />

        {savedExams.length === 0 ? (
          <Card className="py-24">
            <EmptyState
              icon={<Heart className="w-12 h-12" />}
              title="Your wishlist is empty"
              description="You haven't saved any exams yet. Browse our catalog and click the heart icon to save exams for later."
              actionLabel="Browse Exams"
              onAction={() => window.location.href = '/exams'}
            />
          </Card>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surfaceElevated p-4 rounded-xl border border-border">
              <div className="w-full sm:w-72">
                <Input
                  type="text"
                  placeholder="Search your wishlist..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  icon={<Search className="w-4 h-4" />}
                  className="h-10"
                />
              </div>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {displayedExams.length === 0 ? (
              <Card className="py-16 text-center">
                <p className="text-textMuted">No saved exams match your search.</p>
                <Button variant="ghost" onClick={() => setSearchQuery('')} className="mt-4">
                  Clear Search
                </Button>
              </Card>
            ) : (
              <ExamGrid exams={displayedExams} isLoading={false} />
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
