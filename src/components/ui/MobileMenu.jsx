// src/components/ui/MobileMenu.jsx
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
    <>
      {/* Backdrop Overlay - Sibling to avoid tap-through and scroll locking issues */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-dvh max-h-dvh w-80 bg-darker/98 backdrop-blur-2xl border-l border-primary/25 z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-primary/10 bg-linear-to-r from-primary/5 to-transparent flex justify-between items-center shrink-0">
          <h3 className="text-xl font-bold text-gradient font-orbitron">MENU</h3>
          <button
            onClick={onClose}
            className="relative p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
          >
            <RiCloseLine className="w-5 h-5" />
            <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Drawer Scrollable Content Area */}
        <div 
          className="flex-1 overflow-y-auto min-h-0 p-6 space-y-6"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Menu Navigation Links */}
          <div className="space-y-2">
            <NavLinks 
              links={navLinks}
              activeLink={activeLink}
              onNavClick={onNavClick}
              mobile
            />
          </div>

          {/* Account Actions */}
          <div className="pt-6 border-t border-primary/15 space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-linear-to-r from-primary to-secondary text-darker font-bold rounded-xl font-orbitron text-base hover:scale-105 transition-all duration-300 shadow-md shadow-primary/10">
              <RiUserLine className="w-5 h-5" />
              SIGN IN
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-light/85 rounded-xl font-montserrat text-base hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
              <RiUserAddLine className="w-5 h-5" />
              Create Account
            </button>
          </div>

          {/* Social Community Panel */}
          <div className="pt-6 border-t border-primary/15">
            <p className="text-light/50 text-xs font-montserrat tracking-widest mb-4 text-center">FOLLOW US</p>
            <div className="flex justify-center">
              <SocialMediaIcons
                className="justify-center"
                buttonSize="w-10 h-10"
                iconSize="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;