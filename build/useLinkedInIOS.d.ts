import { useLinkedInIOSType } from './types';
export declare function useLinkedInIOS({ redirectUri, clientId, onSuccess, onError, scope, state, Browser, }: useLinkedInIOSType): {
    linkedInLogin: () => void;
};
