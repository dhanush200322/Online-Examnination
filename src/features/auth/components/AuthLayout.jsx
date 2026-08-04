import React from 'react';
import { Link } from 'react-router-dom';
import AuthIllustration from './AuthIllustration';
import { APP_NAME } from '@/utils/constants';

const AuthLayout = ({ children, title, subtitle, illustrationTitle, illustrationDesc }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden min-h-[640px]">
        {/* Left Illustration */}
        <div className="p-4 lg:p-6">
          <AuthIllustration title={illustrationTitle} description={illustrationDesc} />
        </div>

        {/* Right Form Area */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          <div>
            <div className="mb-8 flex justify-between items-center">
              <Link to="/" className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {APP_NAME}
              </Link>
              <Link to="/" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                ? Back to Home
              </Link>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
              {subtitle && <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
            </div>

            {children}
          </div>

          <div className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="underline hover:text-gray-600 dark:hover:text-gray-300">Terms of Service</Link>{' '}
            and{' '}
            <Link to="/privacy" className="underline hover:text-gray-600 dark:hover:text-gray-300">Privacy Policy</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
