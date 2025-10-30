import SocialMediaIcons from './SocialMediaIcons';

const CompanyInfo = ({ centerOnMobile = true }) => {
  return (
    <div className={centerOnMobile ? 'text-center md:text-left' : ''}>
      <h3 className="text-2xl font-bold text-gradient font-orbitron mb-4">
        NEXUS ARENA
      </h3>
      <p className="text-light/80 font-montserrat leading-relaxed mb-4 max-w-md md:max-w-none mx-auto md:mx-0">
        The ultimate gaming platform for competitive esports and community engagement.
      </p>
      <div className={`flex ${centerOnMobile ? 'justify-center md:justify-start' : 'justify-start'}`}>
        <SocialMediaIcons 
          className={centerOnMobile ? 'justify-center md:justify-start' : 'justify-start'}
          buttonSize="w-10 h-10"
          iconSize="w-4 h-4"
        />
      </div>
    </div>
  );
};

export default CompanyInfo;