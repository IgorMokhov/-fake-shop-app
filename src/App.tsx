import { Box, Container } from '@mui/material';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import { Loader } from './UI/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Header />

      <Box component="main">
        <Container maxWidth="lg">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Container>
      </Box>
    </>
  );
};
