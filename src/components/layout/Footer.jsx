import { memo } from 'react';

// Hooks
import { useFooterNavigation } from '../../hooks/useFooterNavigation';
import { useNewsletter } from '../../hooks/useNewsletter';

// Constants
import { QUICK_LINKS, SUPPORT_LINKS } from '../../constants/footerLinks';

// Components
import FooterSection from '../ui/FooterSection';
import FooterLinks from '../ui/FooterLinks';
import NewsletterForm from '../ui/NewsletterForm';
import FooterBottom from '../ui/FooterBottom';
import CompanyInfo from '../ui/CompanyInfo';

const Footer = memo(() => {
  const { handleQuickLinkClick, handleExternalLink } = useFooterNavigation();
  const { email, setEmail, status, isLoading, subscribe } = useNewsletter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNewsletterSubmit = async (email) => {
    if (email.trim()) {
      await subscribe(email);
    }
  };

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
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 max-w-7xl mx-auto">
          
          {/* Company Info */}
          <FooterSection title="NEXUS ARENA">
            <CompanyInfo />
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <FooterLinks 
              links={QUICK_LINKS}
              onLinkClick={handleQuickLinkClick}
            />
          </FooterSection>

          {/* Support Links */}
          <FooterSection title="Support">
            <FooterLinks 
              links={SUPPORT_LINKS}
              onLinkClick={(e, url) => handleExternalLink(e, url)}
              external={true}
              showExternalIcon={true}
            />
          </FooterSection>

          {/* Newsletter Section */}
          <FooterSection title="Newsletter">
            <NewsletterForm
              email={email}
              onEmailChange={handleEmailChange}
              onSubmit={handleNewsletterSubmit}
              status={status}
              isLoading={isLoading}
            />
          </FooterSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <FooterBottom />
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;