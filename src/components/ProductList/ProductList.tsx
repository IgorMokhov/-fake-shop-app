import { Box, Grid2, Typography } from '@mui/material';
import { ProductItem } from '../ProductItem/ProductItem';
import { filterProductsByTitle, getProductsByFilters } from '../../utils/products';
import { useProducts } from '../../hooks/useProducts';
import { useSearch } from '../../hooks/useSearch';
import { useFilters } from '../../hooks/useFilters';

export const ProductList = () => {
  const { products, order, error, addToOrder, removeFromOrder } = useProducts();
  const { minPrice, maxPrice, selectedCategories } = useFilters();
  const { value } = useSearch();

  const filteredProducts = getProductsByFilters(
    minPrice,
    maxPrice,
    selectedCategories,
    products
  );

  if (error)
    return (
      <Typography
        sx={{ textAlign: 'center' }}
        color="error"
        variant="h5"
        component="p"
      >
        Error: {error}
      </Typography>
    );

  return (
    <Box component="section">
      <Grid2
        container
        spacing={5}
        sx={{ justifyContent: 'center', marginBottom: 10 }}
      >
        {filterProductsByTitle(value, filteredProducts).map((product) => (
          <ProductItem
            {...product}
            ordered={order.some(({ id }) => id === product.id)}
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
            key={product.id}
          />
        ))}
      </Grid2>
    </Box>
  );
};
