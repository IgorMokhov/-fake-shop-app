import { Grid2 } from '@mui/material';
import { ProductItem } from '../ProductItem/ProductItem';
import { getAllProducts } from '../../services/api';
import { useEffect, useState } from 'react';
import { IProduct } from '../../types/products';
import { useSearch } from '../../hooks/useSearch';
import { filterProductsByTitle } from '../../utils/products';

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { value } = useSearch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        if (data) setProducts(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('Unexpected error:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <Grid2 container spacing={5} sx={{ justifyContent: 'center', marginBottom: 10 }}>
      {filterProductsByTitle(value, products).map((product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </Grid2>
  );
};
