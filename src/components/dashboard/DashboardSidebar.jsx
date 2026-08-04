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

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 dark:border-gray-800 pt-5 pb-4 bg-white dark:bg-gray-950 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">OES Panel</span>
      </div>
      <div className="mt-8 flex-grow flex flex-col">
        <nav className="flex-1 px-2 bg-white dark:bg-gray-950 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-xl transition-all duration-200 ease-in-out ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                }`
              }
            >
              <item.icon
                className="mr-3 flex-shrink-0 h-6 w-6"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default DashboardSidebar;