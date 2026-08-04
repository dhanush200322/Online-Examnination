import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import NotFoundIllustration from '@/features/errors/components/NotFoundIllustration';
import SuggestedPages from '@/features/errors/components/SuggestedPages';
import SearchSite from '@/features/errors/components/SearchSite';

const NotFound = () => {
  useDocumentTitle('Page Not Found');
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <NotFoundIllustration />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Page Not Found</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto text-sm sm:text-base">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <SearchSite />
      <SuggestedPages />
    </div>
  );
};
export default NotFound;
