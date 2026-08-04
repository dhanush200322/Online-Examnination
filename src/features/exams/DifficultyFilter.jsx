import React from 'react';

const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

export const DifficultyFilter = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-textHeading mb-3 uppercase tracking-wider">Difficulty</h3>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="difficulty"
            checked={value === ''}
            onChange={() => onChange('')}
            className="w-4 h-4 text-accent border-border focus:ring-accent/50 cursor-pointer"
          />
          <span className="text-sm text-textBody group-hover:text-textHeading transition-colors">Any Difficulty</span>
        </label>
        {difficulties.map((level) => (
          <label key={level} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="difficulty"
              value={level}
              checked={value === level}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-accent border-border focus:ring-accent/50 cursor-pointer"
            />
            <span className="text-sm text-textBody group-hover:text-textHeading transition-colors">{level}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
