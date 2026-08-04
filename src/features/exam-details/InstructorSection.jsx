import React from 'react';
import { instructors } from '@/data/instructors';
import { Card } from '@/components/common/Card';
import { Avatar } from '@/components/common/Avatar';
import { Star, Users, PlayCircle, Award } from 'lucide-react';

export const InstructorSection = ({ instructorId }) => {
  const instructor = instructors.find(i => i.id === instructorId);

  if (!instructor) return null;

  return (
    <div id="instructor" className="scroll-mt-32 mb-12">
      <h2 className="text-2xl font-bold text-textHeading mb-6">About the Instructor</h2>
      
      <Card variant="solid" className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start shrink-0">
            <Avatar src={instructor.photo} name={instructor.name} size="xl" className="mb-4 w-28 h-28" />
            
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2 text-sm text-textHeading">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span className="font-bold">{instructor.rating}</span> Instructor Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-textHeading">
                <Users className="w-4 h-4 text-info" />
                <span className="font-bold">{instructor.students.toLocaleString()}</span> Students
              </div>
              <div className="flex items-center gap-2 text-sm text-textHeading">
                <PlayCircle className="w-4 h-4 text-danger" />
                <span className="font-bold">{instructor.courses}</span> Courses
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-textHeading mb-1">{instructor.name}</h3>
            <p className="text-accent font-medium mb-4">{instructor.designation}</p>
            <p className="text-textBody leading-relaxed">
              {instructor.bio}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
