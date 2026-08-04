import React from 'react';

const TopThreePodium = ({ data }) => {
  if (!data || data.length < 3) return null;
  
  // Reorder for display: 2nd, 1st, 3rd
  const podium = [data[1], data[0], data[2]];
  
  return (
    <div className="flex items-end justify-center gap-2 sm:gap-6 pt-12 pb-8">
      {podium.map((user, index) => {
        const isFirst = index === 1;
        const isSecond = index === 0;
        const height = isFirst ? 'h-40' : isSecond ? 'h-32' : 'h-24';
        const color = isFirst ? 'from-yellow-400 to-yellow-600' : isSecond ? 'from-gray-300 to-gray-400' : 'from-amber-600 to-orange-700';
        
        return (
          <div key={user.id} className="flex flex-col items-center group">
            <div className="relative mb-4">
              <img src={user.avatar} alt={user.name} className={`rounded-full object-cover border-4 ${isFirst ? 'w-24 h-24 border-yellow-400 shadow-xl shadow-yellow-500/20' : 'w-20 h-20 border-gray-200'}`} />
              {isFirst && (
                <div className="absolute -top-4 -right-2 text-3xl animate-bounce">??</div>
              )}
            </div>
            <p className="font-bold text-gray-900 dark:text-white mb-1 text-center truncate w-24 sm:w-32">{user.name}</p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{user.score} pts</p>
            <div className={`w-24 sm:w-32 ${height} bg-gradient-to-t ${color} rounded-t-xl shadow-lg flex items-start justify-center pt-4 transition-all duration-300 group-hover:-translate-y-2`}>
              <span className="text-4xl font-black text-white/50">{user.rank}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TopThreePodium;