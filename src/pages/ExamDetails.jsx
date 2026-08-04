import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { ReadingProgressBar } from '@/components/common/ReadingProgressBar';
import { StickySectionNav } from '@/components/common/StickySectionNav';
import { ExamHero } from '@/features/exam-details/ExamHero';
import { ExamInformation } from '@/features/exam-details/ExamInformation';
import { ExamOverview } from '@/features/exam-details/ExamOverview';
import { ExamSyllabus } from '@/features/exam-details/ExamSyllabus';
import { InstructorSection } from '@/features/exam-details/InstructorSection';
import { ExamFAQ } from '@/features/exam-details/ExamFAQ';
import { RelatedExams } from '@/features/exam-details/RelatedExams';
import { StickyEnrollCard } from '@/features/exam-details/StickyEnrollCard';
import { ExamDetailsSkeleton } from '@/features/exam-details/ExamDetailsSkeleton';
import { ExamNotFound } from '@/features/exam-details/ExamNotFound';
import { exams } from '@/data/exams';
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed';

const ExamDetails = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [exam, setExam] = useState(null);
  const { addRecentlyViewed } = useRecentlyViewed();

  useEffect(() => {
    setIsLoading(true);
    // Simulate network request
    const timer = setTimeout(() => {
      const foundExam = exams.find(e => e.slug === slug);
      setExam(foundExam);
      setIsLoading(false);
      if (foundExam) {
        addRecentlyViewed(foundExam.id);
        window.scrollTo(0, 0);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) return <ExamDetailsSkeleton />;
  if (!exam) return <ExamNotFound />;

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'faq', label: 'FAQ' },
    { id: 'related', label: 'Related' }
  ];

  return (
    <div className="bg-background min-h-screen relative pb-24 lg:pb-0">
      <ReadingProgressBar />
      
      <ExamHero exam={exam} />
      
      <Container className="pt-8">
        <StickySectionNav sections={sections} />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12 relative">
          {/* Main Content Area */}
          <div className="flex-1 min-w-0 pb-12">
            <ExamInformation exam={exam} />
            <ExamOverview exam={exam} />
            <ExamSyllabus syllabus={exam.syllabus} />
            <InstructorSection instructorId={exam.instructorId} />
            <ExamFAQ />
            <RelatedExams currentExamId={exam.id} category={exam.category} />
          </div>

          {/* Right Sidebar - Desktop Sticky */}
          <StickyEnrollCard exam={exam} />
        </div>
      </Container>
    </div>
  );
};

export default ExamDetails;
