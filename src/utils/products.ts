import { IProduct } from '../types/products';

export const filterProductsByTitle = (search: string, products: IProduct[]) => {
  if (!search) return products;
  return products.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );
};

export const getProductsByFilters = (
  minPrice: number | null,
  maxPrice: number | null,
  products: IProduct[]
) => {
  const filteredProductsByPrice = products.filter(({ price }) => {
    const aboveMin = minPrice !== null ? price >= minPrice : true;
    const belowMax = maxPrice !== null ? price <= maxPrice : true;
    return aboveMin && belowMax;
  });

  return filteredProductsByPrice;
};
