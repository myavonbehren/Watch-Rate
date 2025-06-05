//import axios from 'axios'
import { type Review } from '../types/Review'
import { type User } from '../types/User'
import { configureReviewApiWithBasicAuth } from './authService';

//const API_URL = 'http://localhost:5023'

export const reviewAPI = {
  getAll: async (): Promise<Review[]> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.get<Review[]>(`/reviews`);
    return response.data;
  },

  getById: async (id: number): Promise<Review> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.get<Review>(`/reviews/${id}`);
    return response.data;
  },

  create: async (review: Review): Promise<Review> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.post<Review>(`/reviews`, review);
    return response.data;
  },

  update: async (id: number, review: Review): Promise<void> => {
    const api = configureReviewApiWithBasicAuth();
    await api.put(`/reviews/${id}`, review);
  },

  delete: async (id: number): Promise<void> => {
    const api = configureReviewApiWithBasicAuth();
    await api.delete(`/reviews/${id}`);
  },

   registerUser: async (user: User): Promise<User> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.post<User>(`/register`, user);
    return response.data;
  },
};