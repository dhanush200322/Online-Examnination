import React from 'react';
import { Card } from '@/components/common/Card';
import { CategoryFilter } from './CategoryFilter';
import { DifficultyFilter } from './DifficultyFilter';
import { DurationFilter } from './DurationFilter';
import { PriceFilter } from './PriceFilter';
import { FeaturedFilter } from './FeaturedFilter';
import { Button } from '@/components/common/Button';

export const FilterSidebar = ({ filters, onClear }) => {
  return (
    <Card className="sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar flex flex-col hidden lg:flex">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <h2 className="text-lg font-bold text-textHeading">Filters</h2>
        <Button variant="ghost" size="sm" onClick={onClear} className="text-xs text-accent">
          Clear All
        </Button>
      </div>

      <div className="flex-1">
        <FeaturedFilter value={filters.featured} onChange={filters.setFeatured} />
        <CategoryFilter value={filters.category} onChange={filters.setCategory} />
        <DifficultyFilter value={filters.difficulty} onChange={filters.setDifficulty} />
        <DurationFilter value={filters.duration} onChange={filters.setDuration} />
        <PriceFilter value={filters.price} onChange={filters.setPrice} />
      </div>
    </Card>
  );
};
