import { useState, useCallback } from 'react';

export const useNewsletter = (onSubscribe) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = useCallback(async (email) => {
    setIsLoading(true);
    setStatus('');
    
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // Default implementation
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Newsletter subscription:', email);
      }
      setStatus('success');
      setEmail('');
      return true;
    } catch (error) {
      setStatus('error');
      console.error('Subscription failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [onSubscribe]);

  const reset = useCallback(() => {
    setEmail('');
    setStatus('');
  }, []);

  return {
    email,
    setEmail,
    status,
    isLoading,
    subscribe,
    reset
  };
};