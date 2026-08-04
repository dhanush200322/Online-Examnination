import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import AuthLayout from '@/features/auth/components/AuthLayout';
import ResetPasswordForm from '@/features/auth/components/ResetPasswordForm';

const ResetPassword = () => {
  useDocumentTitle('Reset Password');
  return (
    <AuthLayout
      title="Set new password"
      subtitle="Your new password must be different from previously used passwords."
      illustrationTitle="Account Security Guaranteed"
      illustrationDesc="Choose a strong password with a mix of letters, numbers, and special characters."
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};
export default ResetPassword;
