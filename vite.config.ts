import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// http://localhost:3000
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  server: {
    proxy: {
      "/api/v1": {
        target: import.meta.env["VITE_AWS_API_GATEWAY_BASE_URL"],
        changeOrigin: true,
      },
    },
  },
});
