import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { App } from './App.tsx';
import { theme, GlobalStylesComponent } from './theme';
import { BrowserRouter } from 'react-router';
import { ProductProvider } from './context/ProductContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStylesComponent />
      <BrowserRouter>
        <ProductProvider>
          <App />
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
