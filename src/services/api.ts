import axios, { AxiosError } from 'axios';
import { IProduct } from '../types/products';

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  try {
    const response = await axios.get<IProduct[]>(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message || 'Unknown API error');
    }
    console.error('Unknown error:', error);
  }
};
