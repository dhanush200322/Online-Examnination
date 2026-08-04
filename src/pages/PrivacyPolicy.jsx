import useDocumentTitle from '@/hooks/useDocumentTitle';
import React, { useState } from 'react';
import LegalSidebar from '@/features/legal/components/LegalSidebar';
import LastUpdatedCard from '@/features/legal/components/LastUpdatedCard';
import PolicySection from '@/features/legal/components/PolicySection';

const sections = [
  { id: 'overview', title: '1. Overview' },
  { id: 'data', title: '2. Data Collection' },
  { id: 'cookies', title: '3. Cookies & Tracking' },
  { id: 'security', title: '4. Data Security' },
  { id: 'rights', title: '5. Your Rights' },
  { id: 'contact', title: '6. Legal Contact' },
];

const PrivacyPolicy = () => {
  useDocumentTitle('Privacy Policy');
  const [activeSection, setActiveSection] = useState('overview');

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <LastUpdatedCard title="Privacy Policy" date="August 1, 2026" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block col-span-1">
          <LegalSidebar sections={sections} activeSection={activeSection} setActiveSection={scrollTo} />
        </div>

        <div className="md:col-span-3 bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
          <PolicySection id="overview" title="1. Overview">
            <p>At Online Examination System (OES), accessible from oesplatform.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by OES and how we use it.</p>
          </PolicySection>

          <PolicySection id="data" title="2. Data Collection">
            <p>We collect information when you register on our site, place an exam attempt, or fill out a form. When ordering or registering on our site, as appropriate, you may be asked to enter your name or e-mail address.</p>
            <p>Your examination responses, practice exam scores, and streak data are stored locally and in simulated databases to calculate your progress and rank.</p>
          </PolicySection>

          <PolicySection id="cookies" title="3. Cookies & Tracking">
            <p>OES uses 'cookies' to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
          </PolicySection>

          <PolicySection id="security" title="4. Data Security">
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. All sessions are protected using industry-standard encryption protocols.</p>
          </PolicySection>

          <PolicySection id="rights" title="5. Your Rights">
            <p>You have the right to access, rectify, or request deletion of your personal data stored in our system at any time through your Account Settings or by reaching out to our privacy officer.</p>
          </PolicySection>

          <PolicySection id="contact" title="6. Legal Contact">
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at privacy@oesplatform.com.</p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
