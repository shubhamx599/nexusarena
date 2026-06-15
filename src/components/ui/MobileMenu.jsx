// src/components/ui/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  RiCloseLine, 
  RiUserLine, 
  RiWifiLine, 
  RiTerminalLine
} from '@remixicon/react';
import SocialMediaIcons from './SocialMediaIcons';

const MobileMenu = ({ 
  onClose, 
  activeLink, 
  onNavClick, 
  navLinks 
}) => {
  // Creative description mappings for navigation links
  const linkDetails = {
    '/': { 
      desc: 'Main lobby & arena dashboard', 
      color: 'primary', 
      colorHex: '#00ff88',
      hoverBorder: 'hover:border-primary/50' 
    },
    '/features': { 
      desc: 'Powerups, custom specs & perks', 
      color: 'secondary', 
      colorHex: '#00a2ff',
      hoverBorder: 'hover:border-secondary/50' 
    },
    '/games': { 
      desc: 'Vast catalogue of virtual titles', 
      color: 'accent', 
      colorHex: '#ff0080',
      hoverBorder: 'hover:border-accent/50' 
    },
    '/tournaments': { 
      desc: 'Brackets, active schedules & rules', 
      color: 'primary', 
      colorHex: '#00ff88',
      hoverBorder: 'hover:border-primary/50' 
    },
    '/streamers': { 
      desc: 'Top content creators & live channels', 
      color: 'secondary', 
      colorHex: '#00a2ff',
      hoverBorder: 'hover:border-secondary/50' 
    },
    '/contact': { 
      desc: 'Secure command center hotline', 
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
        // Close menu if backdrop itself is clicked
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
        className="relative z-10 w-full max-w-2xl mx-auto min-h-full px-5 py-6 flex flex-col justify-between gap-8 pointer-events-auto"
        onClick={(e) => {
          // Prevent click propagation from closing the menu when clicking on UI panels
          e.stopPropagation();
        }}
      >
        {/* Top Control Bar */}
        <div className="flex justify-between items-center border-b border-white/5 pb-4 shrink-0">
          <div className="flex flex-col pl-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-gradient font-orbitron tracking-wider">NEXUS CORE</h3>
              <div className="flex items-center gap-1 bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded text-[8px] font-orbitron font-extrabold text-primary">
                <span className="w-1 h-1 rounded-full bg-primary animate-ping" />
                SYS_ONLINE
              </div>
            </div>
            <span className="text-[9px] text-light/30 tracking-widest uppercase mt-0.5 font-mono">SECTOR_NODE_8921 // DEV_V2.1.8</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-light hover:text-primary hover:border-primary/30 transition-all duration-300 group shadow-md"
            title="Close System Hub"
          >
            <RiCloseLine className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Dynamic Navigation Dashboard Grid */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pl-1">
            <span className="text-[10px] text-light/40 font-montserrat tracking-widest uppercase font-bold">CORE MODULES</span>
            <span className="text-[9px] text-light/20 font-mono">SELECT PROTOCOL</span>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3.5">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              const isActive = activeLink === link.href;
              const details = linkDetails[link.href] || { 
                desc: 'Explore link', 
                color: 'primary', 
                colorHex: '#00ff88',
                hoverBorder: 'hover:border-primary/30' 
              };
              
              // Color Classes
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
                    className={`group relative flex flex-col p-4.5 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? `bg-darker/50 shadow-lg ${activeShadow}` 
                        : `bg-white/5 border-white/5 ${details.hoverBorder} hover:bg-white/10`
                    }`}
                  >
                    {/* Glowing Accent Corner Dot */}
                    {isActive && (
                      <span className="absolute top-4 right-4 flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`} style={{ backgroundColor: details.colorHex }}></span>
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: details.colorHex }}></span>
                      </span>
                    )}

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3.5 mb-2">
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-darker border border-white/10 text-light' 
                          : `bg-white/5 text-light/50 group-hover:text-light ${colorText}`
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-orbitron font-extrabold tracking-wider text-sm text-light group-hover:text-primary transition-colors duration-300">
                        {link.label.toUpperCase()}
                      </span>
                    </div>

                    {/* Tagline Description */}
                    <p className="text-xs text-light/40 leading-relaxed font-montserrat transition-colors duration-300 group-hover:text-light/70 pl-0.5">
                      {details.desc}
                    </p>

                    {/* High-tech Bottom Border Animation */}
                    <div 
                      className="absolute bottom-0 left-4 right-4 h-[1px] transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center" 
                      style={{ backgroundColor: details.colorHex }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cyber Player status panel */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] text-light/40 font-montserrat tracking-widest uppercase pl-1 font-bold">USER PROTOCOL</span>
          
          <div className="bg-glass rounded-2xl p-5 border border-white/5 relative overflow-hidden group">
            {/* Ambient glows within card */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/5 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">
              <div className="flex items-center gap-4.5 w-full sm:w-auto">
                {/* Cyber Avatar */}
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full bg-darker border border-white/10 flex items-center justify-center overflow-hidden relative group-hover:border-primary/40 transition-all duration-500 shadow-inner">
                    <RiUserLine className="w-6 h-6 text-light/40 group-hover:text-primary transition-colors duration-300" />
                    {/* Pulsing Target Overlay */}
                    <div className="absolute inset-1 rounded-full border border-dashed border-primary/0 group-hover:border-primary/20 group-hover:animate-spin" style={{ animationDuration: '6s' }} />
                    {/* Laser scanning bar */}
                    <div className="absolute top-0 left-0 w-full h-[1.5px] bg-primary/30 group-hover:animate-bounce" />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 bg-linear-to-r from-primary to-secondary text-darker text-[9px] font-orbitron font-black px-2 py-0.5 rounded-full border border-darker shadow-sm">
                    LV.1
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-orbitron font-bold text-sm text-light tracking-wide">GUEST_PLAYER_NODE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  <span className="text-[9px] font-mono text-light/35 uppercase tracking-wider mt-0.5">STATUS: CONNECTED // SECURE</span>
                  
                  {/* Network stats */}
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <RiWifiLine className="w-3.5 h-3.5 text-primary/80" />
                    <span className="text-[9px] font-orbitron text-primary font-bold tracking-wider">12ms LATENCY // EXCELLENT</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                <button 
                  onClick={(e) => { e.stopPropagation(); }}
                  className="flex-1 sm:flex-none px-4 py-3 bg-linear-to-r from-primary to-secondary text-darker font-extrabold font-orbitron text-[11px] tracking-wider rounded-xl hover:scale-105 transition-all duration-300 shadow-md shadow-primary/10 uppercase cursor-pointer"
                >
                  Sign In Node
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); }}
                  className="flex-1 sm:flex-none px-4 py-3 bg-white/5 border border-white/10 text-light font-extrabold font-orbitron text-[11px] tracking-wider rounded-xl hover:bg-white/10 hover:border-primary/35 transition-all duration-300 uppercase cursor-pointer"
                >
                  Create Node
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* System Diagnostics Terminal Feed */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between pl-1">
            <span className="text-[10px] text-light/40 font-montserrat tracking-widest uppercase font-bold">SYSTEM DIAGNOSTICS</span>
            <span className="text-[9px] text-primary/60 font-mono animate-pulse">NODE_ACTIVE</span>
          </div>

          <div className="border border-white/5 bg-darker/60 backdrop-blur-md rounded-2xl p-4.5 font-mono text-[10px] text-light/35 space-y-1.5 shadow-inner">
            <div className="flex items-center gap-2 text-primary/80 font-bold mb-1.5 text-xs font-orbitron">
              <RiTerminalLine className="w-4 h-4 text-primary" />
              <span>TERMINAL MONITOR [LOG_FEED]</span>
            </div>
            <div className="flex justify-between">
              <span>&gt; SECURE PROTOCOL TUNNELLING:</span>
              <span className="text-primary font-semibold">SUCCESS [SSL_OK]</span>
            </div>
            <div className="flex justify-between">
              <span>&gt; REGIONAL CLOUD ROUTER HOST:</span>
              <span className="text-secondary font-semibold">SHARD_US_EAST // 100% ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>&gt; MATCHMAKING CONTROLLER SEEDS:</span>
              <span className="text-accent font-semibold">5 ACTIVE BROKERS</span>
            </div>
            <div className="flex justify-between">
              <span>&gt; ENCRYPTION STRENGTH:</span>
              <span>AES-256 GCM SECURED</span>
            </div>
          </div>
        </div>

        {/* Footer info & socials */}
        <div className="flex flex-col gap-4 mt-auto shrink-0 border-t border-white/5 pt-5 pl-1">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[9px] text-light/35 font-montserrat tracking-widest uppercase font-bold">JOIN THE NEXUS COMMUNITY</span>
              <span className="text-[11px] text-light/60 font-orbitron font-medium mt-0.5">PUBLIC SHARD TRANSMISSIONS</span>
            </div>
            
            <SocialMediaIcons
              className="justify-center sm:justify-end"
              buttonSize="w-10 h-10"
              iconSize="w-4 h-4"
            />
          </div>

          {/* Copyright watermarks */}
          <div className="flex flex-col xs:flex-row items-center justify-between text-[8px] text-light/25 font-mono pt-3 border-t border-white/5 gap-2">
            <span>© 2026 NEXUS ARENA. SECURE NODE INTERFACE.</span>
            <span>IP: 127.0.0.1 // NODE_LOC: SEC_NODE_9</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;