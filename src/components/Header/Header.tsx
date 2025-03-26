import { HomeSharp, ShoppingBag } from '@mui/icons-material';
import { AppBar, Badge, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import { useProducts } from '../../hooks/useProducts';

export const Header = () => {
  const { totalCount } = useProducts();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ mb: 5, py: 1 }}>
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
            <Badge sx={{ top: -18, right: -3 }} badgeContent={totalCount} color="secondary" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
