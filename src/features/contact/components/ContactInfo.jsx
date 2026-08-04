import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          <EnvelopeIcon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">Email Us</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">support@oesplatform.com</p>
          <p className="text-xs text-gray-400 mt-1">Average response time: 2 hours</p>
        </div>
      </div>

      <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
          <PhoneIcon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">Call Us</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">+1 (800) 555-EXAM</p>
          <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 6pm EST</p>
        </div>
      </div>

      <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
          <MapPinIcon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">Global HQ</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">500 Howard Street, Suite 400</p>
          <p className="text-xs text-gray-400 mt-1">San Francisco, CA 94105</p>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
