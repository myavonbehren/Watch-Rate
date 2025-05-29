import axios from 'axios'
import { Review } from '../src/types/Review'

const API_URL = 'http://localhost:5023'

export const reviewApi = {
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

  updateAvailability: async (id: number, isAvailable: boolean): Promise<void> => {
    await axios.patch(`${API_URL}/reviews/${id}/availability`, isAvailable);
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/reviews/${id}`);
  }
};