import { IProduct } from '../types/products';

export const filterProductsByTitle = (search: string, products: IProduct[]) => {
  if (!search) return products;
  return products.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
};
