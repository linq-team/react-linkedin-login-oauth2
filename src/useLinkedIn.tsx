import { useCallback, useEffect, useRef } from 'react';
import { useLinkedInType } from './types';
import { LINKEDIN_OAUTH2_STATE } from './utils';
import { Browser } from '@capacitor/browser';

const generateRandomString = (length = 20) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export function useLinkedIn({
  redirectUri,
  clientId,
  onSuccess,
  onError,
  scope = 'r_emailaddress',
  state = '',
}: useLinkedInType) {
  const popUpIntervalRef = useRef<number>(null);
  const receiveMessage = useCallback(
    (event: MessageEvent) => {
      const savedState = localStorage.getItem(LINKEDIN_OAUTH2_STATE);
      if (event.origin === window.location.origin) {
        if (event.data.errorMessage && event.data.from === 'Linked In') {
          // Prevent CSRF attack by testing state
          if (event.data.state !== savedState) {
            Browser.close();
            return;
          }
          onError && onError(event.data);
          Browser.close();
        } else if (event.data.code && event.data.from === 'Linked In') {
          // Prevent CSRF attack by testing state
          if (event.data.state !== savedState) {
            console.error('State does not match');
            Browser.close();
            return;
          }
          onSuccess && onSuccess(event.data.code);
          Browser.close();
        }
      }
    },
    [onError, onSuccess],
  );

  useEffect(() => {
    return () => {
      window.removeEventListener('message', receiveMessage, false);

      Browser.close();
      if (popUpIntervalRef.current) {
        window.clearInterval(popUpIntervalRef.current);
        popUpIntervalRef.current = null;
      }
    };
  }, [receiveMessage]);

  useEffect(() => {
    window.addEventListener('message', receiveMessage, false);
    return () => {
      window.removeEventListener('message', receiveMessage, false);
    };
  }, [receiveMessage]);

  const getUrl = () => {
    const scopeParam = `&scope=${encodeURI(scope)}`;
    const generatedState = state || generateRandomString();
    localStorage.setItem(LINKEDIN_OAUTH2_STATE, generatedState);
    const linkedInAuthLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}${scopeParam}&state=${generatedState}`;
    return linkedInAuthLink;
  };

  const linkedInLogin = () => {
    Browser.close();
    Browser.open({
      url: getUrl(),
    });

    if (popUpIntervalRef.current) {
      window.clearInterval(popUpIntervalRef.current);
      popUpIntervalRef.current = null;
    }
  };

  return {
    linkedInLogin,
  };
}
