import { Box, IconButton } from '@mui/material';
import { useFilters } from '../../hooks/useFilters';
import { ProductList } from '../ProductList/ProductList';
import { Sidebar } from '../Sidebar/Sidebar';
import { Tune } from '@mui/icons-material';
import { Search } from '../Search/Search';

export const Products = () => {
  const { isOpen, toggleSidebar } = useFilters();

  return (
    <Box sx={{ position: 'relative' }} component="div">
      <IconButton
        sx={{ position: 'absolute', top: '55px', left: '5px' }}
        onClick={() => toggleSidebar(true)}
        aria-label="filters"
        size="large"
        color="inherit"
      >
        <Tune />
      </IconButton>

      <Search />
      <ProductList />

      <Sidebar isOpen={isOpen} onClose={() => toggleSidebar(false)} />
    </Box>
  );
};
