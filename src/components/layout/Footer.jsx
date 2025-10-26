import { useCallback, memo } from 'react';
import SocialMediaIcons from '../ui/SocialMediaIcons';
import { useNewsletter } from '../../hooks/useNewsletter';
import { QUICK_LINKS, SUPPORT_LINKS, LEGAL_LINKS } from '../../constants/footerLinks';

const Footer = memo(() => {
  const { email, setEmail, status, isLoading, subscribe } = useNewsletter();

  // Smooth scroll for internal links
  const handleQuickLinkClick = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Safe external links
  const handleExternalLink = useCallback((e, url) => {
    e.preventDefault();
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }, []);

  // Newsletter submission
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      await subscribe(email);
    }
  };

  // Email input handler
  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  return (
    <footer className="bg-darker border-t border-white/10">
      {/* Skip navigation for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-darker p-2 rounded z-50"
      >
        Skip to main content
      </a>

      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - MOBILE CENTER ALIGNED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 max-w-7xl mx-auto">
          
          {/* Company Info - Mobile Center, Desktop Left */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient font-orbitron mb-4">
              NEXUS ARENA
            </h3>
            <p className="text-light/80 font-montserrat leading-relaxed mb-4 max-w-md md:max-w-none mx-auto md:mx-0">
              The ultimate gaming platform for competitive esports and community engagement.
            </p>
            <div className="flex justify-center md:justify-start">
              <SocialMediaIcons 
                className="justify-center md:justify-start"
                buttonSize="w-10 h-10"
                iconSize="w-4 h-4"
              />
            </div>
          </div>

          {/* Quick Links - Mobile Center, Desktop Left */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-white font-orbitron mb-4">Quick Links</h4>
            <div className="space-y-2 font-montserrat">
              {QUICK_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.id}
                  onClick={(e) => handleQuickLinkClick(e, link.id)}
                  className="block text-light/80 hover:text-primary transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Support Links - Mobile Center, Desktop Left */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-white font-orbitron mb-4">Support</h4>
            <div className="space-y-2 font-montserrat">
              {SUPPORT_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  onClick={link.external ? (e) => handleExternalLink(e, link.url) : undefined}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-light/80 hover:text-primary transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1"
                >
                  {link.name}
                  {link.external && ' ↗'}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section - Mobile Center, Desktop Left */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-white font-orbitron mb-4">
              Newsletter
            </h4>
            <p className="text-light/80 font-montserrat mb-4 max-w-md md:max-w-none mx-auto md:mx-0">
              Subscribe for tournament updates and gaming news.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3 max-w-md md:max-w-none mx-auto md:mx-0">
              <div className="flex gap-2 flex-col sm:flex-row">
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-light/40 focus:outline-none focus:border-primary transition-colors font-montserrat disabled:opacity-50 text-center sm:text-left"
                  required
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-darker px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform font-montserrat disabled:opacity-50 disabled:cursor-not-allowed min-w-16 sm:min-w-auto"
                >
                  {isLoading ? '...' : 'Join'}
                </button>
              </div>
              
              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-green-400 text-sm font-montserrat text-center sm:text-left">
                  ✅ Successfully subscribed! Welcome to the Nexus Arena community.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm font-montserrat text-center sm:text-left">
                  ❌ Subscription failed. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar - FULL WIDTH BORDER */}
      <div className="border-t border-white/10">
        <div className="container py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left max-w-7xl mx-auto">
            <p className="text-light/60 font-montserrat text-sm order-2 md:order-1">
              © 2024 Nexus Arena. All rights reserved.
            </p>
            <div className="flex gap-6 text-light/60 text-sm font-montserrat order-1 md:order-2 mb-4 md:mb-0 flex-wrap justify-center">
              {LEGAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="hover:text-primary transition-all duration-300 hover:translate-y-[-1px]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;