import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './i18n/index.ts';
import './index.css';
import { store } from './store/index.ts';
import { ThemeProvider } from './styles/ThemeProvider.tsx';
import { setupDayjsLocale } from './utils/setupDayjsLocale.ts';

setupDayjsLocale();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
