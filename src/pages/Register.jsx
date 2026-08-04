import useDocumentTitle from '@/hooks/useDocumentTitle';
import React from 'react';
import AuthLayout from '@/features/auth/components/AuthLayout';
import RegisterForm from '@/features/auth/components/RegisterForm';

const Register = () => {
  useDocumentTitle('Create Account');
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join thousands of students and professionals scaling their knowledge."
      illustrationTitle="Start your learning journey today"
      illustrationDesc="Unlock full access to interactive practice tests, global rankings, and automated certification."
    >
      <RegisterForm />
    </AuthLayout>
  );
};
export default Register;
