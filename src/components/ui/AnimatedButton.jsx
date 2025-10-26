// src/components/ui/AnimatedButton.jsx
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  variant = 'primary',
  onClick,
  className = ''
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-300 font-montserrat";
  
  const variants = {
    primary: "bg-gradient-to-r from-green-500 to-blue-500 text-white cursor-pointer",
    secondary: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white cursor-pointer",
    glass: "bg-white/10 backdrop-blur-sm text-white border border-white/20 cursor-pointer"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ 
        scale: 1.08,
        boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      whileTap={{ scale: 0.6 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;