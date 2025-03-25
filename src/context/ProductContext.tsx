import { createContext, ReactNode, useEffect, useState } from 'react';
import { ICartItem, IProduct } from '../types/products';
import { getAllProducts } from '../services/api';

interface IProductContext {
  products: IProduct[];
  order: ICartItem[];
  addToOrder: (product: ICartItem) => void;
  removeFromOrder: (id: number) => void;
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [order, setOrder] = useState<ICartItem[]>([]);

  const addToOrder = (product: ICartItem) => {
    setOrder((prevOrder) => {
      const isExist = prevOrder.some((item) => item.id === product.id);

      if (isExist) {
        return prevOrder.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevOrder,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ];
      }
    });
  };

  const removeFromOrder = (id: number) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id));
  };

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
    <ProductContext.Provider value={{ products, order, addToOrder, removeFromOrder }}>
      {children}
    </ProductContext.Provider>
  );
};
