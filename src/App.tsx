import { Box, Container } from '@mui/material';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { NoteFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <Header />

      <Box component="main">
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NoteFoundPage />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
};
