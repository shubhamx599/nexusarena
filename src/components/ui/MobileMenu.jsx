// src/components/ui/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiCloseLine } from '@remixicon/react';
import SocialMediaIcons from './SocialMediaIcons';

const MobileMenu = ({ 
  onClose, 
  activeLink, 
  onNavClick, 
  navLinks 
}) => {
  // Creative color and border mappings for navigation links
  const linkDetails = {
    '/': { 
      color: 'primary', 
      colorHex: '#00ff88',
      hoverBorder: 'hover:border-primary/50' 
    },
    '/features': { 
      color: 'secondary', 
      colorHex: '#00a2ff',
      hoverBorder: 'hover:border-secondary/50' 
    },
    '/games': { 
      color: 'accent', 
      colorHex: '#ff0080',
      hoverBorder: 'hover:border-accent/50' 
    },
    '/tournaments': { 
      color: 'primary', 
      colorHex: '#00ff88',
      hoverBorder: 'hover:border-primary/50' 
    },
    '/streamers': { 
      color: 'secondary', 
      colorHex: '#00a2ff',
      hoverBorder: 'hover:border-secondary/50' 
    },
    '/contact': { 
      color: 'accent', 
      colorHex: '#ff0080',
      hoverBorder: 'hover:border-accent/50' 
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 w-full h-dvh bg-darker/98 backdrop-blur-3xl z-[100] overflow-y-auto flex flex-col font-montserrat"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      {/* Animated Cyber Background Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[15%] -left-[10%] w-[60%] h-[50%] rounded-full bg-primary/10 blur-[130px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[35%] left-[25%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-[100px] animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Screen Frame Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Dashboard Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative z-10 w-full max-w-2xl mx-auto min-h-full px-6 py-8 flex flex-col justify-between gap-12 pointer-events-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Top Control Bar */}
        <div className="flex justify-between items-center border-b border-white/5 pb-5 shrink-0">
          <div className="flex flex-col pl-1">
            <h3 className="text-xl font-bold text-gradient font-orbitron tracking-wider">NEXUS ARENA</h3>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-light hover:text-primary hover:border-primary/30 transition-all duration-300 group shadow-md cursor-pointer"
            title="Close Menu"
          >
            <RiCloseLine className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Dynamic Navigation Dashboard Grid */}
        <div className="flex flex-col gap-6 my-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              const isActive = activeLink === link.href;
              const details = linkDetails[link.href] || { 
                color: 'primary', 
                colorHex: '#00ff88',
                hoverBorder: 'hover:border-primary/30' 
              };
              
              const colorText = details.color === 'primary' ? 'text-primary' 
                              : details.color === 'secondary' ? 'text-secondary' 
                              : 'text-accent';

              const activeShadow = details.color === 'primary' ? 'shadow-primary/10 border-primary/45 bg-primary/5' 
                                 : details.color === 'secondary' ? 'shadow-secondary/10 border-secondary/45 bg-secondary/5' 
                                 : 'shadow-accent/10 border-accent/45 bg-accent/5';

              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                  key={link.href}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavClick();
                    }}
                    className={`group relative flex items-center gap-4.5 p-4 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? `bg-darker/50 shadow-lg ${activeShadow}` 
                        : `bg-white/5 border-white/5 ${details.hoverBorder} hover:bg-white/10`
                    }`}
                  >
                    {/* Glowing Accent Corner Dot */}
                    {isActive && (
                      <span className="absolute top-1/2 right-5 -translate-y-1/2 flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`} style={{ backgroundColor: details.colorHex }}></span>
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: details.colorHex }}></span>
                      </span>
                    )}

                    {/* Icon */}
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-darker border border-white/10 text-light' 
                        : `bg-white/5 text-light/50 group-hover:text-light ${colorText}`
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    {/* Title */}
                    <span className="font-orbitron font-extrabold tracking-wider text-base text-light group-hover:text-primary transition-colors duration-300">
                      {link.label.toUpperCase()}
                    </span>

                    {/* High-tech Bottom Border Animation */}
                    <div 
                      className="absolute bottom-0 left-5 right-5 h-[1px] transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center" 
                      style={{ backgroundColor: details.colorHex }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer info & socials */}
        <div className="flex flex-col gap-4 mt-auto shrink-0 border-t border-white/5 pt-6">
          <div className="flex justify-center w-full">
            <SocialMediaIcons
              className="justify-center"
              buttonSize="w-12 h-12"
              iconSize="w-5 h-5"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;