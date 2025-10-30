import { motion } from 'framer-motion';

const FooterSection = ({ 
  title, 
  children, 
  className = "",
  centerOnMobile = true 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${centerOnMobile ? 'text-center md:text-left' : ''} ${className}`}
    >
      <h4 className="font-bold text-white font-orbitron mb-4">
        {title}
      </h4>
      {children}
    </motion.div>
  );
};

export default FooterSection;