import React from 'react';
import { Container } from '../common/Container';
import { APP_NAME } from '@/utils/constants';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-textHeading tracking-tight mb-4">{APP_NAME}</h3>
            <p className="text-sm text-textMuted max-w-xs leading-relaxed">
              Premium online examination platform designed for modern learners and educators worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-textHeading mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link to="/exams" className="hover:text-accent transition-colors">Browse Exams</Link></li>
              <li><Link to="/leaderboard" className="hover:text-accent transition-colors">Leaderboard</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent transition-colors">User Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-textHeading mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-textHeading mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-textMuted gap-4">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-accent transition-colors">GitHub</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
