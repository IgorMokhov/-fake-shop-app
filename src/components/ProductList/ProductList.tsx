import { Box, Grid2, Typography } from '@mui/material';
import { ProductItem } from '../ProductItem/ProductItem';
import { useSearch } from '../../hooks/useSearch';
import { filterProductsByTitle } from '../../utils/products';
import { useProducts } from '../../hooks/useProducts';
import { Search } from '../Search/Search';

export const ProductList = () => {
  const { products, order, error, addToOrder, removeFromOrder } = useProducts();
  const { value } = useSearch();

  if (error)
    return (
      <Typography sx={{ textAlign: 'center' }} color="error" variant="h5" component="p">
        Error: {error}
      </Typography>
    );

  return (
    <>
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
    </>
  );
};
