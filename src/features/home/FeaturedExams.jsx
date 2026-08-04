import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { ExamCard } from '../exams/ExamCard';
import { exams } from '@/data/exams';

export const FeaturedExams = () => {
  const featured = exams.filter(e => e.featured).slice(0, 4);

  return (
    <section className="py-24 bg-surfaceElevated/30">
      <Container>
        <SectionHeader 
          title="Featured Certifications" 
          subtitle="Top-rated exams chosen by our community of experts."
          action={
            <Link to="/exams">
              <Button variant="ghost">View All Exams →</Button>
            </Link>
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((exam, index) => (
            <div key={exam.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ExamCard exam={exam} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
