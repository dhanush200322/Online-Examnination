import React, { useState } from 'react';
import { useProfile } from '../../../hooks/useProfile';

const ProfileInformation = () => {
  const { profile, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: profile.fullName,
    email: profile.email,
    phone: profile.phone,
    location: profile.location
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Personal Information</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
            {isEditing ? (
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" required />
            ) : (
              <p className="font-medium text-gray-900 dark:text-white py-2">{profile.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email Address</label>
            {isEditing ? (
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" required />
            ) : (
              <p className="font-medium text-gray-900 dark:text-white py-2">{profile.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone Number</label>
            {isEditing ? (
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" />
            ) : (
              <p className="font-medium text-gray-900 dark:text-white py-2">{profile.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</label>
            {isEditing ? (
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none" />
            ) : (
              <p className="font-medium text-gray-900 dark:text-white py-2">{profile.location}</p>
            )}
          </div>
        </div>
        
        {isEditing && (
          <div className="mt-8 flex justify-end">
            <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm">
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default ProfileInformation;