/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USER_POOL_ID: string;
  readonly VITE_APP_CLIENT_ID: string;
  readonly VITE_AWS_API_GATEWAY_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
