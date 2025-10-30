const FooterLinks = ({ 
  links, 
  onLinkClick, 
  external = false,
  showExternalIcon = false 
}) => {
  return (
    <div className="space-y-2 font-montserrat">
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.url || link.id}
          onClick={(e) => onLinkClick(e, link.url || link.id)}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : undefined}
          className="block text-light/80 hover:text-primary transition-all duration-300 hover:translate-x-1 md:hover:translate-x-1"
        >
          {link.name}
          {showExternalIcon && external && ' ↗'}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;