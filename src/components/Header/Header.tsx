import { HomeSharp, ShoppingBag } from '@mui/icons-material';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h4">
            FAKE Shop
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => navigate(pathname === '/' ? '/cart' : '/')}
            aria-label={pathname === '/' ? 'Открыть корзину' : 'Вернуться на главную'}
          >
            {pathname === '/' ? <ShoppingBag fontSize="large" /> : <HomeSharp fontSize="large" />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
