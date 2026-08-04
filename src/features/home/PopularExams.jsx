import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ExamCard } from '../exams/ExamCard';
import { exams } from '@/data/exams';

export const PopularExams = () => {
  // Sort by studentsEnrolled mock data and take top 4
  const popular = [...exams].sort((a, b) => b.studentsEnrolled - a.studentsEnrolled).slice(0, 4);

  return (
    <section className="py-24 bg-surfaceElevated/10">
      <Container>
        <SectionHeader 
          title="Most Popular Exams" 
          subtitle="Join thousands of students taking our most requested certifications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popular.map((exam, index) => (
            <div key={exam.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ExamCard exam={exam} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
