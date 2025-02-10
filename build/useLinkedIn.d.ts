import { useLinkedInType } from './types';
export declare function useLinkedIn({ redirectUri, clientId, onSuccess, onError, scope, state, Browser, }: useLinkedInType): {
    linkedInLogin: () => void;
};
