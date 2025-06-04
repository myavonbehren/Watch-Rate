import axios from 'axios'
import { type Show } from '../types/Show'
import { configureReviewApiWithBasicAuth } from './authService';

//const API_URL = 'http://localhost:5023'

export const showAPI = {
  getAll: async (): Promise<Show[]> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.get<Show[]>(`/shows`);
    return response.data;
  },

  getById: async (id: number): Promise<Show> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.get<Show>(`/shows/${id}`);
    return response.data;
  },

  create: async (show: Show): Promise<Show> => {
    const api = configureReviewApiWithBasicAuth();
    const response = await api.post<Show>(`/shows`, show);
    return response.data;
  },

  updateWatched: async (id: number, isWatched: boolean): Promise<void> => {
    const api = configureReviewApiWithBasicAuth();
    await api.patch(`/shows/${id}/watched?isWatched=${isWatched}`);
  },

  delete: async (id: number): Promise<void> => {
    const api = configureReviewApiWithBasicAuth();
    await api.delete(`/shows/${id}`);
  }
};