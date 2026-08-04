import React from 'react';
import { HeroSection } from '@/features/home/HeroSection';
import { FeaturedExams } from '@/features/home/FeaturedExams';
import { Categories } from '@/features/home/Categories';
import { PopularExams } from '@/features/home/PopularExams';
import { TopInstructors } from '@/features/home/TopInstructors';
import { PlatformStatistics } from '@/features/home/PlatformStatistics';
import { StudentTestimonials } from '@/features/home/StudentTestimonials';
import { FAQPreview } from '@/features/home/FAQPreview';
import { Newsletter } from '@/features/home/Newsletter';
import { FinalCTA } from '@/features/home/FinalCTA';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturedExams />
      <Categories />
      <PopularExams />
      <TopInstructors />
      <PlatformStatistics />
      <StudentTestimonials />
      <FAQPreview />
      <Newsletter />
      <FinalCTA />
    </div>
  );
};

export default Home;
