import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

// Create an Axios instance
const Path = axios.create({
    baseURL:'http://localhost:8003', // Replace with your API base URL
    // baseURL:'https://swasthya-end.slugdev.me'
});

// List of routes that do not require authentication
const publicRoutes = ['/user/login', '/user/signup', '/user/sendOtp', '/user/verifyOtp'];

// Request interceptor
Path.interceptors.request.use(
  async (config) => {
    if (!publicRoutes.includes(config.url)) {
      const token = await EncryptedStorage.getItem('userToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
Path.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default Path;