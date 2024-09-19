import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Assuming you're using React with Vite
import eslint from 'vite-plugin-eslint';   // ESLint plugin for Vite

export default defineConfig({
  plugins: [
    react(),
    eslint({
      // Enable ESLint during dev and build processes
      cache: false,  // Optional: Disable caching if needed
      fix: true,     // Optional: Automatically fix errors
    }),
  ],
});
