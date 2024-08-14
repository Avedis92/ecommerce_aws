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
        target:
          "https://szal53md0j.execute-api.eu-central-1.amazonaws.com/prod",
        changeOrigin: true,
      },
    },
  },
});
