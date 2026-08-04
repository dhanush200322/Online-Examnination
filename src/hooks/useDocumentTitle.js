import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = `${title} | Online Examination System`;
    }
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
export default useDocumentTitle;
