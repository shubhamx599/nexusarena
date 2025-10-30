import { LEGAL_LINKS } from '../../constants/footerLinks';

const FooterBottom = () => {
  return (
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
                className="hover:text-primary transition-all duration-300 hover:-translate-y-px"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;