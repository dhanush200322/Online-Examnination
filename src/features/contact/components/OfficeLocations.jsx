import React from 'react';

const locations = [
  { city: 'San Francisco', country: 'USA', address: '500 Howard St, Suite 400' },
  { city: 'London', country: 'UK', address: '25 Bank Street, Canary Wharf' },
  { city: 'Singapore', country: 'Singapore', address: '1 Raffles Place, Tower 2' },
];

const OfficeLocations = () => {
  return (
    <div className="my-12">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Our Global Offices</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {locations.map((loc) => (
          <div key={loc.city} className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white">{loc.city}</h4>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">{loc.country}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{loc.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OfficeLocations;
