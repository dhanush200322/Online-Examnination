import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useWishlist } from '@/context/WishlistContext';

export const WishlistButton = ({ examId, className }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isSaved = isInWishlist(examId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Prevent navigating if wrapped in a link
        toggleWishlist(examId);
      }}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300",
        isSaved 
          ? "bg-danger/10 text-danger hover:bg-danger/20" 
          : "bg-surface/50 text-textHeading hover:bg-surface hover:text-danger",
        className
      )}
      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart className={cn("w-5 h-5", isSaved && "fill-danger")} />
    </button>
  );
};
