import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { theme, GlobalStylesComponent } from './theme';
import { BrowserRouter } from 'react-router';
import { ProductProvider } from './context/ProductContext.tsx';
import { SearchProvider } from './context/SearchContext.tsx';
import { FiltersProvider } from './context/FiltersContext.tsx';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStylesComponent />
      <BrowserRouter>
        <ProductProvider>
          <FiltersProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </FiltersProvider>
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
