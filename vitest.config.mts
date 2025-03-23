import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/mappings/**/*.test.{ts,tsx}'],
    exclude: ['src/app/**'],
  },
});