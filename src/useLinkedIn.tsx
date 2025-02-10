/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from 'react';
import { useLinkedInIOSType, useLinkedInType } from './types';
import { useLinkedInIOS } from './useLinkedInIOS';
import { useLinkedInOld } from './useLinkedInOld';

export function useLinkedIn(props: useLinkedInType) {
  const isIOS = !!props.Browser;

  const { linkedInLogin } = useMemo(() => {
    return isIOS
      ? useLinkedInIOS(props as useLinkedInIOSType)
      : useLinkedInOld(props);
  }, [isIOS, props]);

  return {
    linkedInLogin,
  };
}
