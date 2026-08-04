import React from 'react';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Badge } from '@/components/common/Badge';
import { Star, Users, CheckCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';

export const ExamHero = ({ exam }) => {
  return (
    <div className="relative pt-8 pb-16 bg-surfaceElevated/50 overflow-hidden border-b border-border">
      {/* Background Banner Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={exam.banner} 
          alt={exam.title} 
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50" />
      </div>

      <Container className="relative z-10">
        <Breadcrumb 
          items={[
            { label: 'Exams', href: '/exams' },
            { label: exam.title }
          ]} 
          className="mb-8"
        />

        <div className="flex flex-col max-w-3xl animate-slide-up">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="primary">{exam.category}</Badge>
            <Badge variant={exam.difficulty === 'Beginner' ? 'success' : exam.difficulty === 'Intermediate' ? 'warning' : 'danger'}>
              {exam.difficulty}
            </Badge>
            {exam.featured && <Badge variant="accent">Featured</Badge>}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-textHeading tracking-tight mb-4 leading-tight">
            {exam.title}
          </h1>
          
          <p className="text-lg md:text-xl text-textMuted mb-8">
            {exam.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-textMuted font-medium">
            <div className="flex items-center gap-1.5">
              <Star className="w-5 h-5 text-warning fill-warning" />
              <span className="text-textHeading">{exam.rating}</span>
              <span>({exam.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-5 h-5" />
              <span>{exam.studentsEnrolled.toLocaleString()} enrolled</span>
            </div>
            {exam.certificate && (
              <div className="flex items-center gap-1.5 text-success">
                <CheckCircle className="w-5 h-5" />
                <span>Certificate Included</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
