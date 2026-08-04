import React from 'react';

const TermsSection = ({ id, title, children }) => {
  return (
    <div id={id} className="scroll-mt-28 space-y-3 pb-8 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
};
export default TermsSection;
