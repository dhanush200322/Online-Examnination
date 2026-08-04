import React from 'react';
import { Card } from '@/components/common/Card';
import { CheckCircle2, XCircle, MinusCircle, Clock, Target } from 'lucide-react';

export const PerformanceSummary = ({ result }) => {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const totalQuestions = result.correct + result.wrong + result.skipped;
  const accuracy = Math.round((result.correct / (result.correct + result.wrong)) * 100) || 0;

  const stats = [
    { icon: <Target className="w-6 h-6 text-accent" />, label: "Accuracy", value: `${accuracy}%` },
    { icon: <Clock className="w-6 h-6 text-info" />, label: "Time Taken", value: formatTime(result.timeTaken) },
    { icon: <CheckCircle2 className="w-6 h-6 text-success" />, label: "Correct", value: result.correct },
    { icon: <XCircle className="w-6 h-6 text-danger" />, label: "Wrong", value: result.wrong },
    { icon: <MinusCircle className="w-6 h-6 text-textMuted" />, label: "Skipped", value: result.skipped },
    { icon: <TrophyIcon className="w-6 h-6 text-warning" />, label: "Percentile", value: "Top 12%" }, // Mock percentile
  ];

  return (
    <Card className="p-8 h-full">
      <h2 className="text-lg font-bold text-textHeading mb-6">Performance Metrics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-2 p-4 bg-surfaceElevated rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-1">
              {stat.icon}
              <span className="text-xs font-semibold text-textMuted uppercase tracking-wider">{stat.label}</span>
            </div>
            <span className="text-2xl font-bold text-textHeading">{stat.value}</span>
            {stat.label === "Percentile" && <span className="text-xs text-textMuted">Among 8,250 Students</span>}
          </div>
        ))}
      </div>
    </Card>
  );
};

// Internal icon for percentile
function TrophyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
