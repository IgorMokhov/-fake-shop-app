import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { App } from './App.tsx';
import { theme, GlobalStylesComponent } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStylesComponent />
      <App />
    </ThemeProvider>
  </StrictMode>
);
