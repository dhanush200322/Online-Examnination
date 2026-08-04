import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useNotification } from '@/context/NotificationContext';
import PasswordInput from './PasswordInput';
import RememberMe from './RememberMe';
import SocialLoginButtons from './SocialLoginButtons';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeName, setWelcomeName] = useState('');

  const { login } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = login(email, password, rememberMe);
      setWelcomeName(user.name);
      setShowWelcome(true);
      addToast(`Welcome back, ${user.name}!`, 'success');

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
    } catch (err) {
      addToast(err.message || 'Failed to sign in', 'error');
      setIsLoading(false);
    }
  };

  return (
    <>
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-2xl text-center border border-gray-100 dark:border-gray-800 max-w-sm w-full mx-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
              ??
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back!</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mt-1">{welcomeName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">Redirecting to your dashboard...</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@example.com"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all sm:text-sm"
          />
        </div>

        <PasswordInput
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <RememberMe
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Sign In'
          )}
        </button>

        <SocialLoginButtons />

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Sign up now
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
