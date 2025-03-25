import { Box, Grid2 } from '@mui/material';
import { ProductItem } from '../ProductItem/ProductItem';
import { useSearch } from '../../hooks/useSearch';
import { filterProductsByTitle } from '../../utils/products';
import { useProducts } from '../../hooks/useProducts';
import { Search } from '../Search/Search';

export const ProductList = () => {
  const { products, order, addToOrder, removeFromOrder } = useProducts();
  const { value } = useSearch();

  return (
    <Box component="section">
      {!!products.length && <Search />}
      <Grid2 container spacing={5} sx={{ justifyContent: 'center', marginBottom: 10 }}>
        {filterProductsByTitle(value, products).map((product) => (
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
