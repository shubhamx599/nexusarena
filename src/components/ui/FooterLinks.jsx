import { Link } from 'react-router-dom';

const FooterLinks = ({ 
  links, 
  onLinkClick, 
  external = false,
  showExternalIcon = false 
}) => {
  return (
    <div className="space-y-2 font-montserrat">
      {links.map((link) => {
        const href = link.url || link.id;
        const isLinkExternal = link.external !== undefined ? link.external : external;
        
        if (isLinkExternal) {
          return (
            <a 
              key={link.name}
              href={href}
              onClick={(e) => onLinkClick && onLinkClick(e, href)}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-light/80 hover:text-primary transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1"
            >
              {link.name}
              {showExternalIcon && ' ↗'}
            </a>
          );
        }

        return (
          <Link
            key={link.name}
            to={href}
            className="block text-light/80 hover:text-primary transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterLinks;