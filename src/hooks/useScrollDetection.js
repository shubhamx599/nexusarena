// src/hooks/useScrollDetection.js
import { useState, useEffect } from "react";

export const useScrollDetection = (scrollThreshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > scrollThreshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return isScrolled;
};
