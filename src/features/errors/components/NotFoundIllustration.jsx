import React from 'react';

const NotFoundIllustration = () => {
  return (
    <div className="relative w-48 h-48 mx-auto flex items-center justify-center my-6">
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        404
      </div>
    </div>
  );
};
export default NotFoundIllustration;
