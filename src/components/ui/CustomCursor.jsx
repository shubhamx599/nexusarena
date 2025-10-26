// src/components/ui/CustomCursor.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import useMediaQuery from '../../hooks/useMediaQuery';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(true); // New state for visibility

  useEffect(() => {
    // Mouse page enter/leave handlers
    const handleMouseEnter = () => {
      console.log('Mouse entered page');
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      console.log('Mouse left page');
      setIsVisible(false);
    };

    // Element hover handlers
    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.closest('a, button, [role="button"]')) {
        setCursorVariant('pointer');
      } else if (target.closest('input, textarea, select, [contenteditable="true"]')) {
        setCursorVariant('text');
      } else if (target.closest('h1, h2, h3, h4, h5, h6, p')) {
        setCursorVariant('hover');
      } else if (target.closest('img, [cursor-invert]')) {
        setCursorVariant('invert');
      } else {
        setCursorVariant('default');
      }
    };

    // Add event listeners
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      // Cleanup event listeners
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Cursor variants - CENTERED POSITIONING
  const cursorVariants = {
    default: {
      scale: 0.6,
      opacity: 0.9,
      backgroundColor: '#00ff88',
      boxShadow: '0 0 60px #00ff88, 0 0 50px #00ff88, 0 0 40px #00ff88, 0 0 30px #00ff88',
      x: -12,
      y: -12,
    },
    pointer: {
      scale: 3,
      opacity: 0.6,
      backgroundColor: 'transparent',
      borderWidth: 0.1,
      x: -11,
      y: -11,
    },
    text: {
      scale: 0.6,
      opacity: 0.3,
      backgroundColor: '#00a2ff',
      x: -10.9,
      y: -11.5,
    },
    hover: {
      scale: 1.5,
      opacity: 0.3,
      width: 30,
      height: 30,
      backgroundColor: '#00a2ff',
      x: -13,
      y: -15,
    },
    invert: {
      scale: 3,
      opacity: 0.3,
      width: 30,
      height: 30,
      backgroundColor: '#000000',
      x: -13,
      y: -15,
    },
    hidden: {
      scale: 0,
      opacity: 0,
      x: -12,
      y: -12,
    }
  };

  if (isMobile) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-9999 border-white shadow-lg"
        style={{
          left: x,
          top: y,
        }}
        variants={cursorVariants}
        animate={isVisible ? cursorVariant : 'hidden'} // Hide when not visible
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300
        }}
      />
    </AnimatePresence>
  );
};

export default CustomCursor;