import React from 'react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <div className="my-16 text-center p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl space-y-6">
      <h2 className="text-3xl font-extrabold">Ready to test your knowledge?</h2>
      <p className="text-blue-100 max-w-md mx-auto text-sm">
        Explore hundreds of free practice exams and join the global leaderboard today.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/register" className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md">
          Get Started for Free
        </Link>
        <Link to="/exams" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
          Browse Exams
        </Link>
      </div>
    </div>
  );
};
export default AboutCTA;
