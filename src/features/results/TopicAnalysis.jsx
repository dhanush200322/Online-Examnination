import React from 'react';
import { Card } from '@/components/common/Card';

export const TopicAnalysis = ({ topicStats }) => {
  return (
    <Card className="p-8 h-full">
      <h2 className="text-lg font-bold text-textHeading mb-6">Topic Wise Performance</h2>
      <div className="space-y-6">
        {topicStats.map((topic, i) => (
          <div key={i}>
            <div className="flex justify-between items-end mb-2">
              <span className="font-semibold text-sm text-textHeading">{topic.name}</span>
              <span className="text-xs font-bold text-textMuted">{topic.percentage}%</span>
            </div>
            <div className="w-full bg-surfaceElevated h-2.5 rounded-full overflow-hidden border border-border/50">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  topic.percentage >= 80 ? 'bg-success' : 
                  topic.percentage >= 50 ? 'bg-warning' : 'bg-danger'
                }`}
                style={{ width: `${topic.percentage}%`, transformOrigin: 'left' }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
