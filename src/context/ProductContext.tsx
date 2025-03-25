import { createContext, ReactNode, useEffect, useState } from 'react';
import { ICartItem, IProduct } from '../types/products';
import { getAllProducts } from '../services/api';

interface IProductContext {
  products: IProduct[];
  order: ICartItem[];
  totalPrice: number;
  addToOrder: (product: ICartItem) => void;
  removeFromOrder: (id: number) => void;
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [order, setOrder] = useState<ICartItem[]>([]);
  const totalPrice = order.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const addToOrder = ({ id, title, price, image }: ICartItem) => {
    setOrder((prevOrder) => {
      const isExist = prevOrder.some((item) => item.id === id);

      if (isExist) {
        return prevOrder.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevOrder,
          {
            id,
            title,
            price,
            image,
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
    <ProductContext.Provider value={{ products, order, totalPrice, addToOrder, removeFromOrder }}>
      {children}
    </ProductContext.Provider>
  );
};
