import { useState, useEffect } from 'react';

export const useScrollDetection = (sections, scrollThreshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > scrollThreshold);

          // Active link detection
          const scrollPosition = window.scrollY + 100;
          let current = '#home';

          sections.forEach((section) => {
            const element = document.querySelector(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                current = section;
              }
            }
          });

          setActiveLink(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, scrollThreshold]);

  return { isScrolled, activeLink, setActiveLink };
};