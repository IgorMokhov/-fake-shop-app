import { createContext, ReactNode, useEffect, useState } from 'react';
import { IProduct } from '../types/products';
import { getAllProducts } from '../services/api';

interface IProductContext {
  products: IProduct[];
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

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

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
