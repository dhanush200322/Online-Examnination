import React from 'react';
import { ArrowRight, Search, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

export const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full bg-info/20 blur-[100px]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surfaceElevated border border-border mb-6">
              <span className="flex h-2 w-2 rounded-full bg-success"></span>
              <span className="text-xs font-medium text-textHeading">Over 1M+ Exams Taken</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-textHeading leading-[1.1] mb-6">
              Master Your Skills.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-info">
                Ace Your Exams.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-textMuted mb-10 max-w-lg leading-relaxed">
              The premium platform for modern learners. Practice with thousands of high-quality questions and detailed performance analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/exams" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Explore Exams
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto" leftIcon={<Play className="w-5 h-5" />}>
                  How it works
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-textMuted">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-surface object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <p>Trusted by <span className="font-semibold text-textHeading">50,000+</span> students worldwide</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden glass-card aspect-[4/3] p-2">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" 
                alt="Student learning"
                className="rounded-xl w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/fallback1/1200/800'; }}
              />
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-success">A+</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-textHeading">Top Performer</p>
                  <p className="text-xs text-textMuted">Just scored 98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
