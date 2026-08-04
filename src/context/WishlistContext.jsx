import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage(LOCAL_STORAGE_KEYS.WISHLIST, []);

  const toggleWishlist = (examId) => {
    setWishlist(prev => 
      prev.includes(examId) 
        ? prev.filter(id => id !== examId)
        : [...prev, examId]
    );
  };

  const isInWishlist = (examId) => wishlist.includes(examId);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
