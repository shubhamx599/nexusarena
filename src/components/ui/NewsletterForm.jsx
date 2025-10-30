import { useCallback } from 'react';

const NewsletterForm = ({ 
  email, 
  onEmailChange, 
  onSubmit, 
  status, 
  isLoading,
  centerOnMobile = true 
}) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(email);
  }, [email, onSubmit]);

  return (
    <div className={centerOnMobile ? 'text-center md:text-left' : ''}>
      <p className="text-light/80 font-montserrat mb-4 max-w-md md:max-w-none mx-auto md:mx-0">
        Subscribe for tournament updates and gaming news.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3 max-w-md md:max-w-none mx-auto md:mx-0">
        <div className="flex gap-2 flex-col sm:flex-row">
          <input 
            type="email" 
            value={email}
            onChange={onEmailChange}
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
  );
};

export default NewsletterForm;