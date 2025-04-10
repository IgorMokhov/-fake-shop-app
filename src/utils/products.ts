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
  selectedCategories: string[],
  products: IProduct[]
) => {
  const filteredProducts = products.filter(({ price, category }) => {
    const aboveMin = minPrice !== null ? price >= minPrice : true;
    const belowMax = maxPrice !== null ? price <= maxPrice : true;
    const isMatchByPrice = aboveMin && belowMax;

    const normalizedCategory = category.replace(/[^\w]/g, '').toLowerCase();
    const isMatchByCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((item) => item.toLowerCase() === normalizedCategory);

    return isMatchByPrice && isMatchByCategory;
  });

  return filteredProducts;
};
