import { ProductProvider } from '../../context/ProductContext';
import { SearchProvider } from '../../context/SearchContext';
import { ProductList } from '../ProductList/ProductList';
import { Search } from '../Search/Search';

export const Products = () => {
  return (
    <SearchProvider>
      <Search />
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </SearchProvider>
  );
};
