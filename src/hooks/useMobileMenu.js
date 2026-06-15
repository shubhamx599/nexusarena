// src/hooks/useMobileMenu.js
import { useState, useEffect } from 'react';

export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu when screen resizes to desktop width
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const handleResize = (e) => {
      if (e.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    media.addEventListener('change', handleResize);
    return () => media.removeEventListener('change', handleResize);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};