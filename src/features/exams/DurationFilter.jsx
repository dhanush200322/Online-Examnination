import React from 'react';

const durations = [
  { label: 'Any Duration', value: '' },
  { label: '0 - 60 minutes', value: '0-60' },
  { label: '1 - 2 hours', value: '60-120' },
  { label: '2+ hours', value: '120+' }
];

export const DurationFilter = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-textHeading mb-3 uppercase tracking-wider">Duration</h3>
      <div className="flex flex-col gap-2">
        {durations.map((dur) => (
          <label key={dur.value} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="duration"
              value={dur.value}
              checked={value === dur.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-accent border-border focus:ring-accent/50 cursor-pointer"
            />
            <span className="text-sm text-textBody group-hover:text-textHeading transition-colors">{dur.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
