import React from 'react';

const PasswordStrength = ({ password }) => {
  if (!password) return null;

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const getLabel = () => {
    if (score <= 1) return { text: 'Weak', color: 'bg-red-500', textColor: 'text-red-500' };
    if (score === 2 || score === 3) return { text: 'Medium', color: 'bg-yellow-500', textColor: 'text-yellow-500' };
    return { text: 'Strong', color: 'bg-green-500', textColor: 'text-green-500' };
  };

  const { text, color, textColor } = getLabel();

  return (
    <div className="space-y-1.5 mt-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-500 dark:text-gray-400">Password strength:</span>
        <span className={`font-semibold ${textColor}`}>{text}</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 h-1.5">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`rounded-full transition-all duration-300 ${
              step <= score ? color : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default PasswordStrength;
