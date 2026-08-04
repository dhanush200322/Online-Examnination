import React from 'react';

const team = [
  { name: 'Elena Rostova', role: 'Founder & CEO', img: 'https://i.pravatar.cc/150?img=32' },
  { name: 'Marcus Vance', role: 'Chief Architect', img: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Sarah Chen', role: 'Head of Product', img: 'https://i.pravatar.cc/150?img=47' },
  { name: 'David Miller', role: 'Lead UX Designer', img: 'https://i.pravatar.cc/150?img=68' },
];

const TeamSection = () => {
  return (
    <div className="my-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">The Minds Behind OES</span>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">Meet Our Leadership</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm text-center group hover:-translate-y-1 transition-transform">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500/20 mb-4 group-hover:scale-105 transition-transform" />
            <h4 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h4>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamSection;
