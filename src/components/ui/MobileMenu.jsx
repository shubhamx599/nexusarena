import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiUserLine, RiUserAddLine } from '@remixicon/react';
import SocialMediaIcons from './SocialMediaIcons';
import NavLinks from './NavLinks';

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  activeLink, 
  onNavClick,
  navLinks 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="absolute top-0 right-0 h-full w-80 bg-darker/95 backdrop-blur-2xl border-l border-primary/20 shadow-2xl shadow-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-primary/10 bg-linear-to-r from-primary/5 to-transparent">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gradient font-orbitron">MENU</h3>
                <button
                  onClick={onClose}
                  className="relative p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
                >
                  <RiCloseLine className="w-5 h-5" />
                  <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-6 space-y-2">
              <NavLinks 
                links={navLinks}
                activeLink={activeLink}
                onNavClick={onNavClick}
                mobile
              />

              {/* Mobile Action Buttons */}
              <div className="pt-6 border-t border-primary/10 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-linear-to-r from-primary to-secondary text-darker font-bold rounded-xl font-orbitron text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                  <RiUserLine className="w-5 h-5" />
                  SIGN IN
                </button>

                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-light/80 rounded-xl font-montserrat text-lg hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <RiUserAddLine className="w-5 h-5" />
                  Create Account
                </button>
              </div>

              {/* Social Links Section */}
              <div className="pt-6 border-t border-primary/10">
                <p className="text-light/60 text-sm font-montserrat mb-3 text-center">FOLLOW US</p>
                <div className="flex justify-center">
                  <SocialMediaIcons
                    className="justify-center"
                    buttonSize="w-10 h-10"
                    iconSize="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;