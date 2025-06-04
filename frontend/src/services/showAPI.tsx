import axios from 'axios'
import { type Show } from '../types/Show'

const API_URL = 'http://localhost:5023'

export const showAPI = {
  getAll: async (): Promise<Show[]> => {
    const response = await axios.get<Show[]>(`${API_URL}/shows`);
    return response.data;
  },

  getById: async (id: number): Promise<Show> => {
    const response = await axios.get<Show>(`${API_URL}/shows/${id}`);
    return response.data;
  },

  create: async (show: Show): Promise<Show> => {
    const response = await axios.post<Show>(`${API_URL}/shows`, show);
    return response.data;
  },

  updateWatched: async (id: number, isWatched: boolean): Promise<void> => {    
    await axios.patch(`${API_URL}/shows/${id}/watched?isWatched=${isWatched}`);
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/shows/${id}`);
  }
};