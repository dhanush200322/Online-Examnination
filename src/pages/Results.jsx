import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { useResults } from '@/hooks/useResults';
import { usePerformance } from '@/hooks/usePerformance';
import { ResultHero } from '@/features/results/ResultHero';
import { ScoreCard } from '@/features/results/ScoreCard';
import { PerformanceSummary } from '@/features/results/PerformanceSummary';
import { TopicAnalysis } from '@/features/results/TopicAnalysis';
import { StrengthWeakness } from '@/features/results/StrengthWeakness';
import { RecommendedExams } from '@/features/results/RecommendedExams';
import { EmptyState } from '@/components/common/EmptyState';
import { FileWarning, ChevronLeft } from 'lucide-react';

const Results = () => {
  const { attemptId } = useParams();
  const { getResultById } = useResults();
  
  const result = getResultById(attemptId);
  const performance = usePerformance(attemptId, result?.examId, result?.answers);

  if (!result) {
    return (
      <Container className="py-24">
        <EmptyState 
          icon={<FileWarning className="w-12 h-12" />} 
          title="Result Not Found" 
          description="We couldn't find the requested examination result." 
        />
      </Container>
    );
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <Container>
        <Link to="/exams" className="inline-flex items-center gap-2 text-sm font-semibold text-textMuted hover:text-accent mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        
        <ResultHero result={result} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <ScoreCard result={result} />
          </div>
          <div className="lg:col-span-2">
            <PerformanceSummary result={result} />
          </div>
        </div>

        {performance && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <TopicAnalysis topicStats={performance.topicStats} />
            <StrengthWeakness strongTopics={performance.strongTopics} weakTopics={performance.weakTopics} />
          </div>
        )}

        <RecommendedExams />
      </Container>
    </div>
  );
};

export default Results;
