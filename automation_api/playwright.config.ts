import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  projects: [
    {
      name: 'pokeapi',
      use: {
        baseURL: 'https://pokeapi.co/api/v2',
        trace: 'on-first-retry',
      },
    },
    {
      name: 'pokeapi-prod',
      use: {
        baseURL: 'https://otra-api.com/v1',
        trace: 'on-first-retry',
      },
    },
  ],
});