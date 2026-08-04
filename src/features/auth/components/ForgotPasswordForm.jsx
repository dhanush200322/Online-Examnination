import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useNotification } from '@/context/NotificationContext';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { forgotPassword } = useAuth();
  const { addToast } = useNotification();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      forgotPassword(email);
      setIsLoading(false);
      setIsSubmitted(true);
      addToast('Reset link sent to your email!', 'success');
    } catch (err) {
      addToast(err.message || 'Failed to process request.', 'error');
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Check your email</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            We have sent password reset instructions to <span className="font-semibold text-gray-900 dark:text-white">{email}</span>.
          </p>
        </div>
        <Link
          to="/reset-password"
          className="inline-block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md"
        >
          Simulate Opening Reset Link
        </Link>
        <div className="text-center">
          <Link to="/login" className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Email Address
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@example.com"
            required
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all sm:text-sm"
          />
          <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          'Send Reset Instructions'
        )}
      </button>

      <div className="text-center mt-6">
        <Link to="/login" className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:underline">
          ? Back to Login
        </Link>
      </div>
    </form>
  );
};
export default ForgotPasswordForm;
