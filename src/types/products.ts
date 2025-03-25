export interface IProduct {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
}

export interface ICartItem extends Omit<IProduct, 'category'> {
  quantity: number;
}
