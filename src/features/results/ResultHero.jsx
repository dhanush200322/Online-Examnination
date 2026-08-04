import React, { useEffect, useState } from 'react';
import { Trophy, XCircle } from 'lucide-react';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';

const Confetti = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'][Math.floor(Math.random() * 5)],
            animation: `fall ${2 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export const ResultHero = ({ result }) => {
  const isPass = result.isPass;

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-8 border ${isPass ? 'bg-gradient-to-br from-success/20 to-surface border-success/30' : 'bg-gradient-to-br from-danger/20 to-surface border-danger/30'}`}>
      {isPass && <Confetti />}
      
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center shrink-0 shadow-lg ${isPass ? 'bg-success text-white' : 'bg-danger text-white'}`}>
          {isPass ? <Trophy className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-textHeading mb-2">
            {isPass ? 'Congratulations! You Passed!' : 'Keep Practicing! Better Luck Next Time.'}
          </h1>
          <p className="text-lg text-textBody mb-6">
            You have successfully completed the <strong>{result.examTitle}</strong> exam.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to={`/result/${result.attemptId}/review`}>
              <Button variant="primary">Review Answers</Button>
            </Link>
            {result.certificateId && (
              <Link to={`/certificate/${result.certificateId}`}>
                <Button variant="outline" className="border-success text-success hover:bg-success/5">
                  View Certificate
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
