import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import AboutHero from '@/features/about/components/AboutHero';
import CompanyStory from '@/features/about/components/CompanyStory';
import MissionVision from '@/features/about/components/MissionVision';
import CompanyTimeline from '@/features/about/components/CompanyTimeline';
import StatisticsSection from '@/features/about/components/StatisticsSection';
import TeamSection from '@/features/about/components/TeamSection';
import WhyChooseUs from '@/features/about/components/WhyChooseUs';
import AboutCTA from '@/features/about/components/AboutCTA';

const About = () => {
  useDocumentTitle('About Us');
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <AboutHero />
      <CompanyStory />
      <StatisticsSection />
      <MissionVision />
      <CompanyTimeline />
      <WhyChooseUs />
      <TeamSection />
      <AboutCTA />
    </div>
  );
};
export default About;
