import { SearchProvider } from '../../context/SearchContext';
import { ProductList } from '../ProductList/ProductList';

export const Products = () => {
  return (
    <SearchProvider>
      <ProductList />
    </SearchProvider>
  );
};
