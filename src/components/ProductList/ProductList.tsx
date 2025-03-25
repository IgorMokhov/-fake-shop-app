import { Grid2 } from '@mui/material';
import { ProductItem } from '../ProductItem/ProductItem';
import { useSearch } from '../../hooks/useSearch';
import { filterProductsByTitle } from '../../utils/products';
import { useProducts } from '../../hooks/useProducts';

export const ProductList = () => {
  const { products } = useProducts();
  const { value } = useSearch();

  return (
    <Grid2 container spacing={5} sx={{ justifyContent: 'center', marginBottom: 10 }}>
      {filterProductsByTitle(value, products).map((product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </Grid2>
  );
};
