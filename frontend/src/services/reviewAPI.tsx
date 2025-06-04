import axios from 'axios'
import { type Review } from '../types/Review'

const API_URL = 'http://localhost:5023'

export const reviewAPI = {
  getAll: async (): Promise<Review[]> => {
    const response = await axios.get<Review[]>(`${API_URL}/reviews`);
    return response.data;
  },

  getById: async (id: number): Promise<Review> => {
    const response = await axios.get<Review>(`${API_URL}/reviews/${id}`);
    return response.data;
  },

  create: async (review: Review): Promise<Review> => {
    const response = await axios.post<Review>(`${API_URL}/reviews`, review);
    return response.data;
  },

  update: async (id: number, review: Review): Promise<void> => {
    await axios.put(`${API_URL}/reviews/${id}`, review);
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/reviews/${id}`);
  }
};