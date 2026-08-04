import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/common/Card';
import { Avatar } from '@/components/common/Avatar';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export const StudentTestimonials = () => {
  return (
    <section className="py-24 bg-surfaceElevated/20">
      <Container>
        <SectionHeader 
          title="Success Stories" 
          subtitle="Don't just take our word for it. Hear from our successful students."
          className="text-center sm:text-center sm:items-center justify-center flex-col"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} variant="solid" className="flex flex-col relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-warning fill-warning' : 'text-border fill-border'}`} />
                ))}
              </div>
              <p className="text-textBody text-lg italic mb-8 flex-1">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Avatar src={testimonial.avatar} name={testimonial.name} />
                <div>
                  <h4 className="font-semibold text-textHeading">{testimonial.name}</h4>
                  <p className="text-sm text-textMuted">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
