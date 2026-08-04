import React from 'react';

const CompanyStory = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-16">
      <div className="space-y-6">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Our Story</span>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Founded on the principle that assessment should drive learning.
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Online Examination System (OES) started in 2023 with a clear mission: eliminate traditional examination anxiety and replace it with intelligent, engaging, and proctored self-assessment tools.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Today, thousands of candidates use OES daily to prepare for technical, academic, and professional certifications with zero friction.
        </p>
      </div>
      <div className="relative">
        <div className="aspect-video rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 p-1 shadow-2xl overflow-hidden">
          <div className="w-full h-full bg-gray-900 rounded-[22px] flex items-center justify-center p-8 text-center text-white">
            <div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                100,000+
              </div>
              <p className="text-gray-400 font-medium">Exams Attempted Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyStory;
