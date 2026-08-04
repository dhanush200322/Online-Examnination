import React from 'react';

export const QuestionLegend = () => {
  const legendItems = [
    { label: 'Answered', color: 'bg-success' },
    { label: 'Not Answered', color: 'bg-danger' },
    { label: 'Marked Review', color: 'bg-warning' },
    { label: 'Not Visited', color: 'bg-surfaceElevated border border-border' },
    { label: 'Current', color: 'bg-info' },
  ];

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 p-4 bg-surface rounded-xl border border-border/50 text-xs text-textHeading">
      {legendItems.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className={`w-3.5 h-3.5 rounded-md ${item.color}`} />
          <span className="font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
