import React from 'react';
import { CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const EmailVerificationModal = ({ email, onContinue }) => {
  return (
    <div className="text-center space-y-6 py-4">
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto">
        <EnvelopeIcon className="w-8 h-8 animate-bounce" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Verify your email address</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto">
          We have sent a verification email to <span className="font-semibold text-gray-900 dark:text-white">{email}</span>. Please verify your account to continue.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-xs text-green-700 dark:text-green-300 flex items-center justify-center gap-2">
        <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
        <span>(Simulated Environment) Account created successfully!</span>
      </div>

      <button
        onClick={onContinue}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
      >
        Proceed to Login
      </button>
    </div>
  );
};
export default EmailVerificationModal;
