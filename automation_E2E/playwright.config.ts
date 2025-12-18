import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com', 
    headless: false,
    viewport: null,                  
    launchOptions: {
      slowMo: 500,
      args: ['--start-maximized']    
    },
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },
  reporter: [
    ['html', { open: 'never' }]
  ],
  testDir: './tests'
});