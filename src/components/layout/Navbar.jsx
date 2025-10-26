// src/components/layout/Navbar.jsx
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialMediaIcons from "../ui/SocialMediaIcons";
import {
  RiSearchLine,
  RiCloseLine,
  RiMenuLine,
  RiHomeLine,
  RiFlashlightLine,
  RiGamepadLine,
  RiTrophyLine,
  RiLiveLine,
  RiContactsLine,
  RiUserLine,
  RiUserAddLine,
  RiNotificationLine,
} from "@remixicon/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("#home");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [notifications, setNotifications] = useState(3);

  // Mock search data
  const popularSearches = [
    "Valorant Tournament",
    "CS2 Streamers",
    "Fortnite Events",
    "Gaming Gear",
    "COD Warzone",
    "Apex Legends",
    "Rainbow Six Siege",
    "Gaming Mouse",
  ];

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          // Enhanced active link detection
          const sections = [
            "#home",
            "#features",
            "#games",
            "#tournaments",
            "#streamers",
            "#contact",
          ];
          const scrollPosition = window.scrollY + 100;

          let current = "#home";

          sections.forEach((section) => {
            const element = document.querySelector(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const offsetHeight = element.offsetHeight;

              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
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

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial active link
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search suggestions
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = popularSearches.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 4)); // Limit to 4 suggestions
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  // Mobile menu close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === "ArrowDown" || e.key === "ArrowUp") && !isSearchOpen) {
        e.preventDefault();
        const links = navLinks.map((link) => link.href);
        const currentIndex = links.indexOf(activeLink);
        let nextIndex;

        if (e.key === "ArrowDown") {
          nextIndex = (currentIndex + 1) % links.length;
        } else {
          nextIndex = (currentIndex - 1 + links.length) % links.length;
        }

        handleNavClick({ preventDefault: () => {} }, links[nextIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeLink, isSearchOpen]);

  // Swipe to close mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (!startX) return;

      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      if (diff > 50) {
        // Swipe left to close
        setIsMobileMenuOpen(false);
        startX = 0;
      }
    };

    const handleTouchEnd = () => {
      startX = 0;
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll function
  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveLink(targetId);
    }
  }, []);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchSuggestions([]);
    }
  };

  // Handle search suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    // Auto-trigger search when suggestion is clicked
    setTimeout(() => {
      const e = new Event("submit");
      handleSearch(e);
    }, 100);
  };

  const navLinks = useMemo(
    () => [
      { href: "#home", label: "Home", icon: RiHomeLine },
      { href: "#features", label: "Features", icon: RiFlashlightLine },
      { href: "#games", label: "Games", icon: RiGamepadLine },
      { href: "#tournaments", label: "Tournaments", icon: RiTrophyLine },
      { href: "#streamers", label: "Streamers", icon: RiLiveLine },
      { href: "#contact", label: "Contact", icon: RiContactsLine },
    ],
    []
  );

  return (
    <>
      {/* ENHANCED GAMING NAVBAR */}
      <nav
        className={`relative bg-darker/95 backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 shadow-2xl shadow-primary/20" : "py-4"
        } border-b border-primary/10`}
      >
        {/* Neon Bottom Glow Effect */}
        <div
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div className="container">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo with Glow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <h1 className="text-2xl font-bold text-gradient font-orbitron relative z-10">
                NEXUS ARENA
              </h1>
              <div className="absolute -inset-1 bg-primary/20 blur rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Enhanced Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-1 font-montserrat bg-black/20 rounded-2xl p-1 border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 group gaming-nav-link ${
                    activeLink === link.href
                      ? "text-primary bg-primary/10"
                      : "text-light/80 hover:text-primary"
                  }`}
                >
                  <span className="relative z-10 font-semibold">
                    {link.label}
                  </span>
                  {/* Active Indicator */}
                  {activeLink === link.href && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Enhanced Desktop Right Section */}
            <div className="hidden md:flex items-center gap-3">
              {/* Notification Bell */}
              <button className="relative p-3 rounded-xl bg-white/5 border border-white/10 text-light/80 hover:text-primary transition-all duration-300">
                <RiNotificationLine className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Enhanced Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="relative p-3 rounded-xl bg-white/5 border border-white/10 text-light/80 hover:text-primary hover:border-primary/30 transition-all duration-300 group gaming-btn"
              >
                <RiSearchLine className="w-5 h-5" />
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Enhanced Sign In Button */}
              <button className="relative px-6 py-3 bg-gradient-to-r from-primary to-secondary text-darker font-bold rounded-xl font-orbitron text-sm hover:scale-105 transition-all duration-300 gaming-btn overflow-hidden group">
                <span className="relative z-10">SIGN IN</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </button>
            </div>

            {/* ENHANCED Mobile Section */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Enhanced Mobile Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="relative p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
              >
                <RiSearchLine className="w-6 h-6" />
                <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Enhanced Mobile Menu Button - GAMING STYLE */}
              <button
                className="relative p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group gaming-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  {/* Hamburger Icon */}
                  <RiMenuLine
                    className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-0 rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />

                  {/* Cross Icon */}
                  <RiCloseLine
                    className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Search Modal with Suggestions */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-start justify-center pt-32 px-4"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchSuggestions([]);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="bg-glass/80 rounded-2xl p-6 w-full max-w-md border border-primary/20 shadow-2xl shadow-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gradient font-orbitron">
                  SEARCH ARENA
                </h3>
                <p className="text-light/60 text-sm font-montserrat">
                  Find games, tournaments & more
                </p>
              </div>

              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search games, tournaments..."
                    className="w-full bg-dark/70 border border-primary/30 rounded-xl px-4 pr-12 py-4 text-light focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 font-montserrat"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-light transition-colors p-2"
                  >
                    <RiSearchLine className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {/* Search Suggestions */}
              {searchSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 bg-dark/70 rounded-xl p-3 border border-primary/20"
                >
                  <p className="text-light/60 text-sm font-montserrat mb-2 px-1">
                    Popular Searches
                  </p>
                  <div className="space-y-1">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 text-light/80 hover:text-primary transition-colors duration-200 font-montserrat text-sm flex items-center gap-2"
                      >
                        <RiSearchLine className="w-3 h-3 opacity-60" />
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Popular Searches when no query */}
              {searchQuery.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
                >
                  <p className="text-light/60 text-sm font-montserrat mb-2 text-center">
                    Try searching for:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {popularSearches.slice(0, 4).map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(item)}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-montserrat hover:bg-primary/20 transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ENHANCED Mobile Menu - GAMING STYLE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-80 bg-darker/95 backdrop-blur-2xl border-l border-primary/20 shadow-2xl shadow-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Mobile Menu Header */}
              <div className="p-6 border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gradient font-orbitron">
                    MENU
                  </h3>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300 group"
                  >
                    <RiCloseLine className="w-5 h-5" />
                    <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Enhanced Mobile Navigation Links */}
              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
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
                      <span className="font-semibold font-montserrat">
                        {link.label}
                      </span>

                      {/* Active Indicator */}
                      {activeLink === link.href && (
                        <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      )}

                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                  );
                })}

                {/* Enhanced Mobile Action Buttons */}
                <div className="pt-6 border-t border-primary/10 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-primary to-secondary text-darker font-bold rounded-xl font-orbitron text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
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
                  <p className="text-light/60 text-sm font-montserrat mb-3 text-center">
                    FOLLOW US
                  </p>
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
    </>
  );
};

export default Navbar;
