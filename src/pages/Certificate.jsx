import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { CertificateCard } from '@/features/results/CertificateCard';
import { useCertificate } from '@/hooks/useCertificate';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';
import { Download, Share2, Printer, ChevronLeft } from 'lucide-react';
import { EmptyState } from '@/components/common/EmptyState';
import { FileWarning } from 'lucide-react';

const Certificate = () => {
  const { certificateId } = useParams();
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.RESULTS) || '[]';
      const results = JSON.parse(stored);
      // Find the result that generated this certificate
      const found = results.find(r => r.certificateId === certificateId);
      setResultData(found);
    } catch (e) {
      console.error(e);
    }
  }, [certificateId]);

  const certificate = useCertificate(certificateId, resultData);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Certificate Link Copied!');
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  if (!certificateId || (resultData === undefined)) {
    return (
      <Container className="py-24">
        <EmptyState icon={<FileWarning className="w-12 h-12" />} title="Certificate Not Found" />
      </Container>
    );
  }

  if (!resultData) return null; // loading state

  return (
    <>
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #certificate-card, #certificate-card * {
            visibility: visible;
          }
          #certificate-card {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            margin: 0;
            padding: 40px;
            box-shadow: none !important;
            border: none !important;
            page-break-inside: avoid;
          }
        }
      `}</style>
      
      <div className="bg-background min-h-screen py-12">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 print:hidden">
            <Button variant="ghost" onClick={() => navigate(-1)} leftIcon={<ChevronLeft className="w-4 h-4" />}>
              Back
            </Button>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={handleShare} leftIcon={<Share2 className="w-4 h-4" />}>Share</Button>
              <Button variant="primary" onClick={handlePrint} leftIcon={<Printer className="w-4 h-4" />}>Print / Download PDF</Button>
            </div>
          </div>

          <div className="flex justify-center">
            <CertificateCard certificate={certificate} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Certificate;
