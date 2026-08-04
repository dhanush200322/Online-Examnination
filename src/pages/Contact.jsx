import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import ContactForm from '@/features/contact/components/ContactForm';
import ContactInfo from '@/features/contact/components/ContactInfo';
import OfficeLocations from '@/features/contact/components/OfficeLocations';
import BusinessHours from '@/features/contact/components/BusinessHours';
import SocialLinks from '@/features/contact/components/SocialLinks';
import MapPlaceholder from '@/features/contact/components/MapPlaceholder';

const Contact = () => {
  useDocumentTitle('Contact Us');
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Get in Touch</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
          We'd love to hear from you. Our friendly team is always here to chat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <ContactInfo />
          <BusinessHours />
          <SocialLinks />
        </div>
      </div>

      <MapPlaceholder />
      <OfficeLocations />
    </div>
  );
};
export default Contact;
