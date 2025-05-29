import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './styles/ThemeProvider.tsx';

import Router from './router/Router';

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
