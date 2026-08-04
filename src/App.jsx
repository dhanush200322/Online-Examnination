import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ToastContainer } from '@/components/common/Toast';
import { ExamSessionProvider } from '@/context/ExamSessionContext';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import GuestRoute from '@/components/common/GuestRoute';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import OfflineBanner from '@/components/common/OfflineBanner';

// Lazy loaded pages
const Home = React.lazy(() => import('@/pages/Home'));
const Exams = React.lazy(() => import('@/pages/Exams'));
const Wishlist = React.lazy(() => import('@/pages/Wishlist'));
const ExamDetails = React.lazy(() => import('@/pages/ExamDetails'));
const Instructions = React.lazy(() => import('@/pages/Instructions'));
const ExamSession = React.lazy(() => import('@/pages/ExamSession'));
const ResultPlaceholder = React.lazy(() => import('@/pages/ResultPlaceholder'));
const Results = React.lazy(() => import('@/pages/Results'));
const AnswerReview = React.lazy(() => import('@/pages/AnswerReview'));
const Certificate = React.lazy(() => import('@/pages/Certificate'));
const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const Leaderboard = React.lazy(() => import('@/pages/Leaderboard'));
const Notifications = React.lazy(() => import('@/pages/Notifications'));
const Settings = React.lazy(() => import('@/pages/Settings'));

// Phase 7 Pages
const Login = React.lazy(() => import('@/pages/Login'));
const Register = React.lazy(() => import('@/pages/Register'));
const ForgotPassword = React.lazy(() => import('@/pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('@/pages/ResetPassword'));
const About = React.lazy(() => import('@/pages/About'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const FAQ = React.lazy(() => import('@/pages/FAQ'));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('@/pages/TermsConditions'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <OfflineBanner />
      <ExamSessionProvider>
        <Suspense fallback={
          <div className="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">Loading platform...</p>
            </div>
          </div>
        }>
          <Routes>
            {/* Main Layout Public & Guest Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="exams" element={<Exams />} />
              <Route path="exams/:slug" element={<ExamDetails />} />
              <Route path="exams/:slug/instructions" element={<Instructions />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="result-placeholder" element={<ResultPlaceholder />} />
              <Route path="result/:attemptId" element={<Results />} />
              <Route path="result/:attemptId/review" element={<AnswerReview />} />
              <Route path="certificate/:certificateId" element={<Certificate />} />

              {/* Public Informational & Legal Pages */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<TermsConditions />} />

              {/* Guest Auth Routes */}
              <Route path="login" element={<GuestRoute><Login /></GuestRoute>} />
              <Route path="register" element={<GuestRoute><Register /></GuestRoute>} />
              <Route path="forgot-password" element={<GuestRoute><ForgotPassword /></GuestRoute>} />
              <Route path="reset-password" element={<GuestRoute><ResetPassword /></GuestRoute>} />

              {/* Wildcard 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Route>
            
            {/* Protected Dashboard Routes with DashboardLayout */}
            <Route element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

            {/* Exam Session is outside the main layout for a distraction-free view */}
            <Route path="/exams/:slug/start" element={
              <ProtectedRoute>
                <ExamSession />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
        <ToastContainer />
      </ExamSessionProvider>
    </ErrorBoundary>
  );
}

export default App;
