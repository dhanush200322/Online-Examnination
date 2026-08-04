import useDocumentTitle from '@/hooks/useDocumentTitle';
import React, { useState } from 'react';
import LegalSidebar from '@/features/legal/components/LegalSidebar';
import LastUpdatedCard from '@/features/legal/components/LastUpdatedCard';
import TermsSection from '@/features/legal/components/TermsSection';

const sections = [
  { id: 'terms', title: '1. Terms of Use' },
  { id: 'license', title: '2. User License' },
  { id: 'disclaimer', title: '3. Exam Disclaimer' },
  { id: 'limitations', title: '4. Limitations' },
  { id: 'revisions', title: '5. Revisions' },
  { id: 'governing', title: '6. Governing Law' },
];

const TermsConditions = () => {
  useDocumentTitle('Terms of Service');
  const [activeSection, setActiveSection] = useState('terms');

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <LastUpdatedCard title="Terms of Service" date="August 1, 2026" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block col-span-1">
          <LegalSidebar sections={sections} activeSection={activeSection} setActiveSection={scrollTo} />
        </div>

        <div className="md:col-span-3 bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
          <TermsSection id="terms" title="1. Terms of Use">
            <p>By accessing this website, accessible from oesplatform.com, you are agreeing to be bound by these Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>
          </TermsSection>

          <TermsSection id="license" title="2. User License">
            <p>Permission is granted to temporarily view and attempt mock examination materials on OES for personal, non-commercial transitory viewing only.</p>
          </TermsSection>

          <TermsSection id="disclaimer" title="3. Exam Disclaimer">
            <p>All certification practice materials provided on OES are created for preparation purposes only. Marks and scores achieved during practice sessions do not guarantee official third-party certification outcomes.</p>
          </TermsSection>

          <TermsSection id="limitations" title="4. Limitations">
            <p>In no event shall OES or its suppliers be liable for any damages arising out of the use or inability to use the materials on OES's website.</p>
          </TermsSection>

          <TermsSection id="revisions" title="5. Revisions">
            <p>The materials appearing on OES's website could include technical, typographical, or photographic errors. OES may make changes to the materials contained on its website at any time without notice.</p>
          </TermsSection>

          <TermsSection id="governing" title="6. Governing Law">
            <p>Any claim related to OES's Website shall be governed by the laws of California without regard to its conflict of law provisions.</p>
          </TermsSection>
        </div>
      </div>
    </div>
  );
};
export default TermsConditions;
