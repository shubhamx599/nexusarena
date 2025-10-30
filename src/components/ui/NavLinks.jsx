import { motion } from 'framer-motion';

const NavLinks = ({ links, activeLink, onNavClick, mobile = false }) => {
  if (mobile) {
    return links.map((link, index) => {
      const IconComponent = link.icon;
      return (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={(e) => onNavClick(e, link.href)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex items-center gap-4 text-lg py-4 px-4 rounded-xl transition-all duration-300 group border ${
            activeLink === link.href
              ? "text-primary bg-primary/10 border-primary/20"
              : "text-light/80 hover:text-primary bg-white/5 border-white/5 hover:border-primary/20"
          }`}
        >
          <IconComponent className="w-5 h-5" />
          <span className="font-semibold font-montserrat">{link.label}</span>

          {/* Active Indicator */}
          {activeLink === link.href && (
            <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          )}

          {/* Hover Glow */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.a>
      );
    });
  }

  // Desktop version
  return (
    <div className="hidden md:flex items-center gap-1 font-montserrat bg-black/20 rounded-2xl p-1 border border-white/10">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => onNavClick(e, link.href)}
          className={`relative px-6 py-3 rounded-xl transition-all duration-300 group gaming-nav-link ${
            activeLink === link.href
              ? "text-primary bg-primary/10"
              : "text-light/80 hover:text-primary"
          }`}
        >
          <span className="relative z-10 font-semibold">{link.label}</span>
          
          {/* Active Indicator */}
          {activeLink === link.href && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
          )}
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      ))}
    </div>
  );
};

export default NavLinks;