/* eslint-disable react-hooks/rules-of-hooks */
import { useLinkedInIOSType, useLinkedInType } from './types';
import { useLinkedInIOS } from './useLinkedInIOS';
import { useLinkedInOld } from './useLinkedInOld';

export function useLinkedIn(props: useLinkedInType) {
  const isIOS = !!props.Browser;

  const { linkedInLogin } = isIOS
    ? useLinkedInIOS(props as useLinkedInIOSType)
    : useLinkedInOld(props);

  return {
    linkedInLogin,
  };
}
