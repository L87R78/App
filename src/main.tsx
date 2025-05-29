import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n/index.ts';
import './index.css';
import { ThemeProvider } from './styles/ThemeProvider.tsx';
import { setupDayjsLocale } from './utils/setupDayjsLocale.ts';

setupDayjsLocale();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
