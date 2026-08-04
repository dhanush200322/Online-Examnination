import { useMemo } from 'react';

export const useCertificate = (certificateId, resultData) => {
  return useMemo(() => {
    if (!certificateId || !resultData) return null;

    return {
      id: certificateId,
      issueDate: new Date(resultData.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      candidateName: 'John Doe', // In real app, from Auth Context
      examName: resultData.examTitle || 'Premium Certification',
      score: resultData.score,
      percentage: resultData.percentage,
      verificationUrl: `${window.location.origin}/certificate/${certificateId}`,
      isValid: resultData.isPass
    };
  }, [certificateId, resultData]);
};
