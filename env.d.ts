/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE?: string;
  readonly VITE_APP_TITLE?: string;
  readonly VITE_APP_BASE_URL?: string;
  readonly VITE_DEBUG?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}