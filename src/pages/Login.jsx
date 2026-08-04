import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import AuthLayout from '@/features/auth/components/AuthLayout';
import LoginForm from '@/features/auth/components/LoginForm';

const Login = () => {
  useDocumentTitle('Sign In');
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your examination dashboard."
      illustrationTitle="Elevate your exam preparation"
      illustrationDesc="Access adaptive mock tests, analyze performance analytics, and gain verified certifications."
    >
      <LoginForm />
    </AuthLayout>
  );
};
export default Login;
