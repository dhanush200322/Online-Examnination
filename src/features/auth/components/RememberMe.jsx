import React from 'react';
import { Link } from 'react-router-dom';

const RememberMe = ({ checked, onChange, showForgotPassword = true }) => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="rounded border-gray-300 dark:border-gray-700 text-blue-600 focus:ring-blue-500 h-4 w-4"
        />
        <span>Remember me</span>
      </label>

      {showForgotPassword && (
        <Link to="/forgot-password" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          Forgot password?
        </Link>
      )}
    </div>
  );
};
export default RememberMe;
