import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px] -z-10"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-textHeading tracking-tight mb-6">
            Ready to prove your skills?
          </h2>
          <p className="text-lg text-textMuted mb-10 max-w-2xl mx-auto">
            Join the platform today and get access to hundreds of premium exams. Upgrade your career with validated skills.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">Get Started for Free</Button>
            </Link>
            <Link to="/exams">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Browse Exams</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
