import useDocumentTitle from '@/hooks/useDocumentTitle';
import React, { useState } from 'react';
import FAQSearch from '@/features/faq/components/FAQSearch';
import FAQCategories from '@/features/faq/components/FAQCategories';
import FAQAccordion from '@/features/faq/components/FAQAccordion';
import PopularQuestions from '@/features/faq/components/PopularQuestions';

const allFaqs = [
  { category: 'Exams', question: 'How do exam timers work?', answer: 'Exam timers begin immediately when you click Start Exam. If the time expires before submission, your answers are automatically saved and submitted.' },
  { category: 'Exams', question: 'Can I retake an exam after failing?', answer: 'Yes! You can retake any practice or mock exam as many times as you like. Your highest score will be shown on your profile.' },
  { category: 'Certificates', question: 'How do I earn verified certificates?', answer: 'Once you achieve a passing score (usually 80% or higher) on a certified exam, a PDF certificate with a unique credential ID is generated instantly.' },
  { category: 'Account', question: 'How do I change my password or email?', answer: 'Go to your Settings page from the top-right profile menu, click on the Account tab, and update your personal information.' },
  { category: 'Technical', question: 'Is the exam environment proctored?', answer: 'Yes, full exam sessions run in a full-screen mode that detects tab switches and auto-pauses session timers if distracted.' },
  { category: 'Billing', question: 'Is the platform completely free?', answer: 'All practice tests, leaderboards, and dashboard statistics in OES are 100% free with no credit card required.' },
];

const FAQ = () => {
  useDocumentTitle('Frequently Asked Questions');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesQuery = item.question.toLowerCase().includes(query.toLowerCase()) || item.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Have a question? Search our knowledge base or browse categories below.</p>
      </div>

      <FAQSearch query={query} setQuery={setQuery} />
      <PopularQuestions onSelect={(q) => setQuery(q)} />
      <FAQCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <FAQAccordion items={filteredFaqs} />
    </div>
  );
};
export default FAQ;
