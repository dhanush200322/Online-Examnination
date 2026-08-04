import React from 'react';
import { QrCode, Award } from 'lucide-react';
import { Card } from '@/components/common/Card';

export const CertificateCard = ({ certificate }) => {
  if (!certificate) return null;

  return (
    <Card id="certificate-card" className="relative p-12 md:p-20 overflow-hidden bg-white text-gray-900 border-8 border-double border-accent/20 shadow-2xl max-w-4xl mx-auto min-h-[600px] flex flex-col justify-between items-center text-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-tl-full" />
      </div>

      <div className="relative z-10 w-full">
        <div className="flex justify-center mb-8 text-accent">
          <Award className="w-20 h-20" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight mb-2 uppercase">
          Certificate of Completion
        </h1>
        <p className="text-lg text-gray-500 uppercase tracking-widest mb-12">
          This is to certify that
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-accent italic mb-12 border-b-2 border-accent/20 inline-block px-12 pb-4">
          {certificate.candidateName}
        </h2>
        
        <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-16">
          has successfully completed the <strong className="text-gray-900">{certificate.examName}</strong> examination with a score of <strong className="text-gray-900">{certificate.percentage}%</strong>.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-end w-full px-8">
          <div className="text-left">
            <div className="w-40 border-b border-gray-400 mb-2" />
            <p className="text-sm font-semibold text-gray-600 uppercase">Issue Date</p>
            <p className="text-sm text-gray-900">{certificate.issueDate}</p>
          </div>
          
          <div className="flex flex-col items-center my-8 md:my-0">
            <div className="w-24 h-24 bg-gray-100 p-2 rounded-lg border border-gray-300 flex items-center justify-center mb-2">
              <QrCode className="w-full h-full text-gray-800" strokeWidth={1} />
            </div>
            <p className="text-xs font-mono text-gray-500">{certificate.id}</p>
          </div>
          
          <div className="text-right">
            <div className="w-40 border-b border-gray-400 mb-2 ml-auto" />
            <p className="text-sm font-semibold text-gray-600 uppercase">Director</p>
            <p className="text-sm text-gray-900">Dr. Jonathan Smith</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
