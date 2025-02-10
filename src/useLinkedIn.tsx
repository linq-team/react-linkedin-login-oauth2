import { useLinkedInIOSType, useLinkedInType } from './types';
import { useLinkedInIOS } from './useLinkedInIOS';
import { useLinkedInOld } from './useLinkedInOld';

export function useLinkedIn(props: useLinkedInType) {
  const isIOS = !!props.Browser;
  const iosLogin = useLinkedInIOS(props as useLinkedInIOSType);
  const oldLogin = useLinkedInOld(props);
  const linkedInLogin = isIOS ? iosLogin : oldLogin;

  return {
    linkedInLogin,
  };
}
