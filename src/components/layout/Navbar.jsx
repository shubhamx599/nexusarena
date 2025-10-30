import { useCallback } from "react";
import { motion } from "framer-motion";

// Hooks
import { useScrollDetection } from "../../hooks/useScrollDetection";
import { useSearch } from "../../hooks/useSearch";
import { useMobileMenu } from "../../hooks/useMobileMenu";

// Constants
import { NAV_LINKS, SECTIONS } from "../../constants/navigation";

// Components
import SearchModal from "../ui/SearchModal";
import MobileMenu from "../ui/MobileMenu";
import NavLinks from "../ui/NavLinks";
import SearchButton from "../ui/SearchButton";
import MenuToggleButton from "../ui/MenuToggleButton";

const Navbar = () => {
  // Custom hooks
  const { isScrolled, activeLink, setActiveLink } = useScrollDetection(SECTIONS);
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    searchQuery, 
    setSearchQuery, 
    searchSuggestions, 
    handleSearch, 
    handleSuggestionClick 
  } = useSearch();
  const { 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    toggleMobileMenu 
  } = useMobileMenu();

  // Handlers
  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveLink(targetId);
    }
  }, [setIsMobileMenuOpen, setActiveLink]);

  return (
    <>
      {/* GAMING NAVBAR */}
      <nav
        className={`bg-darker/95 backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 shadow-2xl shadow-primary/20" : "py-4"
        } border-b border-primary/10`}
      >
        {/* Neon Bottom Glow Effect */}
        <div
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent transition-all duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div className="container">
          <div className="flex justify-between items-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <h1 className="text-2xl font-bold text-gradient font-orbitron relative z-10">
                NEXUS ARENA
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <NavLinks 
              links={NAV_LINKS}
              activeLink={activeLink}
              onNavClick={handleNavClick}
            />

            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search Button */}
              <SearchButton onClick={() => setIsSearchOpen(true)} />

              {/* Sign In Button */}
              <button className="relative px-6 py-3 bg-linear-to-r from-primary to-secondary text-darker font-bold rounded-xl font-orbitron text-sm hover:scale-105 transition-all duration-300 gaming-btn overflow-hidden group">
                <span className="relative z-10">SIGN IN</span>
                <div className="absolute inset-0 bg-linear-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </button>
            </div>

            {/* Mobile Section */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Search Button */}
              <SearchButton mobile onClick={() => setIsSearchOpen(true)} />

              {/* Mobile Menu Button */}
              <MenuToggleButton 
                isOpen={isMobileMenuOpen} 
                onClick={toggleMobileMenu} 
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onSearchSubmit={handleSearch}
        searchSuggestions={searchSuggestions}
        onSuggestionClick={handleSuggestionClick}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeLink={activeLink}
        onNavClick={handleNavClick}
        navLinks={NAV_LINKS}
      />
    </>
  );
};

export default Navbar;