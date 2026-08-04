import React from 'react';
import { Container } from '@/components/common/Container';

export const PlatformStatistics = () => {
  const stats = [
    { label: "Active Students", value: "50,000+" },
    { label: "Exams Available", value: "500+" },
    { label: "Questions Bank", value: "25,000+" },
    { label: "Average Pass Rate", value: "78%" },
  ];

  return (
    <section className="py-20 bg-primary text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)]"></div>
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/60 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
