import { useLinkedInType } from './types';
export declare function useLinkedInOld({ redirectUri, clientId, onSuccess, onError, scope, state, closePopupMessage, }: useLinkedInType): {
    linkedInLogin: () => void;
};
