// assets/js/contract.d.ts

interface TRD_CONSTRACT {
     EVENT: {
          IFRAME_CONTENT_SIZE_CHANGED: string;
          SHOW_FORM_INPUT: string;
          HIDE_FORM_INPUT: string;
          LOCAL_STORAGE_CHANGE: string;
     };
     LOCAL_STORAGE_KEY: {
          GITHUB_DATA_TREE: string;
     };
     sendMessageToParent(event: string, data: object): void;
     clearLocalStorage(): void;
}

declare global {
     interface Window {
          TRD_CONSTRACT: TRD_CONSTRACT;
     }
}

export { };
