//import axios from 'axios'
import type { AuthTokens } from '../types/AuthTokens';
import { type Review } from '../types/Review'
import { type User } from '../types/User'
import { type Show } from '../types/Show'
import { configureReviewApiWithBasicAuth, configureReviewApiWithJwtAuth } from './authService';

//const API_URL = 'http://localhost:5023'

export const reviewAPI = {
  // REVIEWS
  getAll: async (): Promise<Review[]> => {
    const api = configureReviewApiWithJwtAuth();
    const response = await api.get<Review[]>(`/reviews`);
    return response.data;
  },

  getById: async (id: number): Promise<Review> => {
    const api = configureReviewApiWithJwtAuth();
    const response = await api.get<Review>(`/reviews/${id}`);
    return response.data;
  },

  create: async (review: Review): Promise<Review> => {
    const api = configureReviewApiWithJwtAuth();
    const response = await api.post<Review>(`/reviews`, review);
    return response.data;
  },

  update: async (id: number, review: Review): Promise<void> => {
    const api = configureReviewApiWithJwtAuth();
    await api.put(`/reviews/${id}`, review);
  },

  delete: async (id: number): Promise<void> => {
    const api = configureReviewApiWithJwtAuth();
    await api.delete(`/reviews/${id}`);
  },

  // SHOWS
  getAllShows: async (): Promise<Show[]> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.get<Show[]>(`/shows`);
    return response.data;
  },
  
  getShowById: async (id: number): Promise<Show> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.get<Show>(`/shows/${id}`);
    return response.data;
  },

  createShow: async (show: Show): Promise<Show> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.post<Show>(`/shows`, show);
    return response.data;
  },

  updateWatched: async (id: number, isWatched: boolean): Promise<void> => {
    const api = configureReviewApiWithBasicAuth();
    await api.patch(`/shows/${id}/watched?isWatched=${isWatched}`);
  },

  deleteShow: async (id: number): Promise<void> => {
    const api = configureReviewApiWithBasicAuth();
    await api.delete(`/shows/${id}`);
  },

  // USERS
   registerUser: async (user: User): Promise<User> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.post<User>(`/register`, user);
    return response.data;
  },

   loginUser: async (user: User): Promise<boolean> => {
    const api = configureReviewApiWithBasicAuth();
    const tokens: AuthTokens = await api.post<AuthTokens>(`/login`, user);//await response.json();
    localStorage.setItem('accessToken', tokens.data.accessToken);
    localStorage.setItem('refreshToken', tokens.data.refreshToken);
    return true;
   }  
 
};