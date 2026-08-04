import React from 'react';
import { categories } from '@/data/categories';

export const CategoryFilter = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-textHeading mb-3 uppercase tracking-wider">Category</h3>
      <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="category"
            checked={value === ''}
            onChange={() => onChange('')}
            className="w-4 h-4 text-accent border-border focus:ring-accent/50 cursor-pointer"
          />
          <span className="text-sm text-textBody group-hover:text-textHeading transition-colors">All Categories</span>
        </label>
        {categories.map((cat) => (
          <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="category"
              value={cat.id}
              checked={value === cat.id}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-accent border-border focus:ring-accent/50 cursor-pointer"
            />
            <span className="text-sm text-textBody group-hover:text-textHeading transition-colors line-clamp-1">{cat.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
