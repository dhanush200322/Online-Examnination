import React from 'react';

const categories = ['All', 'Exams', 'Account', 'Certificates', 'Technical', 'Billing'];

const FAQCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeCategory === cat
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
export default FAQCategories;
