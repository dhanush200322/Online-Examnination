import React from 'react';
import { Card } from '@/components/common/Card';
import { Clock, HelpCircle, Trophy, Award, Globe, ShieldAlert } from 'lucide-react';

export const ExamInformation = ({ exam }) => {
  const highlights = [
    { icon: <Clock className="w-6 h-6 text-info" />, label: "Duration", value: `${exam.duration} Minutes` },
    { icon: <HelpCircle className="w-6 h-6 text-accent" />, label: "Questions", value: `${exam.totalQuestions} MCQs` },
    { icon: <Trophy className="w-6 h-6 text-success" />, label: "Passing Marks", value: `${exam.passingMarks} / ${exam.totalQuestions}` },
    { icon: <Award className="w-6 h-6 text-warning" />, label: "Certificate", value: exam.certificate ? "Yes" : "No" },
    { icon: <Globe className="w-6 h-6 text-primary" />, label: "Language", value: exam.language || "English" },
    { icon: <ShieldAlert className="w-6 h-6 text-danger" />, label: "Difficulty", value: exam.difficulty },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      {highlights.map((item, index) => (
        <Card key={index} variant="solid" padding="sm" className="flex items-center gap-4 hover:border-accent/50 transition-colors">
          <div className="p-2 bg-surfaceElevated rounded-xl">
            {item.icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-textMuted uppercase tracking-wider">{item.label}</p>
            <p className="text-sm font-bold text-textHeading">{item.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
