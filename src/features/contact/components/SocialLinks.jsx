import React from 'react';

const SocialLinks = () => {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
      <h4 className="font-bold text-gray-900 dark:text-white text-sm">Connect on Social Media</h4>
      <div className="flex gap-3">
        {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((platform) => (
          <a
            key={platform}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
};
export default SocialLinks;
