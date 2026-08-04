import React from 'react';

export const SortDropdown = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-textMuted whitespace-nowrap">Sort by:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 px-3 bg-surface border border-border text-textHeading rounded-lg outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all text-sm cursor-pointer"
      >
        <option value="popular">Most Popular</option>
        <option value="highest-rated">Highest Rated</option>
        <option value="newest">Newest Additions</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="alphabetical">Alphabetical (A-Z)</option>
      </select>
    </div>
  );
};
