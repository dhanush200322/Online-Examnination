import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import ProfileCard from '../features/profile/components/ProfileCard';
import ProfileInformation from '../features/profile/components/ProfileInformation';
import ProfileStatistics from '../features/profile/components/ProfileStatistics';

const Profile = () => {
  useDocumentTitle('User Profile');
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 space-y-6">
          <ProfileStatistics />
          <ProfileInformation />
        </div>
      </div>
    </div>
  );
};
export default Profile;