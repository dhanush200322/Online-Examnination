import React from 'react';

export const Checklist = ({ checked, onChange }) => {
  return (
    <label className="flex items-start gap-4 p-4 rounded-xl border border-accent/20 bg-accent/5 cursor-pointer group mb-8">
      <div className="relative flex items-center mt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 rounded border-accent/30 text-accent focus:ring-accent/50 cursor-pointer appearance-none checked:bg-accent transition-colors"
        />
        {checked && (
          <svg className="absolute w-3.5 h-3.5 top-0.5 left-0.5 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div>
        <p className="text-textHeading font-semibold group-hover:text-accent transition-colors">I agree to the terms and conditions</p>
        <p className="text-sm text-textMuted mt-1">
          I confirm that I have read and understood all the rules and guidelines. I am ready to begin the examination.
        </p>
      </div>
    </label>
  );
};
