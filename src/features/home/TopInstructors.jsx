import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Avatar } from '@/components/common/Avatar';
import { Star, Users } from 'lucide-react';
import { instructors } from '@/data/instructors';

export const TopInstructors = () => {
  const topInstructors = instructors.slice(0, 4);

  return (
    <section className="py-24 bg-background border-t border-border">
      <Container>
        <SectionHeader 
          title="Learn from the Best" 
          subtitle="Exams crafted by industry leaders and subject matter experts."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topInstructors.map((instructor) => (
            <Card key={instructor.id} hover className="flex flex-col items-center text-center">
              <Avatar src={instructor.photo} name={instructor.name} size="xl" className="mb-4 shadow-soft-sm" />
              <h3 className="text-lg font-bold text-textHeading">{instructor.name}</h3>
              <p className="text-sm text-accent font-medium mb-4">{instructor.designation}</p>
              
              <div className="flex items-center gap-4 text-sm text-textMuted mt-auto pt-4 border-t border-border w-full justify-center">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning fill-warning" />
                  <span>{instructor.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{instructor.students.toLocaleString()}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
