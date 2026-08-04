import React from 'react';
import { Card } from '@/components/common/Card';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StrengthWeakness = ({ strongTopics, weakTopics }) => {
  return (
    <Card className="p-8 h-full">
      <h2 className="text-lg font-bold text-textHeading mb-6">Strengths & Weaknesses</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold text-success uppercase tracking-wider mb-4">
            <TrendingUp className="w-4 h-4" /> Strong Areas
          </h3>
          {strongTopics.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {strongTopics.map((t, i) => (
                <div key={i} className="px-3 py-1.5 bg-success/10 border border-success/20 rounded-lg text-sm font-semibold text-success flex items-center gap-2">
                  {t.name} <span className="text-xs opacity-80">{t.percentage}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-textMuted italic">No strong areas identified yet.</p>
          )}
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-bold text-danger uppercase tracking-wider mb-4">
            <TrendingDown className="w-4 h-4" /> Areas to Improve
          </h3>
          {weakTopics.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {weakTopics.map((t, i) => (
                <div key={i} className="px-3 py-1.5 bg-danger/10 border border-danger/20 rounded-lg text-sm font-semibold text-danger flex items-center gap-2">
                  {t.name} <span className="text-xs opacity-80">{t.percentage}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-textMuted italic">Excellent! No weak areas identified.</p>
          )}
        </div>
      </div>
    </Card>
  );
};
