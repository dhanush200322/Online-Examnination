import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useNotification } from '@/context/NotificationContext';
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('demo@example.com');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { resetPassword } = useAuth();
  const { addToast } = useNotification();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setIsLoading(true);

    try {
      resetPassword(email, newPassword);
      setIsLoading(false);
      addToast('Password reset successfully! Please sign in.', 'success');
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Reset failed.');
      addToast(err.message || 'Reset failed.', 'error');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-xs text-red-600 dark:text-red-400 font-medium">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all sm:text-sm"
        />
      </div>

      <div>
        <PasswordInput
          id="newPassword"
          label="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <PasswordStrength password={newPassword} />
      </div>

      <div>
        <PasswordInput
          id="confirmPassword"
          label="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          'Update Password'
        )}
      </button>
    </form>
  );
};
export default ResetPasswordForm;
