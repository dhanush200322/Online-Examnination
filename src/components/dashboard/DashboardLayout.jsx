import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardTopbar from './DashboardTopbar';
import DashboardMobileMenu from './DashboardMobileMenu';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Sidebar for Desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <DashboardSidebar />
      </div>
      
      {/* Mobile Menu */}
      <DashboardMobileMenu />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <DashboardTopbar />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 md:px-8">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;