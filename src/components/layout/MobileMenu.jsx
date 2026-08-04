import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '../common/Drawer';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { APP_NAME } from '@/utils/constants';
import { useAuth } from '@/hooks/useAuth';

export const MobileMenu = ({ isOpen, onClose }) => {
  const { isAuthenticated, currentUser, logout } = useAuth();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title={APP_NAME} position="left">
      <div className="flex flex-col h-full">
        <nav className="flex flex-col space-y-4 text-base font-medium text-textHeading mt-4">
          <Link to="/" onClick={onClose} className="hover:text-accent">Home</Link>
          <Link to="/exams" onClick={onClose} className="hover:text-accent">Exams</Link>
          <Link to="/leaderboard" onClick={onClose} className="hover:text-accent">Leaderboard</Link>
          <Link to="/about" onClick={onClose} className="hover:text-accent">About Us</Link>
          <Link to="/contact" onClick={onClose} className="hover:text-accent">Contact</Link>
          <Link to="/faq" onClick={onClose} className="hover:text-accent">FAQ</Link>
          
          {isAuthenticated && (
            <div className="pt-4 border-t border-border space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-textMuted">Dashboard Menu</span>
              <Link to="/dashboard" onClick={onClose} className="block text-blue-600 dark:text-blue-400 font-semibold">Dashboard</Link>
              <Link to="/profile" onClick={onClose} className="block hover:text-accent">Profile</Link>
              <Link to="/settings" onClick={onClose} className="block hover:text-accent">Settings</Link>
            </div>
          )}
        </nav>
        
        <div className="mt-auto pt-6 flex flex-col gap-3 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-textMuted font-medium text-sm">Theme</span>
            <ThemeToggle />
          </div>

          {isAuthenticated ? (
            <Button
              variant="secondary"
              className="w-full text-red-600 dark:text-red-400"
              onClick={() => {
                logout();
                onClose();
              }}
            >
              Logout ({currentUser?.name})
            </Button>
          ) : (
            <>
              <Link to="/login" onClick={onClose}>
                <Button variant="secondary" className="w-full">Log in</Button>
              </Link>
              <Link to="/register" onClick={onClose}>
                <Button variant="primary" className="w-full">Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </Drawer>
  );
};
