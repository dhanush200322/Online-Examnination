import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { Mail } from 'lucide-react';
import { useNotification } from '@/context/NotificationContext';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { addToast } = useNotification();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      addToast('Subscribed successfully!', 'success');
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-surfaceElevated/30 border-y border-border">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-textHeading mb-4">Stay updated with new exams</h2>
          <p className="text-textMuted mb-8">Subscribe to our newsletter to get the latest updates on new certifications, discount offers, and study tips.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-full max-w-sm">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail className="w-5 h-5" />}
                required
              />
            </div>
            <Button type="submit" variant="primary">Subscribe</Button>
          </form>
          <p className="text-xs text-textMuted mt-4">We care about your data. Read our privacy policy.</p>
        </div>
      </Container>
    </section>
  );
};
