import axios from 'axios'
import type { UserClaims } from '../types/UserClaims';
import { jwtDecode } from 'jwt-decode';

// Store a single instance of the authenticated API
//let apiInstance: AxiosInstance | null = null;

// Basic auth helper for Review
export const setBasicAuth = (username: string, password: string) => {
  const credentials = btoa(`${username}:${password}`);
  localStorage.setItem('basicAuth', credentials);
  
  // Reset the API instance when credentials change
  //apiInstance = null;
  
  return credentials;
};

// Clear authentication on logout
export const clearAuth = () => {
  localStorage.removeItem('basicAuth');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  //apiInstance = null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('basicAuth');
};

// Get a configured API instance with Basic Auth
export const configureReviewApiWithBasicAuth = () => {
  console.log('API URL:', process.env.REACT_APP_API_URL);
  const apiInstance = axios.create({
    // baseURL: 'http://localhost:5023',
    baseURL: process.env.REACT_APP_API_URL,
  });

  // Return existing instance if available
  //if (apiInstance) return apiInstance;
  
  // Create new instance if none exists
  // apiInstance = axios.create({
  //   baseURL: 'http://localhost:5023',
  // });
 
  apiInstance.interceptors.request.use(config => {
    const credentials = localStorage.getItem('basicAuth');
    if (credentials) {
      config.headers.Authorization = `Basic ${credentials}`;
    }
    return config;
  });

  return apiInstance;
};

export const configureReviewApiWithJwtAuth = () => {
  // Return existing instance if available
  //if (apiInstance) return apiInstance;
  
  // Create new instance if none exists
  const apiInstance = axios.create({
    // baseURL: 'http://localhost:5023',
    baseURL: process.env.REACT_APP_API_URL,
  });

  apiInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return apiInstance;
};

export const getUser = (): UserClaims | null => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;
  
  try {
    return jwtDecode<UserClaims>(token);
  } catch {
    return null;
  }
};