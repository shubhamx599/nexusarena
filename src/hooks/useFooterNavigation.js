import { useCallback } from 'react';

export const useFooterNavigation = () => {
  // Smooth scroll for internal links
  const handleQuickLinkClick = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Safe external links
  const handleExternalLink = useCallback((e, url) => {
    e.preventDefault();
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }, []);

  return {
    handleQuickLinkClick,
    handleExternalLink
  };
};