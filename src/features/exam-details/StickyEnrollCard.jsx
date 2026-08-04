import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, Check, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/utils/cn';

export const StickyEnrollCard = ({ exam }) => {
  const [copied, setCopied] = useState(false);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isSaved = isInWishlist(exam.id);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  return (
    <>
      {/* Desktop Sticky Card */}
      <div className="hidden lg:block sticky top-24 w-80 shrink-0">
        <Card className="flex flex-col p-6 animate-fade-in shadow-soft-xl border-accent/20">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-textMuted mb-2 block">Enrollment</span>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-textHeading">
                ${exam.discountPrice || exam.price}
              </span>
              {exam.discountPrice && (
                <span className="text-lg text-textMuted line-through mb-1">
                  ${exam.price}
                </span>
              )}
            </div>
            {exam.discountPrice && (
              <p className="text-sm text-danger font-medium mt-2">
                Save {Math.round((1 - exam.discountPrice/exam.price) * 100)}% Today
              </p>
            )}
          </div>

          <Link to={`/exams/${exam.slug}/instructions`} className="w-full mb-3">
            <Button size="lg" className="w-full py-4 text-lg">Start Exam</Button>
          </Link>

          <Button 
            variant="secondary" 
            className={cn("w-full mb-6", isSaved && "text-danger border-danger/30 hover:bg-danger/5")}
            onClick={() => toggleWishlist(exam.id)}
          >
            {isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
          </Button>

          <div className="pt-6 border-t border-border">
            <p className="text-sm font-semibold text-textHeading mb-3 text-center">Share this exam</p>
            <div className="flex justify-center gap-3">
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-[#1877F2]/10 hover:text-[#1877F2]">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 rounded-full hover:bg-surfaceElevated"
                onClick={copyLink}
              >
                {copied ? <Check className="w-4 h-4 text-success" /> : <Share2 className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile Fixed Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full glass border-t border-border p-4 z-40 animate-slide-up shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-textHeading">${exam.discountPrice || exam.price}</span>
            {exam.discountPrice && <span className="text-xs text-danger font-medium line-through">${exam.price}</span>}
          </div>
          <Link to={`/exams/${exam.slug}/instructions`} className="flex-1 max-w-[200px]">
            <Button size="md" className="w-full">Start Exam</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
