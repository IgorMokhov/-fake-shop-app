import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { App } from './App.tsx';
import { theme, GlobalStylesComponent } from './theme';
import { BrowserRouter } from 'react-router';
import { ProductProvider } from './context/ProductContext.tsx';
import { SearchProvider } from './context/SearchContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStylesComponent />
      <BrowserRouter>
        <ProductProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
