import axios, { type AxiosInstance } from 'axios';

// Store a single instance of the authenticated API
let apiInstance: AxiosInstance | null = null;

// Basic auth helper for Review
export const setBasicAuth = (username: string, password: string) => {
  const credentials = btoa(`${username}:${password}`);
  localStorage.setItem('basicAuth', credentials);
  
  // Reset the API instance when credentials change
  apiInstance = null;
  
  return credentials;
};

// Clear authentication on logout
export const clearAuth = () => {
  localStorage.removeItem('basicAuth');
  apiInstance = null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('basicAuth');
};

// Get a configured API instance with Basic Auth
export const configureReviewApiWithBasicAuth = () => {
  // Return existing instance if available
  if (apiInstance) return apiInstance;
  
  // Create new instance if none exists
  apiInstance = axios.create({
    baseURL: 'http://localhost:5023',
  });
 
  apiInstance.interceptors.request.use(config => {
    const credentials = localStorage.getItem('basicAuth');
    if (credentials) {
      config.headers.Authorization = `Basic ${credentials}`;
    }
    return config;
  });

  return apiInstance;
};