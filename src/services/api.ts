import axios from 'axios';
import { IProduct } from '../types/products';

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  try {
    const response = await axios.get<IProduct[]>(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message ?? 'Unknown API error');
    }
    console.error('Unknown error:', error);
  }
};
