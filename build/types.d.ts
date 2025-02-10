/// <reference types="react" />
export interface useLinkedInType {
    redirectUri: string;
    clientId: string;
    onSuccess: (code: string) => void;
    onError?: ({ error, errorMessage, }: {
        error: string;
        errorMessage: string;
    }) => void;
    state?: string;
    scope?: string;
    closePopupMessage?: string;
    Browser?: {
        open?: (options: {
            url: string;
        }) => Promise<void>;
        close?: () => void;
    };
}
export interface useLinkedInIOSType extends useLinkedInType {
    Browser: {
        open?: (options: {
            url: string;
        }) => Promise<void>;
        close?: () => void;
    };
}
export interface LinkedInType extends useLinkedInType {
    children: ({ linkedInLogin }: {
        linkedInLogin: any;
    }) => JSX.Element;
}
