import React from 'react';

const LegalSidebar = ({ sections, activeSection, setActiveSection }) => {
  return (
    <div className="sticky top-24 bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-1">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 px-3 py-2">On this page</p>
      {sections.map((sec) => (
        <button
          key={sec.id}
          onClick={() => setActiveSection(sec.id)}
          className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeSection === sec.id
              ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-semibold'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          {sec.title}
        </button>
      ))}
    </div>
  );
};
export default LegalSidebar;
