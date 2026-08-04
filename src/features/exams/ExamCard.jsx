import React from 'react';
import { Clock, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { WishlistButton } from '../wishlist/WishlistButton';

export const ExamCard = ({ exam }) => {
  return (
    <Card hover padding="none" className="overflow-hidden flex flex-col group h-full">
      <div className="relative h-48 overflow-hidden bg-surfaceElevated">
        <img 
          src={exam.thumbnail} 
          alt={exam.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://picsum.photos/seed/fallback/400/300';
          }}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={exam.difficulty === 'Beginner' ? 'success' : exam.difficulty === 'Intermediate' ? 'warning' : 'danger'}>
            {exam.difficulty}
          </Badge>
          {exam.featured && <Badge variant="accent">Featured</Badge>}
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="bg-surface/90 backdrop-blur-sm px-2 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 shadow-sm">
            <Star className="w-3.5 h-3.5 text-warning fill-warning" />
            {exam.rating}
          </div>
          <WishlistButton examId={exam.id} />
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-textHeading line-clamp-2 mb-2 group-hover:text-accent transition-colors">
          {exam.title}
        </h3>
        <p className="text-sm text-textMuted line-clamp-2 mb-4 flex-1">
          {exam.subtitle}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-textMuted mb-5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {exam.duration}m
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            {exam.totalQuestions} Qs
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-textMuted uppercase tracking-wider font-medium">Price</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-textHeading">${exam.discountPrice}</span>
              <span className="text-sm text-textMuted line-through">${exam.price}</span>
            </div>
          </div>
          <Link 
            to={`/exams/${exam.slug}`}
            className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </Card>
  );
};
