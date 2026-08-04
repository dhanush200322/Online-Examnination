import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Heart, User, LayoutDashboard, Settings, LogOut, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { MobileMenu } from './MobileMenu';
import { APP_NAME } from '@/utils/constants';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/hooks/useAuth';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { currentUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/login');
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass border-b">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-textHeading tracking-tight">{APP_NAME}</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-textMuted">
                <Link to="/" className="hover:text-textHeading transition-colors">Home</Link>
                <Link to="/exams" className="hover:text-textHeading transition-colors">Exams</Link>
                <Link to="/leaderboard" className="hover:text-textHeading transition-colors">Leaderboard</Link>
                <Link to="/about" className="hover:text-textHeading transition-colors">About</Link>
                <Link to="/contact" className="hover:text-textHeading transition-colors">Contact</Link>
                {isAuthenticated && (
                  <Link to="/dashboard" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Dashboard
                  </Link>
                )}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Link to="/wishlist" className="relative inline-flex">
                  <Button variant="ghost" size="icon" aria-label="Wishlist">
                    <Heart className="w-5 h-5" />
                    {wishlist.length > 0 && (
                      <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
                        {wishlist.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <ThemeToggle />
                <div className="w-px h-6 bg-border mx-2" />

                {isAuthenticated ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-2 p-1.5 rounded-full hover:bg-surfaceElevated transition-colors border border-border"
                    >
                      <img
                        src={currentUser?.avatar || 'https://i.pravatar.cc/150?img=11'}
                        alt={currentUser?.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-xs font-semibold text-textHeading max-w-[100px] truncate">
                        {currentUser?.name}
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-textMuted" />
                    </button>

                    {isProfileOpen && (
                      <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl py-2 z-50 animate-fade-in text-sm">
                        <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800">
                          <p className="font-bold text-gray-900 dark:text-white truncate">{currentUser?.name}</p>
                          <p className="text-xs text-gray-500 truncate">{currentUser?.email}</p>
                        </div>

                        <Link
                          to="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <LayoutDashboard className="w-4 h-4 text-blue-500" /> Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <User className="w-4 h-4 text-purple-500" /> Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <Settings className="w-4 h-4 text-gray-500" /> Settings
                        </Link>

                        <div className="border-t border-gray-100 dark:border-gray-800 my-1"></div>

                        <button
                          onClick={handleLogout}
                          className="w-full text-left flex items-center gap-2.5 px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium"
                        >
                          <LogOut className="w-4 h-4" /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="ghost" size="sm">Log in</Button>
                    </Link>
                    <Link to="/register">
                      <Button variant="primary" size="sm">Sign up</Button>
                    </Link>
                  </>
                )}
              </div>

              <button
                className="md:hidden p-2 text-textMuted hover:bg-surfaceElevated rounded-xl"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
