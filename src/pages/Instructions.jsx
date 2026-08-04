import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ExamDetailsSkeleton } from '@/features/exam-details/ExamDetailsSkeleton';
import { ExamNotFound } from '@/features/exam-details/ExamNotFound';
import { CountdownTimer } from '@/features/instructions/CountdownTimer';
import { InstructionCard } from '@/features/instructions/InstructionCard';
import { SystemRequirements } from '@/features/instructions/SystemRequirements';
import { Checklist } from '@/features/instructions/Checklist';
import { exams } from '@/data/exams';
import { PlayCircle } from 'lucide-react';
import { ResumeModal } from '@/features/instructions/ResumeModal';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

const Instructions = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [exam, setExam] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [savedSessionData, setSavedSessionData] = useState(null);
  
  const { startExam } = useExam();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const foundExam = exams.find(e => e.slug === slug);
      setExam(foundExam);
      
      // Check for saved session
      if (foundExam) {
        const savedData = localStorage.getItem(`${LOCAL_STORAGE_KEYS.ACTIVE_EXAM}_${foundExam.id}`);
        if (savedData) {
          try {
            setSavedSessionData(JSON.parse(savedData));
          } catch (e) {
            console.error(e);
          }
        }
      }

      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 600);
    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) return <ExamDetailsSkeleton />;
  if (!exam) return <ExamNotFound />;

  // Mock target date for Countdown (2 hours from now for demonstration)
  const targetDate = new Date(new Date().getTime() + 2 * 60 * 60 * 1000).toISOString();

  const handleStartExam = () => {
    if (agreed) {
      if (savedSessionData) {
        setShowResumeModal(true);
      } else {
        proceedToExam();
      }
    }
  };

  const proceedToExam = () => {
    startExam(exam);
    navigate(`/exams/${exam.slug}/start`);
  };

  const handleStartFresh = () => {
    localStorage.removeItem(`${LOCAL_STORAGE_KEYS.ACTIVE_EXAM}_${exam.id}`);
    proceedToExam();
  };

  return (
    <div className="bg-background min-h-screen py-12">
      <Container maxWidth="3xl" className="max-w-3xl mx-auto">
        <Breadcrumb 
          items={[
            { label: 'Exams', href: '/exams' },
            { label: exam.title, href: `/exams/${exam.slug}` },
            { label: 'Instructions' }
          ]} 
          className="mb-8"
        />

        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-textHeading mb-4">{exam.title}</h1>
          <p className="text-textMuted text-lg">Please read all instructions carefully before proceeding.</p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {/* <CountdownTimer targetDate={targetDate} /> */}
          <SystemRequirements />
          <InstructionCard />
          <Checklist checked={agreed} onChange={setAgreed} />
          
          <div className="flex justify-center mb-24">
            <Button 
              size="lg" 
              className="w-full sm:w-auto min-w-[250px] py-4 text-lg"
              disabled={!agreed}
              onClick={handleStartExam}
              leftIcon={<PlayCircle className="w-6 h-6" />}
            >
              Begin Examination
            </Button>
          </div>
        </div>
      </Container>
      
      <ResumeModal 
        isOpen={showResumeModal} 
        onResume={proceedToExam} 
        onStartFresh={handleStartFresh}
        lastSavedTime={savedSessionData?.lastSaved}
      />
    </div>
  );
};

export default Instructions;
