import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from './context/WishlistContext';
import { NotificationProvider } from './context/NotificationContext';
import { ExamProvider } from './context/ExamContext';
import { ProfileProvider } from './context/ProfileContext';
import { DashboardProvider } from './context/DashboardContext';
import { LeaderboardProvider } from './context/LeaderboardContext';
import { SettingsProvider } from './context/SettingsContext';
import { AppNotificationProvider } from './context/AppNotificationContext';
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SettingsProvider>
          <ThemeProvider>
            <NotificationProvider>
              <AppNotificationProvider>
                <ProfileProvider>
                  <DashboardProvider>
                    <LeaderboardProvider>
                      <WishlistProvider>
                        <ExamProvider>
                          <App />
                        </ExamProvider>
                      </WishlistProvider>
                    </LeaderboardProvider>
                  </DashboardProvider>
                </ProfileProvider>
              </AppNotificationProvider>
            </NotificationProvider>
          </ThemeProvider>
        </SettingsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
