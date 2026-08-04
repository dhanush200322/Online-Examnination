import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 flex flex-col relative w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
