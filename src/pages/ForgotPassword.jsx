import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import AuthLayout from '@/features/auth/components/AuthLayout';
import ForgotPasswordForm from '@/features/auth/components/ForgotPasswordForm';

const ForgotPassword = () => {
  useDocumentTitle('Forgot Password');
  return (
    <AuthLayout
      title="Forgot password?"
      subtitle="No worries, enter your email and we'll send you reset instructions."
      illustrationTitle="Secure Account Recovery"
      illustrationDesc="We take security seriously. Follow the instructions sent to your registered email address."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};
export default ForgotPassword;
