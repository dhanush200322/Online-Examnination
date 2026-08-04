import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserIcon, TrophyIcon, BellIcon, Cog6ToothIcon as CogIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Profile', href: '/profile', icon: UserIcon },
  { name: 'Leaderboard', href: '/leaderboard', icon: TrophyIcon },
  { name: 'Notifications', href: '/notifications', icon: BellIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

const DashboardMobileMenu = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pb-safe">
      <div className="flex justify-around py-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center p-2 rounded-lg ${
                isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
              }`
            }
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span className="text-[10px] font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default DashboardMobileMenu;