import React from 'react';

export const FeaturedFilter = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            className="w-5 h-5 rounded border-border text-accent focus:ring-accent/50 cursor-pointer appearance-none checked:bg-accent transition-colors"
          />
          {value && (
            <svg className="absolute w-3.5 h-3.5 top-0.5 left-0.5 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className="text-sm font-semibold text-textHeading uppercase tracking-wider group-hover:text-accent transition-colors">
          Featured Only
        </span>
      </label>
    </div>
  );
};
