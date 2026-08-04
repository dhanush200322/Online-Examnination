import React from 'react';

const prices = [
  { label: 'Any Price', value: '' },
  { label: 'Free Exams', value: 'free' },
  { label: 'Premium Exams', value: 'paid' }
];

export const PriceFilter = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-textHeading mb-3 uppercase tracking-wider">Price</h3>
      <div className="flex flex-col gap-2">
        {prices.map((p) => (
          <label key={p.value} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="price"
              value={p.value}
              checked={value === p.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-accent border-border focus:ring-accent/50 cursor-pointer"
            />
            <span className="text-sm text-textBody group-hover:text-textHeading transition-colors">{p.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
