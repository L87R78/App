import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n/index.ts';
import './index.css';

import { setupDayjsLocale } from './utils/setupDayjsLocale.ts';
import { store } from './store';

setupDayjsLocale();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
